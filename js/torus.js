import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGLAvailable()) {

    // Animation settings
    const ANIMATION_END_FRAME = 1;
    const ANIMATION_STEP = 0.01;
    const SIGMOID_COMPRESSION = 10;
    const sigmoid = x => 1 / (1 + Math.exp(1) ** -(SIGMOID_COMPRESSION * (x - 0.5)));
    const CANVAS_ELEMENT_ID = "webringTorus";

    // Torus settings
    const TORUS_RADIUS = 100;
    const TORUS_TUBE = 50;
    const TORUS_RADIAL_SEGMENTS = 16;
    const TORUS_TUBULAR_SEGMENTS = 100;
    const TORUS_TEXTURE = "./assets/torus-texture.svg";

    // Rotation animation
    const X_ROTATION_STEP = 0.01;
    const Y_ROTATION_SPEED = 0.005;

    // Scroll-triggered animation
    const animationTriggerHeight = () => window.innerHeight / 10;
    // Start state
    const torusStartY = () => window.innerHeight / 5;
    const TORUS_START_Z = -500;
    const TORUS_START_OPACITY = 1;
    // End state
    let torusEndY = 0
    const TORUS_END_OPACITY = 0.2;
    const TORUS_END_SCALE = 2;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
        window.innerWidth / - 2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / - 2,
        1, 1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(CANVAS_ELEMENT_ID).appendChild(renderer.domElement);

    // Create torus
    const geometry = new THREE.TorusGeometry(TORUS_RADIUS, TORUS_TUBE, TORUS_RADIAL_SEGMENTS, TORUS_TUBULAR_SEGMENTS);
    const textureLoader = new THREE.TextureLoader();
    const textureBase = textureLoader.load(TORUS_TEXTURE);
    textureBase.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const torus = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial(
        {
            map: textureBase,
            transparent: true
        }
    ));
    torus.position.z = TORUS_START_Z;
    scene.add(torus);

    // Window resize logic
    let isResized = false;
    window.addEventListener('resize', function () {
        isResized = true;
    });

    const resizeCanvasToDisplaySize = () => {
        isResized = false;
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Update the camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.left = window.innerWidth / - 2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / -2;
        camera.updateProjectionMatrix();
        torus.position.y = torusStartY();
    };

    // Animation logic
    var frame = 0;
    var animate;
    animate = () => {
        requestAnimationFrame(animate);
        if (isResized) {
            resizeCanvasToDisplaySize();
        }

        // Rotation animation
        torus.rotation.x += X_ROTATION_STEP;
        torus.rotation.y = window.scrollY * Y_ROTATION_SPEED;

        if (window.scrollY >= animationTriggerHeight()) {
            if (frame <= ANIMATION_END_FRAME) {
                frame += ANIMATION_STEP;
            }
        } else if (frame > 0) {
            frame -= ANIMATION_STEP;
        }

        let out = sigmoid(frame);
        torus.position.x = out * window.innerWidth / 2; // Move torus to right edge
        torus.position.y = torusStartY() + (torusEndY - torusStartY()) * out;
        torus.material.opacity = TORUS_START_OPACITY + (TORUS_END_OPACITY - TORUS_START_OPACITY) * out;
        torus.scale.x = 1 + (TORUS_END_SCALE) * out;
        torus.scale.y = 1 + (TORUS_END_SCALE) * out;
        torus.scale.z = 1 + (TORUS_END_SCALE) * out;

        renderer.render(scene, camera);
    };

    animate();

} else {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}