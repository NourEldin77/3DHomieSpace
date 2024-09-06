import { AxesHelper, GridHelper } from 'three';


function createAxesHelper(){
    const helper = new AxesHelper(5);
    return (helper);
}

function createGridHelper() {
    const helper = new GridHelper(9);
    return (helper);
}

export { createAxesHelper ,createGridHelper };