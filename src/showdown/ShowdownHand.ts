import Card from "../card";
import Hand from "../hand";
import ShowdownCard from "./cards/ShowdownCard";

export default class ShowdownHand extends Hand<Card> {
    public cards: ShowdownCard[] = [];
}
