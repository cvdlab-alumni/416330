'''
Created on 16/mag/2014

@author: Manuel
'''
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, 'lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import vertexSieve

from architectural import *
from sysml import *

#funzione utilita' per i colori in pyplasm:
def colors (r,g,b):
    red = 1.0/255.0 * r
    green = 1.0/255.0 * g
    blue = 1.0/255.0 * b 
    return [red,green,blue]

DRAW = COMP([VIEW,STRUCT,MKPOLS])

def unionV(l1,l2):
    for i in l2:
        l1.append(i)
    return l1

def unionCV(l1,l2,v1):
    l = len(v1)
    for i in l2:
        elem = []
        for x in i:
            elem.append(x+l)
        l1.append(elem)
    return l1

def larStruct(models):
    l = [[],[]]
    for i in models:
        V,CV = l
        Vi,CVi = i
        CVs = unionCV(CV,CVi,V)
        Vs = unionV(V,Vi)
        l = Vs,CVs
    return l

#per i vari blocchi singoli:

#costruzione del blocco della cucina:
kitchen = assemblyDiagramInit([3,3,2])([[0.2,1.7,0.1],[0.1,2.7,0.2],[0.1,3]])
V,CV = kitchen
toRemove = [9]
kitchen = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
V,CV = kitchen

toMerge = 14
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.6,2.2],[2,0.9]])
kitchen = diagram2cell(diagram,kitchen,toMerge)
toRemove = [18]
kitchen= kitchen[0], [cell for k,cell in enumerate(kitchen[1]) if not (k in toRemove)]
toMerge = 10
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[.1],[1,1,1]])
kitchen = diagram2cell(diagram,kitchen,toMerge)
toRemove = [24]
kitchen= kitchen[0], [cell for k,cell in enumerate(kitchen[1]) if not (k in toRemove)]
ki = larApply(t(0,5,0))(kitchen)
kitchen_3D = T(2)(5)(STRUCT(MKPOLS(kitchen)))


#costruzione del blocco del bagno:
toRemove = [9]
bath = assemblyDiagramInit([3,3,2])([[0.1,1.8,0.1],[0.1,1.7,0.2],[0.1,3]])
V,CV = bath
bath = V,[cell for k, cell in enumerate(CV) if not (k in toRemove)]
V,CV = bath
toMerge = 7
diagram = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[.1],[2,0.9]])
bath = diagram2cell(diagram,bath,toMerge)
toRemove = [18]
bath = bath[0], [cell for k,cell in enumerate(bath[1]) if not (k in toRemove)]
toMerge = 9
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[.1],[1,1,1]])
bath = diagram2cell(diagram,bath,toMerge)
toRemove = [24]
bath = bath[0], [cell for k,cell in enumerate(bath[1]) if not (k in toRemove)]
bath_3D = T([2,1])([6,2])(STRUCT(MKPOLS(bath)))
bat = larApply(t(2,6,0))(bath)

#costruzione del blocco della prima stanza
toRemove = [9]
bed1 = assemblyDiagramInit([3,3,2])([[0.2,2.7,0.1],[0.2,3.7,0.1],[0.1,3]])
V,CV = bed1
bed1 = V,[cell for k, cell in enumerate(CV)if not(k in toRemove)]
V,CV = bed1
toMerge = 10
diagram = assemblyDiagramInit([3,1,2])([[2.2,0.7,0.1],[.1],[2,0.9]])
bed1 = diagram2cell(diagram,bed1,toMerge)
toRemove = [18]
bed1 = bed1[0], [cell for k,cell in enumerate(bed1[1]) if not (k in toRemove)]
toMerge = 7
diagram = assemblyDiagramInit([3,1,3])([[0.8,1.4,0.8],[.1],[1,1.5,0.5]])
bed1 = diagram2cell(diagram,bed1,toMerge)
toRemove = [24]
bed1 = bed1[0], [cell for k,cell in enumerate(bed1[1]) if not (k in toRemove)]
bed1_3D = T(2)(1)(STRUCT(MKPOLS(bed1)))
be1 = larApply(t(0,1,0))(bed1)


#costruzione del blocco della seconda stanza
toRemove = [9]
bed2 = assemblyDiagramInit([3,3,2])([[0.1,3.8,0.1],[0.2,3.7,0.1],[0.1,3]])
V,CV = bed2
bed2 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = bed2
toMerge = 10
diagram = assemblyDiagramInit([3,1,2])([[1.5,1,1.5],[.1],[2,0.9]])
bed2 = diagram2cell(diagram,bed2,toMerge)
toRemove = [18]
bed2 = bed2[0], [cell for k,cell in enumerate(bed2[1]) if not (k in toRemove)]
toMerge = 7
diagram = assemblyDiagramInit([5,1,3])([[0.8,1.5,0.3,0.8,0.6],[.1],[1,1.5,0.5]])
bed2 = diagram2cell(diagram,bed2,toMerge)
toRemove = [24,29,30]
bed2 = bed2[0], [cell for k,cell in enumerate(bed2[1]) if not (k in toRemove)]
bed2_3D = T([2,1])([1,3])(STRUCT(MKPOLS(bed2)))
be2 = larApply(t(3,1,0))(bed2)

