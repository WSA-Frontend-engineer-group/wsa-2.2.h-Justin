import ShowdownPlayer from "./ShowdownPlayer";
import { rl } from "../../util";
import ShowdownCard from "../cards/ShowdownCard";

export default class HumanPlayer extends ShowdownPlayer {
    public nameHimself = async () => {
        const name = await rl.question("請取名：");
        this.name = name;
    };
    public showCard = async () => {
        let card: ShowdownCard | undefined = undefined;
        while (card instanceof ShowdownCard === false) {
            console.log(this.name + "的手牌：");
            for (let card in this.hands.cards) {
                console.log(`${card}.${this.hands.cards[card]}`);
            }
            const index = await rl.question("---\n請輸入手牌的index: ");
            card = this.hands.cards[Number(index)];
            if (card) {
                this.hands.removeHandCard(card);
            } else {
                console.log("亂出牌阿蛤");
            }
        }
        return card;
    };
}
