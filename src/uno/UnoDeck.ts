import Deck from "../deck";
import UnoCard from "./cards/UnoCard";
import { Color } from "./cards/Color";
import { Number } from "./cards/Number";

export class UnoDeck extends Deck<UnoCard> {
    public cards: UnoCard[] = [];

    public initialize() {
        const numbers = Object.values(Number);
        const colors = Object.values(Color);
        numbers.map((number) => colors.map((color) => this.addCard(new UnoCard(number, color))));
        console.log(`總共有 ${this.cards.length} 張牌`);
    }
}
