function load_accessory(sx,sy,sz)
 {
      var bed_door = create_door(1.95*sx,0.25*sy,1.0*sz,"door.jpg","door_bump.jpg","door_cardin.jpg","door_retro.jpg","door_retro_bump.jpg",true);
      var bed_door_position = new THREE.Object3D();
      bed_door_position.position.set(4.0*sx,0.15*sy,5.5*sz);
      bed_door.rotation.z = -Math.PI/2;
      bed_door_position.add(bed_door);

      

      var door_kit = create_door(1.95*sx,0.25*sy,0.6*sz,"door_kit_intern.jpg","door_kit_intern_bump.jpg","door_kit_cardin.jpg","door_kit_intern_retro.jpg","door_kit_intern_retro_bump.jpg",false);
      var door_kit_position = new THREE.Object3D();
      door_kit_position.position.set(3.2*sx,0.15*sy,9*sz);
      door_kit.rotation.x = -Math.PI/2;
      door_kit_position.add(door_kit);
    

      var bed2_door = create_door(1.95*sx,0.25*sy,0.7*sz,"door.jpg","door_bump.jpg","door_cardin.jpg","door_retro.jpg","door_retro_bump.jpg",true);
      var bed2_door_position = new THREE.Object3D();
      bed2_door_position.position.set(4.0*sx,0.15*sy,8.2*sz);
      bed2_door.rotation.z = -Math.PI/2;
      bed2_door_position.add(bed2_door);

      var bed2_bal_door = create_door(2.45*sx,0.25*sy,0.8*sz,"bed_bal_door_intern_retro.jpg","bed_bal_door_intern_retro_bump.jpg","bed_bal_door_cardin.jpg","bed_bal_door_intern.jpg","bed_bal_door_intern_bump.jpg",true);
      var bed2_bal_door_position = new THREE.Object3D();
      bed2_bal_door_position.position.set(7.9*sx,0.15*sy,4.6*sz);
      bed2_bal_door.rotation.z = -Math.PI/2;
      bed2_bal_door_position.add(bed2_bal_door);

      var bath_door = create_door(1.95*sx,0.25*sy,1.0*sz,"bath_door.jpg","bath_door_bump.jpg","bath_door_cardin.jpg","bath_door_retro.jpg","bath_door_retro_bump.jpg",false);
      var bath_door_position = new THREE.Object3D();
      bath_door_position.position.set(3.0*sx,0.15*sy,7.5*sz);
      bath_door.rotation.z = -Math.PI/2;
      bath_door_position.add(bath_door);
     

      var bed3_door = create_door(1.95*sx,0.25*sy,1.0*sz,"bed3_door.jpg","bed3_door_bump.jpg","bed3_door_cardin.jpg","bed3_door_retro.jpg","bed3_door_retro_bump.jpg",false);
      var bed3_door_position = new THREE.Object3D();
      bed3_door_position.position.set(3.0*sx,0.15*sy,5.5*sz);
      bed3_door.rotation.z = -Math.PI/2;
      bed3_door_position.add(bed3_door);
     

      var ing_door = create_door(1.95*sx,0.25*sy,0.6*sz,"door_ing.jpg","door_ing_bump.jpg","door_ing_cardin.jpg","door_ing_retro.jpg","door_ing_retro_bump.jpg",false);
      var ing_door_position = new THREE.Object3D();
      ing_door_position.position.set(3.2*sx,0.15*sy,5.0*sz);
      ing_door.rotation.x = -Math.PI/2;
      ing_door_position.add(ing_door);
  

      var ing2_door = create_door(1.95*sx,0.25*sy,1.0*sz,"ing2_door.jpg","ing2_door_bump.jpg","ing2_door_cardin.jpg","ing2_door_retro.jpg","ing2_door_retro_bump.jpg",true);
      var ing2_door_position = new THREE.Object3D();
      ing2_door_position.position.set(4.0*sx,0.15*sy,2.5*sz);
      ing2_door.rotation.z = -Math.PI/2;
      ing2_door_position.add(ing2_door);

      var home_door = create_door(1.95*sx,0.25*sy,1.0*sz,"home_door.jpg","home_door_bump.jpg","home_door_cardin.jpg","home_door_retro.jpg","home_door_retro_bump.jpg",true);
      var home_door_position = new THREE.Object3D();
      home_door_position.position.set(1.1*sx,0.15*sy,3.05*sz);
      home_door.rotation.z = -Math.PI/2;
      home_door_position.add(home_door);


      var interruttore_salone = create_interructor(sx/2,sy/2,sz/2);
      interruttore_salone.rotation.y = Math.PI/2;
      interruttore_salone.position.set(4.105*sx,1*sy,2*sz);
      interruttore_salone.light.position.set(0*sx,2*sy,2.5*sz);

      var interruttore_ing1 = create_interructor(sx/2,sy/2,sz/2);
      interruttore_ing1.rotation.y = Math.PI/2;
      interruttore_ing1.position.set(1.205*sx,1*sy,4.5*sz);
      interruttore_ing1.light.position.set(0.8*sx,2*sy,1.5*sz);
      interruttore_ing1.light.angle = 400;

      var interruttore_ing2 = create_interructor(sx/2,sy/2,sz/2);
      interruttore_ing2.rotation.y = Math.PI/2;
      interruttore_ing2.position.set(3.105*sx,1*sy,7*sz);
      interruttore_ing2.light.position.set(0*sx,2*sy,0.4*sz);
      interruttore_ing2.light.angle = 100;

      var interruttore_bed1 = create_interructor(sx/2,sy/2,sz/2);
      interruttore_bed1.rotation.y = Math.PI/2;
      interruttore_bed1.position.set(4.105*sx,1*sy,10*sz);
      interruttore_bed1.light.position.set(0.5*sx,2*sy,2*sz);

      var interruttore_bed2 = create_interructor(sx/2,sy/2,sz/2);
      interruttore_bed2.rotation.y = Math.PI/2;
      interruttore_bed2.position.set(4.105*sx,1.5*sy,5*sz);
      interruttore_bed2.light.position.set(-1*sx,1.5*sy,2*sz);

      var interruttore_bed3 = create_interructor(sx/2,sy/2,sz/2);
      interruttore_bed3.position.set(2*sx,1*sy,5.105*sz);
      interruttore_bed3.light.position.set(-0.5*sx,2*sy,1*sz);
      interruttore_bed3.light.angle = 400;

      var interruttore_bath = create_interructor(sx/2,sy/2,sz/2);
      interruttore_bath.position.set(2.5*sx,1*sy,7.105*sz);
      interruttore_bath.light.position.set(-0.5*sz,2*sy,1*sz);
      interruttore_bath.light.angle = 400;

      var interruttore_kit = create_interructor(sx/2,sy/2,sz/2);
      interruttore_kit.rotation.y = -Math.PI/2;
      interruttore_kit.position.set(3.895*sx,1*sy,10*sz);
      interruttore_kit.light.position.set(0*sx,2*sy,1.5*sz);


    var wardrobe = create_wardrobe(sx,sy,sz,2.6*sy,0.4*sz,3*sx,"wardrobe_left.jpg","wardrobe_right.jpg","wardrobe.jpg");
    wardrobe.rotation.y = -Math.PI/2;
    wardrobe.position.set(7*sx,1.45*sy,7.695*sz);

    var w_machine = load_model("/washing_machine/dryer_machine",0.01*sx,0.01*sy,0.01*sz);
    w_machine.position.set(1.7*sx,0.45*sy,7.2*sz);

    var table = load_model("/table/Table",4*sx,2.5*sy,4*sz);
    table.position.set(6.5*sx,0.3*sy,1*sz);


    var shower = load_model("/shower/bath",0.3*sx,0.4*sy,0.2*sz);
    shower.position.set(2*sx,1.3*sy,8.65*sz);


    var laptop = load_model("/laptop/apple-ibook-2001",0.5*sx,0.5*sy,0.5*sz);
    laptop.position.set(5.5*sx,0.82*sy,7.65*sz);
    laptop.rotation.y = Math.PI;

    var chair = load_model("/chair/officeChair2",0.01*sx,0.01*sy,0.01*sz);
    chair.position.set(5.3*sx,0.15*sy,6.8*sz);


    var tv = load_model("/tv/tv",0.3*sx,0.3*sy,0.3*sz);
    tv.rotation.y = Math.PI/2;
    tv.position.set(6.5*sx,0.98*sy,0.9*sz);

    	// create the video element
var	video = document.createElement( 'video' );
	video.src = "scripts/videos/transformers4trailer.ogv";
	video.load(); 
//	video.play();
    var videotexture = new THREE.Texture(video);
    videotexture.minFilter = THREE.LinearFilter;
    videotexture.magFilter = THREE.LinearFilter;
    videotexture.format = THREE.RGBFormat;
    videotexture.generateMipmaps = false;
  
  var movieMaterial = new THREE.MeshBasicMaterial( { map: videotexture} );
  var movieGeometry = new THREE.PlaneGeometry( 1.4, 0.73, 4, 4 );
  var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
  movieScreen.position.set(6.5*sx,1.03*sy,0.94*sz);
  movieScreen.isOn = false;
  movieScreen.video = video;
  movieScreen.visible = false;
  movieScreen.interact = function()
  { console.log("tv");
    if (this.isOn)
    {
      this.visible = false;
      this.video.pause();
      this.video.currentTime = 0;
      this.isOn = false;
    }
    else
    {
      this.visible = true;
      this.video.play();
      this.isOn = true;
    }
  }
  oggetti.push(movieScreen);
 

    var wc = load_model("/wc/wc",0.15*sx,0.2*sy,0.2*sz);
    wc.rotation.y = -Math.PI/2;
    wc.position.set(2.9*sx,0.1*sy,7.2*sz);

    var sofa = load_model("/sofa/largeCouch",0.3*sx,0.3*sy,0.3*sz);
    sofa.rotation.y = Math.PI;
    sofa.position.set(6*sx,0.45*sy,8.895*sz);
    
    var bed = load_model("/bed/bed",1.15*sx,1*sy,1*sz);
    bed.position.set(5.2*sx,0.6*sy,4.8*sz);
    bed.rotation.y = Math.PI;

    var bed2 = load_model("/bed2/bunkBed",0.01*sx,0.01*sy,0.01*sz);
    bed2.position.set(2.8*sx,0.15*sy,10.795*sz);
    bed2.rotation.y = Math.PI;

    var cdrack = load_model("/cdrack/CDrack",0.02*sx,0.02*sy,0.02*sz);  
    cdrack.position.set(0.5*sx,0.15*sy,5.105*sz);  

    var cook = load_model("/cooker/stove1",0.1*sx,0.1*sy,0.1*sz);
    cook.position.set(3*sx,0.65*sy,9.405*sz);

    var plant = load_model("/plant/littlePlant",0.02*sx,0.02*sy,0.02*sz);
    plant.position.set(8.5*sx,0.15*sy,7*sz);

    var freezer = load_model("/refridgerator/refridgerator",sx,sy,sz);
    freezer.position.set(2.2*sx,0.5*sy,10.795);
    freezer.rotation.y = Math.PI;
    
     
    var lamp = create_lamp(0.03,0.03,0.03);



    var window_sala = createWindow(1.75*sx,0.25*sy,1.35*sz,"door_cardin.jpg",true);
    var w_sala_position = new  THREE.Object3D();
    w_sala_position.position.set(8.9*sx,2.4*sy,2.1*sz);
    w_sala_position.add(window_sala);

    var window_bed1 = createWindow(1.1*sx,0.25*sy,1.5*sz,"door_cardin.jpg",true);
    var w_bed1_position = new THREE.Object3D();
    w_bed1_position.position.set(7.9*sx,2.6*sy,9.5*sz);
    w_bed1_position.add(window_bed1);

    var window_bed2 = createWindow(1.2*sx,0.25*sy,1.5*sz,"door_cardin.jpg",true);
    var w_bed2_position = new THREE.Object3D();
    w_bed2_position.position.set(7.9*sx,2.6*sy,6.45*sz);
    w_bed2_position.add(window_bed2);

    var window_bed3 = createWindow(0.4*sx,0.25*sy,1*sz,"door_cardin.jpg",false);
    var w_bed3_position = new THREE.Object3D();
    w_bed3_position.position.set(0.1*sx,2.1*sy,6*sz);
    w_bed3_position.add(window_bed3);


    var window_bath = createWindow(0.8*sx,0.25*sy,1*sz,"door_cardin.jpg",false);
    var w_bath_position = new THREE.Object3D();
    w_bath_position.position.set(1.1*sx,2.1*sy,8*sz);
    w_bath_position.add(window_bath);
    

    var window_kitchen = createWindow(0.8*sx,0.25*sy,1*sz,"door_cardin.jpg",false);
    var w_kitchen_position = new THREE.Object3D();
    w_kitchen_position.position.set(1.1*sx,2.1*sy,10*sz);
    w_kitchen_position.add(window_kitchen);


      var frame = createPicture(0.6*sx,0.7*sy,0.01*sz,"cornice.jpg","cornice_bump.jpg",1,1);
      frame.rotation.x = Math.PI/2;
      frame.position.set(6.2*sx,1.5*sy,4.105*sz);

      var ca = create_cassettiera(0.8*sx,0.7*sy,1.5*sz,"cassetto.jpg","cassettiera.jpg");
      ca.rotation.y = -Math.PI/2;
      ca.position.set(6.75*sx,0.55*sy,10.5*sz);

      
      
      

      var mirror = createMirror(0.5*sx,0.005*sy,1*sz);
      mirror.position.set(3*sx,1.4*sy,2.205*sz);

      var arredo = new THREE.Object3D();
      arredo.bed_door = bed_door;
      arredo.door_kit = door_kit;
      arredo.bath_door = bath_door;
      arredo.bed2_door = bed2_door;
      arredo.bed3_door = bed3_door;
      arredo.ing_door = ing_door;
      arredo.ing2_door = ing2_door;
      arredo.home_door = home_door;
      arredo.interruttore_salone = interruttore_salone;
      arredo.mirror = mirror;
      arredo.add(bed2_door_position);
      arredo.add(bed2_bal_door_position);
      arredo.add(bed2);
      arredo.add(cdrack);
      arredo.add(cook);
      arredo.add(plant);
      arredo.add(freezer);

      arredo.add(movieScreen);
      arredo.videoTexture = videotexture;
      arredo.movieScreen = movieScreen;

      arredo.add(frame);
      arredo.add(ca);
      arredo.add(mirror);
      arredo.add(lamp);

      arredo.add(w_machine);
      arredo.add(bed);
      arredo.add(wc);
      arredo.add(table);
      arredo.add(tv);
      arredo.add(shower);
      arredo.add(sofa);
      arredo.add(chair);
      arredo.add(laptop);
      arredo.add(interruttore_salone);
      arredo.add(interruttore_ing1);
      arredo.add(interruttore_ing2);
      arredo.add(interruttore_bed2);
      arredo.add(interruttore_bed1);
      arredo.add(interruttore_bed3);
      arredo.add(interruttore_bath);
      arredo.add(interruttore_kit);
      arredo.add(wardrobe);
      arredo.add(w_kitchen_position);
      arredo.add(w_bath_position);
      arredo.add(w_sala_position);
      arredo.add(w_bed1_position);
      arredo.add(w_bed2_position);
      arredo.add(w_bed3_position);
      arredo.add(bath_door_position);
      arredo.add(home_door_position);
      arredo.add(ing_door_position);
      arredo.add(bed_door_position);
      arredo.add(ing2_door_position);
      arredo.add(bed3_door_position);
      arredo.add(door_kit_position);
      return arredo;
 }

 



 function load_model(model,sx,sy,sz)
 {
   var loader = new THREE.OBJMTLLoader();
   var oggetto = new THREE.Object3D();
   loader.addEventListener('load', function (event) {
   var object = event.content;
   object.scale.set(sx, sy, sz);
   oggetto.add(object); 
      
  });
 loader.load('scripts/models/'+model+'.obj', 'scripts/models/'+model+'.mtl', {side: THREE.DoubleSide});
 return oggetto;
 }

function load_model_nomaterial(model,sx,sy,sz,color)
{
  var loader = new THREE.OBJLoader();
  var object = new THREE.Object3D();
  loader.load("scripts/models/"+model+".obj", function (obj) {
  global_o = obj;
  var material = new THREE.MeshLambertMaterial({color: color, side: THREE.DoubleSide});
  var o = new THREE.Mesh(obj.children[0].geometry, material);
  o.scale.set(sx,sy,sz);
    
  object.add(o);
});
  return object;
}
  