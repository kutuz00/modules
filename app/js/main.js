import "./submit.js";
import { iterator } from "./selector.js";

const buttons = document.querySelector(".tab").getElementsByTagName("button");

iterator(buttons);
