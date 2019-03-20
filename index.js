import * as THREE from "three";

let container;
let camera;
let renderer;
let scene;
let mesh;

function init() {
	container = document.querySelector("#scene-container");

	//create a scene
	const scene = new THREE.Scene();

	scene.background = new THREE.Color("skyblue");

	const fov = 35; //Field of view
	const aspect = container.clientWidth / container.clientHeight; //Aspect Ratio
	const near = 0.1; //the near clipping plane
	const far = 100; //the far clipping plane

	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	//move the camera back to view the scene
	camera.position.set(0, 0, 10);

	//create a geometry
	const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

	//create a material
	const material = new THREE.MeshBasicMaterial();

	//create a mesh containing the geometry and material
	const mesh = new THREE.Mesh(geometry, material);

	scene.add(mesh);

	//create the renderer
}
//create the renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//add the <canvas> element created by renderer to the page
container.appendChild(renderer.domElement);

//render the scene
renderer.render(scene, camera);
