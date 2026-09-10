/* ═══════════════════════════════════════════════════════════════════════════
   LISTADOS DE LA SOLICITUD DE EPP
   ═══════════════════════════════════════════════════════════════════════════

   Este archivo es la ÚNICA fuente de datos de epp.html. Para actualizarlo no
   hace falta tocar la página: se edita este archivo y listo.

   CÓMO ACTUALIZAR
   1. Abrir este archivo en GitHub y pulsar el lápiz (Edit).
   2. Seleccionar TODAS las líneas que están entre las comillas ` de la lista
      que se quiere reemplazar y pegar encima lo copiado desde Excel.
      Al copiar desde Excel las columnas ya vienen separadas por tabulación,
      que es justo lo que espera este archivo.
   3. Commit changes.

   REGLAS
   - Una fila por línea; las columnas se separan con UNA tabulación.
   - No usar el carácter ` (acento grave) dentro de los textos.
   - Las líneas en blanco y las que empiezan con # se ignoran.
   - Si un código de EPP aparece repetido, se usa la primera aparición.

   Si algún listado queda vacío o mal pegado, la página lo avisa con un
   recuadro rojo al abrirla, en vez de fallar en silencio.
   ═══════════════════════════════════════════════════════════════════════════ */


/* ───────────────────────────────────────────────────────────────────────────
   1. EPP DE BODEGA CENTRAL
   Columnas:  CÓDIGO <tab> DESCRIPCIÓN
   ─────────────────────────────────────────────────────────────────────────── */
