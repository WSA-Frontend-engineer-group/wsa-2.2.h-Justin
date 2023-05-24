import UnoAiPlayer from "./uno/player/AI";
import UnoHumanPlayer from "./uno/player/Human";
import Uno from "./uno/Uno";
import Showdown from "./showdown/Showdown";
import ShowdownAiPlayer from "./showdown/player/AI";
import ShowdownHumanPlayer from "./showdown/player/Human";

// const uno = new Uno();
// const justin = new UnoHumanPlayer();
// const ai1 = new UnoAiPlayer();
// const ai2 = new UnoAiPlayer();
// const ai3 = new UnoAiPlayer();

// uno.initialize(justin, ai1, ai2, ai3)
//     .then(() => uno.start())
//     .finally(() => console.log("done"));

const showdown = new Showdown();
const justin = new ShowdownHumanPlayer();
const ai1 = new ShowdownAiPlayer();
const ai2 = new ShowdownAiPlayer();
const ai3 = new ShowdownAiPlayer();

showdown
    .initialize(justin, ai1, ai2, ai3)
    .then(() => showdown.start())
    .finally(() => console.log("done"));
