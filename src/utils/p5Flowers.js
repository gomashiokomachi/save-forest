export default class AnimationObject {
  constructor(p5, images, delay, isShow = false) {
    const {
      img
    } = images[p5.floor(p5.random(0, images.length))]
    this.delay = delay
    this.p5 = p5
    this.x = p5.random(0, p5.width);
    this.y = p5.random(0, p5.height);
    this.img = img;
    this.sizeScale = 0;
    this.rotScale = 0.02
    this.isShow = isShow
    this.maxScale = 0.3
  }

  updateValue() {
    if (this.p5._lastFrameTime > this.delay) {
      this.sizeScale = this.isShow ? this.sizeScale + this.rotScale : this.sizeScale - this.rotScale;
      this.sizeScale = Math.min(this.sizeScale, this.maxScale);
      this.sizeScale = Math.max(this.sizeScale, 0);
    }
  }

  drawMe() {
    this.p5.push();
    this.p5.translate(this.x, this.y);
    this.p5.scale(this.sizeScale, this.sizeScale);
    this.p5.image(this.img, -(this.img.width / 2), -(this.img.height / 2));
    this.p5.pop();
  }
}