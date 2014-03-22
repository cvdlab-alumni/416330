'''
Created on 22/mar/2014

@author: Manuel
'''
from pyplasm import *
import exercise1 as struttura

#definizione facciata ovest:
west = struttura.m2
west = PROD([west,Q(11.65)])
west = T(3)(2.85)(west)

#definizione facciata est:
east = T(2)(10.475)(west)

#definizione facciata nord:
north = struttura.m1
north = PROD([north,Q(11.65)])
north = T(3)(2.85)(north)

#definizione facciata sud:
apps1 = PROD([struttura.m4,Q(11.65)])
apps2 = PROD([struttura.m5,Q(11.65)])
apps3 = CUBOID([3.475,1.0,5.675])
apps3 = T(1)(5.0)(apps3)
apps3 = R([2,1])(-PI/2)(apps3)
apps3 = T([3,1])([5.97,15.125])(apps3)
south = INSR(SUM)([apps1,apps2,apps3])
south = T(3)(2.85)(south)

#definizione facciate mess insieme:
facciate = STRUCT([north,south,east,west])
facciate = COLOR(struttura.colors(158, 148, 136))(facciate)

mock_up_3D = STRUCT([facciate,struttura.two_and_half_model])
VIEW(mock_up_3D)



