import * as THREE from 'three';
import  { Application } from './application';

export function main() {
  console.log("test");

  const app = new Application("#scene");

  const geometry = new THREE.DodecahedronGeometry(5);
  const material = new THREE.MeshStandardMaterial({color : 0x00A0FF});
  const mesh = new THREE.Mesh( geometry, material);

  const lightSource = new THREE.PointLight(0XFFFFFF);
  const ambiantLight = new THREE.AmbientLight( 0x404040 );
  lightSource.intensity = 60;
  lightSource.position.set(10,10,10);

  app.getScene().add(ambiantLight);
  app.getScene().add(lightSource);
  app.getScene().add(mesh);
  app.camera.position.setZ(20);

  app.addBehavior(() => {
    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.03;
    mesh.rotation.z += 0.03;
  });

  app.start();




}

