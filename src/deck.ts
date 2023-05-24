import Card from "./card";

export default abstract class Deck<T extends Card> {
    public cards: T[] = [];

    public shuffle = () => {
        this.cards.sort(() => Math.random() - 0.5);
    };

    public drawCard = () => {
        return this.cards.pop();
    };

    public addCard = (...card: Array<T>) => {
        card.forEach((c) => this.cards.push(c));
    };

    public abstract initialize(): void;
}
