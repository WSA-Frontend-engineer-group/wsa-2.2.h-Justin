import Player from "../../player";
import Showdown from "../Showdown";
import ShowdownHand from "../ShowdownHand";
import ShowdownCard from "../cards/ShowdownCard";

export default abstract class ShowdownPlayer extends Player<ShowdownCard> {
    public game: Showdown | undefined;
    public hands: ShowdownHand = new ShowdownHand();
    public point = 0;
    abstract showCard(): ShowdownCard | undefined | Promise<ShowdownCard | undefined>;
    abstract nameHimself(): void | Promise<void>;
    public gainAPoint() {
        this.point++;
        console.log(this.name + " gain a point");
    }
}
