var oggetti = new Array();

function create_door(hight,width,length,image,bump,border,imageRetro,bumpRetro,opener)
{
	    var l_cardini = length / 10;
      var h_door = hight - l_cardini;
      var w_door =  width/5;
      var h_cardin = hight - l_cardini;
      var l_door = length - (2*l_cardini);
	    var doorGeometry = new THREE.BoxGeometry(l_door,h_door,w_door);
	    var cardinGeometry = new THREE.BoxGeometry(l_cardini,width,h_cardin);
      var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ border);
	    var cardinMaterial = new THREE.MeshPhongMaterial({map: texture});
      var doorMaterial = new THREE.MeshLambertMaterial({color: 0xff00ff});
      var intern = createMesh(doorGeometry,image,bump,border,imageRetro,bumpRetro);
      intern.rotation.x = Math.PI/2;
      var cardin1 = new THREE.Mesh(cardinGeometry,cardinMaterial);
      cardin1.position.set (l_cardini/2,0,-l_cardini/2);
      var cardin2 = new THREE.Mesh(cardinGeometry,cardinMaterial);
      cardin2.position.set(length-l_cardini/2,0,-l_cardini/2);
      var cardin3Geometry = new THREE.BoxGeometry(l_cardini,width,length);
      var cardin3 = new THREE.Mesh(cardin3Geometry,cardinMaterial);
      cardin3.rotation.y = Math.PI/2;
      cardin3.position.set(length/2,0,h_door/2);
      var door = new THREE.Object3D();
      door.position.y = hight/2;
      door.rotation.x = -Math.PI/2;
      door.add(cardin1);
      door.add(cardin2);
      door.add(cardin3);


      var pivot = new THREE.Object3D();
      pivot.add(intern);
      pivot.position.set(l_cardini,0,0);
      intern.position.x = intern.position.x + l_door/2;
      door.add(pivot);
      intern.pivot = pivot;
      door.intern = intern;
      oggetti.push(intern);
      intern.isclosed = true;

      intern.position.z = intern.position.z -l_cardini/2;
      if(opener)
      {
        intern.tweenOpen = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:Math.PI/2,y:0},2000).easing(TWEEN.Easing.Bounce.Out);
        intern.tweenClose = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:0,y:0},1000);
      }
      else
      {
        intern.tweenOpen = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:-Math.PI/2,y:0},2000).easing(TWEEN.Easing.Bounce.Out);
        intern.tweenClose = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:0,y:0},1000);
      }
      intern.interact = function(){
        if (this.isclosed)
        { this.tweenOpen.start();
          this.isclosed = false;
        }
        else
        {
          this.tweenClose.start();
          this.isclosed = true;
        }
      }
      function createMesh(geom, imageFile, bump,imgborder,imageRetro,bumpRetro) {
        var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + imageFile);
        var textureRetro = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ imageRetro);
        var texborder = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+imgborder);
            geom.computeVertexNormals();
             var materialArray = [];
              materialArray.push(new THREE.MeshPhongMaterial({ map: texborder }));
              materialArray.push(new THREE.MeshPhongMaterial({ map: texture }));

              materialArray.push(new THREE.MeshPhongMaterial({ map: texborder }));
              materialArray.push(new THREE.MeshPhongMaterial({ map: texborder }));
              
              materialArray.push(new THREE.MeshPhongMaterial({ map: texture }));
              materialArray.push(new THREE.MeshPhongMaterial({ map: textureRetro }));
              materialArray.push(new THREE.MeshPhongMaterial({ map: texborder }));

            if (bump) {
                var bump = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + bump);
                var bumpRetro = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ bumpRetro);
                materialArray[4].bumpMap = bump;
                materialArray[4].bumpScale = 0.1;
                materialArray[5].bumpMap = bumpRetro;
                materialArray[5].bumpScale = 0.1;
            }
            var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
            
            var picture = new THREE.Mesh(geom, faceMaterial);
            return picture;
      }
      door.position.set(0,hight/2,0);
      return door;
}

function createMesh(geom, imageFile, bump,repx,repy) {
        var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + imageFile)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( repx, repy );
        texture.needsUpdate = true;
            geom.computeVertexNormals();
             var materialArray = [];
              materialArray.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));
              materialArray.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));

              materialArray.push(new THREE.MeshPhongMaterial({ map: texture }));
              materialArray.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));
              materialArray.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));
              
              materialArray.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));

            if (bump) {
                var bump = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + bump)
                bump.wrapS = bump.wrapT = THREE.RepeatWrapping; 
                bump.repeat.set( repx, repy );
                bump.needsUpdate = true;
                materialArray[2].bumpMap = bump;
                materialArray[2].bumpScale = 0.1;
            }
            var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
           
            var picture = new THREE.Mesh(geom, faceMaterial);
            return picture;
      }

