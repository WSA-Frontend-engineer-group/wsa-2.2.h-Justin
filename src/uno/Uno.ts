import GameFramework from "../framework";
import UnoPlayer from "./player/UnoPlayer";
import UnoCard from "./cards/UnoCard";
import { UnoDeck } from "./UnoDeck";

export default class Uno extends GameFramework<UnoCard> {
    public table: UnoCard[] = [];
    public players: UnoPlayer[] = [];
    public deck: UnoDeck = new UnoDeck();

    public async start(): Promise<void> {
        const card = this.deck.drawCard() as UnoCard | null;
        if (!card) throw new Error("first card not found");
        this.table.push(card); // 從牌堆中翻出第一張牌到檯面上

        while (this.gameCondition()) {
            for (let player of this.players) {
                const currentCard = this.table[this.table.length - 1];
                console.log(
                    `---\nTable's card is ${currentCard.toString()}, ${
                        this.deck.cards.length
                    } cards left in the deck\n---`
                );
                if (!this.gameCondition()) break;
                let card = await player.takeATurn();
                while (!card) {
                    this.handleInvalidCard(player);
                    card = await player.takeATurn();
                }
                this.table.push(card);
                console.log(`UnoPlayer ${player.name} take a card ${card.toString()}`);
            }
        }
        this.showWinner();
    }
    public handleInvalidCard(player: UnoPlayer) {
        if (this.deck.cards.length === 0) {
            this.deckIsEmptyAndReshuffle();
        }

        const drawACard = this.deck.drawCard();
        player.hands?.addHandCard(drawACard!);
    }

    public deckIsEmptyAndReshuffle = () => {
        const newestCard = this.table.pop();
        if (!newestCard) throw new Error("newestCard not found");
        this.deck.addCard(...this.table);
        this.table = [newestCard];
        console.log("Deck is empty, Reshuffle");
        this.deck.shuffle();
        console.log(`Table's card is ${newestCard.toString()}`);
    };

    public gameCondition(): boolean {
        return this.players.every((player) => player.hands && player.hands.size() > 0);
    }
    public dealCardsCondition(): boolean {
        const allPlayersHave5Cards = this.players.every(
            (player) => player.hands && player.hands.size() === 5
        );
        for(let player of this.players){
            console.log(`UnoPlayer ${player.name} has ${player.hands?.size()} cards`);
        }
        return !allPlayersHave5Cards;
    }
    public showWinner(): void {
        console.log("Game Over");
        const winner = this.players.find((player) => player.hands && player.hands.size() === 0);
        if (!winner) throw new Error("winner not found");
        console.log(`The winner is ${winner.name}`);
    }
}
