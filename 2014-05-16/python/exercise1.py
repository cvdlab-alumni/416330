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

V = [[3,0],[7,0],[11,0],[0,1],[3,1],[7,1],[0,5],[2,5],[3,5],[6,5],[7,5],[9,5],[11,5],[2,6],[4,6],[6,6],[0,8],[2,8],[4,8],[6,8],[9,8],[4,9],[6,9]]
FV = [[0,1,5,4],[3,4,8,7,6],[4,5,10,9,8],[1,2,12,11,10,5],[6,7,13,17,16],[7,8,9,15,14,13],[9,10,11,20,19,15],[13,14,18,17],[14,15,19,22,21,18]]

dwelling = [V,FV]

bU = AA(SOLIDIFY)(AA(POLYLINE)(lar2polylines (dwelling)))
EV = face2edge(FV)
base = STRUCT(MKPOLS((V,EV)))

eE,iP = bUnit_to_eEiP(FV,EV)
modEe1D = V, [EV[e] for e in eE]
modIp1D = V, [EV[e] for e in iP]
#rappresenta il bordo esterno;
eE1D = AA(COLOR(RED))(MKPOLS(modEe1D))
#rappresenta il bordo interno;
iP1D = AA(COLOR(GREEN))(MKPOLS(modIp1D))
floorHeight = larIntervals([1])([4])
#cosi si moltiplica la riga per l'altezza ottenendo una struttura 2D rialzata, simile all'extrude
modIp2D = larModelProduct([ modIp1D, floorHeight ])
modEe2D = larModelProduct([ modEe1D, floorHeight ])

plan = Struct([dwelling])
assembly2D = evalStruct(plan)
assembly1D = larCells(face2edge)(assembly2D)
mod_1 = larQuote1D( 1*[0.1,-1.0] )
assembly3D = larBinOps(larModelProduct)(assembly2D)(mod_1)

base3D = COLOR(colors(167,101,43))(T(3)(-0.1)(STRUCT(CAT(AA(MKPOLS)(assembly3D)))))
#per i vari blocchi singoli:

#costruzione del blocco della cucina:
kitchen = assemblyDiagramInit([3,3,1])([[0.2,1.7,0.1],[0.1,2.7,0.2],[3]])
V,CV = kitchen
toRemove = [4]
kitchen = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
V,CV = kitchen
toMerge = 6
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.6,2.2],[2,0.9]])
kitchen = diagram2cell(diagram,kitchen,toMerge)
toRemove = [9]
kitchen= kitchen[0], [cell for k,cell in enumerate(kitchen[1]) if not (k in toRemove)]
toMerge = 4
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[.1],[1,1,1]])
kitchen = diagram2cell(diagram,kitchen,toMerge)
toRemove = [15]
kitchen= kitchen[0], [cell for k,cell in enumerate(kitchen[1]) if not (k in toRemove)]
kitchen_3D = T(2)(5)(STRUCT(MKPOLS(kitchen)))


#costruzione del blocco del bagno:
toRemove = [4]
bath = assemblyDiagramInit([3,3,1])([[0.1,1.8,0.1],[0.1,1.7,0.2],[3]])
V,CV = bath
bath = V,[cell for k, cell in enumerate(CV) if not (k in toRemove)]
V,CV = bath
hpc = SKEL_1(STRUCT(MKPOLS(bath)))
hpc = cellNumbering (bath,hpc)(range(len(bath[1])),CYAN,2)
toMerge = 3
diagram = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[.1],[2,0.9]])
bath = diagram2cell(diagram,bath,toMerge)
toRemove = [9]
bath = bath[0], [cell for k,cell in enumerate(bath[1]) if not (k in toRemove)]
toMerge = 3
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[.1],[1,1,1]])
bath = diagram2cell(diagram,bath,toMerge)
toRemove = [15]
bath = bath[0], [cell for k,cell in enumerate(bath[1]) if not (k in toRemove)]
bath_3D = T([2,1])([6,2])(STRUCT(MKPOLS(bath)))