function createPicture(l,w,h,texture,bump,repx,repy){
      var frame = createMesh(new THREE.BoxGeometry(l,h,w), texture,bump,repx,repy);
      return frame;
    }

function createWindow(hight,width,length,texture_infix,opener)
{

    var l_cardini = length / 10;
    var h_window = hight - (hight/10);
    var w_window =  width/5;
    var l_window = length - (2*l_cardini);
    var windowGeometry = new THREE.BoxGeometry(l_window,hight,w_window);
    var cardinGeometry = new THREE.BoxGeometry(l_cardini,width,hight);
    var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ texture_infix);
    var cardinMaterial = new THREE.MeshPhongMaterial({map: texture});
    var windowMaterial = new THREE.MeshLambertMaterial({color: 0xffffff,opacity: 0.3,transparent: true});
    var intern = new THREE.Mesh(windowGeometry,windowMaterial);
    intern.rotation.x = Math.PI/2;
    var cardin1 = new THREE.Mesh(cardinGeometry,cardinMaterial);
    cardin1.position.set (l_cardini/2,0,0);
    var cardin2 = new THREE.Mesh(cardinGeometry,cardinMaterial);
    cardin2.position.set(length-l_cardini/2,0,0);
    var cardin3Geometry = new THREE.BoxGeometry(l_cardini,width,length);
    var cardin3 = new THREE.Mesh(cardin3Geometry,cardinMaterial);
    cardin3.rotation.y = Math.PI/2;
    cardin3.position.set(length/2,0,hight/2+l_cardini/2);
    var cardin4 = new THREE.Mesh(cardin3Geometry,cardinMaterial);
    cardin4.rotation.y = Math.PI/2;
    cardin4.position.set(length/2,0,-(hight/2+l_cardini/2));
    var window1 = new THREE.Object3D();
 
    window1.rotation.y = Math.PI;

    window1.rotation.z = Math.PI/2;
    window1.position.y = -length/2;

    window1.add(cardin1);
    window1.add(cardin2);
    window1.add(cardin3);
    window1.add(cardin4);
    window1.add(intern);
    intern.position.x = intern.position.x + l_cardini;

    var pivot = new THREE.Object3D();
      
      
     pivot.add(window1);
     intern.pivot=pivot;
     window1.position.set(0,-length,0);
     intern.position.x = intern.position.x + l_window/2;
   var w = new THREE.Object3D();
   w.add(pivot);
   w.intern = intern;
      intern.isclosed = true;
      if(opener)
      {
        intern.tweenOpen = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:-Math.PI/6,y:0},2000).easing(TWEEN.Easing.Back.In);
        intern.tweenClose = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:0,y:0},1000);
      }
      else
      {
        intern.tweenOpen = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:+Math.PI/6,y:0},2000).easing(TWEEN.Easing.Back.In);
        intern.tweenClose = new TWEEN.Tween(intern.pivot.rotation).to({x:0,z:0,y:0},1000);
      }
      intern.interact = function()
      {
        if (this.isclosed)
        {
          this.tweenOpen.start();
          this.isclosed = false;
        }
        else
        {
          this.tweenClose.start();
          this.isclosed = true;
        }
      }
      oggetti.push(intern);
      return w;
}
     

