'''
Created on 22/mar/2014

@author: Manuel
'''
from pyplasm import *
import exercise1 as structure

#definizione facciata ovest:
west = structure.m2
west = PROD([west,Q(9.65)])
west = T(3)(2.85)(west)

#definizione facciata est:
east = T(2)(10.475)(west)

#definizione facciata nord:
north = structure.m1
north = PROD([north,Q(9.65)])
north = T(3)(2.85)(north)

#definizione facciata sud:
apps1 = PROD([structure.m4,Q(9.65)])
apps2 = PROD([structure.m5,Q(9.65)])
apps3 = CUBOID([3.475,1.0,3.675])
apps3 = T(1)(5.0)(apps3)
apps3 = R([2,1])(-PI/2)(apps3)
apps3 = T([3,1])([5.97,15.125])(apps3)
south = INSR(SUM)([apps1,apps2,apps3])
south = T(3)(2.85)(south)

#definizione facciate messe insieme:
facciate = STRUCT([north,south,east,west])
facciate = COLOR(structure.colors(158, 148, 136))(facciate)

mock_up_3D = STRUCT([facciate,structure.two_and_half_model])
#VIEW(mock_up_3D)



