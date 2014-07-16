// function to create an arm of the lamp, with relative pivot and hook:
      function arm(w,h)
      {
        var armGeometry = new THREE.CylinderGeometry(w/4,w/4,h);
        var armMaterial = new THREE.MeshLambertMaterial({color: 0xD2D2D2});
        var arm1 = new THREE.Mesh(armGeometry,armMaterial);
        arm1.position.set(-w/2,h/2+w,0);
        var arm2 = new THREE.Mesh(armGeometry,armMaterial);
        arm2.position.set(+w/2,h/2+w,0);
        var arm = new THREE.Object3D();
        arm.add(arm1);
        arm.add(arm2);
        var pivotGeometry = new THREE.SphereGeometry(w,10,10);
        var pivotMaterial = new THREE.MeshLambertMaterial({color: 0xA9A9A9});
        var pivot = new THREE.Mesh(pivotGeometry,pivotMaterial);

        pivot.add(arm);
        pivot.arm = arm;
        var hook = new THREE.Object3D();

        hook.position.set(0,(h)+w, 0);
        arm.add(hook);
        pivot.hook = hook;

        return pivot;
      }

// function to create the top of the lamp:
      function sphere(wpivot,w,angle)
      {
        var SphereGeometry = new THREE.SphereGeometry(w,10,10,angle,2*angle,angle/2,angle);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xD2D2D2});
        var sphere = new THREE.Mesh(SphereGeometry,sphereMaterial);
        sphere.position.set(0,w,0);

        var pivotGeometry = new THREE.SphereGeometry(wpivot,10,10);
        var pivotMaterial = new THREE.MeshLambertMaterial({color: 0xA9A9A9});
        var pivot = new THREE.Mesh(pivotGeometry,pivotMaterial);

        pivot.add(sphere);
        pivot.sphere = sphere;
        var hook = new THREE.Object3D();
        hook.position.set(0,-w/2,0);
        sphere.add(hook);
        pivot.hook = hook;

        return pivot;


      };

// creating a lamp:
function create_lamp(sx,sy,sz)
{
      var wbase = 2.5;
      var hbase = 1;
      var baseGeometry = new THREE.CylinderGeometry(wbase,wbase,hbase,20,20);
      var baseMaterial = new THREE.MeshLambertMaterial({color: 0xD2D2D2});
      var base = new THREE.Mesh(baseGeometry,baseMaterial);
      base.position.set(0,hbase/2,0);
      var hook = new THREE.Object3D();
      hook.position.set(0,hbase,0);
      base.add(hook);
      base.hook = hook;

      var arm1 = arm(0.5,3);
      
      base.hook.add(arm1);

      var arm2 = arm(0.5,3);
      arm1.hook.add(arm2);

      var shell = sphere(0.5,3,Math.PI);
      arm2.hook.add(shell);

      var lightGeometry = new THREE.SphereGeometry(1,10,10);
      var lightMaterial = new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xFDE910, shininess: 100, metal: true});
      var lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);

      var app = new THREE.Object3D();
      app.position.set(0,40,0);
     

// creating the light of the lamp:
      var pointColor = "#ffffff";
      var light = new THREE.SpotLight(pointColor);
      
      
      light.distance = 100;
      light.angle = 0.75;
      light.exponent = 30;
      light.intensity = 0;
      light.castShadow = true;
      
      light.shadowCameraNear = 2;
      light.shadowCameraFar = 200;
      light.shadowCameraFov = 70;
      light.shadowDarkness = 0.5;
      light.shadowMapWidth = 256;
      light.shadowMapHeight = 256;
      light.shadow;
      light.target = app;

      arm2.hook.add(app);
      lightMesh.add(light);
      shell.hook.add(lightMesh);
      base.rotation.y = Math.PI/2;
      base.scale.set(sx,sy,sz);
      base.light = light;
      base.isOn = false;
      base.interact = function()
      {
        if(this.isOn)
        {
          this.light.intensity = 0;
          this.isOn = false;
        }
        else
        {
          this.light.intensity = 1;
          this.isOn = true;
        }
      } 
      oggetti.push(base);
      base.hook.rotation.y = Math.PI;
      arm1.rotation.x = Math.PI/6;
      arm1.hook.rotation.x = -Math.PI/3;
      arm2.rotation.y = Math.PI;
      arm2.hook.rotation.x = Math.PI/2;
      base.rotation.y = -Math.PI/2;
      base.position.set(5.9,0.85,7.7);
      return base;
    }