# voxel-dummy-player

Based on substack's voxel-player module (https://github.com/substack/voxel-player).

Create a dummy player object which can be manipulated by API methods.

# example

``` js
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
```

# methods

``` js
var voxelDummy = require('voxel-dummy-player')
```

## var createDummy = voxelDummy(game)

Return a function `createDummy` from a
[voxel-engine](https://github.com/maxogden/voxel-engine) `game` instance.

## var dummy = createDummy(img)

Return a new dummy from a image file src string `img`.

## dummy.position.set(x, y, z)

Set the dummy position.

## dummy.subjectTo(forceVector)

Subject the dummy to a force of gravity or some such. The default value is
a THREE.Vector3 with `{ x: 0, y: -0.00009, z: 0 }`.

## dummy.move(x, y, z) or dummy.move(vec)

Move a relative amount with `(x, y, z)` or a THREE.Vector3 `vec`.

## dummy.moveTo(x, y, z) or dummy.move(pos)

Move to an absolute position with `(x, y, z)` or a THREE.Vector3 `pos`.

## dummy.rotate(x, y, z) or dummy.rotate(vec)

Rotate body a relative amount with `(x, y, z)` or a THREE.Vector3 `vec`.

## dummy.rotateTo(x, y, z) or dummy.rotateTo(pos)

Rotate body to an absolute position with `(x, y, z)` or a THREE.Vector3 `pos`.

## dummy.faceTowards(obj)

Rotate dummy to face towards object position.

## dummy.rotateHead(x, y, z) or dummy.rotate(vec)

Rotate head a relative amount with `(x, y, z)` or a THREE.Vector3 `vec`.

## dummy.rotateHeadTo(x, y, z) or dummy.rotateTo(pos)

Rotate head to an absolute position with `(x, y, z)` or a THREE.Vector3 `pos`.

## dummy.lookAt(obj)

Rotate dummy head to look at object position.

## dummy.jump(y)

Make dummy jump by height of y.

# license

MIT

# install

With [npm](https://npmjs.org) do:

```
npm install voxel-dummy-player
```

# BUGS

If created after player it auto-possesses the dummy. Not sure why, but feel free to help out :)
