import { Clock } from "three";
const clock = new Clock;

class Loop{
    constructor(scene, camera, renderer){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.updatables = [];
    }
    
    start(){
        this.renderer.setAnimationLoop(()=>{
            this.tick();
            this.renderer.render(this.scene, this.camera)
        })
    }
    stop (){
        this.renderer.setAnimationLoop(null);
    }
    tick(){
        
        const delta = clock.getDelta();
        //console.log(delta * 1000);
        for (const obj of this.updatables) {
            obj.tick(delta);
        }
    }
}
