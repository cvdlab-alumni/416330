'''
Created on 22/mar/2014

@author: Manuel
'''
from pyplasm import *

#funzione che definisce un numero n di scale, rappresenta la scalinata per entrare nella struttura:

def stairs(n):
    piano = CUBOID([0.29,9.0,0.19])
    stairs = piano
    for i in range(n):
        newstair = T(1)(-0.29*(i-1))(CUBOID([0.29,9.0,0.19*i]))
        stairs = STRUCT([stairs,newstair])
    stairs = T([2,1])([2.25,26.0])(stairs)
    return stairs