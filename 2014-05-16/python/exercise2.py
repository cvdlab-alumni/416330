'''
Created on 16/mag/2014

@author: Manuel
'''
from exercise1 import *

def bezier(points):
    return MAP(BEZIERCURVE(points))(INTERVALS(1)(20))

def larMap(coordFuncs):
    def larMap0(domain):
        V,CV = domain
        V = TRANS(CONS(coordFuncs)(V)) 
        return V,CV
    return larMap0

def larCylinder(params):
    radius,height= params
    def larCylinder0(shape=[36,1]):
        domain = larIntervals(shape)([2*PI,1])
        V,CV = domain
        x = lambda V : [radius*COS(p[0]) for p in V]
        y = lambda V : [radius*SIN(p[0]) for p in V]
        z = lambda V : [height*p[1] for p in V]
        mapping = [x,y,z]
        model = larMap(mapping)(domain)
        return model
    return larCylinder0

def albero(r,h):
    modeltronco = larCylinder([r,h])([32,1])
    tronco = STRUCT(MKPOLS(modeltronco))
    tronco = COLOR(colors(86,34,0))(tronco)
    modelfoglie = larBall(r+1)([18,36])
    foglie = STRUCT(MKPOLS(modelfoglie))
    foglie = T(3)(h+1)(foglie)
    foglie = COLOR(colors(43,119,33))(foglie)
    return STRUCT([tronco,foglie])

#creazione del complesso di appartamenti:
home = T(3)(0.2)(home_pyplasm)
home2 = T(3)(3.1)(home)
home3 = R([2,1])(PI/2)(home)
home3 = T([2,1])([18.5,-4.8])(home3)
home4 = T(3)(3.1)(home3)
home5 = T(3)(3.1)(home2)
home6 = T(3)(3.1)(home4)
home7 = T(1)(10.8)(home)
home8 = T(3)(3.1)(home7)
home9 = T(3)(3.1)(home8)
home10 = T(3)(3.1)(home9)
home11 = T(3)(3.1)(home5)
home12 = T(3)(3.1)(home6)
home13 = T(2)(10.8)(home3)
home14 = T(3)(3.1)(home13)
home15 = T(3)(3.1)(home14)
home16 = T(3)(3.1)(home15)

#creazione alberi:
albero1 = T([1,2,3])([12,15,0.2])(albero(0.2,4))
albero2 = T(2)(5)(albero1)

#creazione del pianoterra dove sono poggiati gli appartamenti
V = [[-5,0],[-5,29.6],[22,0],[22,29.6],[0,0],[-5,4],[4,29.6],[22,9],[4,4],[0,9]]
FV = [[4,9,7,2],[5,1,6,8]]
dwelling = [V,FV]

bU = AA(SOLIDIFY)(AA(POLYLINE)(lar2polylines (dwelling)))
EV = face2edge(FV)
#creazione delle due curve
curva1 = [bezier([V[4],V[0],V[5]])]
curva2 = [bezier([V[6],V[3],V[7]])]
base = (STRUCT(MKPOLS((V,EV)) + curva1 + curva2))

#creazione di una replica del piano di sopra per creare il JOIN per dare il 3D
base_b = T(3)(0.1)(base)

#creazione dela base in 3D
base3D = COLOR(colors(32,86,37))(JOIN([base,base_b]))

#unione di tutti i vari appartamenti piu' la base per generare il complesso di appartamenti:
apartments = STRUCT([albero1,albero2,base3D,home,home2,home3,home4,home5,home6,home7,home8,home9,home10,home11,home12,home13,home14,home15,home16])
VIEW(apartments)