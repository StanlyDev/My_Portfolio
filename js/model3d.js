import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isDragging = false;

let object;

let controls;

let objToRender = 'fox';

let rotationSpeed = 0.01;

let initialRotationX = 0;
let initialRotationY = 0;

const loader = new GLTFLoader();

loader.load(
  'src/3d/scene.gltf',
  function (gltf) {

    object = gltf.scene;

    object.scale.set(80, 80, 80);

    initialRotationX = object.rotation.x;
    initialRotationY = object.rotation.y;

    scene.add(object);
  },
  function (xhr) {

    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {

    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById("container3D");
container.appendChild(renderer.domElement);

camera.position.z = 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(50, 50, 50);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  if (object && !isDragging) {
    object.rotation.y += rotationSpeed;
  }

  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.domElement.addEventListener("mousedown", () => {
  isDragging = true;
});
renderer.domElement.addEventListener("mouseup", () => {
  isDragging = false;
});

animate();
