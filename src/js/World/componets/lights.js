import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

function createLights() {
    const directLight = new DirectionalLight('white', 8);
    directLight.position.set(10, 10, 10);
     const ambientLight = new HemisphereLight(
        'white', // bright sky color
         0x090F0F, // dim ground color
        2, // intensity
      ); 
   /*  const ambientLight = new AmbientLight('white', 1); */

    return ({ directLight, ambientLight });
}

export { createLights };