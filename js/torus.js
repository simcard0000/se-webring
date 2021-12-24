const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth * 2 / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight / 2 );
document.getElementById("webringTorus").appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 1.2, 0.5, 16, 100 );
const textureLoader = new THREE.TextureLoader();
const textureBase = textureLoader.load("./assets/torus-texture.svg");

textureBase.anisotropy = renderer.capabilities.getMaxAnisotropy();

const torus = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(
    {
        map: textureBase
    }
) );
scene.add( torus );

camera.position.z = 3.5;

const animate = function () {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y  = window.scrollY * 0.01;

    renderer.render( scene, camera );
};

animate();