const EPP_TSV = `
900109-001	PANTALON ACTIVEX SOLDADOR DESCARNE TR, TALLA L
900109-002	CHAQUETA ACTIVEX SOLDADOR DESCARNE TR, TALLA L
900109-003	PROTECTOR SOLAR FPS 50+ LEBLON (POMO 190GR)
900109-004	GUANTE CABRITILLA BLACK BULL BASIC IMP,9,BLANCO, BLACK BULL (PAR)
900109-005	BARBIQUEJO PLASTICO NACIONAL S/TALLA, S/COLOR (PAR)
900109-006	GUANTE MULTIPROTEC FLEX L-1000 ANTICORTE NACIONAL, TALLA N°8, GRIS FORCE (PAR)
900109-007	GUANTE MULTIPROTEC FLEX L-1000 ANTICORTE NACIONAL, TALLA N°9, GRIS FORCE (PAR)
900109-008	GUANTE MULTIPROTEC FLEX L-1000 ANTICORTE NACIONAL, TALLA N°10, GRIS FORCE (PAR)
900109-009	RESPIRADOR 3M 6300 NACIONAL, L, S/COLOR, 3M (PAR)
900109-010	BOTIN PROFLEX 108 NACIONAL, 40, CAFÉ, PROFLEX (PAR)
900109-011	BOTIN PROFLEX 108 NACIONAL, 41, CAFÉ, PROFLEX (PAR)
900109-012	BOTIN PROFLEX 108 NACIONAL, 42, CAFÉ, PROFLEX (PAR)
900109-013	BOTIN PROFLEX 108 NACIONAL, 38, CAFÉ, PROFLEX (PAR)
900109-014	BOTIN PROFLEX 108 NACIONAL, 39, CAFÉ, PROFLEX (PAR)
900109-015	BOTIN PROFLEX 108 NACIONAL, 43, CAFÉ, PROFLEX (PAR)
900109-016	BOTIN PROFLEX 108 NACIONAL, 44, CAFÉ, PROFLEX (PAR)
900109-017	GUANTE ANSELL HYFLEX 11-600 NEGRO TALLA N°7 (PAR)
900109-018	GUANTE ANSELL HYFLEX 11-600 NEGRO TALLA N°8 (PAR)
900109-019	GUANTE ANSELL HYFLEX 11-600 NEGRO TALLA N°9 (PAR)
900109-020	CASCO MASPROT MPC-221 A/TELA AZUL
900109-021	CASCO MASPROT MPC-221 A/TELA BLANCO
900109-022	CASCO YACO TRABAJOS DE ALTURA, BLANCO
900109-023	RODILLERA GETPRO ECONOMICA (PAR)
900109-024	VISOR YALICO FV-252 CLARO 8"X15,5" TEMP
900109-025	POLAINA DESCARNE (PAR)
900109-026	FILTRO 3M 2091 P100 P/PART Y P/OL G (PAR)
900109-027	MASCARA MEDIO ROSTRO 3M 7502 T-M
900109-028	BOTIN PROFLEX PF 122C CAFÉ T-37 (PAR)
900109-029	BOTIN PROFLEX PF 122C CAFÉ T-38 (PAR)
900109-030	BOTIN PROFLEX PF 122C CAFÉ T-39 (PAR)
900109-031	BOTIN PROFLEX PF 122C CAFÉ T-40 (PAR)
900109-032	BOTIN PROFLEX PF 122C CAFÉ T-41 (PAR)
900109-033	BOTIN PROFLEX PF 122C CAFÉ T-42 (PAR)
900109-034	BOTIN PROFLEX PF 122C CAFÉ T-43 (PAR)
900109-035	BOTIN PROFLEX PF 122C CAFÉ T-44 (PAR)
900109-036	BOTIN PROFLEX PF 122C CAFÉ T-46 (PAR)
900109-037	LENTE O ANTIPARRA IRON-X SEGURIDAD CLARO IX-09 (ANTIFOG)
900109-038	LENTE O ANTIPARRA IRON-X SEGURIDAD GRIS IX-09 (ANTIFOG)
900109-039	CUBRENUCA POPLIN NARANJO- SEG38-0222
900109-040	GUANTE IRON-X CUT PU IGX-500 CORTE D T/S
900109-041	LINTERNA O LAMPARA FRONTAL RECARGABLE NACIONAL S/TALLA, S/TALLA, S/COLOR, STEELPRO
900109-042	AMORTIGUADOR FLOYD 1.5MTS CODIGO 41402067 SEGMA
900109-043	ARNES SEGMA COBRA LUMBAR CODIGO 41104202 NACIONAL, TALLA XXL, S/COLOR
900109-044	ARNES COBRA LUMBAR (ADP) MULTITALLA (M-XL) CODIGO 41104202E
900109-045	AMORTIGUADOR  DE CAIDAS FLOYD (2 107-EST) CODIGO 41402006 - 1.5MTS
900109-046	ESTROBO STONES TUBULAR ELASTICO G/ESC 1.8MTS SEGMA CODIGO 41401052
900109-047	BOTIN TEMPEST DIELECTRICO PROFLEX PF 108 RD T-39 (PAR)
900109-048	BOTIN TEMPEST DIELECTRICO PROFLEX PF 108 RD T-40 (PAR)
900109-049	BOTIN TEMPEST DIELECTRICO PROFLEX PF 108 RD T-41 (PAR)
900109-050	BOTIN TEMPEST DIELECTRICO PROFLEX PF 108 RD T-42 (PAR)
900109-051	BOTIN TEMPEST DIELECTRICO PROFLEX PF 108 RD T-43 (PAR)
900109-052	PIJAMA CAPA IRON-X PRIMERA CAPA IMPOR 100% POLIESTER T-S
900109-053	PIJAMA CAPA IRON-X PRIMERA CAPA IMPOR 100% POLIESTER T-M
900109-054	PIJAMA CAPA IRON-X PRIMERA CAPA IMPOR 100% POLIESTER T-L
900109-055	PIJAMA CAPA IRON-X PRIMERA CAPA IMPOR 100% POLIESTER T-XL
900109-056	PIJAMA CAPA IRON-X PRIMERA CAPA IMPOR 100% POLIESTER T-2XL
900109-057	TAPON O PROTECTOR DE OIDO LIBUS REUSABLE QUANTUM C/BL C/CO NRR/26DB 900473 (PAR)
900109-058	PROTECTOR DE GUANTES DE DIELECTRICO P-12 CLASE 00-0-1 SEG11-006 (PAR)
900109-059	GUANTE LINEPRO DIELECTRICO CLASE 1 7500V ROJO 106-8108 T-9
900109-060	CHALECO GEOLOGO GABARDINA AMARILLO FLUOR LOGO Y NUMERO DE EMERGENCIA T-S
900109-061	CHALECO GEOLOGO GABARDINA AMARILLO FLUOR LOGO Y NUMERO DE EMERGENCIA T-M
900109-062	CHALECO GEOLOGO GABARDINA AMARILLO FLUOR LOGO Y NUMERO DE EMERGENCIA T-XL
900109-063	CHALECO GEOLOGO GABARDINA AMARILLO FLUOR LOGO Y NUMERO DE EMERGENCIA T-XXL
900109-064	CHALECO GEOLOGO GABARDINA AMARILLO FLUOR LOGO Y NUMERO DE EMERGENCIA T-L
900109-065	PARKA TERMICA LIGHT M/L HOMBRE NEGRO T-S 08341
900109-066	PARKA TERMICA LIGHT M/L HOMBRE NEGRO T-M 08341
900109-067	PARKA TERMICA LIGHT M/L HOMBRE NEGRO T-L 08341
900109-068	PARKA TERMICA LIGHT M/L HOMBRE NEGRO T-XL 08341
900109-069	BOTIN PROFLEX 113R TALLA N°37 (PAR)
900109-070	BOTIN PROFLEX 113R TALLA N°38 (PAR)
900109-071	BOTIN PROFLEX 113R TALLA N°39 (PAR)
900109-072	POLERA CUELLO PIQUE CON LOGO, 60/40 ML, NEGRO T-S (VARON)
900109-073	POLERA CUELLO PIQUE CON LOGO, 60/40 ML, NEGRO T-M (VARON)
900109-074	POLERA CUELLO PIQUE CON LOGO, 60/40 ML, NEGRO T-L (VARON)
900109-075	POLERA CUELLO PIQUE CON LOGO, 60/40 ML, NEGRO T-XL (VARON)
900109-076	POLERA CUELLO PIQUE CON LOGO, 60/40 ML, NEGRO T-XXL (VARON)
900109-077	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-S (AZUL)
900109-078	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-M (AZUL)
900109-079	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-L (AZUL)
900109-080	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-XL (AZUL)
900109-081	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-XXL (AZUL)
900109-082	PANTALON AZUL CON LOGO SICE Y NUMERO DE EMERGENCIA T-44 (NEGRO)
900109-083	MICROPOLAR NEGRO ML, CON LOGO SICE Y NUMERO DE EMERGENCIA,  T-S (VARON)
900109-084	MICROPOLAR NEGRO ML, CON LOGO SICE Y NUMERO DE EMERGENCIA T-M (VARON)
900109-085	MICROPOLAR NEGRO ML, CON LOGO SICE Y NUMERO DE EMERGENCIA T-L (VARON)
900109-086	MICROPOLAR NEGRO ML, CON LOGO SICE Y NUMERO DE EMERGENCIA T-XL (VARON)
900109-087	MICROPOLAR NEGRO ML, CON LOGO SICE Y NUMERO DE EMERGENCIA T-XXL (VARON)
900109-088	BOTIN PROFLEX PF 122C CAFÉ T-45 (PAR)
900109-089	BOTIN NORSEG NEW VANCOUVER THINSULATE NS10201189 YOJ T-41 (PAR)
900109-090	PARKA SIBERIA INSULADA KUIN HOMBRE NEGRO T-2XL
900109-091	JEANS PRELAVADO 13.5 OZ 1 ALGODÓN TALLA-42
900109-092	JEANS PRELAVADO 13.5 OZ 1 ALGODÓN TALLA-44
900109-093	JEANS PRELAVADO 13.5 OZ 1 ALGODÓN TALLA-46
900109-094	JEANS PRELAVADO 13.5 OZ 1 ALGODÓN TALLA-48
900109-095	JEANS PRELAVADO 13.5 OZ 1 ALGODÓN TALLA-50
`;