#costruzione del blocco della prima stanza
toRemove = [4]
bed1 = assemblyDiagramInit([3,3,1])([[0.2,2.7,0.1],[0.2,3.7,0.1],[3]])
V,CV = bed1
bed1 = V,[cell for k, cell in enumerate(CV)if not(k in toRemove)]
V,CV = bed1
hpc = SKEL_1(STRUCT(MKPOLS(bed1)))
hpc = cellNumbering (bed1,hpc)(range(len(bed1[1])),CYAN,2)
toMerge = 4
diagram = assemblyDiagramInit([3,1,2])([[2.2,0.7,0.1],[.1],[2,0.9]])
bed1 = diagram2cell(diagram,bed1,toMerge)
toRemove = [9]
bed1 = bed1[0], [cell for k,cell in enumerate(bed1[1]) if not (k in toRemove)]
toMerge = 3
diagram = assemblyDiagramInit([3,1,3])([[0.8,1.4,0.8],[.1],[1,1.5,0.5]])
bed1 = diagram2cell(diagram,bed1,toMerge)
toRemove = [15]
bed1 = bed1[0], [cell for k,cell in enumerate(bed1[1]) if not (k in toRemove)]
bed1_3D = T(2)(1)(STRUCT(MKPOLS(bed1)))


#costruzione del blocco della seconda stanza
toRemove = [4]
bed2 = assemblyDiagramInit([3,3,1])([[0.1,3.8,0.1],[0.2,3.7,0.1],[3]])
V,CV = bed2
bed2 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = bed2
toMerge = 4
diagram = assemblyDiagramInit([3,1,2])([[1.5,1,1.5],[.1],[2,0.9]])
bed2 = diagram2cell(diagram,bed2,toMerge)
toRemove = [9]
bed2 = bed2[0], [cell for k,cell in enumerate(bed2[1]) if not (k in toRemove)]
toMerge = 3
diagram = assemblyDiagramInit([5,1,3])([[0.8,1.5,0.3,0.8,0.6],[.1],[1,1.5,0.5]])
bed2 = diagram2cell(diagram,bed2,toMerge)
toRemove = [15,20,21]
bed2 = bed2[0], [cell for k,cell in enumerate(bed2[1]) if not (k in toRemove)]
bed2_3D = T([2,1])([1,3])(STRUCT(MKPOLS(bed2)))


#costruzione del blocco della terza stanza:
toRemove = [4]
bed3 = assemblyDiagramInit([3,3,1])([[0.1,1.8,0.1],[0.1,2.7,0.2],[3]])
V,CV = bed3 
bed3 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = bed3
hpc = SKEL_1(STRUCT(MKPOLS(bed3)))
hpc = cellNumbering (bed3,hpc)(range(len(bed3[1])),CYAN,2)
toMerge = 3
diagram = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[.1],[2,0.9]])
bed3 = diagram2cell(diagram,bed3,toMerge)
toRemove = [9]
bed3 = bed3[0], [cell for k,cell in enumerate(bed3[1]) if not (k in toRemove)]
toMerge = 3
diagram = assemblyDiagramInit([3,1,3])([[1,1,1],[.1],[1,1,1]])
bed3 = diagram2cell(diagram,bed3,toMerge)
toRemove = [15]
bed3 = bed3[0], [cell for k,cell in enumerate(bed3[1]) if not (k in toRemove)]
bed3_3D = T([2,1])([6,4])(STRUCT(MKPOLS(bed3)))


