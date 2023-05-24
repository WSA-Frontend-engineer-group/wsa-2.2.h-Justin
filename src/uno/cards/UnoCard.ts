import Card from "../../card";
import { Number } from "./Number";
import { Color } from "./Color";

export default class UnoCard extends Card {
    constructor(private readonly number: Number, private readonly color: Color) {
        super();
    }
    public toString = () => {
        return `${this.number} ${this.color}`;
    };

    public isVaild = (card: UnoCard) => {
        if (card.number === this.number || card.color === this.color) return true;
        return false;
    };
}
