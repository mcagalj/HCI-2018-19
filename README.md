# Korisnička sučelja <!-- omit in toc -->

<!-- markdownlint-disable MD007 -->

- [Opis projekta](#opis-projekta)
  - [Što se očekuje od studenta](#Što-se-očekuje-od-studenta)
  - [Zadaće i korisnici koje aplikacija treba podržati](#zadaće-i-korisnici-koje-aplikacija-treba-podržati)
- [Korisni (tehnički) savjeti i reference](#korisni-tehnički-savjeti-i-reference)
  - [Bits of JavaScript](#bits-of-javascript)
  - [Bits of responsive layout](#bits-of-responsive-layout)
  - [Bits of GatsbyJS](#bits-of-gatsbyjs)
  - [Primjer izvještaja](#primjer-izvještaja)

## FESB, Računarstvo, 2018/19 <!-- omit in toc -->

Osnovni cilj predmeta **Korisnička sučelja** je upoznati studente s važnim aspekatima procesa dizajna (sučelja) usmjerenog krajnjim korisnicima. Studenti će usvojene principe i heuristike (eng. _usability heuristics_) primjeniti u okviru praktičnog projekta koji će realizirati tijekom semestra. Studenti će također imati priliku upoznati i koristiti moderne tehnologije i alate za izradu _front-end_ aplikacija.

Studentski projekt biti će zasnovan na [Gatsby generatoru statičkih stranica](https://www.gatsbyjs.org). Gatsby interno koristi tehnologije i alate kao što su: [React](https://reactjs.org), [GraphQL](https://graphql.org), [webpack](https://webpack.js.org), [react-router](https://reacttraining.com/react-router) i druge.

U ovom repozitoriju profesori će objavljivati upute, dijelove koda, konfiguracijske skripte, i druge sugestije a sa svrhom povećanja produktivnosti studenta tijekom rada na projektu.

## Opis projekta

Izrada projekta odvijati će se u nekoliko faza kako je to prikazano na slici u nastavku. Kako možemo vidjeti na slici, u svakoj fazi iteriramo između _dizajna_, _implementacije_ i _evaluacije_.

<!-- markdownlint-disable MD033 -->
<p align="center">
    <img src="./img/interface_design_process.png" width="600px" height="auto"/>
    <br><br>
    <em>Iterative design process (source: <a href="http://saul.cpsc.ucalgary.ca/pmwiki.php/HCIResources/HCILectures">Saul Greenberg</a>)</em>
</p>
<!-- markdownlint-disable MD033 -->

Ugrubo, razlikujemo sljedeće faze u ovom procesu:

1. **Razumijevanje zadaća i korisnika koje sustav/aplikacija treba podržati**

   > NAPOMENA:  
   > Vi niste tipičan korisnik. Ne znate koje zadaće su važne korisnicima. Da bi bili sigurni da imate dobar opis zadaća trebate ih evaluirati zajedno s korisnicima. _Features_ nisu taskovi. Gomilanjem _feature_-a vaša aplikacija neće biti bolja. Razumijevanje stvarnih potreba korisnika je ključ uspjeha.

2. **Izrada _low-fidelity_ i _high-fidelity_ prototipa i njihova evaluacija**

   > NAPOMENA:  
   > Pokušajte odoljeti porivu da u ovoj fazi otvorite vaš preferirani editor i započnete programirati. U ovoj fazi razvoja projekta vaš _dobar prijatelj_ su olovka i papir, razni grafički editori (npr. [Inkscape](https://inkscape.org/en/)), alati za brzu izradu prototipa (npr. [Balsamiq](https://balsamiq.com), [Draw.io](https://www.draw.io/), [Sketch](https://www.sketchapp.com), [inVision](https://www.invisionapp.com)). Provedite evaluaciju vašeg prototipa s kolegama ili profesorima i popravite uočene _usability bug_-ove.

3. **Implementacija prototipa i njegova evaluacija**

   U ovoj fazi konačno možete otvoriti svoj preferirani editor i započeti s implementacijom.

   > NAPOMENA:  
   > Nemojte zaboraviti na evaluaciju u ovoj fazi (provedite _heurističku evaluaciju_ vašeg produkta i/ili _usability testing_ sa stvarnim korisnicima).

### Što se očekuje od studenta

Student će razviti odgovarajuću web aplikaciju korištenjem prethodno navedenih alata. Od gore navedene tri faze iterativnog procesa dizajna, student će realizirati samo dvije: fazu 2 (_izrada i evaluacija prototipa_) i fazu 3 (_implementacija sustava i njegova evaluacija_). Zadaće i korisnike koje vaša aplikacija treba podržati opisani su u nastavku.

Po realizaciji projekta student će pripremiti finalni izvještaj i prezentaciju. Student će prezentirati status projekta kroz semestar (u terminima po dogovoru). Završen projekt podrazumijeva predan finalni izvještaj i finalnu prezentaciju (preduvjeti za upis konačne ocjene). Profesori će osigurati svu podršku potrebnu za uspješnu realizaciju projekta.

### Zadaće i korisnici koje aplikacija treba podržati

#### Zahtjevi i zadaće <!-- omit in toc -->

- Vaša aplikacija će se koristiti iz web preglednika
- Aplikacija će se koristiti na uređajima razičite veličine (_smartphones_, tableti, laptopi i desktop računala)
- Korisnik može pretraživati/filtrirati produkte ili usluge
- Broj produkata/usluga koje nudite putem web aplikacije veći je od 20
- Korisnik će koristiti aplikaciju kao gost ili će se logirati u vlastiti profil
- Broj _javnih_ stranica (one stranice koje ne zahtjevaju logiranje u sustav) je 5
- Jedna od javnih stranica je blog (blog mora sadržavati minimalno 20 _postova_ koje mogu uključivati slike, videa, _code snippet_-e)

#### Korisnici <!-- omit in toc -->

Vaša aplikacija namjenjena je širokom krugu korisnika. Baza korisnika uključuje i one ljude čija informatička pismenost nije na vašoj razini. Korisnici tako mogu biti i osobe starije životne dobi (60 i više godina), koji sporo tipkaju, imaju slabiji vid, sluh.

## Korisni (tehnički) savjeti i reference

### [Bits of JavaScript](bits-of-javascript)

U direktoriju [bits-of-javascript](/bits-of-javascript) možete naći niz JavaScript _code snippet_-a koji demonstriraju neke specifičnosti JavaScript programskog jezika. _Snippet_-e možete izvoditi direktno u konzolnom prozoru web preglednika.

> NAPOMENA:  
> Dio koda također možete izvoditi u [Node.js](https://nodejs.org) _shell_-u. Pri tome možda želite koristiti alat [`nodemon`](https://nodemon.io) koji automatskih restarta vaš Node proces pri promjeni koda.

### [Bits of responsive layout](bits-of-layout/README.md)

U direktoriju [bits-of-layout](/bits-of-layout) možete naći primjer responzivne web stranice realizirane primjenom _CSS Grid_-a. Ovaj primjer pokazuje zašto u budućnosti (odnosno već i danas) možda ne trebate CSS _framework_-e kao što je _Bootstrap_.

### [Bits of GatsbyJS](bits-of-gatsby/README.md)

Upute, savjeti i _pointeri_ vezani za razvoj [JAM](https://jamstack.org/) web stranica/aplikacija u GatsbyJS _framework_-u.

### Primjer izvještaja

U direktoriju [docs](docs/HCI_Idemo-u-kino_Ursic-Fiamengo.pdf) možete naći ogledni primjer izvještaja iz projekta u okviru ovog kolegija. Vodite računa da se radi o izvještaju "starije generacije" studenata koji su imali ponešto drugačije zadatke u okviru projekta (npr., intervjue s korisnicima).
