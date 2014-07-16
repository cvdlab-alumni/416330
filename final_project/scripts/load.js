var camera;
var scene;
var trackballControls;
var controls;
var FPdisabled = true;
var home;

function load_models(sx,sy,sz)
{ 
    var loader = new THREE.OBJLoader();
    var home = new THREE.Object3D();
    loader.load("scripts/lar-models/ing1.obj", function (obj) {
    global_o = obj;
    var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide, transparent:true});
    ing1 = new THREE.Mesh(obj.children[0].geometry, material);
    
    home.add(ing1);
    
    home.ing1 = ing1;
      });

    var ing2;
    loader.load("scripts/lar-models/ing2.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        ing2 = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(ing2);
        home.ing2 = ing2;
      });

     var bath;
     loader.load("scripts/lar-models/bath.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        bath = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(bath);
        home.bath = bath;
      });

     var bed1;
     loader.load("scripts/lar-models/bed1.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        bed1 = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(bed1);
        home.bed1 = bed1;
      });

     var bed2;
     loader.load("scripts/lar-models/bed2.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        bed2 = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(bed2);
        home.bed2 = bed2;
      });

     var bed3;
     loader.load("scripts/lar-models/bed3.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        bed3 = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(bed3);
        home.bed3 = bed3;
      });

     var kit;
     loader.load("scripts/lar-models/kitchen.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        kit = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(kit);
        home.kit = kit;
      });

     var sal;
     loader.load("scripts/lar-models/saloon.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        sal = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(sal);
        home.sal = sal;
      });

     var bal;
     loader.load("scripts/lar-models/balcone.obj", function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})

        bal = new THREE.Mesh(obj.children[0].geometry, material);
        home.add(bal);
        home.bal = bal;
      });
      home.rotation.x = -Math.PI/2;
      home.rotation.z = Math.PI/2;
      home.position.set(9,0,11);

      var walls = load_walls();
      var floors = load_floors();
      
      
      
      floors.position.set(11,9,0);
      floors.rotation.x = Math.PI/2;
      floors.rotation.y = -Math.PI/2;
      walls.rotation.x = Math.PI/2;
      walls.rotation.y = -Math.PI/2;
      walls.position.set(11,9,0);
      home.scale.set(sx,sy,sz);
      home.walls = walls;

      home.add(walls);
      home.add(floors);
      home.position.set(home.position.x * sx,home.position.y,home.position.z*sz);
      var arredo = new THREE.Object3D();
      arredo = load_accessory(1,1,1);
      arredo.position.set(11,9,0);
      arredo.rotation.x = Math.PI/2;
      arredo.rotation.y = -Math.PI/2;
      home.arredo = arredo;
      home.add(arredo);
      
    return home;
 };

 
