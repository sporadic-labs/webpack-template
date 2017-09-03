/**
 * Sandbox - Blank canvas for creating amazing games!
 */

export default class Sandbox extends Phaser.State {
  create() {
    // Shorthands
    var game = this.game;
    var globals = game.globals;

    // Initializing the world
    this.stage.backgroundColor = "#FFF";

    // Some text!
    this.someText = this.add.text(this.world.centerX, this.world.centerY, "Hello Gamer!", {
      font: "64px Arial",
      fill: "#000",
      align: "center"
    });
    this.someText.anchor.set(0.5);
  }
}
