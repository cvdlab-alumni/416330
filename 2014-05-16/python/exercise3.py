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
        
#funzione per rimuovere piu' celle da un blocco
def remove_cells(master,toRemove):
    V,CV = master
    master = V,[cell for k in enumerate(CV) if not(k in toRemove)]
    return master

#funzione per aggiungere uno stesso diagramma in piu' blocchi di un diagramma:
def merge_cells(master, diagram, toMerge):
    toMerge.sort()
    toMerge.reverse()
    for i in toMerge:
        master = diagram2cell(diagram,master,i)
    return master
    