function create_interructor(sx,sy,sz)
{
  var baseGeometry = new THREE.BoxGeometry(0.3*sx,0.3*sy,0.03*sz);
  var baseMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
  var base = new THREE.Mesh(baseGeometry,baseMaterial);

  var geometry = new THREE.BoxGeometry(0.05*sx,0.1*sy,0.03*sz);
  var material = new THREE.MeshLambertMaterial({color:0x646464});
  var interruttore = new THREE.Mesh(geometry,material);
  var spotLight1 = new THREE.SpotLight(0xffffff);
  spotLight1.position.set(0,3*sy,0);
  spotLight1.intensity = 1;
  spotLight1.angle = 900;

  
  interruttore.isclosed = true;
  base.add(spotLight1);

  base.light = spotLight1;
  base.tweenOpen = new TWEEN.Tween(interruttore.rotation).to({x:Math.PI/8,z:0,y:0},500);
  base.tweenClose = new TWEEN.Tween(interruttore.rotation).to({x:-Math.PI/8,z:0,y:0},500);
  base.interact = function()
  {
    if (this.interruttore.isclosed)
    {
      this.tweenOpen.start();
      this.interruttore.isclosed = false;
      this.light.intensity = 1;
    }
    else
    {
      this.tweenClose.start();
      this.interruttore.isclosed = true;
      this.light.intensity = 0;
    }
  }
  var target = new THREE.Object3D();
  spotLight1.add(target);
  target.position.y = -3*sy;
  
  spotLight1.target = target;
  var lamp = load_model("/lamp/lamp",2*sx,2*sy,2*sz);
  lamp.rotation.x = Math.PI;
  spotLight1.add(lamp);
  interruttore.position.set(0,0,0.015*sz);
  interruttore.rotation.x = Math.PI/8;
  base.interruttore = interruttore;
  base.add(interruttore);
  oggetti.push(base)
  

  return base;
}

function create_wardrobe(sx,sy,sz,h,w,l,texture_left,texture_right,texture_wardrobe)
{
  var l_sportello = l/5;
  var h_sportello1 = h/2;
  var h_sportello2 = (h/8)*3;
  var w_sportello = w;

  var sportello1 = create_sportello(h_sportello1,w_sportello,l_sportello,true,texture_right,texture_wardrobe,true);
  sportello1.position.set(0,-h_sportello1/2,0);
  var sportello2 = create_sportello(h_sportello1,w_sportello,l_sportello,true,texture_right,texture_wardrobe,true);
  sportello2.position.set(0,+h_sportello1/2,0);
  var sportello3 = create_sportello(h_sportello1,w_sportello,l_sportello,false,texture_left,texture_wardrobe,true);
  sportello3.position.set(0,-h_sportello1/2,+l_sportello);
  var sportello4 = create_sportello(h_sportello1,w_sportello,l_sportello,false,texture_left,texture_wardrobe,true);
  sportello4.position.set(0,+h_sportello1/2,+l_sportello);
  var sportello5 = create_sportello(h_sportello2,w_sportello,l_sportello,true,texture_right,texture_wardrobe,true);
  sportello5.position.set(0,h_sportello2/2+(h/2-h_sportello2),2*l_sportello);
  var sportello6 = create_sportello(h_sportello2,w_sportello,l_sportello,false,texture_left,texture_wardrobe,true);
  sportello6.position.set(0,h_sportello2/2+(h/2-h_sportello2),3*l_sportello);
  var sportello7 = create_sportello(h_sportello2,w_sportello,l_sportello,false,texture_left,texture_wardrobe,true);
  sportello7.position.set(0,h_sportello2/2+(h/2-h_sportello2),4*l_sportello);
  var telaio = create_cassettiera(h-h_sportello2,w_sportello,l_sportello,"wardrobe_left.jpg","wardrobe.jpg");
  telaio.position.set(0,-(h-h_sportello2)/2+(h/2-h_sportello2),4*l_sportello);
  var deskGeometry = new THREE.BoxGeometry(w_sportello,h/60,2*l_sportello);
  var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ texture_wardrobe);
  var deskMaterial = new THREE.MeshPhongMaterial({map:texture});
  var desk = new THREE.Mesh(deskGeometry,deskMaterial);
  desk.position.set(0,-h/4,2.5*l_sportello);
  var library = new THREE.Mesh(deskGeometry,deskMaterial);
  library.position.set(0,0,2.5*l_sportello);

  var wardrobe = new THREE.Object3D();
  wardrobe.add(sportello1);
  wardrobe.add(sportello2);
  wardrobe.add(sportello3);
  wardrobe.add(sportello4);
  wardrobe.add(sportello5);
  wardrobe.add(sportello6);
  wardrobe.add(sportello7);
  wardrobe.add(telaio);
  wardrobe.add(desk);
  wardrobe.add(library);
 
  return wardrobe;
}

function create_sportello(h,w,l,left,texture,texture_wardrobe,bump)
{
  var width = w/10;
  var l2 = l-width;
  var boxGeometry = new THREE.BoxGeometry(width,h,l2);
  var texture_s = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + texture);
  var texture_w = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + texture_wardrobe);
  boxGeometry.computeVertexNormals();
  var materialArray = [];
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_s }));

  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));
  
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));
  materialArray.push(new THREE.MeshLambertMaterial({ map: texture_w }));

  
