import { PerspectiveCamera } from "three";

function createCamera(){
/*     const aspect = container.clientWidth / container.clientHeight; */
    const camera = new PerspectiveCamera(35, 1, 0.1, 500);
    camera.position.set(-1.5, 1.5, 6.5);
    camera.tick = () =>{
        
    }
    return (camera);
}

export { createCamera };