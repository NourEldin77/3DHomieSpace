// components
import { createCamera } from "./components/camera";
import { createCube, createMeshGroup } from "./components/meshGroup";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createAxesHelper, createGridHelper } from "./components/helper";
import { Train } from "./components/Train/Train";
import { loadBirds } from './components/Birds/birds.js';
// systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import { createControls } from "./systems/controls";

// utils
import { MathUtils } from "three";

class World {
    #camera;
    #renderer;
    #scene;
    #loop;
    #controls;
    constructor(container)
    {
        this.#camera = createCamera();
        this.#renderer = createRenderer();
        this.#scene = createScene();
        this.#loop = new Loop(this.#scene, this.#camera, this.#renderer);
        container.append(this.#renderer.domElement);
        
        this.#controls = createControls(this.#camera, this.#renderer.domElement);
        
/*      const cube0 = createCube();
        const cube1 = createCube(); */
        
        const meshGroup = createMeshGroup();
        const { directLight, ambientLight } = createLights();
        const grid = createAxesHelper();
        const axes = createGridHelper(); 
        const train = new Train();
        
        //this.#loop.updatables.push(cube0, cube1, this.#camera);
        this.#scene.add(directLight, ambientLight);
        

        this.#loop.updatables.push(this.#controls);
/*         cube0.position.set(-3, 0, 0);
        cube1.position.set(3, 0, 0); */
        //controls.target.copy(meshGroup.position);
/*         controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enableDamping = true; */
        
        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    async init() {
        const { parrot, flamingo, stork } = await loadBirds();
        
        this.#scene.add(parrot, flamingo, stork);
        this.#controls.target.copy(parrot.position);
        }
    render(){
        this.#renderer.render(this.#scene, this.#camera);
    }

    start(){
        this.#loop.start();
    }

    stop(){
        this.#loop.stop();
    }
}

export { World };