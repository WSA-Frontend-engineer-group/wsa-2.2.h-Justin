import Card from "../card";
import Hand from "../hand";
import UnoCard from "./cards/UnoCard";

export default class UnoHand extends Hand<Card> {
    public cards: UnoCard[] = [];
}