var faceMaterial = new THREE.MeshFaceMaterial(materialArray);

var sportello = new THREE.Mesh(boxGeometry, faceMaterial);

  var hook = new THREE.Object3D();
  var h_pos;
  sportello.r = 0;
  if(left)
  {
    h_pos = -l/2+width;
    sportello.r = -Math.PI/2;
  }
  else
  {
    h_pos = +l/2-width;
    sportello.r = +Math.PI/2;
  }

  hook.add(sportello);
  
  sportello.isOpen = false;
  sportello.hook = hook;
  sportello.tweenOpen = new TWEEN.Tween(hook.rotation).to({x:0,z:0,y:sportello.r},2000).easing(TWEEN.Easing.Exponential.InOut);
  sportello.tweenClose = new TWEEN.Tween(hook.rotation).to({x:0,z:0,y:0},1000);
  sportello.interact = function()
  {
    if(this.isOpen)
    {
      this.tweenClose.start();
      this.isOpen = false;
    }
    else
    {
      this.tweenOpen.start();
      this.isOpen = true;
    }
  }
  oggetti.push(sportello);
  var cassetto = create_cassetto(h,w,l,texture_wardrobe);
  cassetto.add(hook);

  hook.position.set(-w/2-width/2,0,h_pos);

  sportello.position.set(0,0,-h_pos);

  return cassetto;
}

function create_cassetto(h,w,l,texture)
{
  h_cassetto1 = h/100;
  h_cassetto2 = h - h/50;
  l_cassetto1 = l;
  l_cassetto2 = l/10;
  var width = w/10;
 // var boxGeometry2 = new THREE.BoxGeometry(w/2,h-2*h_cassetto1,l-2*l_cassetto2);
  var boxGeometry = new THREE.BoxGeometry(width,h,l);

//  var texture_load = THREE.ImageUtils.loadTexture("assets/textures/general/scompartimento.jpg");
 // var boxMaterial = new THREE.MeshLambertMaterial({map:texture_load});
//  var c = new THREE.Mesh(boxGeometry2,boxMaterial);
  
 
  var cassetto1Geometry = new THREE.BoxGeometry(w,h_cassetto1,l_cassetto1);
  var cassetto2Geometry = new THREE.BoxGeometry(w,h_cassetto2,l_cassetto2);
  var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ texture);
  var cassettoMaterial = new THREE.MeshPhongMaterial({map:texture});

  var c1 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  c1.position.set(0,h/2-h_cassetto1/2,0);
  var c2 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  c2.position.set(0,-h/2+h_cassetto1/2,0);
  var c3 = new THREE.Mesh(cassetto2Geometry,cassettoMaterial);
  c3.position.set(0,0,-l/2+l_cassetto2/2);
  var c4 = new THREE.Mesh(cassetto2Geometry,cassettoMaterial);
  c4.position.set(0,0,+l/2-l_cassetto2/2);
   var retro = new THREE.Mesh(boxGeometry,cassettoMaterial);
  retro.position.set(w/2-width/2,0,0);
  var cassetto = new THREE.Object3D();
  cassetto.add(c1);
  cassetto.add(c2);
  cassetto.add(c3);
  cassetto.add(c4);
  cassetto.add(retro);
//  cassetto.add(c);
  return cassetto;

}



function create_cassetto_vuoto(h,w,l,texture)
{
  h_cassetto1 = h/100;
  h_cassetto2 = h - h/50;
  l_cassetto1 = l;
  l_cassetto2 = l/10;
  var width = w/10;
  var boxGeometry = new THREE.BoxGeometry(width,h,l);
 
  var cassetto1Geometry = new THREE.BoxGeometry(w,h_cassetto1,l_cassetto1);
  var cassetto2Geometry = new THREE.BoxGeometry(w,h_cassetto2,l_cassetto2);
  var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+ texture);
  var cassettoMaterial = new THREE.MeshPhongMaterial({map:texture});

  var c1 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  c1.position.set(0,h/2-h_cassetto1/2,0);
  var c2 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  c2.position.set(0,-h/2+h_cassetto1/2,0);
  var c3 = new THREE.Mesh(cassetto2Geometry,cassettoMaterial);
  c3.position.set(0,0,-l/2+l_cassetto2/2);
  var c4 = new THREE.Mesh(cassetto2Geometry,cassettoMaterial);
  c4.position.set(0,0,+l/2-l_cassetto2/2);
   var retro = new THREE.Mesh(boxGeometry,cassettoMaterial);
  retro.position.set(w/2-width/2,0,0);
  var cassetto = new THREE.Object3D();
  cassetto.add(c1);
  cassetto.add(c2);
  cassetto.add(c3);
  cassetto.add(c4);
  cassetto.add(retro);
  return cassetto;
}

