'''
Created on 11/apr/2014

@author: Manuel
'''
from pyplasm import *
import lar2psm
from lar2psm import *

import simplexn
from simplexn import *

import larcc
from larcc import *

import largrid
from largrid import *

import boolean2
from boolean2 import *

import exercise2
from exercise2 import *

#definizione della griglia del vicinato
grid1 = COLOR(colors(137,83,52))(CUBOID([30,30,0.2]))
grid2 = T(2)(34)(grid1)
grid3 = T(2)(34)(grid2)
grid4 = T(1)(34)(grid1)
grid5 = T(1)(34)(grid2)
grid6 = T(1)(34)(grid3)
grid7 = T(1)(34)(grid4)
grid8 = T(1)(34)(grid5)
grid8 = COLOR(colors(2,81,22))(grid8)
grid9 = T(1)(34)(grid6)

#definizione strisce pedonali:
stripe = COLOR(WHITE)(CUBOID([0.5,4,0.01]))
stripe = T(3)(0.2)(stripe)
stripe = T([1,2])([64,47])(stripe)
stripe2 = T(1)(1)(stripe)
stripe3 = T(1)(1)(stripe2)
stripe4 = T(1)(1)(stripe3)
stripes = STRUCT([stripe,stripe2,stripe3,stripe4])

#definizione delle strade intorno al monumento:
street = COLOR(BLACK)(CUBOID([4,98,0.2]))
street1 = T(1)(30)(street)
street2 = T(1)(34)(street1)
street3 = COLOR(BLACK)(CUBOID([98,4,0.2]))
street3 = T(2)(30)(street3)
street4 = T(2)(34)(street3)

m3D = TOP([grid5, model3D])


#definizione di un palazzo visto a lezione:
v = [[3,3],[6,3],[13,3],[9,5],[12,5],[13,5],[15,5],[3,7],[6,7],[3,10],[5,10],[9,10],[9,11],[12,11],[15,11],[3,12],[5,12]]
cv = [[9,10,16,15,9],[0,1,8,7,0],[1,2,5,4,3,11,10,9,7,8,1],[3,4,13,12,11,3],[4,5,6,14,13,4]]

model = MKPOLS((v,cv))
def face2edge (fv):
    edges = AA(sorted)(CAT([TRANS([face[:-1],face[1:]])for face in fv]))
    edges = AA(eval)(set(AA(str)(edges)))
    return edges 

ev = face2edge(cv)
modelEdges = (v,ev)
modelFaces = (v,cv)
V1 = AA(LIST)([0.,6.,12.,18.,24.])
C0V = AA(LIST)(range(5))
C1V = [[0,1],[1,2],[2,3],[3,4]]
modelWall = V1,C1V

modelFloor1 = (V1,C0V)
mod2D = larModelProduct([modelFaces,modelFloor1])
mod1D = larModelProduct([modelEdges,modelFloor1])
mod11D = larModelProduct([modelEdges,modelWall])

palace1 = STRUCT(AA(COLOR(colors(219,214,208)))(MKPOLS(mod11D))+ AA(COLOR(colors(216,131,82)))(MKPOLS(mod2D))+AA(COLOR(colors(216,131,82)))(MKPOLS(mod1D)))

palace1 = TOP([grid1,palace1])

#definizione di un secondo palazzo: 
v2 = [[4,2],[26,2],[12,6],[22,6],[26,6],[22,10],[26,10],[4,14],[12,14],[20,14],[26,14],[12,18],[20,18]]
cv2 = [[2,3,6,10,9,2],[8,2,9,12,11,8]]
model2 = MKPOLS((v2,cv2))
ev = face2edge(cv2)
medges = (v2,ev)
mfaces = (v2,cv2)
V1 = AA(LIST)([0.,4.,8.,12.,16,20.,24.,28.,32.])
C0V = AA(LIST)(range(9))
C1V = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]
mwall = V1,C1V
mfloor = V1,C0V
mod2D = larModelProduct([mfaces,mfloor])
mod1D = larModelProduct([medges,mfloor])
modf = larModelProduct([medges,mwall])
palace2 = STRUCT(AA(COLOR(colors(219,214,208)))(MKPOLS(modf))+ AA(COLOR(colors(216,131,82)))(MKPOLS(mod2D))+AA(COLOR(colors(216,131,82)))(MKPOLS(mod1D)))
palace2 = TOP([grid9,palace2])

#definizione di un terzo palazzo:
v3 = [[2,2],[14,2],[22,2],[2,14],[14,14],[14,22],[22,22]]
cv3 = [[0,1,4,3,0],[1,4,5,6,2,1]]
model3 = MKPOLS((v3,cv3))
ev = face2edge(cv3)
medges3 = (v3,ev)
mfaces3 = (v3,cv3)
V1 = AA(LIST)([0.,9.,18.])
C0V3 = AA(LIST)(range(3))
C3V = [[0,1],[1,2]]
mwall3 = V1,C3V
mfloor3 = V1,C0V3
mod2D = larModelProduct([mfaces3,mfloor3])
mod1D = larModelProduct([medges3,mfloor3])
modf = larModelProduct([medges3,mwall3])
palace3 = STRUCT(AA(COLOR(colors(219,214,208)))(MKPOLS(modf))+ AA(COLOR(colors(216,131,82)))(MKPOLS(mod2D))+AA(COLOR(colors(216,131,82)))(MKPOLS(mod1D)))
palace3 = TOP([grid3,palace3])

neighborood = STRUCT([palace1,grid2,palace3,grid4,m3D,grid6,grid7,grid8,palace2,street1,street2,street3,street4,stripes])

#VIEW(neighborood)