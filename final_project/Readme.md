##CG Final Project

## Manuel De Iuliis - 416330

Link to project : [project](http://reveirg89.github.io/)


##Code and folders organization:
- [index.html](https://github.com/cvdlab-cg/416330/blob/master/final_project/index.html): the main file, is used to display and initialize the project ;
- [libs](https://github.com/cvdlab-cg/416330/tree/master/final_project/scripts/assets/libs): contain all the function written by external users, specially [ParticlesEngine.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/assets/libs/ParticlesEngine.js),created by [Lee Stemkoski](http://www.adelphi.edu/~stemkoski/); 
- [textures](https://github.com/cvdlab-cg/416330/tree/master/final_project/scripts/assets/textures/general): contain all the textures used;
- [models](https://github.com/cvdlab-cg/416330/tree/master/final_project/scripts/models): contain all the external file .OBJ with .MTL, successfully imported in THREE.js. This models are taken in [site1](http://www.sweethome3d.com/freeModels.jsp) and [site2](http://archive3d.net/);
- [lar-models](https://github.com/cvdlab-cg/416330/tree/master/final_project/scripts/lar-models): contain the home's structure, developed using LAR-CC and exported in THREE.js;
- [videos](https://github.com/cvdlab-cg/416330/tree/master/final_project/scripts/videos): contain the video displayed in tv;
- [FPConfig.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/FPconfig.js): file js used to configure the first person camera with pointerlock;
- [features.jjs](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/features.js): file with all the function used to create object 3D in THREE.js, such as doors, windows, wardrobe...;
- [lamp.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/lamp.js): file with function to create lamp used in homework4;
- [load.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/load.js): file to load lar models and create an home 3D;
- [load_walls.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/load_walls.js): file to create textured walls;
- [load_floors.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/load_floors.js): file to create textured floors;
- [load_intern.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/load_intern.js): file to create and add all the object of the home;
- [particleSnow.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/particleSnow.js): file used to set particle to simulate snow;
- [utility.js](https://github.com/cvdlab-cg/416330/blob/master/final_project/scripts/utility.js): file with some utility function to create a shape and remapping a shape;


## Graphic Techniques used:
- Textures;
- Bump map;
- Trackball controls;
- Normal camera;
- First persona camera with pointerlocks;
- Importing .obj and .mtl files;
- Skysphere;
- Particles to simulate snow;
- Videotexture to show a video with sound;
- Mirror;
- Dynamic textures, to change background;
- Object picking;
- Animation using tween.js to open/close doors, windows and drawers, turn on/off lights in every room,;
- Spotlights;
- Directional lights;


## Gui Controls:
- Start first person camera;
- Change background;
- enable/disable snow effect;
- enable/disable roof;













