import ShowdownPlayer from "./ShowdownPlayer";

export default class AiPlayer extends ShowdownPlayer {
    public nameHimself = () => {
        // 隨機取 AIplayer + 亂數
        const random = Math.floor(Math.random() * 10);
        this.name = `AI${random}`;
    };

    public showCard = () => {
        // 隨機出一張手牌
        const random = Math.floor(Math.random() * this.hands.cards.length);
        const card = this.hands.cards[random];
        this.hands.cards.splice(random, 1);
        // console.log(card);
        return card;
    };
}