/* ───────────────────────────────────────────────────────────────────────────
   2. PERSONAL (maestro SICE)
   Columnas:  RUT <tab> NOMBRES <tab> APELLIDO PATERNO <tab> APELLIDO MATERNO
   El RUT puede ir con o sin puntos; la página lo formatea sola.
   ─────────────────────────────────────────────────────────────────────────── */
const PERSONAL_TSV = `
13007195-3	Patricio Antonio	Cubillos	Armijo
11385774-9	Lilian Viviana	Garcia	Ramos
11843767-5	Marco Antonio	Gutierrez	Gajardo
29267072-9	Juan Jose	Rosa	Mendez
11228431-1	Maria Virginia	Vasquez	Figueroa
27071300-9	Victor Eduardo	Acosta	Davalillo
26214354-6	Pablo Jose	Alvarez	Marin
23702238-6	Sol Del Valle	Diaz	Gimenez
10846962-5	Rodrigo Leonardo	Espinoza	Fredes
26417754-5	Dayanna Virginia	Gil	Motta
16375919-5	Tamara Angelica	Gonzalez	Contreras
9989427-K	Pedro Alberto	Lucabeche	Medina
12297688-2	Sonia Claudia	Miranda	Castillo
8139925-5	Jaime Orlando	Muñoz	Burgos
22001742-7	Mikel	Narvarte	Ijurco
29267076-1	Sofia	Olcina	Aracil
20425697-7	Camila Isidora	Orellana	Nuñez
16339884-2	Erika Zulema	Pavez	Valderrama
15473178-4	Denisse Andrea	Pino	Diaz
25647297-K	Luis Daniel	Rosal	Villamizar
27240575-1	Maria Andreina	Soto	Rangel
18668220-3	Loreto Del Carmen	Suarez	Huaico
10956261-0	Crihstian Luis	Trigo	Tapia
12736110-K	Luis Esteban	Valenzuela	Avello
20604489-6	Cristian Ignacio	Adasme	Gonzalez
17875299-5	Ignacio Patricio	Alvarez	Nieto
20888377-1	Cristobal Joaquin	Balcazar	Acevedo
17879874-K	Javier Antonio	Barrueto	Contreras
15437428-0	Carlos Marcelo Jose	Cabezas	Menares
20054374-2	Diego Alonzo	Correa	Zenteno
18354645-7	Javier Ignacio Enrique	Erazo	Godoy
20424875-3	Felipe Ignacio	Galvez	Diaz
18540384-K	Alvaro Sebastian	Gonzalez	Arriagada
17751191-9	Fernando Daniel	Leiva	Menares
22098481-8	Francisco Daniel	Leiva	Parada
15706829-6	Aldo Jose	Loyola	Loyola
25450545-5	Michelzon Josue	Montañez	Chavez
17053411-5	Antonio Isaac	Narvaez	Soto
17150345-0	Felipe Antonio	Nevens	Moya
12897879-8	Pablo Alberto	Nuñez	Cofre
14372861-7	Jacqueline Grace	Parra	Diaz
15451270-5	Daniel Alejandro	Pranao	Antifilo
12558504-3	Oscar Hugo	Rodriguez	Cabello
21237901-8	Cristobal Jesus	Salazar	Fica
19803565-3	Francisco Javier	Salazar	Luna
19244455-1	Felipe Andres	San Juan	Troncoso
22703842-K	Miguel Angel	Santillan	Olguin
13975846-3	Jorge Antonio	Sarmiento	Segura
21959579-4	Alexis Alejandro	Tapia	Catalan
19275154-3	Felipe Ignacio	Toledo	Mella
20311950-K	Jorge Andres	Valdes	Soto
21820617-4	Johans Javier	Vallejos	Pizarro
19315383-6	Jeremy Daniel	Vega	Guajardo
26720944-8	Jose Francisco	Villanueva	Chavez
21388487-5	Matias Francisco	Villarroel	Palma
22419213-4	Felipe Ignacio	Ahumada	Guzman
26819239-5	Yhaxhuhary Lorena	Angulo	Baldallo
25863993-6	Roneheli Benito	Arenas	Cedeño
26054421-7	Otto Guillermo	Chavez	Gonzalez
17782416-K	Angelo Alejandro	Donoso	Pozo
19528649-3	Yazmin Alejandra	Epulef	Palma
19566254-1	Enzon Edinzon Leandro	Escanilla	Riffo
20417312-5	Ruben Fernando	Filosa	Carcamo
20054334-3	Felipe Eduardo	Fuentes	Mendez
16796686-1	Camila Belen	Gomez	Barrera
20388513-K	Gianfranco	Hernandez	Salazar
16901765-4	Daniel Alejandro	Ibaceta	Vergara
20556733-K	Felipe Ignacio	Leon	Arriagada
27113393-6	Edgar Alexander	Mendoza	Mendoza
20751593-0	Nicolas Andres	Mieres	Chacaltana
21156816-K	Michael Amador	Norambuena	Geraldo
26392658-7	Benjamin Enrique	Nucette	Uzcategui
18440032-4	Marco Andree	Orellana	Pizarro
26474202-1	Tayron Enrique	Palma	Galue
14903296-7	Gabriel Eliseo	Pinto	Alvarez
12983323-8	Gerardo Del Carmen	Reyes	Calabrano
19385938-0	Jose Alfredo	Reyes	Yañez
19319030-8	Danilo Enrique	Rivera	Galaz
21230890-0	Cristian Alexander	Rojas	Torres
19482033-K	Clara Victoria	Rosado	Coliqueo
26535504-8	Juan Leonardo	Sanchez	Rodriguez
20882792-8	David Alonso	Sepulveda	Cortes
20391189-0	Felipe Ismael Iandi	Silva	Araneda
20614329-0	Jostin Ignacio De Jesus	Soto	Rios
21051003-6	Benjamin Armando	Tedeschi	Gonzalez
27142464-7	Jesus Amado Jose	Theis	Franco
20041945-6	Ignacio Andres	Valdevenito	Castillo
26112519-6	Franyel Aquiles	Velasquez	Nuñez
22668796-3	Alvaro Alexander	Villagra	Pinto
19039064-0	Cristopher Alejandro	Villalobos	Guerrero
9034348-3	Sergio Miguel	Herrera	Sepulveda
18046031-4	Carlos Matias	Gonzalez	Parra
26269986-2	Eduardo Cesar	Minaya	Reyes
17021486-2	Francisco Alejandro	Muñoz	Bustos
16114410-K	Roberto Exequiel	Orellana	Beauvais
14311505-4	Marta Cecilia	Roca	Chico
19528128-9	Daniel Francisco	Alarcon	Parra
14378813-K	Sergio Alejandro	Cofre	Cofre
16520025-K	Francisco Daniel	Garate	Perez
15901067-8	Christopher Sebastian	Hidalgo	Pizarro
15606803-9	Alex Rodrigo	Lorca	Valenzuela
18925717-1	Gonzalo Antonio	Nuñez	Sanhueza
25981340-9	Percy Roberto	Robles	Sanchez
25457528-3	Juan Carlos	Rojas	Salazar
17909971-3	Antonio Andres	Aballay	Medina
19848759-7	Allan Luis	Acevedo	Miranda
19333659-0	Eric Eduardo	Ahumada	Lagos
13369755-1	Raul Patricio	Alarcon	Castillo
20843597-3	Bastian Ignacio	Alarcon	Rebolledo
16719877-5	Lissette Stephania	Alarcon	Venegas
11185160-3	Christian Alberto	Albie	Shimono
15095612-9	Rodrigo Antonio	Albucco	Ariztia
19431439-6	Marcelo Pablo	Alcaino	Castillo
16553431-K	Jonathan Ismael	Alegria	Coronado
21073626-3	Alvaro Vicente	Andrades	Arenas
16247960-1	Luis Andres	Aracena	Castillo
8414980-2	Jimmy Rodrigo	Aranda	Mora
12223953-5	Arturo Alberto	Aravena	Delgado
15095715-K	Richard Daniel	Araya	Navarro
18698301-7	Diego Alfonso	Arias	Aburto
15662877-8	Erick Alexis	Arias	Guerra
20613616-2	Jorge Issac	Ascencio	San Martin
12300067-6	Hector Francisco	Astudillo	Valenzuela
13012920-K	Juan Sergio Alejandro	Bahamondes	Flores
12757524-K	Nelson Rodrigo	Baldevenito	Poblete
14167795-0	Flavio Alberto	Barahona	Gallardo
13483886-8	Cristobal Paul	Barra	Espinoza
12192525-7	Marcelo Andres	Barra	Gonzalez
15627443-7	Michael Andres	Barrientos	Valenzuela
18224830-4	Sebastian Alejandro	Basaes	Godoy
17140789-3	Flavio Guisseppe	Bavestrello	Aranda
10218226-K	Alfredo Alejandro	Beardesley	Romero
10004805-1	Pablo Antonio	Beltran	Fuentes
19440253-8	Harols Dixon	Benavides	Troncoso
21705246-7	Jorge Fernando	Borquez	Riquelme
13789305-3	Daniz Alonso	Bravo	Hernandez
26233481-3	Adrian Jose	Briceño	Arcila
15094813-4	Juan Carlos	Brito	Martinez
16695585-8	Gustavo Alejandro	Bustamante	Lara
17158902-9	Juan Hector	Bustamante	Navarrete
17943736-8	Francisco Alejandro	Bustos	Leon
19811686-6	Marcelo Antonio	Caamaño	Rivera
16182915-3	Israel Patricio	Cabrera	Silva
12022360-7	Rafael Eduardo	Cabrera	Turra
13752577-1	Cristian Alejandro	Caceres	Muñoz
21053783-K	Erik Gonzalo	Caceres	Perez
26510616-1	Tito Antonio	Cadena	Aguilar
25939701-4	Daniel Enrique	Calzadilla	Galindo
17162581-5	Juan Guillermo	Campos	Becerra
11401978-K	Rodrigo Eduardo	Campos	Leiva
19503833-3	Daniel Jesus	Candia	Garrido
18220649-0	Berly Antonieta	Caniguan	Trujillo
13226572-0	Marco Antonio	Cardenas	Recabarren
17896610-3	Jose Alfredo	Caro	Caro
18188667-6	Juan Ignacio	Carrasco	Ferreira
12447785-9	Jose Antonio	Castillo	Calderon
17983293-3	Pablo Andres	Castillo	Reyes
16692978-4	Cesar Antonio	Castillo	Viscarra
21626063-5	Kevin Matias	Castro	Silva
18068981-8	Fabian Luis Alejandro	Castro	Torres
18722706-2	Jocelyn Fernanda	Catalan	Diaz
18762868-7	Fabian Alexis	Cayupi	Umanzor
10296775-5	Esteban Mauricio	Cebrero	Gomez
21564717-K	Maximiliano Andres	Cepeda	Olmedo
25956324-0	Yilber Josue	Chona	Velazco
16967692-5	Braulio Rene	Cisternas	Oyanedel
19836183-6	Luis Alfredo	Cisternas	Saavedra
25587833-6	Yilber Jose	Contreras	Albarran
26814923-6	Carlos Yhonaiker	Contreras	Mantilla
19564134-K	Tomas Hans	Contreras	Neira
18381447-8	Jeanpiere Juvenal	Cordero	Cordero
20019076-9	Manuel Alejandro	Cornejo	Pereira
18012831-K	Carla Sailim	Cortes	Poblete
11255640-0	Rigoberto Alfonso	Corvalan	Gonzalez
13295633-2	Oscar Patricio	Costa	Gonzalez
26985269-0	Yohandry Manuel	Coy	Hurtado
18163411-1	Fabian Ernesto	Cuadra	Arevalo
19192194-1	Alberto Alejandro	Delgado	Fuentes
13432667-0	Miguel Angel	Diaz	Alegria
16664769-K	Rodrigo Andres	Diaz	Domaccin
17282975-9	Daisy Juri	Diaz	Martini
17009584-7	Alvaro Andres	Diaz	Sanchez
16277914-1	Saul Rodolfo	Diaz	Villagra
19570060-5	Sergio Enrique	Dinamarca	Briones
10455036-3	Claudio Alejandro	Donoso	Aravena
18529963-5	Carlos Alvaro	Donoso	Echeverria
12499511-6	Miguel Angel	Duarte	Tapia
16635548-6	Basilio Andres	Echeverria	Cisternas
13690087-0	Paola Karina	Encina	Cid
16771682-2	Cristobal Andres	Escarate	Benavides
17555155-7	Sergio Esteban	Escarate	Benavides
20938597-K	Alejandro Jorge Ignacio	Escobar	Mujica
19063685-2	Javier Ignacio	Escobar	Pinilla
16726127-2	Mariela Natalia	Escobar	Vasquez
15740755-4	Francisco Javier	Farias	Molina
27936052-4	Gustavo Adolfo	Fernandez	Lopez
18385316-3	Diego Patricio	Fernandez	Porzio
17508568-8	Jose Alfredo	Ferreira	Calvio
17926805-1	Fabian Alejandro	Figueroa	Bahamondes
10498590-4	Mario Francisco	Figueroa	Espinosa
19728642-3	Rodolfo Andres	Figueroa	Jaña
16500633-K	Daniel Orlando	Figueroa	Miranda
16768080-1	Luciano Guillermo Esteban	Figueroa	San Martin
26716427-4	Roinel Antonio	Flores	Marsiglia
16395881-3	Roberto Andres	Fuentes	Lavin
19331894-0	Marco Ignacio	Fuentes	Saez
16280906-7	Jose Alfredo	Fuentes	Torres
16277348-8	Alejandro Esteban	Gajardo	Olave
14568839-6	Christian Rene	Gallardo	Carvajal
18383274-3	Juan Jose Eduardo	Garcia	Guzman
19096395-0	Felipe Esteban	Gomez	Caniuqueo
21003862-0	Fabian Martin Alexis	Gonzalez	Alvarez
17545466-7	Victor Manuel	Gonzalez	Amaya
18786794-0	Gustavo Alejandro	Gonzalez	Cornejo
19563805-5	Gonzalo Ignacio	Gonzalez	Garrido
17162951-9	Anibal Jesus	Gonzalez	Gonzalez
17790168-7	Esteban Andres	Gonzalez	Lagos
20922517-4	Sebastian Andres	Gonzalez	Mercado
19144599-6	Matias Ignacio	Gonzalez	Toro
19787030-3	Juan Benjamin	Guardia	Ramos
12448060-4	Guillermo Heriberto	Guerra	Figueroa
21265103-6	Guillermo Ignacio	Guerra	Roman
17569061-1	Michael Marco	Guerrero	Dorat
15329713-4	Natalia Andrea	Hermosilla	Fuentes
19121257-6	Sebastian Matias	Hernandez	Cuevas
16407922-8	Miguel Alejandro	Hormazabal	Garrido
13517631-1	Carlos Enrique	Hueche	Queupumil
14550252-7	Jorge Antonio	Ibacache	Arancibia
18390113-3	Francisco Alejandro	Ibañez	Correa
21094017-0	Ignacio Eduardo	Irribarra	Carrasco
18706101-6	Marco Patricio	Jalil	Amestica
21295418-7	Ignacio Francisco	Jara	Lara
18108268-2	Pablo Luciano	Jara	Molina
12956043-6	Jorge Segundo	Jimenez	Ordenes
20012293-3	Diego Andres	Jimenez	Ordenes
18729677-3	Jose Andres	Jineo	Huaiquiñir
21938169-7	Lukas Fabian Antonio	Jofre	Venegas
19055430-9	Sebastian Ignacio	Labarra	Barrientos
16027987-7	Ruben Francisco	Lagos	Lagos
14910287-6	Mauricio Andres	Lara	Arias
11677850-5	Jorge Patricio	Larenas	Cisterna
19706105-7	Byron Enrique	Leiton	Pardo
13992852-0	Edwin Andres	Leon	Bravo
15061701-4	Jorge Orlando	Leon	Espindola
19878243-2	Nicolas Andres	Lopez	Caro
20575397-4	Jordan Ariel	Lopez	Levancini
10850926-0	Christian Marcelo	Lopez	Riva
17647189-1	Luis Elias	Loyola	Reyes
16952771-7	Miguel Esteban	Luengo	Raillan
17304247-7	Jonathan Alejandro	Luengo	Raillan
16486018-3	Felipe Andro	Magno	Muñoz
20424601-7	Jeffry Elias	Maldonado	Aguilera
15890269-9	Victor Hugo	Maldonado	Lara
16487111-8	Reynaldo Andres Pascual	Mancilla	Piñones
15258206-4	Ariel Ramiro	Manquilef	Zambrano
18564641-6	Harold Marcos	Marchant	Huerta
17584261-6	Guillermo Andres	Marin	Bravo
18269540-8	Jose Eduardo	Marin	Rojas
20396728-4	Rafael Jaime	Martinez	Arellano
25809939-7	Javier Coromoto	Martinez	Escobar
19055180-6	Felipe Andres	Mejias	Moya
10611933-3	Hernan Daller	Melo	Hernandez
25703929-3	Fabinson	Mendez	Leonel
21309401-7	Ignacio Andres	Mendoza	Aburto
21721002-K	Jose Antonio	Merino	Garate
16545250-K	Daniel Eduardo	Milla	Castillo
19481655-3	Julio Manuel	Millao	Jimenez
14195195-5	Luis Patricio	Miranda	Mansilla
18235986-6	Nicolas Antonio	Molina	Aravena
18027704-8	Bryan Alexis	Montecinos	Chavez
15800470-4	Priscilla Elizabeth	Montecinos	Pinto
12671126-3	Marcelo Ricardo	Moraga	Canales
20638108-6	Ignacio Andres	Morales	Caceres
15852587-9	Jose Manuel	Morales	Ramos
22839257-K	Xavier Leonardo	Moreira	Tigua
9518618-1	Roberto Enrique	Muñoz	Torrejon
19192847-4	Joaquin Michael	Mura	Calderon
14411511-2	Roxana	Neira	Burgos
8750889-7	Israel Enrique	Nova	Avello
17887505-1	Victor Alejandro	Novoa	Hormazabal
13875685-8	Patricia Lorena	Olguin	Bravo
11778511-4	Nelson Eduardo	Oliva	Mella
17118485-1	Macarena Valentina	Ordenes	Ugarte
16698954-K	Jose Abraham	Orellana	Leon
16250709-5	Daniela Ninniverg	Orellana	Pinto
17036490-2	Jose Manuel	Ormeño	Diaz
10365750-4	Carlos Alejandro J.	Ortega	Arrue
27143725-0	Orlando Enrique	Ortega	Perez
14742533-3	Jose Luis	Ortiz	Flores
12400262-1	Ariel Del Transito	Osorio	Ojeda
25664372-3	Jimmy De Jesus	Pacheco	Lozano
10477763-5	Carolyn Marcela	Paillavil	Vasquez
16136921-7	Violeta Del Carmen	Parra	Quevedo
19013127-0	Felipe Andres	Perez	Escobar
18189461-K	Daniela Alejandra	Perez	Ramirez
18766718-6	Claudio Alexis	Pilquiman	Cordova
18670065-1	Ricardo Andres	Pino	Morales
18150749-7	Andres Ignacio	Pinto	Jerez
19336744-5	Ives Ignacio	Poblete	Poblete
16813228-K	Alejandro Fabian	Quezada	Maldonado
17353554-6	Francisco Eduardo	Quezada	Sepulveda
13156356-6	Nicolas Marcelo	Quintana	Guentian
16500100-1	Alexis Israel	Ramirez	Maturana
12851257-8	Carlos Patricio	Ramirez	Saez
19227841-4	Matias Nicolas	Ramos	Cheuquepan
16761852-9	Rodrigo Omar	Ramos	Molina
18269233-6	Jonathan Felipe	Ramos	Ponce
18997660-7	Christopher Giovanni	Raunigg	Nuñez
19470214-0	Christian Eduardo	Rebolledo	Rojas
17577806-3	Darwin Emilio	Recabarren	Carrasco
16623966-4	Roberto Antonio	Rencoret	Herrera
13991351-5	Carlos Bernardo	Reyes	Ahumada
17203834-4	Rodrigo Alonso	Riquelme	Aninao
15973876-0	Alejandro Francisco	Riquelme	Rodenas
16561797-5	Jonathan Alejandro	Rocco	Lloyd
20204625-8	Leandro Alexander	Rocha	Jimenez
17514361-0	Danilo Alejandro	Rojas	Garcia
19338872-8	Gonzalo Ignacio	Rojas	Infante
18468717-8	Mario Andres	Rojas	Poblete
26009461-0	Jonathan Jose	Romero	Piña
16079087-3	Ricardo Antonio	Romo	Barra
18686695-9	Jose Domingo	Rozas	Luna
17477879-5	Dhiego Ariel	Ruiz	Toro
18298596-1	Erick Sebastian	Saavedra	Saavedra
13289899-5	Luis Ambrosio	Saez	Castro
18196408-1	Braulio Esteban	Saez	Noches
17905711-5	Joshua Sebastian	Saez	Pacheco
26344874-K	Gustavo Jose	Salazar	.
17848789-2	Maximiliano Andres	Sanchez	Arias
20281558-8	Benjamin Fernando	Sanchez	Castillo
26899599-4	Victor Manuel	Sanchez	Materan
17728902-7	Eduardo Hernan	Sanchez	Sanchez
18138064-0	Luis Alejandro	Sanchez	Troncoso
20361710-0	Bayron Nicolas	Sanchez	Troncoso
20244456-3	Camilo Andres	Sanhueza	Berrios
19443628-9	Nicolas Wladimir	Santana	Pantoja
16385595-K	Axel Ieve	Schuffenegger	Bravo
12579181-6	Erik Andres	Segura	Vergara
14593910-0	Robert Angelo	Sepulveda	Benedetti
17951504-0	Daniel Alejandro	Sepulveda	Penrroz
15511690-0	Francisca Evelyn	Sepulveda	Sagredo
16546100-2	Josue Fernando	Sepulveda	Tapia
15955051-6	Cristian Javier	Serrano	Peña
12305320-6	Alejandro Malaquias	Sierra	Orellana
16972155-6	Jaime Andres	Silva	Henriquez
19235566-4	Victor Jesus	Soto	Aguirre
19259157-0	Boris Ignacio	Soto	Parra
15075415-1	John Emilio	Tapia	Vera
18996395-5	Guillermo Alejandro	Tene	Alvarez
16103246-8	Diego Esteban	Toledo	Cataldo
17300618-7	Javier Ulises	Toro	Cancino
17245228-0	Victor Antonio	Torres	Jimenez
19508473-4	Manuel Ignacio	Torres	Reyes
19879707-3	Claudio Ignacio	Ulloa	Inostroza
16444472-4	Jose Alberto	Ulloa	Soto
25226248-2	Jendri Jose	Urbina	Ortega
20789186-K	Katerin Alejandra	Uribe	Opazo
18800102-5	Andres Eduardo	Urrutia	Urrutia
18730966-2	Alan Felipe	Valenzuela	Burgos
16947872-4	Erik Elier	Varela	Poblete
17675833-3	Sebastian Eduardo	Vargas	Castro
16332289-7	Esteban Ignacio	Vargas	Irribarra
17279708-3	Jorge Andres	Vargas	Rivas
16632389-4	Luis Cesar	Vega	Antimil
20557986-9	Jordan Alexis	Venegas	Acuña
9364486-7	Hector Enrique	Vergara	Perez
19781981-2	Juan Manuel	Vicencio	Azocar
21023161-7	Michael Andres	Vidal	Jorquera
16761153-2	Diego Hernando	Villagran	Vera
18510959-3	Jorge Andres	Villanueva	Bernal
7413167-0	Ricardo Antonio	Villanueva	Gonzalez
10755532-3	Fabian Patricio	Villarroel	Uribe
20390184-4	Guillermo Fernando	Viveros	Perez
20101168-K	Christian Esteban	Werlinger	Romero
12494317-5	Juan Carlos	Zamorano	Valdivia
18871185-5	Nelson Andree	Hernandez	Feest
17632488-0	Rodrigo Andres	Molina	Nahuelquin
18306021-K	Juan Pablo	Valenzuela	Ilich
12673093-4	Alfonso Gustavo	Acevedo	Muñoz
16407860-4	David Esteban	Aedo	Huenulao
26098098-K	Christopher Simpson	Alvarado	Nieto
12850708-6	Ricardo Andres	Arellano	Zuñiga
19719052-3	Camilo Eduardo	Arevalo	Rios
20534970-7	Ignacio Cristhoper	Ayala	Saez
17327766-0	Daniel Orlando	Camilla	Ortiz
19752485-5	Jaime Alonso	Castillo	Perez
11327403-4	Fabian Alberto	Collao	Lafferte
13916042-8	Oscar Orlando	Correa	Rivera
15889655-9	Cristian Salvador	Cortes	Rojas
16689797-1	Carol Del Transito	Cruz	Torres
11876272-K	Cesar Eduardo	Gonzalez	Jerez
27218544-1	Juan Rodolfo	Guardado	Castillo
16174281-3	Ivania Valeria	Gutierrez	Astudillo
15667915-1	Francisco Javier	Jaramillo	Pino
13458659-1	Vanessa Olivia	Larenas	Salinas
26885600-5	Jose Enrique	Leal	Gonzalez
8699166-7	Pablo Andres	Montenegro	Zambrano
17577147-6	Guillermo Israel	Morales	Sanchez
15617775-K	Rodrigo Andres	Navarrete	Bustos
19151877-2	Cristobal Ricardo	Ramos	Correa
13538949-8	Alexis Samuel	Rodriguez	Rios
9267025-2	Censorino Pascual	Rojas	Gonzalez
19995930-1	Matias Sebastian Lucas	Sanchez	Cofre
20057455-9	Ismael David	Toro	Arenas
25476961-4	Richard Alexander	Villalobos	Sanchez
27197321-7	Angelo Andres	Yate	Rengifo
20052071-8	Jose Ignacio	Amestica	Valenzuela
27516097-0	David Agustin	Avila	Reyes
17027770-8	Diego Patricio	Barros	Contreras
19482890-K	Nicolas Alexis	Contreras	Robles
21467940-K	Benjamin Isaias	Curiche	Bellazzi
17879193-1	Nicolas Andres	Duran	Lastra
25356333-8	Anna Paula	Franco	Paz
17189206-6	Francisco Javier	Gallegos	Moya
19583770-8	Neftali Abraham	Garcia	Sepulveda
19233841-7	Bastian Alejandro	Garnica	Salinas
19821800-6	Alejandra Isabel	Henriquez	Peralta
21568641-8	Bastian David	Huichaqueo	Antilef
16296097-0	Francisco Javier	Ibaceta	Vergara
26981007-6	Marylu	Jimenez	Godoy
20449096-1	Kevin Patrick	Lopez	Carreño
27411691-9	Milagros Stefany	Martinez	Carriedo
26410076-3	John Fredy	Martinez	Morales
21390948-7	Kemish Alexis	Martinez	Sanchez
26501957-9	Ciro David	Matos	Ferrer
20060055-K	David Antonio	Mejia	Jara
18078545-0	Miguel Angel	Navarrete	Inostroza
20882521-6	Bairon Alejandro	Neira	Moya
20118258-1	Leonardo Andres	Palacios	Vera
18847153-6	Nicolas Daniel	Palma	Medina
21072527-K	Roberto Andres	Parra	Saez
22546607-6	Jostin Yadiel	Pizarro	Alvarez
26089675-K	Ronald Aly	Quiroz	Ovalles
18325330-1	David Benjamin	Reyes	Salinas
19958491-K	Benjamin Ignacio	Saez	Retamal
21262927-8	Bastian Rodrigo Jesus	Sandoval	Sandoval
21465055-K	Saray Antonia	Tapia	Jerez
19991850-8	Alonso Antonio	Ulloa	Casanova
20454714-9	Leonel Octavio	Vallejos	Nuñez
21119666-1	Sebastian Benjamin	Veas	Marileo
19918012-6	Nicolas Maximiliano	Venegas	Saavedra
26880970-8	Jose Francisco	Martinez	Bordones
19570560-7	Martin Andres	Cadiz	Cifuentes
12248512-9	Mauricio Alejandro	Cortes	Lopez
11210733-9	Nestor Manuel	Flores	Romero
20783213-8	Victor Andres	Galvez	Parraguez
15778064-6	Milton Antonio	Gonzalez	Sepulveda
17677536-K	Nicolas Esteban	Jara	Guzman
17783271-5	Emmanuel David	Jara	Mendez
18740067-8	Melany Francisca	Lazo	Astorga
21343926-K	Benjamin Andres	Maldonado	Moreno
17859132-0	Patricio Ignacio	Pau	Salinas
10088138-1	Jaime Eduardo	Rivera	Mancilla
17677114-3	Ronald Ignacio	Rodriguez	Wajner
21461221-6	Matias Ignacio	Rojos	Villalon
10668848-6	Juan Carlos	Valenzuela	Castro
15915287-1	Francisco Alejandro	Aguirre	Zapata
18692692-7	Ronald Henry	Cancino	Cancino
17419225-1	Valeria Alejandra	Huichipan	Padilla
16372234-8	Gustavo Adolfo	Ortubia	Astorga
7542821-9	Guillermo	Osorio	Pardo
7277448-5	Carlos Enrique	Osses	Pacheco
27961012-1	Diana Carolina	Robles	Henriquez
9728734-1	Eduardo Martín	Salinas	Correa
18242624-5	Luis Alberto	Sepulveda	Cortes
10318562-9	Avelino Antonio	Troncoso	Toro
19709670-5	Javier Ignacio	Carrasco	Quidel
20063682-1	Nicolas Andree	Martinez	Meza
16201263-0	Cristian Andres	Escobar	Muñoz
16858989-1	Carlos Ignacio	Robledo	Ledesma
17316971-K	Andres Esteban	Rojas	Hernandez
13778560-9	Luis Hernan	Sereño	Diaz
`;


/* ───────────────────────────────────────────────────────────────────────────
   3. QUIÉNES PUEDEN RETIRAR EPP
   Un RUT por línea. Cada uno debe existir en el listado de personal de
   arriba; de ahí se toma su nombre. Aparecen en el desplegable en este
   mismo orden.
   ─────────────────────────────────────────────────────────────────────────── */
const PREVENCIONISTAS_RUT = `
18242624-5
16972155-6
18354645-7
15606803-9
15473178-4
17419225-1
17859132-0
16689797-1
`;
