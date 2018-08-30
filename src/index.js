import * as THREE from 'three';
import Typed from 'typed.js';

var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 40
}

var typed = new Typed(".element", options);

function init() {

    var camera, scene, renderer;
    var geometry, material, mesh;

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 3;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    geometry = new THREE.SphereGeometry(1, 18, 18);
    material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1 });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    document.body.addEventListener('mousemove', function (e) {
        mesh.rotation.x = ((5 * e.y / window.innerHeight) - 0.5);
        mesh.rotation.y = ((5 * e.x / window.innerWidth) - 0.5);
        renderer.render(scene, camera);
    })
}

init();