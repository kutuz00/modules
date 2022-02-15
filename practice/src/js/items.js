import { mediaFiles as items } from "./filles";
import { Card } from "./card.js";

const wrapper = document.querySelector(".wrapper");

items.map((item) => {
  const mediaPlayer = document.createElement(item.tag);
  item.tag !== "img" ? mediaPlayer.setAttribute("controls", true) : mediaPlayer;
  const card = new Card(item.file, item.title, {
    mediaPlaceholder: mediaPlayer,
    mediaTitle: document.createElement("p"),
  }).cardBundle();
  wrapper.append(card);
});
