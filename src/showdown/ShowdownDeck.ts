import Deck from "../deck";
import ShowdownCard from "./cards/ShowdownCard";
import { Rank } from "./cards/Rank";
import { Suit } from "./cards/Suit";

export class ShowdownDeck extends Deck<ShowdownCard> {
    public cards: ShowdownCard[] = [];

    public initialize() {
        const ranks = Object.values(Rank);
        const suits = Object.values(Suit);
        ranks.map((rank) => suits.map((suit) => this.addCard(new ShowdownCard(rank, suit))));
        console.log(`總共有 ${this.cards.length} 張牌`);
    }
}
