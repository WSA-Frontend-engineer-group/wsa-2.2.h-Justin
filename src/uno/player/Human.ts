import UnoPlayer from "./UnoPlayer";
import { rl } from "../../util";
import UnoCard from "../cards/UnoCard";

export default class HumanPlayer extends UnoPlayer {
    public nameHimself = async () => {
        const name = await rl.question("請取名：");
        this.name = name;
    };
    public showCard = async () => {
        let card: UnoCard | undefined = undefined;
        const cardOnTable = this.game?.table[this.game?.table.length - 1];
        const noCardsVaild = this.hands?.cards.every((card) => !cardOnTable?.isVaild(card));
        if (noCardsVaild) return undefined;
        while (card instanceof UnoCard === false) {
            console.log(this.name + "的手牌：");
            if (!this.hands) throw new Error("Hands not available");
            for (let card in this.hands.cards) {
                console.log(`${card}.${this.hands.cards[card]}`);
            }
            const index = await rl.question("---\n請輸入手牌的index: ");
            if (cardOnTable?.isVaild(this.hands.cards[Number(index)])) {
                card = this.hands.cards[Number(index)];
                this.hands.removeHandCard(card);
            } else {
                console.log("亂出牌阿蛤");
            }
        }
        return card;
    };
}