#costruzione del blocco della terza stanza:
toRemove = [9]
bed3 = assemblyDiagramInit([3,3,2])([[0.1,1.8,0.1],[0.1,2.7,0.2],[0.1,3]])
V,CV = bed3 
bed3 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = bed3
toMerge = 7
diagram = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[.1],[2,0.9]])
bed3 = diagram2cell(diagram,bed3,toMerge)
toRemove = [18]
bed3 = bed3[0], [cell for k,cell in enumerate(bed3[1]) if not (k in toRemove)]
toMerge = 9
diagram = assemblyDiagramInit([3,1,3])([[1,1,1],[.1],[1,1,1]])
bed3 = diagram2cell(diagram,bed3,toMerge)
toRemove = [24]
bed3 = bed3[0], [cell for k,cell in enumerate(bed3[1]) if not (k in toRemove)]
bed3_3D = T([2,1])([6,4])(STRUCT(MKPOLS(bed3)))
be3 = larApply(t(4,6,0))(bed3)


#creazione del blocco del primo ingresso:
toRemove = [9]
ing1 = assemblyDiagramInit([3,3,2])([[0.1,3.8,0.1],[0.1,0.8,0.1],[0.1,3]])
V,CV = ing1
ing1 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = ing1
toMerge = 3
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.7,0.1],[2,0.9]])
ing1 = diagram2cell(diagram,ing1,toMerge)
toRemove = [18]
ing1 = ing1[0], [cell for k,cell in enumerate(ing1[1]) if not (k in toRemove)]
toMerge=13
ing1 = diagram2cell(diagram,ing1,toMerge)
#da definire meglio le pareti:
toRemove = [6,9,22]
ing1 = ing1[0], [cell for k,cell in enumerate(ing1[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(ing1)))
hpc = cellNumbering (ing1,hpc)(range(len(ing1[1])),CYAN,2)
#VIEW(hpc)
ing1_3D = T([2,1])([5,2])(STRUCT(MKPOLS(ing1)))
i1 = larApply(t(2,5,0))(ing1)

#creazione blocco secondo ingresso
toRemove = [9]
ing2 = assemblyDiagramInit([3,3,2])([[0.1,2.7,0.2],[0.1,2.7,0.2],[0.1,3]])
V,CV = ing2
ing2 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = ing2
toMerge = 3
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.6,2.2],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [18]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
toMerge = 6
diagram = assemblyDiagramInit([3,1,2])([[1.4,0.9,0.3],[0.1],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [22]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
toMerge = 8
diagram = assemblyDiagramInit([3,1,2])([[0.8,1,0.8],[0.1],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [26]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
ing2_3D = T([2,1])([5,6])(STRUCT(MKPOLS(ing2)))
i2 = larApply(t(6,5,0))(ing2)

#creazione blocco del balcone:
#in questo caso e' da rimuovere la cella numero 3
toRemove = [7]
bal = assemblyDiagramInit([3,2,2])([[0.2,3.7,0.1],[0.2,0.8],[0.1,3]])
V,CV = bal
bal = V,[cell for k, cell in enumerate(CV)if not(k in toRemove)]
toMerge = 1
diagram = assemblyDiagramInit([1,1,2])([[.1],[0.2],[1,2]])
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [11]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
toMerge = 4
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [11]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
toMerge = 2
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [11]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
bal_3D = T(1)(3)(STRUCT(MKPOLS(bal)))
ba = larApply(t(3,0,0))(bal)

#per la costruzione del blocco del salotto:
toRemove = [9]
sala = assemblyDiagramInit([3,3,2])([[0.1,3.7,0.2],[0.2,4.6,0.2],[0.1,3]])
hpc = SKEL_1(STRUCT(MKPOLS(sala)))
Vs,CVs = sala
sala = Vs,[cell for k, cell in enumerate(CVs)if not(k in toRemove)]
Vs,CVs = sala
toMerge = 10
diagram = assemblyDiagramInit([4,1,2])([[0.5,1,0.5,2],[.1],[2,0.9]])
sala = diagram2cell(diagram,sala,toMerge)
toRemove = [18]
sala = sala[0], [cell for k,cell in enumerate(sala[1]) if not (k in toRemove)]
toMerge = 7
diagram = assemblyDiagramInit([3,1,3])([[1,2,1],[.1],[1,1.3,0.7]])
sala = diagram2cell(diagram,sala,toMerge)
toRemove = [26]
sala = sala[0], [cell for k,cell in enumerate(sala[1]) if not (k in toRemove)]
s = larApply(t(7,0,0))(sala)
sala_3D = T(1)(7)(STRUCT(MKPOLS(sala)))

#costruzione delle strutture lar e pyplasm
home_lar = larStruct([ki,ba,s,i1,i2,be1,be2,be3,bat])
home_pyplasm = COLOR(colors(201,190,181))(STRUCT([kitchen_3D, bath_3D, bed1_3D,bed2_3D,bed3_3D, ing2_3D, ing1_3D, bal_3D, sala_3D]))

hpc = SKEL_1(STRUCT(MKPOLS(home_lar)))
hpc = cellNumbering (home_lar,hpc)(range(len(home_lar[1])),CYAN,2)

VIEW(hpc)
DRAW(home_lar)


