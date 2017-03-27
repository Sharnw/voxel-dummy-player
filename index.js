var skin = require('minecraft-skin');

module.exports = function (game) {
    var possessed = false;
    
    return function (img, skinOpts) {
        if (!skinOpts) {
          skinOpts = {};
        }
        skinOpts.scale = skinOpts.scale || new game.THREE.Vector3(0.04, 0.04, 0.04);
        var dummySkin = skin(game.THREE, img, skinOpts);
        var dummy = dummySkin.mesh;
        var physics = game.makePhysical(dummy);
        physics.dummySkin = dummySkin;
        
        dummy.position.set(0, 562, -20);
        game.scene.add(dummy);
        game.addItem(physics);
        
        physics.yaw = dummy;
        physics.pitch = dummy.head;
        physics.subjectTo(game.gravity);
        
        game.control(physics);
        
        physics.move = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.yaw.position.x += xyz.x;
            physics.yaw.position.y += xyz.y;
            physics.yaw.position.z += xyz.z;
        };
        
        physics.moveTo = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.yaw.position.x = xyz.x;
            physics.yaw.position.y = xyz.y;
            physics.yaw.position.z = xyz.z;
        };
        
        physics.rotate = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.yaw.rotation.x += xyz.x;
            physics.yaw.rotation.y += xyz.y;
            physics.yaw.rotation.z += xyz.z;
        };

        physics.rotateTo = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.yaw.rotation.x = xyz.x;
            physics.yaw.rotation.y = xyz.y;
            physics.yaw.rotation.z = xyz.z;
        };

        physics.faceTowards = function (obj) {
            var b = obj.position || obj;
            var a = this.position;
            
            physics.yaw.rotation.y = Math.atan2(a.x - b.x, a.z - b.z)
                + Math.random() * 1 / 4 - 1 / 8
            ;
        };

        physics.rotateHead = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.pitch.rotation.x += xyz.x;
            physics.pitch.rotation.y += xyz.y;
            physics.pitch.rotation.z += xyz.z;
        };

        physics.rotateHeadTo = function (x, y, z) {
            var xyz = parseXYZ(x, y, z);
            physics.pitch.rotation.x = xyz.x;
            physics.pitch.rotation.y = xyz.y;
            physics.pitch.rotation.z = xyz.z;
        };

        physics.lookAt = function (x, y, z) {
            var b = obj.position || obj;
            var a = this.position;
            
            physics.pitch.rotation.y = Math.atan2(a.x - b.x, a.z - b.z)
                + Math.random() * 1 / 4 - 1 / 8
            ;
        };

        physics.jump = function (y) {
            if (y === undefined) y = 1;
            this.move(0, y, 0);
        };
        
        physics.position = physics.yaw.position;
        
        return physics;
    }
};

function parseXYZ (x, y, z) {
    if (typeof x === 'object' && Array.isArray(x)) {
        return { x: x[0], y: x[1], z: x[2] };
    }
    else if (typeof x === 'object') {
        return { x: x.x || 0, y: x.y || 0, z: x.z || 0 };
    }
    return { x: Number(x), y: Number(y), z: Number(z) };
}
