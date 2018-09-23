import { PerspectiveCamera, Scene, Color, SphereGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from "three";
import Typed from "typed.js";

var options = {
    stringsElement: "#typed-strings",
    typeSpeed: 40,
    showCursor: false,
};

new Typed("#terminal", options);

function init() {
    var camera, scene, renderer;
    var geometry, material, mesh;
    var frameWidth = document.getElementById("graphic").clientWidth;
    var frameHeight = document.getElementById("graphic").clientHeight;

    camera = new PerspectiveCamera(75, frameWidth / frameHeight, 0.1, 10);
    camera.position.z = 2;

    scene = new Scene();
    scene.background = new Color(0xffffff);

    geometry = new SphereGeometry(1, 18, 18);
    material = new MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1 });

    mesh = new Mesh(geometry, material);
    scene.add(mesh);

    renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(frameWidth, frameHeight);

    document.getElementById("graphic").appendChild(renderer.domElement);

    document.body.addEventListener("mousemove", function (e) {
        mesh.rotation.x = (5 * e.y) / frameHeight - 0.5;
        mesh.rotation.y = (5 * e.x) / frameWidth - 0.5;
        renderer.render(scene, camera);
    });

    var rotationX = 0;
    var rotationY = 0;
    document.body.addEventListener("touchmove", function (e) {
        rotationX = rotationX + e.touches[0].clientX;
        rotationY = rotationY + e.touches[0].clientY;
        mesh.rotation.x = rotationX / 10000;
        mesh.rotation.y = rotationY / 10000;
        renderer.render(scene, camera);
    });

    renderer.render(scene, camera);
}

init();
