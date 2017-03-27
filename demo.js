var createGame = require('voxel-hello-world');
var game = createGame();

var createDummy = require('./')(game);
var dummy1 = createDummy('skin1.png');
dummy1.yaw.position.set(0,2,-2);

var createPlayer = require('voxel-player')(game);
var player = createPlayer('skin1.png');
player.position.set(0,2,0);
player.possess();

dummy1.faceTowards(player);

window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 'R'.charCodeAt(0)) {
        player.toggle();
    }
    if (ev.keyCode === 'F'.charCodeAt(0)) {
        dummy1.faceTowards(player);
    }
    if (ev.keyCode === 'J'.charCodeAt(0)) {
        dummy1.jump(0.3);
    }
});
