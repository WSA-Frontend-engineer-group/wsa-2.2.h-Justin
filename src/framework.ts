import player from "./player";
import Deck from "./deck";
import Card from "./card";

export default abstract class GameFramework<T extends Card> {
    protected abstract players: player<T>[];
    protected abstract deck: Deck<T>;

    public initialize = async (...players: player<T>[]) => {
        for (const player of players) {
            await player.nameHimself(); // 請 P1~P4 為自己取名 (Name himself)。
            player.setGame(this);
            this.pushPlayer(player);
        }
        this.deck.initialize();
        this.deck.shuffle(); // 牌堆會進行洗牌 (Shuffle)。
        this.dealCards(); // 發牌
    };

    protected abstract start(): void;
    protected abstract gameCondition(): boolean;
    protected abstract dealCardsCondition(): boolean;
    protected abstract showWinner(): void;

    public pushPlayer = (player: player<T>) => {
        this.players.push(player);
    };

    public dealCards = () => {
        while (this.dealCardsCondition()) {
            for (const player of this.players) {
                const card = this.deck.drawCard();
                // console.log(`player ${player} draw ${card} card`);
                if (!card) throw new Error("No card available");
                player.hands?.addHandCard(card);
            }
        }
    };
}
