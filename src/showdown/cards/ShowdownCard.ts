import Card from "../../card";
import { Rank, rankValue } from "./Rank";
import { Suit, suitValue } from "./Suit";

export default class ShowdownCard extends Card {
    constructor(private readonly rank: Rank, private readonly suit: Suit) {
        super();
    }

    public toString = () => {
        return `${this.rank}${this.suit}`;
    };

    public toValue = () => {
        return rankValue[this.rank] + suitValue[this.suit];
    };

    public showdown = (card: ShowdownCard) => {
        if (this.toValue() > card.toValue()) return this;
        return card;
    };
}
