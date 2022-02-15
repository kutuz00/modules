export class Card {
  constructor(mediaURL, title, options) {
    this.mediaURL = mediaURL;
    this.title = title;
    this.card = options;
  }
  getMediaHolder() {
    return this.card.mediaPlaceholder;
  }
  assignURLAndClassName() {
    this.getMediaHolder().classList = "wrapper_card_img";
    this.getMediaHolder().src = this.mediaURL;
    return this.card.mediaPlaceholder;
  }
  getMediaTitle() {
    return this.card.mediaTitle;
  }
  assignTitle() {
    this.card.mediaTitle.classList = "wrapper_card_img-title";
    this.card.mediaTitle.innerText = this.title;
    return this.card.mediaTitle;
  }
  createTag(cardMediaHolder) {
    cardMediaHolder = document.createElement("div");
    cardMediaHolder.append(this.assignURLAndClassName(), this.assignTitle());
    cardMediaHolder.classList = "wrapper_card";
    return cardMediaHolder;
  }
  cardBundle() {
    return this.createTag();
  }
}