function create_cassettiera(h,w,l,texture_cassetto,texture)
{
  var telaio = create_cassetto_vuoto(h,w,l,texture);
  var c = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  var cassettiera = new THREE.Object3D();
  cassettiera.add(telaio);
  cassettiera.add(c);
  c.position.y = h/2-h/12-h/100;
  var c2 = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  cassettiera.add(c2);
  c2.position.y = h/3-h/12-h/200;
  var c3 = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  cassettiera.add(c3);
  c3.position.y = h/12;
  var c4 = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  cassettiera.add(c4);
  c4.position.y = -h/12;
  var c5 = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  cassettiera.add(c5);
  c5.position.y = -h/3+h/12+h/200;
  var c6 = create_cassetto_cassettiera(h,w,l-l/50,texture_cassetto,texture,false);
  cassettiera.add(c6);
  c6.position.y = -h/2+h/12+h/100;
  return cassettiera;
}

function create_cassetto_cassettiera(h,w,l,texture_cassetto,texture, texture_interno)
{
  var l_cassetto1 = l/100;
  var l_cassetto2 = l-l/5;
  var l_davanti = l;
  var width = w-w/10;
  var h = h/6-h/100;

  var cassetto1Geometry = new THREE.BoxGeometry(width,h,l_cassetto1);
  var cassetto2Geometry = new THREE.BoxGeometry(l_cassetto1,h,l_cassetto2);
  var cassettoDGeometry = new THREE.BoxGeometry(l_cassetto1,h,l_davanti);
  var cassettoSottoGeometry = new THREE.BoxGeometry(width,h/20,l_cassetto2);

  var texture_c = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+texture);
  var texture_d = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+texture_cassetto);
  var cassettoMaterial = new THREE.MeshPhongMaterial({map:texture_c});
  var davantiMaterial = new THREE.MeshPhongMaterial({map:texture_d});

  var c1 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  var c2 = new THREE.Mesh(cassetto1Geometry,cassettoMaterial);
  var c3 = new THREE.Mesh(cassetto2Geometry,cassettoMaterial);
  var d = new THREE.Mesh(cassettoDGeometry,davantiMaterial);
  var cs = new THREE.Mesh(cassettoSottoGeometry,cassettoMaterial);


  var cassetto = new THREE.Object3D();
  cassetto.add(c1);
  cassetto.add(c2);
  cassetto.add(c3);
  cassetto.add(d);
  cassetto.add(cs);

  d.cassetto = cassetto;

  c1.position.set(0,0,-l_cassetto2/2+l_cassetto1/2);

  c2.position.set(0,0,+l_cassetto2/2-l_cassetto1/2);
 
  c3.position.set(+width/2,0,0);
 
  d.position.set(-width/2,0,0);
  cs.position.set(0,-h/2+h/40,0);
  d.isOpen = false
  d.l = l_cassetto2;
  d.tweenOpen = new TWEEN.Tween(d.cassetto.position).to({x:-l/4},2000).easing(TWEEN.Easing.Circular.InOut);
  d.tweenClose = new TWEEN.Tween(d.cassetto.position).to({x:-w/20},1000);
  
  d.interact = function()
  {
    
    if(this.isOpen)
    {
      this.tweenClose.start();
      this.isOpen = false;
    }
    else
    {
      this.tweenOpen.start();
      this.isOpen = true;
    }
  }
  oggetti.push(d);

  cassetto.position.x -= w/20;
  return cassetto;

}

function createMirror(h,w,l)
{
  var cubeGeom = new THREE.CubeGeometry(h, l, w);
  mirrorCubeCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
  var mirrorCubeMaterial = new THREE.MeshBasicMaterial( { envMap: mirrorCubeCamera.renderTarget } );
  mirrorCube = new THREE.Mesh( cubeGeom, mirrorCubeMaterial );
  mirrorCube.add(mirrorCubeCamera);
  mirrorCube.camera = mirrorCubeCamera;
  return mirrorCube;
}