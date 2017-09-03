import "../css/main.scss";
require("babel-polyfill");

window.PIXI = require("phaser-ce/build/custom/pixi");
window.p2 = require("phaser-ce/build/custom/p2");
window.Phaser = require("phaser-ce/build/custom/phaser-split");

// Import and require don't play well together timing-wise. When we switch to webpack we can inject
// the globals and go with an import here.
const BootState = require("./states/boot-state.js").default;
const LoadState = require("./states/load-state.js").default;
const SandboxState = require("./states/sandbox.js").default;

const gameDimensions = 750;

// Keep this on CANVAS until Phaser 3 for performance reasons?
const game = new Phaser.Game({
  width: gameDimensions,
  height: gameDimensions,
  renderer: Phaser.WEBGL,
  enableDebug: true, // We can turn off debug when deploying - using debug causes a hit on webgl
  parent: "game-container"
});

game.state.add("boot", BootState);
game.state.add("load", LoadState);
game.state.add("sandbox", SandboxState);
game.state.start("boot");
