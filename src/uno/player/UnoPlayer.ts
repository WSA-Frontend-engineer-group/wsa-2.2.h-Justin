import Player from "../../player";
import UnoCard from "../cards/UnoCard";
import UnoHand from "../UnoHand";
import type Uno from "../Uno";

export default abstract class UnoPlayer extends Player<UnoCard> {
    public game: Uno | undefined;
    public hands: UnoHand = new UnoHand();
    abstract showCard(): UnoCard | undefined | Promise<UnoCard | undefined>;
    abstract nameHimself(): void | Promise<void>;
}
