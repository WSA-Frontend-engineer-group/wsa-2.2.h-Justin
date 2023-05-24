import Card from "./card";

export default abstract class Hand<T extends Card> {
    public cards: T[] = [];

    public addHandCard = (card: T) => {
        this.cards.push(card);
    };

    public removeHandCard = (card: T) => {
        this.cards = this.cards.filter((c) => c !== card);
    };

    public size = () => {
        return this.cards.length;
    };
}
