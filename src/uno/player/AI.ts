import UnoCard from "../cards/UnoCard";
import UnoPlayer from "./UnoPlayer";

export default class AiPlayer extends UnoPlayer {
    public nameHimself = () => {
        // 隨機取 AIplayer + 亂數
        const random = Math.floor(Math.random() * 10);
        this.name = `AI${random}`;
    };

    public showCard = () => {
        const cardOnTable = this.game?.table[this.game?.table.length - 1];
        const card = this.hands?.cards.find((card) => cardOnTable?.isVaild(card));
        if (card instanceof UnoCard) this.hands?.removeHandCard(card);
        return card;
    };
}
