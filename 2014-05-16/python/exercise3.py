'''
Created on 16/mag/2014

@author: Manuel
'''
from exercise2 import *

#funzione per rimuovere la stessa cella da un insieme di blocchi
def remove_cell(masters,toRemove):
    list = []
    for x in masters:
        V,CV = x
        x = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
        list.append(x)
    return list

#funzione per inserire uno stesso diagramma in un insieme di blocchi
def merge_cell(masters,toMerge,diagram):
    list = []
    for x in masters:
        list.append(diagram2cell(diagram,x,toMerge))
    return list
        