import { Scene, Color } from "three";

function createScene(){
    const scene = new Scene();
    scene.background = new Color(0xcce68e);
    return (scene);
}

export { createScene };