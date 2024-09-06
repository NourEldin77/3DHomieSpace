import { Mesh, SphereGeometry, MeshStandardMaterial, MathUtils, TextureLoader, Group} from "three";
function createMeshGroup() {
    const group = new Group();
    const geometry = new SphereGeometry(0.25, 16, 16);
    const material = new MeshStandardMaterial({ color : 0x092e40 , flatShading: true});
    const protoSphere = new Mesh(geometry, material);
    
/*     group.add(protoSphere);
    group.scale.multiplyScalar(5); */
/*     for (let i = 0; i < 1; i += 0.001) {
        const sphere = protoSphere.clone();
        
        // position the spheres on around a circle
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);
        sphere.position.z = -i * 5;
        sphere.scale.multiplyScalar(0.01 + i);
        group.add(sphere);
        }
        group.scale.multiplyScalar(2);
        const radiansPerSecond = MathUtils.degToRad(180);
        group.tick = (delta)=>{
        group.rotation.z -= delta * radiansPerSecond;
    } */
    return(group);
}

export { createMeshGroup };