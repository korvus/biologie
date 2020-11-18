// import logo from './logo.svg';
import Markdown from 'react-markdown-it';

// import reducer from './reducer.js';
function page() {

    return (
        <div>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/watch?v=yIQ9oKZ7VxI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Markdown>{`
# [Le cytoplasme et ses organites](https://www.youtube.com/watch?v=yIQ9oKZ7VxI)
## Le cytoplasme

Le comportiment "nucléaire" === le coeur de la cellule (ou il y a les chromosomes).
Entre la membrane plasmique et le coeur nucléaire est donc le cytoplasme.
Le cytoplasme comprend 3 éléments : 
- Le cytosol (la solution aqueuse cellulaire)
- Les organites. Les organites peuvent être entourées par deux membranes (ex : mitochondrie) ou une membrane (les lysosomes), et certains sont dépourvus de membranes (les ribosomes)
- Des inclusions (ce sont des oses qui sont stockés par des cellules spécialisés)

:::danger
Les ribosomes ne sont pas considérés comme organites car ne possédant pas de membrane en réalité.
:::

:::info
Définition - Le **catabolisme**
Le catabolisme est une réaction intra-cellulaire dans laquelle des composés organiques complexes sont **dégradés** en composés organiques plus simple, et qui libére de l'ATP (Adénosine triphosphate) durant la réaction chimique. Cela libére donc de l'énergie.
:::

Exemple de catabolisme : 
La **glycolise** est une réaction chimique qui a lieu dans le cytoplasme, qui va dégrader un glucose (6 atomes de carbones) en 2 molécules de Pyruvate (3 C) en libérant 2 ATP. C'est un processus qui ne nécessite pas d'oxygène (anaérobie).


:::info
Qu'est ce que l'anabolisme.
L'**anabolisme** est un ensemble de réaction qui fait l'inverse du catabolisme. Elle **synthése** des composés organiques simple en conssomant de l'ATP.
:::

--- 

#### Le métabolisme === anabolisme + catabolisme.

---

### exemple d'anabolisme

A partir d'acide aminés simple, on va construire des protéines (qui sont des polymères d'acides aminés pour rappel), a partir d'ATP et d'organites spécialisé, les **ribosomes**.

---

## Les complexes moléculaire sans membranes

(ndlr : officiellement donc pas des organistes en théorie)

### Le cytosquelette
C'est un réseau de **fribrilles** de nature protéique typique des **cellules eucaryotes animales**. Les bactéries, qui sont procariotes, n'en possédent donc pas. 
Le cytosquelette est constitué de trois types d'éléments : 
- microfilaments
- microfilaments intermédiaires
- microtubules

#### les microtubules
structure de diamètre creux de 23nm de large, formé par la polymérisation d'une protéine spécifique appelées **tubuline**.

#### les microfilaments
Petites taille de 7nm de diamètres. Ils sont formés par la polymérisation d'une autre protéine qui s'appelle l'**actine**, d'ou leur autre nom parfois : **microfilament d'actine**.

#### microfilaments intermédiaires
leur diamètres intermédiaire entre les deux précédents fait qu'ils sont appelé intermédiaires. On n'en retrouve pas dans les cellules eucaryotes végétale.

### le role du cytosquelette
Il a principalement 2 rôles : 
- un rôle d'**échaffaudage**. Il maintient la forme qu'adoptera la cellule eucaryote animale, il fixe également la position des organites dans le cytoplasme.
- Il permet des **mouvements cellulaire**. Par exemple, déplacement a l'intérieur du cytoplasme des vésicules (les vésicules, par l'intermédiaire de **protéines motrices**, se déplacent ainsi le long des microtubules), mais aussi formation des déformations membranaire (exemple : la formation des "pseudopodes" des cellules macrophages comme vu cours précédent), et enfin comme un muscle. Par exemple, les flagelle des spermatozoides ou les cils d'autres cellules dotés de cils.

### le centrosome

présent plus ou moins au centre de la cellule, vers le noyau. Ce complexé protéique se trouve dans les **cellules eucaryote animale**.
il est formé de deux molécules perpendiculaire l'une a l'autre appelé **centrioles**.
Le centrosome sert de point de départ pour la formation des microtubules constituant le cytosquelette. On dit que c'est le **centre organisateur** des microtubules.

### Les ribosomes

Il se retrouve en grande quantité dans les cytoplasmes aussi bien eucaryote que procaryotes. Il est constitué par deux sous unités, une principale et une plus petites. Les deux sont assemblés que lorsque le ribosome est actif (lorsqu'il synthése des protéines).
- La principale unité est constitué de 45 protéines environs, et de 3 molécules d'arn
- la plus petite est constitué de 33 protéines et 1 ARN.

#### son rôle

En étant assemblé, les ribosomes scannent un arn dit "messager" qui est présent dans le cytoplasme, et a partir de celui ci, produire une chaine de protéine constitué d'acide aminés reliés par des liaisons peptidiques. Ils permettent donc la traduction de l'ARNm en protéines.

#### le polysome
Aka polyribosome. Ce sont des chainettes de ribosomes lié a une même molécule d'ARN. Ils lisent tous la meme chaine d'ARNm. Ils le traduisent en même temps.

#### Ribosome libres
Ce sont les ribosomes sont en fait identiques aux ribosomes liés, sauf qu'ils sont "libres" dans le cytosol.

#### ribosome liés
ces ribosomes (que rien ne distingue des ribosomes libres) sont liées a la couches externes du réticulum endoplasmique. La distinction est donc juste lié a la localisation du ribosome dans le cytoplasme.
Les rybosomes peuvent se retrouver dans les deux cas au cours de leur existence.


#### le role des polysomes libres

Les polysomes libres vont fabriquer des protéines qui vont rester dans le cytosol (**protéines cytosoliques**).
par exemple :
- les enzymes de la glycolise (comme vu tout a l'heure)
- les protéines du cytosquelette
- les protéines qui vont être transféré aux autres organites (comme les mytochondrie par exemple) ou vers le noyaux (protéines histones qui sont présente dans le noyaux)

#### Le rôle des polysomes liés
Ils fabriquent également des protéines, mais celles ci vont être en regard de la lumière du réticulum endoplasmique rugeux. Par voix vésiculaire, ces protéines vont ensuite migrer vers **l'appareil de golgi**. De l'appareil de golgi, elles peuvent ensuite être mise dans des vésicules qui vont former des **lysosomes** (vu précédement, constitués d'enzymes), ou a destination de l'extérieur de la cellule (ex: insuline) ou de la membrane.

---

## Les complexes moléculaire délimité par une seule membrane

### le réticulum endoplasmique

Il forme un réseau de membrane formé de "**sacules**" et de "**canalicules**".
ce qui fait qu'il est présent uniquement dans les cellules eucaryotes.
Il représente la moitié de l'ensemble des membranes cellulaires. Ses membranes délimitent des cavités dites "**citernes**".
On distingue deux type de réticulum principalement.
- Le réticulum endoplasmique dit "rugueux" ou "granulaire" (RER / REG) a cause de la présence des polysomes liés. Il est lié au noyau. 
- Le réticulum lisse, ou "agranulaire". Il est dépourvu de ribosomes liés. Son réseau est davantages en tubules plus ou moins complexes. les deux réticulums sont liés.

:::info
On distingue en plus un troisième réticum, qui est en réalité un Réticulum lisse, mais spécifique aux cellules musculaire et cardiaque, appelé **Réticulum sarcoplasmique**. Il est particulièrement complexe par tout un réseaux de tubules interconnectés associé a la partie cytosquelettique responsable de la contraction de la cellule. De part son volume important, sa réserve de Calcium est donc importante. Ainsi lorsque le muscle est activé, il libére massivement le calcium.
:::

C'est généralement le réticulum endoplasmique rugueux qui prédomine.

Le Réticulum Endoplasmique est doté d'ATPase ionique a calcium, ce qui lui permet de transporter les ions calcium (Ca+) a l'intérieur de la **citerne** (lumière) du RE (malgré un gradient défavorable). On peut affirmer que le RE contient les réserves Calciques intracellulaire. Lorsque la cellule est excité (par des hormones), elle libére ses réserves calciques via des canaux à calcium passif, basé sur le gradient.

#### Le rôle du RER (réticulum endoplasmique rugueux)
Il y en a plusieurs.
- Comme vu précédemment, avec les polysomes : Il produit les protéines qui sont englobés dans des protéines membranaires qui sont ensuite emené dans l'appareil de golgi.
- Fabrique des phospholipides et du cholestérol. On peut donc le considérer comme l'usine de toutes les membranes cellulaires.

Les cellules qui libérent d'importantes quantités de protéines sont donc dotées d'un RER particulièrement important.
Exemples : 
- le lymphocyte B qui libére des anticorps
- cellule béta du pancréas qui fabrique l'insuline
- les cellules du pancréas exocrine, qui sécréte les enzymes diggestives


#### Le rôle du réticulum endosplasmique Lisse
- Il synthèse les lipides (phospholipides, cholesterol, hormones stéroides)
- Détoxification. Il peut détoxifier certains composés (médicaments/pesticide). Role qu'on retrouve dans les cellules du foie ou le rein.

On va retrouver du REL principalement dans les cellules qui libérents des hormones stéroides. Par exemple les cellules de Leydig des testicules, qui produisent de la testostérones.

### L'appareil de Golgi

Il ressemble a une pile de sac applati (**saccule**). Elles sont dépourvues de ribosomes. Cet empilement est orienté dans le cytosol : 
- une face orienté vers le réticulum rugueux et donc le noyaux, une face **interne**, "**cis**" qui est celle qui correspond a la réception des vésicules dit "de transfert" (par fusion membranaire comme vue chapitre d'avant).
- A l'opposé, la face "**trans**" correspond a celle tourné vers la membrane plasmique, qui correspond a la **face d'expédition**. Ce sera la face qui va générer les vésicules qui améneront le matériel dans le cytosol voir l'extérieur de la cellule.

#### 6 fonctions de l'appareil de Golgi

- transporter les protéines réceptionné du réticulum de saccule a saccule vers la face trans.
- Les protéines vont subir dans chaques sacules des modifications, comme des ajouts de sucres (glycolisation) entre autre, ce qui permet a ces protéines de subir ce qu'on appelle une "**maturation finale**"
- Concentration des protéines
- Une fonction de tri entre les différentes protéines, en fonction de leur finalités.
- Il produit des vésicules, comme le RE, pour empaqueter les protéines.
- Adressage de ces protéines vers leur destinations finales


### Les lysosomes

Par dizaine, centaines dans les cellules, de formes ovoides.
Elles sont remplit d'enzymes appelés **Hydrolase acide**. Ces enzymes sont actives dans un milieu acide. Ce sont les éboueurs de la cellule.
La membrane du lysosome va jouer plusieurs rôles. 
- empêcher les enzymes hydrolases acides de se propager dans le cytosol
- Importer des ions hydrogènes, via une ATPase H+, afin d'acidifier l'intérieur du lysosome.
- rejeter les micro molécules qui sont le résultat de l'hydrolyse de ce qui a été diggéré. On parle de "produit de dégradation lysosomiale".

#### le matériel dégradé par les lysosomes
2 types d'origines
- d'origine exogéne (bactérie, virus, toxines par exemple), via un **phagosome** (vésicule issut de la membrane qui contient la bactérie comme vu précédemment) qui va fusionner pour former le **phagolysosome**.
- d'origine endogéne, de l'intérieur de la cellule, par **autophagye**. Cela participe du renouvellement des structures. Par exemple une mitochondrie va être entouré d'un **autophagosome**, afin de fusionner a son tour avec le lysosome qui va la digérer.

:::info
Les cellules végétales n'ont pas de lysosomes, mais en revanche on un équivalent : la **vacuole**. elle contient les hydrolase acide pour hydroliser les composés, avec des pompes a proton (H+) pour acidifier.
:::

### les peroxysomes

Le peroxysome dégrade les acides gras par oxydation. L'oxydation est la perte d'un électron par un composé. Les enzymes qui oxyde sont appelé **oxydase**. Pour ce faire, ces organites utilisent le dioxygène (réaction **aérobie**).
Cet organite n'as ni adn, ni ribosomes, et ne synthétise pas d'ATP.

Certaines réactions permettent la detoxification des cellules. Par exemple l'éthanol de l'alcool, lorsqu'il est oxydé. Les radicaux libres produit par les cellules sont dangereux également, et le peroxysome les dégradent.

:::info
#### rappel
- Les **lysosomes** sont donc créé par **bourgonnement** par l'appareil de golgi
- les **peroxysomes** sont des organites qui se reproduisent par division, tel la cellule.
:::

---

## les organites limités par 2 membranes

### les mitochondries

Elles sont présentes dans les cellules eucaryotes (aussi bien animale que végétales) **aérobie** uniquement.
Par exemple, dans le sang humain, les cellules **Erythroblastes**, qui contiennent bien un noyau et des mitochondries, mais qui les éjectent ensuite pour former ce qu'on appelle ensuite des **hématies**, contenue dans le sang, les globules rouges, sont anaérobie et n'ont pas mitochondries.

#### Les cellules avec abondances de mitochondries
- Les cellules du coeur (myocarde) en ont davantages, car elles ont un important besoin énergétique constant. 
- Les cellules du fois (hépatocyte), car elle a un métabolisme aérobique très actif également.

#### le rôle de la mitochondrie

Elle convertit la matière organique en matière minérale avec effet de produire de l'ATP pour l'ensemble de la cellule.

Par **catabolisme**, on a un processus de dégradation de différent type de composés organiques (appelés **Métabolites**, qui peuvent être des glucides, des acides aminés ou encore des acides gras). ces composés vont subir une suite de dégradations appelé **cycle de Kreps** qui va finir par former du CO2, de l'H2O (eau) et de l'ATP. La mitochondrie permet **une minéralisation de la matière organique**.

#### la deuxième couche de la membrane de la mitochondrie.
Très repliée, elle forme des replis qu'on appelle "**crête**" mitochondriale.
Ces replis sont très riches en enzymes, dont des enzymes de synthése de l'ATP.
Cette deuxième couche sépare donc l'intérieur de la mitochondrie en deux compartiments. La **matrice**, qui correspond à l'intérieur, et l'espace **intermembranaire**.

#### la matrice

3 type d'éléments se baignent dans la matrice : 
- De très nombreuses enzymes du cycle de Krepps (a ne pas confondre avec les enzymes qui sont fixés sur les crêtes)
- de l'ADN circulaire et de l'ARN
- des ribosomes

#### les 5 points communs entre mitochondrie et les bactéries

- la taille
- l'ADN circulaire (non enfermé dans un noyau)
- présence de ribosomes (elles fabriquent des protéines)
- se reproduisent par division (méiose)
- Contient de l'ARN

:::info 
On estime que la mitochondrie est le fruit d'un phagocytose d'une bactérie primitive. Il s'agirais d'une endosymbiose.
:::

### les chloroplastes
Ce sont les cellules des parties vertes des plantes.

#### Une troisième membrane
Les **chloroplastes** ont une troisièmes membranes (appelé **thylakoïdes**, qui se présentent sous la forme de disques superposés, qui contiennent la chlorophylle)
C'est gràçe a cette thylakoides qu'ils réalisent la photosynthèse, la transformation de l'énergie lumineuse (+ de l'eau H2O) en énergie électro-chimique, l'ATP (+ un autre composé et de l'O2).
Après l'étape des chlorophylles (dites **photochimique**), intervient dans le compartiment appelé **stroma** de la chloroplaste, un cycle **chimique** utilise le CO2 et la matière organique précédemment créée pour générer de la matière organique (type amidon, hexose, triose, etc).

#### points communs avec les mitochondries : 
- ADN circulaire bactérien
- ARN
- Contiennent des Ribosomes
- Ils synthétisent de l'ATP. Mais la mitochondrie l'exporte, le chloroplaste l'utilise en interne pour la photosynthèse
- Organites limités tous deux par une double membrane
- Probablement la même origine pour former un duo endosymbiotique.


            `}</Markdown>
        </div>
    );
}

export default page;
