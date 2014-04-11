'''
Created on 11/apr/2014

@author: Manuel
'''
from pyplasm import *
import exercise1 
from exercise1 import *

#definizione della porta:
palo1 = CUBOID([1.5,0.75,5.37])
palo1 = T([1,2])([13.875,5.0])(palo1)
palo2 = T(2)(2.75)(palo1)
palo3 = CUBOID([1.5,3.5,0.75])
porta = STRUCT([palo1,palo2])
porta = T(3)(2.85)(porta)
porta = TOP([porta,palo3])
porta = COLOR(colors(160,160,160))(porta)

#definizione facciata ovest:
west = m2
west = PROD([west,Q(9.65)])
west = T(3)(2.85)(west)

#definizione facciata est:
east = T(2)(10.475)(west)

#definizione facciata nord:
north = m1
north = PROD([north,Q(9.65)])
north = T(3)(2.85)(north)

#definizione facciata sud:
apps1 = PROD([m4,Q(9.65)])
apps2 = PROD([m5,Q(9.65)])
apps3 = CUBOID([3.475,1.0,3.675])
apps3 = T(1)(5.0)(apps3)
apps3 = R([2,1])(-PI/2)(apps3)
apps3 = T([3,1])([5.97,15.125])(apps3)
south = INSR(SUM)([apps1,apps2,apps3])
south = T(3)(2.85)(south)

#definizione facciate messe insieme:
facciate = STRUCT([north,south,east,west])
facciate = COLOR(colors(158, 148, 136))(facciate)

#creazione del tetto a doppia piramide:
vertici = [(0.0,0.0),(0.0,9.5),(2.0,4.75)]
celle = [[1,2,3]]
triangolo = MKPOL([vertici,celle,None])
triangolo = PROD([triangolo,Q(20.0)])
triangolo = R([1,3])(PI/2)(triangolo)
tetto7 = T(1)(19.2)(triangolo)
tetto7 = T([2,1])([1.95,1.75])(tetto7)
tetto7 = T(3)(14.1)(tetto7)
tetto7 = COLOR(colors(224,224,224))(tetto7)
vertici2 = [(0.0,-2.0),(0.0,11.5),(4.0,4.75)]
triangolo2 = MKPOL([vertici2,celle,None])
triangolo2 = PROD([triangolo2,Q(22)])
triangoloapp = PROD([MKPOL([vertici,celle,None]),Q(22)])
triangolo2 = DIFF([triangolo2,triangoloapp])
triangolo2 = R([1,3])(PI/2)(triangolo2)
tetto8 = T(1)(20.2)(triangolo2)
tetto8 = T([2,1])([1.92,1.75])(tetto8)
tetto8 = T(3)(14.1)(tetto8)
tetto8 = COLOR(colors(127,51,0))(tetto8)

#creazione del modello solido:
model3D = STRUCT([facciate,horizontal3D,porta,tetto8,tetto7])

#VIEW(model3D)

