/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2022            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
    .controller("controller", ["$scope", function ($scope) {
        $scope.Grupo_ID = "DIU1_LSMR";
        $scope.Curso = "2021/22";
        $scope.Github_ID = "https://github.com/laurasanchezsanchez/DIU";

        $scope.JourneyIndex = 0;

        $scope.Journeys = [
            {

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

                Id: 0,
                Name: "Mei",
                Photo: "FotoMei.JPG",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere encontrar un alojamiento barato en el centro de Granada",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Los hoteles son demasiado caros por lo que empieza a buscar hosteles que encajen más en su presupuesto",
                ima1: "cartoon-PChappy.png",

                /*** PASO #2: DECICION ***/
                goal2: "Encuentra un hostel que dice estar en el centro de Granada llamado 4uHostel",
                touch2: "Ordenador (4uHostel)",
                feel2: "5",
                con2: "Mei es algo desconfiada y busca en google reseñas sobre el hostel",
                ima2: "cartoon-looking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra otra página web de 4uHostel casi igual a la que ha visitado anteriormente.",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Mei sospecha que alguna de las dos paginas es un engaño y se lo consulta a su pareja",
                ima3: "cartoon-deciding.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Una amiga de Mei se acerca al hostel y le confirman de que ambas páginas son suyas, por lo que Mei busca en 4uHostel una habitación disponible para pasar con su pareja durante los 5 días que habian fijado",
                touch4: "Ordenador (4uHostel)",
                feel4: "4",
                con4: "El resultado que aparece son literas y aparece una habitación donde hay más literas. La página no especifica si dormirá más gente en esa habitación y sólo se muestran 2 fotografías.",
                ima4: "cartoon-thinking.png",

                /*** PASO #5: ANALIZA ***/

                goal5: "Consulta con su pareja, aunque a Mei no le ha dado buena impresión el Hostel",
                touch5: "Ordenador",
                feel5: "2",
                con5: "Su pareja se niega a quedarse en ese hostel ya que buscan una habitación con una cama de matrimonio donde dormir ellos dos solos y no están seguros de cómo será ese hostel. Les falta mucha información y no les da buena espina.",
                ima5: "cartoon-KO.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Deciden buscar otro hostel cerca del centro donde puedan elegir una habitación con cama de matrimonio y no les falte ningún tipo de información antes de ir.",
                touch6: "Ordenador",
                feel6: "2",
                con6: "Descartan 4uHostel por falta de información.",
                ima6: "cartoon-PCangry.png",

            },
            {
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

                Id: 1,
                Name: "Claudia Rosales",
                Photo: "FotoClaudia.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Claudia busca en booking un hostel donde pasar unos días en Granada",
                touch1: "Ordenador (Booking)",
                feel1: "5",
                con1: "Encuentra 4uHostel con una buena reseña y a muy buen precio",
                ima1: "cartoon-PChappy.png",

                /*** PASO #2: DECICION ***/
                goal2: "Consulta las fotos del hostel desde Booking y le gusta mucho porque es muy colorido y se puede hacer buenas fotografías en él.",
                touch2: "Ordenador (Booking)",
                feel2: "5",
                con2: "Busca el hostel en internet y ve que hay 2 webs iguales anunciando el sitio. No le da muy buena espina.",
                ima2: "cartoon-PCsurprised.png",

                /*** PASO #3: ACTUA ***/

                goal3: "No sabe si ir a Granada en autobús o en su coche, por lo que busca dentro de la página si se da algún tipo de información o recomendaciones sobre este tema.",
                touch3: "Ordenador (4uHostel)",
                feel3: "4",
                con3: "Ve información sobre la llegada en autobús pero no está claramente explicado, por lo que busca información acerca de si hay parking dentro del hostel o aparcamiento gratuito cerca.",
                ima3: "cartoon-why.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Ve en la web que hay un parking a 100 metros del hostel, pero no pone más información y Claudia no sabe si ese parking es gratuito o no.",
                touch4: "Ordenador (4uHostel)",
                feel4: "3",
                con4: "Claudia quiere llamar al hostel para asegurarse del precio del parking pero al empezar en 858 no sabe si tiene una tarifa especial de llamada y en ningún sitio de la web se le informa que ese teléfono no tiene ninguna tarifa extra especial.",
                ima4: "cartoon-thinking.png",

                /*** PASO #5: ANALIZA ***/

                goal5: "Al buscar la manera de llegar al hostel en coche ha visto que el servicio de toallas tiene un coste de 2€, pero no sabe exactamente a qué se refiere.",
                touch5: "Ordenador (4uHostel)",
                feel5: "2",
                con5: "Como en la web no informa de nada más del tema de toallas, Claudia asume que no habrá toallas en el hostel.",
                ima5: "cartoon-PCangry.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Claudia decide buscar otro hostel que le de información clara y disponga de los servicios básicos gratuitos.",
                touch6: "Ordenador",
                feel6: "1",
                con6: "Decide busca otro hostel aunque valga un poco más pero tenga clara su ruta al llegar y no tenga imprevistos, ya que el coste del servicio de toallas no le ha dado buena impresión.",
                ima6: "cartoon-going.png",



            }
        ];

        $scope.model = $scope.Journeys[0];

    }])



