import GameFramework from "../framework";
import { ShowdownDeck } from "./ShowdownDeck";
import ShowdownCard from "./cards/ShowdownCard";
import ShowdownPlayer from "./player/ShowdownPlayer";

export default class Showdown extends GameFramework<ShowdownCard> {
    public turn: number = 0;
    public players: ShowdownPlayer[] = [];
    public deck: ShowdownDeck = new ShowdownDeck();

    public async start(): Promise<void> {
        while (this.gameCondition()) {
            const cardsPromise = this.players.map(async (player) => await player.takeATurn());
            const allCards = await Promise.all(cardsPromise); // P1~P4 輪流 (Takes a turn) 出 (Show) 一張牌（此步驟彼此皆無法知曉彼此出的牌）。
            console.log(allCards); // 顯示 P1~P4 各出的牌的內容。
            if (allCards.length < 4) throw new Error("cards length must be at least 4");
            const maxCard = allCards.reduce((max, card) => max?.showdown(card!), allCards[0]); // 將 P1~P4 出的牌進行比大小決勝負
            this.players[allCards.indexOf(maxCard)].gainAPoint(); // 將最勝者的分數(Point)加一。
        }
        this.showWinner();
    }

    public gameCondition = () => {
        this.turn++;
        return this.turn < 14;
    };
    public dealCardsCondition(): boolean {
        return this.deck.cards.length > 0;
    }
    public showWinner(): void {
        console.log("Game Over");
        const winner = this.players.find((player) => player.hands && player.hands.size() === 0);
        if (!winner) throw new Error("winner not found");
        console.log(`The winner is ${winner.name}`);
    }
}
