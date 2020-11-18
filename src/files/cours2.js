// import logo from './logo.svg';
import Markdown from 'react-markdown-it';

// import reducer from './reducer.js';
function page() {

    return (
        <div>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/muLu_W6ghh0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Markdown>{`
# [La cellule et la membrane plasmique](https://www.youtube.com/watch?v=muLu_W6ghh0&t=1s)

Première observation faites par Robert Hooke.
Désormais les cellules sont plutot observés a partir de miscrocope a balayage électronique (utilisant des faisceau d'électrons) plutot qu'optique (lumière du soleil).

Dans la probable apparition de la vie, les premières molécules organiques ont surement été des ARN (Acides RiboNucléique).
Ensuite, les premières cellules ont été des cellules procaryotes (sans noyaux), sous la forme bactérienne.

## Définition de la cellule

C'est une unité délimité par une membrane dite **plasmique**, et qui contient un liquide (solution aqueuse) appelé **cytosol** (cyto === la cellule / sol === "sol"ution).

### procaryote / eucaryote

**Les procaryotes** : 
Ce sont des cellules dépourvues de noyaux et de membranes intracellulaire (tournée vers l'intérieur) à de rares exceptions prêt.
Exemple de procaryote : Les bactéries mais aussi les archées ("anciennes")
**Les eucaryotes** : 
Ce sont des organismes unicellulaire ou multicellulaire (humains) constitué de cellules avec noyaux, qui ont des organites. Les êtres vivants sont eucaryotes.

L'ancêtre commun a toutes les cellules vivantes est appelé "LUCA" (pour Last Universal Common Ancestor).


### le cytoplasme
C'est le contenu de la cellule eucaryote, a l'exception du noyau.

### les organites
Sont des composants structuraux a l'intérieur de la cellule spécialisés dans certaines fonctions (digestion, production d'énergie, déplacement).
Les organites peuvent être délimité par 0, 1 ou 2 membranes.
Exemple :
- rybosome (0)
- lisosomes (1)
- mitochondrie (2)

## Ont peut classer les cellules par tailles (des plus petites au plus grandes)

- Bactéries
- cellules animales
- cellules vegétales

### Les bactéries
Les bactéries sont les plus petites cellules. (environ un millier de bactéries dans un millimètres)

### les cellules animales
Les cellules animales n'ont pas d'enveloppe/paroi rigide, mais possédent un cytosquelette, un réseau de protéines qui parcourt le cytoplasme et confére une certaine rigidité.
Elles ont des formes très variable.

### les cellules végétales
Sont généralement les plus grandes.
Leur parois (celluloses) sont rigides et ont une forme rectangulaire.


:::info
Ce ne sont pas des cellules. Ils sont dans l'obligation de parasiter des cellules pour se reproduire.
Ils sont quand même constitué d'acide nucléique et de protéines, donc briques du vivants.
:::


#### Spécificité des cellules végétales
Elles en ont deux :
- La paroi squelettique (rigide) constitué de cellulose (Il s'agit d'un polysaccharide, tel l'amidon).
- organites particulier : les "plastes". Par exemple le chloroplaste est un plaste qui contient de la chlorophylle, qui est un pigment vert capable de photosynthèse.

A l'intérieur des cellules végétale, on peut trouver les **vacuoles** (délimitée par une membrane appelé tonoplaste). Cette vacuole peut contenir de l'eau (principalement), des solutés, du sacharrose qui sert de réserve, des pigments pour teinter les cellules (ex : antocyan). Elle occupe la majeur partie de la cellules végétale.
La vacuole peut exceptionnellement se retrouver dans certaines cellules animales (ex : la paramécie en a plusieurs qui remplissent des fonctions différentes).


### concept d'autotrophe et d'hétérotrophes
autotrophes : les cellules sont capables de se nourrir a partir de composés non organiques (donc minéraux). Elles convertissent la matière minérale en matière organiques. Les cellules végétales par exemple sont autotrophe car les cellules chlorophilienne leur permettent de réaliser la photosynthèse.
A contrario, les hétérotrophes ont besoin de matières organiques pour générer leur propres matière organique. Ce sont typiquement les cellules animales. Les mitochondries jouent un role important dans la transformation de la matière organique (réaction de respiration cellulaire).
Les champignons sont également hétérotrophes, ils conssoment la matière organiques (en décomposition).


## la membrane plasmique

:::warning
Bien distinguer ces trois termes : 
. membranes
. membranes plasmique (ou cytoplasmique ou plasmaleme)
. membranes cellulaire

-> La première notion "membrane" est une notion générale qui décrit une cloison entre deux compartiments.
-> La deuxième notion indique la membrane de la cellule qui sépare donc le cytoplasme du milieu extracellulaire.
-> La troisième concerne toutes les membranes (cytoplasmique ou celles des organites).
:::

La membrane plasmique est constitué d'une **mosaique fluide asymétrique**.
- Mosaique : a cause de sa composition hérétomoléculaire : une couche lipidique dans laquelle s'insére des protéines dites "globulaires".
- Fluide car les protéines et les phospholipides peuvent bouger au sein de la surface (rotation / translation / basculement, etc). La membrane est donc déformable.
- asymétrique car la partie tournée vers l'extérieur (extra cellulaire) présente des éléments caractéristiques qu'on ne retrouve pas de l'autre coté. Les oses (glucides) sont tournés vers l'extérieur par exemple. A l'inverse, le cytosquelette n'est présent qu'a l'intérieur des cellules (intracellulaire). Enfin, les protéines insérés ont un sens d'inbrications dans la membrane.

Cette structure caractéristique de la membrane plasmique se retrouve sur l'ensemble des membranes cellulaire (membranes des organites a l'intérieur de la cellule). Lorsqu'on parle de "lumière" dans une cellule, on va parler de l'intérieur des organites.

La structure des membranes est **universelle**, on parle de membrane **"unitaire"**.

### les lipides de la membrane (les phospholipides)

Ils sont **amphipathiques**, c'est à dire que l'extrémité phosphate du phospholipide ("la tête", qui est polaire) est hydrophile. L'autre partie, les deux chaines d'acides gras, sont hydrophobes et non polaires. Ont dit donc d'une molécule qui réunit ses deux aspects qu'elle est amphipathique.
Le cholesterol et les glycolipides sont également des molécules amphipathiques.

### Les protéines membranaires

Il en existe de plusieurs formes, avec plusieurs rôles.

Les protéines sont ancrée dans la membranes parce qu'elles possédent un espace hydrophobe qui "match" avec l'espace hydrophobe de la membrane lipidique hydrophobe. Cette portion est une structure en hélice. A contrario, en dehors de cet espace, elle présentes des formes qui sont solubles dans l'eau, qui sont hydrophile. 
On va parler de protéines **intrinséques**, car elle font partie de la membrane de par ce mécanisme hydrophile/phobe.
A contrario, il existe des protéines membranaires dites **extrinséques**. Celles ci sont intégralement hydrophiles. Elles sont situés de part et d'autre de la membrane sans jamais la traverser. les protéines extrinséques sont forcément fixés a des molécules intrinséques (lipides ou protéines) (liaisons non covalentes, donc faibles).
A l'image d'un fil de couture, une protéine peut avoir plusieurs hélices dans la membrane (on va dire par exemple si elle passe trois fois dans la membrane qu'elle a trois domaines trans-membranaire). un ensemble d'hélices peuvent former un canal qui permettra le passage d'éléments, comme des ions. On parlera de canal ioniques.
Si une protéine traverse la membrane de l'extérieur a l'intérieur de la cellule, on parle de protéine **transmambranaire**

Leur différents rôles :
Comme vu,
- elles peuvent servir de **canaux** de passage lorsqu'elles forment un tunnel
- de **transport**
- **récepteurs** (des hormones ou des neuro transmetteurs par exemple).
- **D'adhérence** elles vont s'accrocher à d'autres éléments externe 

### Les sucres membranaires

Le **glycocalyx** constitue une membrane sucrée qui recouvre la surface extra cellulaire de la membrane plasmique.
Il joue différents roles : 
- protecteur
- reconnaissance de la membrane par d'autres éléments
- adhérence entre cellule

### les prolongements cellulaires
Il en existe plusieurs type : 
- Les **microvillosités** sont les excroissances des cellules dans le but d'étendre la surface pour maximiser les échanges avec le milieu extra cellulaire. Exemple : les cellules de l'intestin assimilent davantage d'elements nutritifs.
- Les **flagelles** (exemple : les spermatozoides ont une flagelle pour se propulser)
- les **cils** (exemple : la paramécie est une cellule eucaryote ciliée servent comme la flagelle, mais sont plus nombreux et plus petites.)

Les prolongement des flagelles et des cils contiennent un axe de cytosquellette.

### les jonctions cellulaires
Il en existe trois types : 
- **Les jonctions serrées** qui sont étanches
- **Les jonctions "adhérentes" (Desmosomes)** qui sont des sortes de rivets, de boutons pressions qui permettent une cohésion forte entre cellules. Ex : les cellules du coeurs qui doivent rester solidaires les unes des autres ont ce genre de liaisons.
- **Les jonctions ouvertes** ("gap"). Il s'agit de sorte de tunnel entre cellules qui leur permettent d'échanger des informations, des petites molécules. Exemple : les cellules cardiaques sont ainsi toutes synchronisés dans leur activité.


## permeabilité de la membrane

La membrane bloque naturellement des éléments, et en acceptes un certains nombre d'autres. Elle a donc une permeabilité dite "sélective".
Sont bloqués : 
- les ions
- des glucoses (saccharose)
- des acides aminés
- l'eau (polarisé)
- des protéines
Passent au travers :
- urée
- Glycérol
- Ethanol
- Des lipides (Stéroides)
- Certaines molécules : O2, CO2, N2, Benzénes, etc

### Transport d'éléments
un transport est dit **"passif"** lorsque la cellule ne dépense aucune énergie (ATP) pour transporter une substance de l'extérieur vers son intérieur, au travers de sa membrane. Il s'agit d'un transport dit "spontané".

#### Par diffusion
La diffusion est la manière dont un soluté se "diffuse" dans la solution liquide, de manière à être homogénéisé.
La solution tend a rendre homogène la répartition de la molécule. Elle annule la différence (on parle de **gradient** de concentration) de concentration.
La diffusion est donc le mouvement d'un composant qui va d'un site ou elle est élevée vers un site ou elle est moins élevé afin d'annuler le gradient (différence). Cette diffusion peut se faire au travers d'une membrane, a condition que la membrane soit perméable.

Pour passer, il faut comme conditions que les molécules ne soient pas chargés électriquement et n'ai pas une taille trop importantes.
Peuvent ainsi être diffusées de manière passive :
- les lipides (enzymes type cholesterol)
- certains gazs (CO2)
- des molécules de **petites tailles** **polaire** qui n'**ont pas de charges**. L'ethanol, l'urée, l'eau.

A contrario ne passent pas :
- Les molécules de glucoses ne peuvent pas passer la couche lipidique a cause de leur tailles, bien que polaire et non chargée.
- Les ions et les molécules polaires qui sont chargés électriquement dans les deux cas ne passent pas non plus (ATP, acides aminées).


### Diffusion des ions
Les ions peuvent diffuser au travers la membrane via des processus autres.
- Via des protéines qui servent de canaux de passage. On parle de **canaux ioniques** pour ces **protéines transmembranaires**.
Il existe différents type de canaux pour les différents ions.
Exemple : 
- Le canal sodique (pour le sodium)
- Le canal potassique (potassium)
- Le canal calcique (calcium).

La permeabilité de la membrane est différentes en fonction des ions, ce qui va engendrer une Différence De Potentiel (ddp) de part et d'autre de la membrane.


### Diffusion de l'eau
Il existe également des protéines transmembranaire dédié au passage de l'eau qu'on appelle **"Aquaporine"**, qui servent de "Canaux à eau".

:::info
L'eau passe déjà par défaut, mais rencontre quelques difficultés pour passer a cause de la couche hydrophobique. Hors, certaines cellules (rein, sang) ont besoin de conssomer beaucoup d'eau, d'ou les aquaporines.

On noteras également que des aquaporines acceptent également d'autres substances tel l'uré par exemple.
:::


### l'osmolarité.

l'osmolarité est la concentration totale de particules de soluté dans une solution.

Exemple : le plasma est de 300 milli osmoles par litre.
- Plus une osmolarité d'une solution est grande > + il y a de soluté dans la solution > + la concentration en eau (solvant) de la solution est faible.

**L'Osmose** est le mouvement de solvant (l'eau) qui passe d'un conpartiment a un autre a travers une membrane dans le but d'équilibré son rapport au soluté. Il s'agit d'un flux dit passif (n'induit pas d'énergie). Par exemple, si on se retrouve face a une particule **semi-permeable**, c'est à dire qui n'accepte que le passage de l'eau (ou n'importe quel solvant) mais pas du soluté, seul l'eau peut circuler pour rééquilibrer et tendre vers l'homogénéité de la solution des deux cotés du compartiment.

:::info:::
On parle de membrane semi-permeable quand une membrane empeche un soluté dit "non diffusible" de passer, mais pas le solvant par exemple.
:::

Lorsque des cellules perdent de l'eau par osmose (par exemple plongé dans un milieu trop riche en soluté par rapport a l'intérieur de leur cellule), elles subissent une **plasmolyse**.

A contrario, si l'intérieur de la cellule est supérieur en nutriment par rapport a l'extérieur, l'eau va le pénétrer, et on dit qu'il rentre en **turgescence**.

Dans le corps humain, on retrouve principalement trois grands compartiments liquidiens entre lesquels se joue de l'osmose.
- le plasma (le sang. A peu près 3L)
- le liquide interstitiel (le milieu dans lequel nos cellules vivent) (12 L)
- le liquide intracellulaire (25 L)


#### La pression osmotique.

La pression osmotique représente la pression qu'il faudrait en théorie exercer sur un compartiment pour contrecarrer la diffusion d'un solvant d'un comportiment A vers un compartiment B via une membrane semi-perméable. Cette pression osmotique est quantifiable par rapport a l'osmolarité d'une solution. Par exemple, plus un compartiment a une osmolarité forte, plus la pression osmotique sera élevée.

### la notion de tonicité

C'est la capacité qu'a l'osmose de changer la forme des cellules animales (les végétales ont les parois rigide).

- Un milieu qui n'affecte pas la forme de la cellules est dit **isotonique**.
- Mais si par exemple, un globule rouge se vide de son eau, on dit que le milieu qui entoure la cellule est **hypertonique**
- L'inverse (le **soluté non diffusible** dans le milieu est inférieur a l'intérieur de la cellule), le milieu extérieur est donc **hypotonique**.

La tonicité est lié a la présence de solutés non diffusible.

### la filtration

Il s'agit du **transfert passif** d'eau a l'intérieur de la cellule via la membrane ou un capillaire sanguin. Ce transfert est non sélectif (les solutés sont embarqués avec l'eau). On parle de **"filtrat"**, sous l'effet d'une pression, appelé **"gradient hydrostatique"**, qui va faire passer le filtrat de la zone au gradient élevé vers le gradient plus bas.
Ce processus prend place par exemple :
- dans les capilaires sanguin, les cellules qui forment les tuyaux (cellules endothéliales) compressent les globules rouges, générant une pression hydrostatique sur ceux ci qui délivrent donc de l'eau.
- Au niveau du rein, le sang qui arrive est sous forte pression sanguine, ce qui fait que de l'eau quitte les capilaires sanguins par **filtration**.


### transport facilité passif
Il s'agit d'une autre **protéine intrinséque membranaire spécifique** qui permet de transporter les molécules sélectionnées au travers de la membrane dans le sens décroissant du gradient. Par rapport a la diffusion "simple" (par défaut, comme pour le CO2 par exemple), elle permet d'accélérer les transferts. Elle est néanmoins plafonnée par le nombre de protéines présentes sur la membrane. Quand une protéine ne véhicule qu'un seul type de substance, on parle d'**uniport**.
Exemple de transport facilité : le glucose. Celui ci ne peux pas traverser la couche lipidique. Mais des protéines (**GLUT**) reconnaissent le glucose et le font rentrer dans la cellule.

### transports Actifs
Ce sont basiquement des **pompes** (en général ils transportent des ions).
Ils ont tendance a générer un gradient (un différentiel de concentration), c'est à dire allez contre la force de diffusion. 
Comme vu précédemment, ce sont des protéines membranaires intrinséque.
Actifs, cela signifie que ces transporteurs utilisent de  l'ATP (Adénosine Triphosphate). L'emploi d'ATP implique que la protéine a un "**site catalytique**" qui lui permet d'**hydrolyser** l'ATP (en ADP). Cette protéine est donc une enzyme. Et les transporteurs actifs qui hydrolysent l'ATP sont appelées **ATPase** + le nom de ce qu'ils transportent. Exemple : l'ATPase Sodium.
:::info
Exemple : l'ATPase Na+ K+ (ions Sodium /ions Potassium)

A chaque conssomation d'ATP, elle rejette 3 ions sodium a l'extérieur de la cellule, et en paralléle, prélève a l'extérieur 2 ions potassium.
::::

#### transports actifs secondaires

Ce transporteur ne nécessite pas d'ATP. Il va se reposer sur le **gradient électro-chimique** qui va être utilisé comme source d'énergie.
En réalité, la protéine va transporter deux molécules, une dans le sens de son gradient, et une a contre courant de son gradient. le premier composé transporté dans le sens du gradient est appelé ion moteur.

Un cotransport peut être symport ou un antiport. 
symport = les éléments sont transportés dans le meme sens
antiport = l'un des éléments va dans un sens, l'autre dans l'opposé.

:::info
Il existe par exemple en tant que transport actif secondaire, le symport glucose sodium (SGLT = Sodium Glucose Transporter), qui importe dans la cellule du sodiumm (ion moteur) et du glucose.
:::


### transports vésiculaires

Ou aussi appelé transport **cytotique**.
Ce mode de transport affecte les molécules de tailles importantes (macromolécules). Ces transferts ne vont pas faire appel a des transporteurs, mais a la plasticité de la membrane. Les vésicules sont des sortes de "ballons" de lipides prélevé de la membrane plasmique. C'est pour cela qu'on va parler de **vésicule membranaire**. Elles peuvent se déplacer a l'intérieur de la cellule pour délivrer les éléments.
Les vésicules membranaires qui servent a apporter des éléments de l'extérieur a l'intérieur de la cellule font de l'**endocytose** (apport d'éléments) ou de **l'exocytose** (rejet d'éléments hors de la cellule).

Exemple de composés qui subissent de l'exocytose : 
- l'insuline (qui controle la quantité de sucre dans le sang)
- les neurotransmetteurs (l'acétylcholyne)
- les enzymes diggestive du pancréas

#### l'exocytose
Le composé a rejeter est d'abord enfermé dans une membrane, puis il y a reconnaissance et fusion ce cette membrane cellulaire avec la membrane plasmique, ce qui conduit à l'expulsion des éléments, et a l'apport de nouveaux éléments pour la membrane. 

#### l'endocytose
C'est le processus inversé. Par un processus **d'invagination**, la membrane récupére des éléments externe pour les transmettre à l'intérieur sous forme de vésicules.

---

### lexique autour de l'endocytose

- Phagocytose
La phagocytose c'est un processus d'**endocytose** particulière. C'est en général une cellule **spécialisé** qui va faire rentrer une macromolécule comme une bactérie, une protéine ou un morceau de cellule. Elle fait rentrer du matériel **solide**.

- Phagocyte
Un phagocytet est la cellule spécialisé qui pratique donc la phagocytose. Les sortes de "machoires"/prolongations que font les phagocyte pour "avaler" les éléments sont appelés "**pseudopode**" (exemple : macrophage / certains globule blanc)

- Phagosome
Un phagosome est une vésicule membranaire qui se retrouve donc dans le cytosol. On parle aussi de **vacuole**.


- Phagolysosome
Résultat de la fusion entre le phagosome et le **lysosome**, dans le but de "digérer" l'élément rapporté par le phagosome depuis l'extérieur. En effet, le lysosome est un organiste plein d'enzymes diggestives.

- La pinocytose
C'est comme une phagocytose, sauf qu'il s'agit d'un liquide qui est alors absorbé. La pinocytose se distingue de la phagocytose également par le fait qu'elle ne forme pas de pseudopodes, mais a la place va s'invaginer. De plus, la pinocytose engendre de **petite** vésicule, alors que la phagocytose en engendre de taille importante.

- l'endocytose a récepteur
Cette endocytose recéle sous la membrane (coté cytosol) qui s'invagine un tapis de récepteurs appelé "**Clathrine**". Coté extérieur, la membrane plasmique a des protéines pour détecter les substances dont la cellule a spécifiquement besoin. Ces récepteurs vont donc détecter et fixer ces substances.
Exemple et explications : Dans le sang, des "LDL" (Micro Protéine de Transport) circulent. Elles transportent par exemple le cholesterol nécessaire aux cellules. L'endocytose des LDL nécessite des récepteurs sur la membrane plasmique. Lorsque les LDL sont absorbés par endocytose, la vésicule une fois formée va se retrouver donc tapissé a l'extérieur de Clathrine. On parle là de vésicule **tapissée**. Ensuite, la clathrine est retirée (on parle ensuite de vésicule **lisse**) et la vésicule est ensuite fusionnée avec un lysosome pour être intégrée.


## Le potentiel de repos.
Toutes nos cellules au repos présentent un **potentiel membranaire de repos** (aussi appelé ddp pour différence de potentiel). Ce différentiel est généralement dans le sens d'une électro positivité dans le sens extra cellulaire (le milieu externe est chargé positivement par rapport a l'intérieur de la cellule donc). Ce qui fait que la membrane plasmique interne est chargé négativement, la membrane externe positivement.

---
Explication de l'origine du potentiel de la membrane :
Comme vu précédemment, la membrane est peu perméable aux ions Sodium (Na+), mais un peu plus aux ions Potassium (K+).
En **permanence**, il y a une sortie plus importante d'ions Potassium que d'entrée d'ions Sodium. Il y a donc plus de charges + qui sortent par rapport à celles qui entrent. La différence de permeabilité membranaire engendre donc le potentiel de différence électrique.

### conséquence de ce potentiel électrique
Les ions sodium, qui sont dans le plasma, (ions positifs, cations) vont donc subir deux forces pour rentrer dans la cellule :
- la force électrique (ils sont positif et l'intérieur de la cellule est négatif)
- la force osmotique, avec le gradient.

Pour les ions potassium, c'est l'inverse.
- la force osmotique pousse les ions sodium vers l'extérieur, car il y en a moins dans le plasma
- Mais la force électrique limite cette poussée osmotique, elle contrebalance.

A retenir donc : Le transfert des éléments est conditionné par deux forces différentes. La force osmotique, et la force électrique. On parle parfois de **gradient electro-chimique** pour invoquer le bilan de ses deux dynamiques.

### le maintien du potentiel de repos
Pour maintenir le potentiel, il faut maintenir la différence de gradient de part et d'autre de la membrane. Si on laisse les ions sortir et rentrer par les canaux ioniques, rapidement on arrivera a un équilibre ou il y aura aucun gradient. Hors il faut maintenir ce différentiel.
C'est donc là ou intervent l'ATPase Na+K+ qui va compenser ce que les canaux ioniques font naturellement. Du coup l'ATPase va faire rentrer les ions potassiums, et expulser les ions sodium (Na+) dans les proportions vues (3 ions sodiums expulsée, 2 ions potassium rentré en conssomant un ATP)


`}</Markdown>
        </div>
    );
}

export default page;
