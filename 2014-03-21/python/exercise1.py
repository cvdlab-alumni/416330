
from pyplasm import *

#funzione utilita' per i colori in pyplasm:
def colors (r,g,b):
    red = 1.0/255.0 * r
    green = 1.0/255.0 * g
    blue = 1.0/255.0 * b 
    return [red,green,blue]



#struttura della base del monumento:
vertici = [(0.0,0.0),(26.4,0.0),(0.0,13.5),(26.4,13.5),(26.4,2.25),(22.0,2.25),(22.0,0.0),(26.4,11.25),(22.0,11.25),(22.0,13.5)]
celle = [[1,3,7,10],[2,5,6,7],[4,8,9,10]]
primabase = MKPOL([vertici, celle, None])
base = PROD([primabase,Q(0.1)])

#struttura delle scale:
piano = CUBOID([0.29,9.0,0.19])
scala = piano
for i in range(16):
    nuovascala = T(1)(-0.29*(i-1))(CUBOID([0.29,9.0,0.19*i]))
    scala = STRUCT([scala,nuovascala])
scala = T([2,1])([2.25,26.0])(scala)

#struttura del primo piano della struttura:
v2 = [(0.1,0.1),(26.3,0.1),(0.1,13.4),(26.3,13.4),(26.3,2.24),(22.0,2.25),(22.0,0.1),(26.3,11.25),(22.0,11.25),(22.0,13.4)]
secondabase = MKPOL([v2,celle, None])
b2= PROD([secondabase,Q(0.1)])
b2 = T(3)(0.1)(b2)
v3 = [(0.3,0.3),(26.1,0.3),(0.3,13.2),(26.1,13.2),(26.1,2.22),(22.0,2.25),(22.0,0.3),(26.1,11.25),(22.0,11.25),(22.0,13.2)]
terzabase = MKPOL([v3,celle, None])
b3 = PROD([terzabase,Q(2.45)])
b3 = T(3)(0.2)(b3)
base = STRUCT([base,b2,b3])
b4 = PROD([secondabase,Q(0.1)])
b4 = T(3)(2.65)(b4)
b5 = PROD([primabase,Q(0.1)])
b5 = T(3)(2.75)(b5)
floor1 = STRUCT([base,b5,b4,scala])
floor1 = COLOR(colors(192,192,192))(floor1)

#definizione delle mura:
m1 = CUBOID([1.0,11.475])
m1 = T([1,2])([1.125,1.0])(m1)
m2 = CUBOID([14,1.0])
m2 = T([2,1])([1.0,1.125])(m2)
m3 = T(2)(10.475)(m2)
m4 = CUBOID([1.0,4.0])
m4 = T([2,1])([1.0,14.125])(m4)
m5 = T(2)(7.475)(m4)
mura = T(3)(2.85)(STRUCT([m1,m2,m3,m4,m5]))
mura = COLOR(colors(160,160,160))(mura)

#definizione della porta:
palo1 = CUBOID([1.5,0.75,5.37])
palo1 = T([1,2])([13.875,5.0])(palo1)
palo2 = T(2)(2.75)(palo1)
palo3 = CUBOID([1.5,3.5,0.75])
porta = STRUCT([palo1,palo2])
porta = T(3)(2.85)(porta)
porta = TOP([porta,palo3])
porta = COLOR(colors(160,160,160))(porta)
mura = STRUCT([mura,porta])

#definizione dei piedistalli delle colonne:
v4 = [(21.5,0.625),(20.5,0.625),(21.5,1.625),(20.5,1.625)]
c = [[1,2,3,4]]
piedistallo = MKPOL([v4,c, None])
rigapiedi = STRUCT([piedistallo, T(2)(2.25)]*6)
riga2 = T(1)(-2)(piedistallo)
riga2 = STRUCT([riga2,T(1)(-2)]*9)
riga3 = T(2)(11.25)(riga2)
riga4 = T(1)(-20)(rigapiedi)
floor2 = STRUCT([rigapiedi, riga2, riga3, riga4])
floor2_3D = PROD([floor2,Q(0.1)])
floor2_3D = T(3)(2.85)(floor2_3D)
floor2_3D = COLOR(colors(160,160,160))(floor2_3D)
floor2_2_5D = STRUCT([floor2_3D,mura])


#definizione delle colonne:
colonna = CIRCUMFERENCE(0.375)(10)
colonna = T([2,1])([1.125,21])(colonna)
rigacol = STRUCT([colonna,T(2)(2.25)]*6)
col2 = T(1)(-2)(colonna)
col2 = STRUCT([col2,T(1)(-2)]*9)
col3 = T(2)(11.25)(col2)
col4 = T(1)(-20)(rigacol)
floor3 = STRUCT([rigacol,col2,col3,col4])
floor3_3D = PROD([floor3,Q(11)])
floor3_3D = T(3)(2.95)(floor3_3D)
floor3_3D = COLOR(colors(224,224,224))(floor3_3D)

#definizione dei capitelli:
capitello1 = T(3)(13.92)(colonna)
capitello2 = T(3)(14.5)(piedistallo)
capitello = JOIN([capitello1,capitello2])
rigacapi = STRUCT([capitello, T(2)(2.25)]*6)
capi2 = T(1)(-2)(capitello)
capi2 = STRUCT([capi2,T(1)(-2)]*9)
capi3 = T(2)(11.25)(capi2)
capi4 = T(1)(-20)(rigacapi)
floor4_3D = STRUCT([rigacapi, capi2, capi3, capi4])
floor4_3D = COLOR(colors(145,149,148))(floor4_3D)

#definizione del piano del tetto:
floor5 = CUBOID([20.5,11.85])
floor5 = T([2,1])([0.8125,0.75])(floor5)
floor5 = T(3)(14.5)(floor5)
floor5 = COLOR(colors(127,51,0))(floor5)

#unione di tutti i vari piani in semi 3D:
two_and_half_model = STRUCT([floor1,floor2_2_5D,floor3_3D,floor4_3D,floor5])
#VIEW(two_and_half_model)