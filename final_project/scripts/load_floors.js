 function load_floors()
 {
      var floors = new THREE.Object3D();
      var floor = new THREE.Object3D();
      floor = createPicture(3,3,0.05,"ing.jpg","ing_bump.jpg",3,3);
      floor.position.set(2.5,0.125,3.5);
      floors.add(floor);
     
      floor = createPicture(3,2,0.05,"bed3.jpg","bed3_bump.jpg",3,2);
      floor.position.set(1.5,0.125,6);
      floors.add(floor);
      
      floor = createPicture(2,2,0.05,"bath_kit.jpg","bath_kit_bump.jpg",2,2);
      floor.position.set(2,0.125,8);
      floors.add(floor);
      
      floor = createPicture(3,2,0.05,"bath_kit.jpg","bath_kit_bump.jpg",3,2);
      floor.position.set(2.5,0.125,10);
      floors.add(floor);
      
      floor = createPicture(1,4,0.05,"ing.jpg","ing_bump.jpg",1,4);
      floor.position.set(3.5,0.125,7);
      floors.add(floor);
     
      floor = createPicture(5,4,0.05,"sala.jpg","sala_bump.jpg",5,4);
      floor.position.set(6.5,0.125,2);
      floors.add(floor);
      
      floor = createPicture(4,4,0.05,"bed1.jpg","bed1_bump.jpg",4,4);
      floor.position.set(6,0.125,6);
      floors.add(floor);
      
      floor = createPicture(4,3,0.05,"bed1.jpg","bed1_bump.jpg",4,3);
      floor.position.set(6,0.125,9.5);
      floors.add(floor);
     
      floor = createPicture(1,4,0.05,"bal.jpg","bal_bump.jpg",1,4);
      floor.position.set(8.5,0.125,6);
      floors.add(floor);

      return floors;
 }