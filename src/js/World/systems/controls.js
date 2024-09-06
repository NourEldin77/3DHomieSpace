import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas){
    const controls = new OrbitControls(camera, canvas);
/*     controls.autoRotate = true;
    controls.autoRotateSpeed = 2; */
    controls.tick = () => controls.update();
    return(controls);
}

export { createControls };