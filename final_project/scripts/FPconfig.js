 var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;


      if ( havePointerLock ) {
        var element = document.body;
        var pointerlockchange = function ( event ) {

          if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
            controls.enabled = true;
            controls.getObject().position.set(0, 0, 0);
            
          } else {
            controls.enabled = false;
            
          }
        }

        var pointerlockerror = function ( event ) {
          instructions.style.display = '';
        }

        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

        
      } else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
      }

     
      var sphere;
      
 var startFP = function () 
      {
        FPdisabled = false;
        trackballControls.reset();

        scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
        var sphereGeometry = new THREE.SphereGeometry(0.02,10,10);
        var sphereMaterial = new THREE.MeshBasicMaterial({color:0xff00ff});
        sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

        var mirGeometry = new THREE.PlaneGeometry(0.04,0.001);
        var mirMaterial = new THREE.MeshBasicMaterial({color:0xff00ff});
        var mir1 = new THREE.Mesh(mirGeometry,mirMaterial);
        var mir2Geometry = new THREE.PlaneGeometry(0.001,0.04);
        var mir2 = new THREE.Mesh(mir2Geometry,mirMaterial);
        var mirino = new THREE.Object3D();
        mirino.add(mir1);
        mirino.add(mir2);
        mirino.position.set(0,0,-2);
        camera.add(mirino);

        
        sphere.position.set(0,0,-2);
     //   camera.add(sphere);
        camera.position.set(0,0,0);
        
        controls = new THREE.PointerLockControls( camera );
        scene.add( controls.getObject() );

       element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
       if (/Firefox/i.test(navigator.userAgent)) {
              var fullscreenchange = function(event) {
                if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
                  document.removeEventListener('fullscreenchange', fullscreenchange);
                  document.removeEventListener('mozfullscreenchange', fullscreenchange);
                  element.requestPointerLock();
                }
              }
      document.addEventListener('fullscreenchange', fullscreenchange, false);
      document.addEventListener('mozfullscreenchange', fullscreenchange, false);
      element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      element.requestPointerLock();
    }
    home.scale.set(5,5,5);
    home.position.x += 30;
    home.position.y += 5;
        
        
}

function animate() {
        requestAnimationFrame( animate );
        
        controls.update();
      }