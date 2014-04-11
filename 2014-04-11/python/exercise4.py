'''
Created on 11/apr/2014

@author: Manuel
'''
import exercise3
from exercise3 import *

#funzioni utilita':
def larMap(coordFuncs):
    def larMap0(domain):
        V,CV = domain
        V = TRANS(CONS(coordFuncs)(V)) 
        return V,CV
    return larMap0

def larDomain(shape):
    V,CV = larSimplexGrid(shape)
    V = scalePoints(V, [1./d for d in shape])
    return V,CV

def larIntervals(shape):
    def larIntervals0(size):
        V,CV = larDomain(shape)
        V = scalePoints(V, [scaleFactor for scaleFactor in size])
        return V,CV
    return larIntervals0

def checkModel(model):
    V,CV = model; n = len(V)
    vertDict = defaultdict(list)
    for k,v in enumerate(V): vertDict[vcode(v)].append(k)
    verts = (vertDict.values())
    invertedindex = [None]*n
    for k,value in enumerate(verts):
        for i in value:
            invertedindex[i] = value[0]
    CV = [[invertedindex[v] for v in cell] for cell in CV]
    CV = [list(set(cell)) for cell in CV
          if len(set(cell))==len(cell)]
    return V, CV

def larCrown(params):
    r,R = params
    def larCrown0(shape=[24,36]):
        V,CV = larIntervals(shape)([PI,2*PI])
        V = translatePoints(V,[-PI/2,0])
        domain = V,CV
        x = lambda V : [(R + r*COS(p[0])) * COS(p[1]) for p in V]
        y = lambda V : [(R + r*COS(p[0])) * SIN(p[1]) for p in V]
        z = lambda V : [-r * SIN(p[0]) for p in V]
        return larMap([x,y,z])(domain)
    return larCrown0

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

def larSphere(radius=1):
    def larSphere0(shape=[18,36]):
        V,CV = larIntervals(shape)([PI,2*PI])
        V = translatePoints(V,[-PI/2,-PI])
        domain = V,CV
        x = lambda V : [radius*COS(p[0])*SIN(p[1]) for p in V]
        y = lambda V : [radius*COS(p[0])*COS(p[1]) for p in V]
        z = lambda V : [radius*SIN(p[0]) for p in V]
        return larMap([x,y,z])(domain)
    return larSphere0

def larBall(radius=1):
    def larBall0(shape=[18,36]):
        V,CV = checkModel(larSphere(radius)(shape))
        return V,[range(len(V))]
    return larBall0

def larRod(params):
    radius,height= params
    def larRod0(shape=[36,1]):
        V,CV = checkModel(larCylinder(params)(shape))
        return V,[range(len(V))]
    return larRod0

#funzione per definire una fontana di raggio dato
#funzione per definire una fontana di raggio dato
def laghetto (raggio):
   base = CYLINDER([raggio,1])(64)
   b2 = CYLINDER([raggio-2,1])(64)
   base = DIFF([base,b2])
   base = COLOR(colors(192,198,186))(base)
   acqua = CYLINDER([raggio-2,0.8])(64)
   acqua = COLOR(colors(137,253,255))(acqua)
   return STRUCT([base,acqua])
#definizione di un albero di altezza h e raggio r:
def albero(r,h):
    modeltronco = larCylinder([r,h])([32,1])
    tronco = STRUCT(MKPOLS(modeltronco))
    tronco = COLOR(colors(86,34,0))(tronco)
    modelfoglie = larBall(r+1)([18,36])
    foglie = STRUCT(MKPOLS(modelfoglie))
    foglie = T(3)(h+1)(foglie)
    foglie = COLOR(colors(43,119,33))(foglie)
    return STRUCT([tronco,foglie])

#definizione di una panchina:
def panchina ():
    base = CUBOID([2,0.4,0.1])
    schienale = CUBOID([2,0.1,0.3])
    schienale = T([3,1])([0.4,0.5])(schienale)
    piedi = CUBOID([0.2,0.4,0.3])
    p1 = T(1)(0.8)(piedi)
    p2 = T(1)(1.2)(p1)
    p = STRUCT([p1,p2])
    bas = TOP([p,base])
    panchina = STRUCT([bas,schienale])
    panchina = COLOR(colors(127,51,0))(panchina)
    return panchina

lago = laghetto(8)
lago = TOP([grid8,lago])
panchina()
albero1 = T(3)(0.2)(albero(1.5,9))
albero1 = T([1,2])([75,38])(albero1) 
albero2 = T(2)(22)(albero1)
panchina1 = panchina()
panchina2 = T(1)(3)(panchina1)
panchina3 = T(1)(3)(panchina2)
panchine = STRUCT([panchina1,panchina2,panchina3]) 
panchine = TOP([grid4,panchine])

  
neighborood = STRUCT([panchine,albero1,albero2,palace1,grid2,palace3,m3D,grid6,grid7,lago,palace2,street1,street2,street3,street4,stripes])
VIEW(neighborood)