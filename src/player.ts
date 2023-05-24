import Card from "./card";
import Hand from "./hand";

export default abstract class Player<T extends Card> {
    public game: unknown | undefined;
    public name: string | undefined;
    public hands: Hand<T> | undefined;

    protected abstract showCard(): T | undefined | Promise<T | undefined>;
    public abstract nameHimself(): void | Promise<void>;

    public takeATurn = () => {
        console.log(`${this.name} turn, there is ${this.hands?.size()} cards in hand`);
        const card = this.showCard();
        return card;
    };
    public setGame(game: unknown) {
        this.game = game;
    }
}
