function assignUV( geometry ){

    geometry.computeBoundingBox();

    var max     = geometry.boundingBox.max;
    var min     = geometry.boundingBox.min;

    var offset  = new THREE.Vector2(0 - min.x, 0 - min.y);
    var range   = new THREE.Vector2(max.x - min.x, max.y - min.y);

    geometry.faceVertexUvs[0] = [];
    var faces = geometry.faces;

    for (i = 0; i < geometry.faces.length ; i++) {

      var v1 = geometry.vertices[faces[i].a];
      var v2 = geometry.vertices[faces[i].b];
      var v3 = geometry.vertices[faces[i].c];

      geometry.faceVertexUvs[0].push([
        new THREE.Vector2( ( v1.x + offset.x ) / range.x , ( v1.y + offset.y ) / range.y ),
        new THREE.Vector2( ( v2.x + offset.x ) / range.x , ( v2.y + offset.y ) / range.y ),
        new THREE.Vector2( ( v3.x + offset.x ) / range.x , ( v3.y + offset.y ) / range.y )
      ]);

    }

    geometry.uvsNeedUpdate = true;

}

function createShapeGeometry(vertex,holes,extrusion,texture,texture_bump,repx,repy)
 {
        var shape = new THREE.Shape();
        var width = 4;
        var radius =1;
        var height = 2;

        var i;
        shape.moveTo(vertex[0],vertex[1])
        for (i = 2; i < vertex.length-1; i = i+2)
        {
          shape.lineTo(vertex[i],vertex[i+1]);
        }

        var extrudeSettings = { amount: extrusion, bevelEnabled: false, bevelSegments: 0, steps: 1, bevelThickness: 0, material: 0, extrudeMaterial: 0 };
        var j;
        for (j = 0; j < holes.length; j++)
        {
          var i;
          var h = holes[j];
          var hole = new THREE.Path();
          hole.moveTo(h[0],h[1]);
          for (i =2; i < h.length-1; i = i+2)
          {
            hole.lineTo(h[i],h[i+1]);
          }
          shape.holes.push(hole);
        }
        var myGeometry = new THREE.ShapeGeometry(shape);
        var geometry = new THREE.ExtrudeGeometry( shape,extrudeSettings);
        assignUV(geometry);
        var texture = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/"+texture);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( repx, repy );
        texture.needsUpdate = true;

        var myMaterial = new THREE.MeshPhongMaterial({map:texture});
        if(texture_bump)
        {
        var bump = THREE.ImageUtils.loadTexture("scripts/assets/textures/general/" + texture_bump)
        bump.wrapS = bump.wrapT = THREE.RepeatWrapping; 
        bump.repeat.set( repx, repy );
        bump.needsUpdate = true;
        myMaterial.bumpMap = bump;
        myMaterial.bumpScale = 0.1;
      }


        

        var myMesh = new THREE.Mesh(geometry, myMaterial);
        return myMesh;
 }