#creazione del blocco del primo ingresso:
toRemove = [4]
ing1 = assemblyDiagramInit([3,3,1])([[0.1,3.8,0.1],[0.1,0.8,0.1],[3]])
V,CV = ing1
ing1 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = ing1
toMerge = 1
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.7,0.1],[2,0.9]])
ing1 = diagram2cell(diagram,ing1,toMerge)
toRemove = [9]
ing1 = ing1[0], [cell for k,cell in enumerate(ing1[1]) if not (k in toRemove)]
toMerge=5
ing1 = diagram2cell(diagram,ing1,toMerge)
toRemove = [13]
ing1 = ing1[0], [cell for k,cell in enumerate(ing1[1]) if not (k in toRemove)]
toRemove = [2,3]
ing1 = ing1[0], [cell for k,cell in enumerate(ing1[1]) if not (k in toRemove)]
ing1_3D = T([2,1])([5,2])(STRUCT(MKPOLS(ing1)))


#creazione blocco secondo ingresso
toRemove = [4]
ing2 = assemblyDiagramInit([3,3,1])([[0.1,2.7,0.2],[0.1,2.7,0.2],[3]])
V,CV = ing2
ing2 = V,[cell for k, cell in enumerate(CV) if not(k in toRemove)]
V,CV = ing2
toMerge = 1
diagram = assemblyDiagramInit([1,3,2])([[.1],[0.2,0.6,2.2],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [9]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
toMerge = 2
diagram = assemblyDiagramInit([3,1,2])([[1.4,0.9,0.3],[0.1],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [13]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
teMerge = 2 
diagram = assemblyDiagramInit([3,1,2])([[0.8,1,0.8],[0.1],[2,0.9]])
ing2 = diagram2cell(diagram,ing2,toMerge)
toRemove = [17]
ing2 = ing2[0], [cell for k,cell in enumerate(ing2[1]) if not (k in toRemove)]
ing2_3D = T([2,1])([5,6])(STRUCT(MKPOLS(ing2)))

#creazione blocco del balcone:
#in questo caso e' da rimuovere la cella numero 3
toRemove = [3]
bal = assemblyDiagramInit([3,2,1])([[0.2,3.7,0.1],[0.2,0.8],[3]])
V,CV = bal
bal = V,[cell for k, cell in enumerate(CV)if not(k in toRemove)]
toMerge = 2
diagram = assemblyDiagramInit([1,1,2])([[.1],[0.2],[1,2]])
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [5]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
toMerge = 1
diagram = assemblyDiagramInit([1,1,2])([[.1],[0.2],[1,2]])
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [5]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
toMerge = 0
diagram = assemblyDiagramInit([1,1,2])([[.1],[0.2],[1,2]])
bal = diagram2cell(diagram,bal,toMerge)
toRemove = [5]
bal = bal[0], [cell for k,cell in enumerate(bal[1]) if not (k in toRemove)]
bal_3D = T(1)(3)(STRUCT(MKPOLS(bal)))

#per la costruzione del blocco del salotto:
toRemove = [4]
sala = assemblyDiagramInit([3,3,1])([[0.1,3.7,0.2],[0.2,4.6,0.2],[3]])
hpc = SKEL_1(STRUCT(MKPOLS(sala)))
V,CV = sala
sala = V,[cell for k, cell in enumerate(CV)if not(k in toRemove)]
V,CV = sala
toMerge = 4
diagram = assemblyDiagramInit([4,1,2])([[0.5,1,0.5,2],[.1],[2,0.9]])
sala = diagram2cell(diagram,sala,toMerge)
toRemove = [9]
sala = sala[0], [cell for k,cell in enumerate(sala[1]) if not (k in toRemove)]
toMerge = 3
diagram = assemblyDiagramInit([3,1,3])([[1,2,1],[.1],[1,1.3,0.7]])
sala = diagram2cell(diagram,sala,toMerge)
toRemove = [17]
sala = sala[0], [cell for k,cell in enumerate(sala[1]) if not (k in toRemove)]
sala_3D = T(1)(7)(STRUCT(MKPOLS(sala)))

wall = COLOR(colors(178,102,79))(STRUCT([kitchen_3D, bath_3D, bed1_3D,bed2_3D,bed3_3D, ing2_3D, ing1_3D, bal_3D, sala_3D]))
home = STRUCT([wall,base3D])
#VIEW(home)
