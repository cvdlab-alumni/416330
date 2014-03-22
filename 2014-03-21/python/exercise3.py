'''
Created on 22/mar/2014

@author: Manuel
'''
import exercise1 as structure

import exercise2 as model3D

from pyplasm import *

#definizione della base del tetto e' formata da 3 cuboidi:
tetto1 = CUBOID([20.5,11.85])
tetto1 = PROD([tetto1,Q(0.5)])
tetto1 = T([2,1])([0.8125,0.75])(tetto1)
tetto1 = T(3)(12.5)(tetto1)
tetto1 = COLOR(structure.colors(224,224,224))(tetto1)

tetto2 = CUBOID([21,12.35])
tetto2 = PROD([tetto2,Q(0.1)])
tetto2 = T([2,1])([0.45,0.4])(tetto2)
tetto2 = T(3)(13.0)(tetto2)
tetto2 = COLOR(structure.colors(158, 148, 136))(tetto2)

tetto3 = T(3)(0.6)(tetto1)

#questo per fare in modo di avere una struttura a "base di piramide rovesciata" come piano dove andra' a poggiare il tetto
tetto4 = CUBOID([22.0,13.35])
tetto4 = PROD([tetto4,Q(0.1)])
tetto4 = T([2,1])([-0.05,0.0])(tetto4)
tetto4 = T(3)(14.0)(tetto4)
tetto5 = T(3)(0.5)(tetto2)
tetto6 = JOIN([tetto5,tetto4])
tetto6 = COLOR(structure.colors(158, 148, 136))(tetto6)

#creazione del tetto a doppia piramide:
vertici = [(0.0,0.0),(0.0,9.5),(2.0,4.75)]
celle = [[1,2,3]]
triangolo = MKPOL([vertici,celle,None])
triangolo = PROD([triangolo,Q(20.0)])
triangolo = R([1,3])(PI/2)(triangolo)
tetto7 = T(1)(19.2)(triangolo)
tetto7 = T([2,1])([1.95,1.75])(tetto7)
tetto7 = T(3)(14.1)(tetto7)
tetto7 = COLOR(structure.colors(224,224,224))(tetto7)
vertici2 = [(0.0,-2.0),(0.0,11.5),(4.0,4.75)]
triangolo2 = MKPOL([vertici2,celle,None])
triangolo2 = PROD([triangolo2,Q(22)])
triangoloapp = PROD([MKPOL([vertici,celle,None]),Q(22)])
triangolo2 = DIFF([triangolo2,triangoloapp])
triangolo2 = R([1,3])(PI/2)(triangolo2)
tetto8 = T(1)(20.2)(triangolo2)
tetto8 = T([2,1])([1.92,1.75])(tetto8)
tetto8 = T(3)(14.1)(tetto8)
tetto8 = COLOR(structure.colors(127,51,0))(tetto8)

#creazione del modello solido:
solid_model_3D = STRUCT([model3D.mock_up_3D,tetto6, tetto1, tetto2, tetto8, tetto3, tetto8, tetto7])
VIEW(solid_model_3D)

