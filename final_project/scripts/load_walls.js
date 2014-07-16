function load_walls()
 {
      var walls = new THREE.Object3D();
      var wall = new THREE.Object3D();
      // muri del salone:
      wall = createPicture(4.7,3.0,0.005,"sala_wall.jpg",false,1,1);
      wall.rotation.x = Math.PI/2;
      wall.position.set(6.45,1.6,0.2025);
      walls.add(wall);

      wall = createPicture(4.7,3.0,0.005,"sala_wall.jpg",false,1,1);
      wall.rotation.x = -Math.PI/2;
      wall.position.set(6.45,1.6,3.9);
      walls.add(wall);

      var vertex;
      vertex = [0,0,0,3,3.7,3,3.7,0,0,0];
      var hole = [0.4,0,1.4,0,1.4,2,0.4,2,0.4,0.4];
      var holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"sala_wall.jpg",false,1,1);
      wall.rotation.y = Math.PI/2;
      wall.position.set(4.1,0.1,3.9);
      walls.add(wall);

      
      hole = [0.8,1,2.8,1,2.8,2.3,0.8,2.3,0.8,1];
      holes = new Array();
      holes.push(hole)
      wall = createShapeGeometry(vertex,holes,0.005,"sala_wall.jpg",false,1,1);
      wall.rotation.y = Math.PI/2;
      wall.position.set(8.795,0.1,3.9);
      walls.add(wall);

      //muri del primo ingresso:
      vertex = [0,0,0,3,2.7,3,2.7,0,0,0];
      hole = [1.3,0,1.3,2,0.3,2,0.3,0];
      holes = new Array();
      holes.push(hole)
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(3.9,0.1,2.2);
      walls.add(wall);

      hole = [0.85,0,1.85,0,1.85,2,0.85,2,0.85,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(1.205,0.1,2.2);
      walls.add(wall);

      hole = [2.6,0,2.6,2,2,2,2,0,2.6,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.position.set(1.2,0.1,4.895);
      walls.add(wall);

      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.position.set(1.2,0.1,2.2);
      walls.add(wall);

      //muri del secondo ingresso:
      vertex = [0,0,3.8,0,3.8,3,0,3,0,0];
      hole = [0.4,0,1.4,0,1.4,2,0.4,2,0.4,0];
      holes = new Array();
      holes.push(hole);
      hole = [2.4,0,3.4,0,3.4,2,2.4,2,2.4,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(3.105,0.1,5.1);
      walls.add(wall);

      hole = [0.4,0,1.4,0,1.4,2,0.4,2,0.4,0];
      holes = new Array();
      holes.push(hole);
      hole = [3.1,0,3.8,0,3.8,2,3.1,2,3.1,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(3.9,0.1,5.1);
      walls.add(wall);

      vertex = [0,0,0.8,0,0.8,3,0,3,0,0];
      hole = [0.1,0,0.7,0,0.7,2,0.1,2,0.1,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.position.set(3.1,0.1,5.1);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"ing_wall.jpeg",false,1,1);
      wall.position.set(3.1,0.1,8.895);
      walls.add(wall);

      //muri della seconda stanza:
      vertex = [0,0,3.7,0,3.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"bed2_wall.jpg",false,1,1);
      wall.position.set(4.1,0.1,4.1);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"bed2_wall.jpg",false,1,1);
      wall.position.set(4.1,0.1,7.895);
      walls.add(wall);


      vertex = [0,0,3.8,0,3.8,3,0,3,0,0];
      hole = [1.4,0,2.4,0,2.4,2,1.4,2,1.4,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed2_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(4.105,0.1,4.1);
      walls.add(wall);

      hole = [1.6,1,3.1,1,3.1,2.5,1.6,2.5,1.6,1];
      holes = new Array();
      holes.push(hole);
      hole = [0.5,0,1.3,0,1.3,2.5,0.5,2.5,0.5,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed2_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(7.8,0.1,4.1);
      walls.add(wall);

      //muri della prima stanza:
      vertex = [0,0,3.7,0,3.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"bed1_wall.jpg",false,1,1);
      wall.position.set(4.1,0.1,8.1);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"bed1_wall.jpg",false,1,1);
      wall.position.set(4.1,0.1,10.795);
      walls.add(wall);

      vertex = [0,0,2.7,0,2.7,3,0,3,0,0];
      hole = [0.1,0,0.8,0,0.8,2,0.1,2,0.1,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed1_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(4.105,0.1,8.1);
      walls.add(wall);

      hole = [0.7,1,2.1,1,2.1,2.5,0.7,2.5,0.7,1];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed1_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(7.8,0.1,8.1);
      walls.add(wall);

      //muri del bagno:
      vertex = [0,0,1.7,0,1.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"bath_wall.jpg",false,1,1);
      wall.position.set(1.2,0.1,7.1);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"bath_wall.jpg",false,1,1);
      wall.position.set(1.2,0.1,8.895);
      walls.add(wall);

      vertex = [0,0,1.8,0,1.8,3,0,3,0,0];
      hole = [0.4,0,1.4,0,1.4,2,0.4,2,0.4,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bath_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(2.9,0.1,7.1);
      walls.add(wall);

      hole = [0.4,1,1.4,1,1.4,2,0.4,2,0.4,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bath_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(1.205,0.1,7.1);
      walls.add(wall);

      //muri della cucina:
      vertex = [0,0,2.7,0,2.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"kit_wall.jpg",false,1,1);
      wall.position.set(1.2,0.1,10.795);
      walls.add(wall);

      hole = [2,0,2.6,0,2.6,2,2,2,2,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"kit_wall.jpg",false,1,1);
      wall.position.set(1.2,0.1,9.1);
      walls.add(wall);

      vertex = [0,0,1.7,0,1.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"kit_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(3.9,0.1,9.1);
      walls.add(wall);

      hole = [0.4,1,1.4,1,1.4,2,0.4,2,0.4,1];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"kit_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(1.205,0.1,9.1);
      walls.add(wall);

      //muri della terza stanza:
      vertex = [0,0,2.7,0,2.7,3,0,3,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"bed3_wall.jpg",false,1,1);
      wall.position.set(0.2,0.1,5.1);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"bed3_wall.jpg",false,1,1);
      wall.position.set(0.2,0.1,6.895);
      walls.add(wall);

      vertex = [0,0,1.8,0,1.8,3,0,3,0,0];
      hole = [0.4,0,1.4,0,1.4,2,0.4,2,0.4,0];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed3_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(2.9,0.1,5.1);
      walls.add(wall);

      hole = [0.6,1,1.2,1,1.2,2,0.6,2,0.6,1];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"bed3_wall.jpg",false,1,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(0.205,0.1,5.1);
      walls.add(wall);

      vertex = [0,0,3,0,3,3.1,0,3.1,0,0];
      hole = [1.05,0.15,2.05,0.15,2.05,2.1,1.05,2.1,1.05,0.15];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",3,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(1,0,1.995);
      walls.add(wall);

      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",3,3);
      wall.position.set(1,0,1.995);
      walls.add(wall);

      hole = [0.8,1.1,2.2,1.1,2.2,2.6,0.8,2.6,0.8,1.1];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",3,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(8.005,0,8.005);
      walls.add(wall);

      vertex = [0,0,1,0,1,3.1,0,3.1,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",1,3);
      wall.position.set(0,0,4.995);
      walls.add(wall);

      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",1,3);
      wall.position.set(0,0,7);
      walls.add(wall);

      vertex = [0,0,2,0,2,3.1,0,3.1,0,0];
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",2,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(4,0,-0.005);
      walls.add(wall);

      vertex = [0,0,5,0,5,3.1,0,3.1,0,0];
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",5,3);
      wall.position.set(4,0,-0.005);
      walls.add(wall);

      vertex = [0,0,7,0,7,3.1,0,3.1,0,0];
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",7,3);
      wall.position.set(1,0,11);
      walls.add(wall);

      vertex = [0,0,2.01,0,2.01,3.1,0,3.1,0,0];
      hole = [0.705,1.1,1.305,1.1,1.305,2.1,0.705,2.1,0.705,1.1];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",2,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(0,0,4.995);
      walls.add(wall);

      vertex = [0.005,0,4.005,0,4.005,3.1,0.005,3.1,0.005,0];
      hole = [0.5,1.1,1.5,1.1,1.5,2.1,0.5,2.1,0.5,1.1];
      holes = new Array();
      holes.push(hole);
      hole = [2.5,1.1,3.5,1.1,3.5,2.1,2.5,2.1,2.5,1.1];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",4,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(1,0,7);
      walls.add(wall);

      vertex = [-0.005,0,4.105,0,4.105,3.1,-0.005,3.1,-0.005,0];
      hole = [1.1,1.1,3.1,1.1,3.1,2.4,1.1,2.4,1.1,1.1];
      holes = new Array();
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",4,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(9.005,0,0);
      walls.add(wall);

      vertex = [0,0,3.7,0,3.7,1.1,0,1.1,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",4,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(8.8,0,4.1);
      walls.add(wall);

      vertex = [0,0,3.9,0,3.9,1.1,0,1.1,0,0];
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",4,1);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(9.005,0,4.105);
      walls.add(wall);

      vertex = [0,0,3.9,0,3.9,3.1,0,3.1,0,0];    
      hole = [1.6,1,3.1,1,3.1,2.5,1.6,2.5,1.6,1];
      holes = new Array();
      holes.push(hole);
      hole = [0.5,0,1.3,0,1.3,2.5,0.5,2.5,0.5,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",4,3);
      wall.rotation.y = -Math.PI/2;
      wall.position.set(8.005,0,4.1);
      walls.add(wall);

      vertex = [0,0,1,0,1,1.1,0,1.1,0,0];
      holes = new Array();
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",1,1);
      wall.position.set(8,0,8.0025);
      walls.add(wall);

      vertex = [0,0,0.8,0,0.8,1.1,0,1.1,0,0];
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",1,1);
      wall.position.set(8,0,7.795);
      walls.add(wall);

      vertex = [0,0,1,0,1,3.1,0,3.1,0,0];
      hole = [0.8,0,1,0,1,1.1,0.8,1.1,0.8,0];
      holes.push(hole);
      wall = createShapeGeometry(vertex,holes,0.005,"wall_extern.jpg","wall_extern_bump.jpg",1,3);
      wall.position.set(8,0,4.1);
      walls.add(wall);

      vertex = [1.995,0.995,1.995,3.995,-0.005,3.995,-0.005,4.5,11.005,4.5,11.005,0.995,7.005,0.995,7.005,-0.005,4.995,-0.005,4.995,0.995,1.995,0.995]
      holes = new Array();
      var tetto1 = createShapeGeometry(vertex,holes,0.1,"tetto.jpg","tetto_bump.jpg",1,1);
      vertex = [-0.005,4.5,-0.005,9.005,4.105,9.005,4.105,8.005,11.005,8.005,11.005,4.5,-0.005,4.5];
      var tetto2 = createShapeGeometry(vertex,holes,0.1,"tetto_reverse.jpg","tetto_reverse_bump.jpg",1,1);
      var tetto = new THREE.Object3D();
      tetto.add(tetto1);
      tetto.add(tetto2);
      tetto.rotation.x = -Math.PI/2;
      tetto.rotation.z = -Math.PI/2;
      tetto.position.set(0,3.1,0);
      walls.tetto = tetto;
   

      return walls;
 }


 