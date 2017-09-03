/**
 * LoadState - this is the loading screen
 */

export default class LoadState extends Phaser.State {
  preload() {
    // Stand-in for a loading bar
    this.loadingText = this.add.text(this.world.centerX, this.world.centerY, "0%", {
      font: "200px Arial",
      fill: "#000",
      align: "center"
    });
    this.loadingText.anchor.set(0.5);
  }

  loadRender() {
    this.loadingText.setText(this.load.progress + "%");
  }

  create() {
    // Since load progress might not reach 100 in the load loop, manually do it
    this.loadingText.setText("100%");

    this.game.state.start("sandbox"); // for testing
  }
}
