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
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1_LSMR";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/laurasanchezsanchez/DIU";
        
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
                goal1: "Quiere hacer un viaje con su pareja y aprovechar para encontrar inspiración para su TFG.",
                touch1: "Calendario",
                feel1: "5",
                con1: "Debe adecuar las fechas para que coincida con las vacaciones de su pareja y no sea periodo de clases.",
                ima1: "cartoon-shaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet hosteles económicos en Granada",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Los hosteles que encuentran no se adecúan al presupuesto fijado.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar primero lugares turísticos/históricos a visitar en las fechas planeadas",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Le preocupa que debido a su lesión de tobillo deba desplazarse a pie de un lugar a otro.",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide proponer a su pareja buscar el alojamiento juntos",
                touch4: "Pareja",
                feel4: "2",
                con4: "Su pareja no muestra mucho interés en el viaje.",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra el hostel 4uHostel con reserva disponible en las fechas que busca.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Su pareja aún no le ha dado el dinero y debe realizar la reserva hoy debido a la baja disponibilidad.",
                ima5: "cartoon-PCsurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva el hostel para 5 días y contrata las visitas a los lugares deseados",
                touch6: "Ordenador",
                feel6: "5",
                con6: "Una de las visitas es más barata para estudiantes, por lo que su pareja deberá pagar un poco más.",
                ima6: "cartoon-PCtyping.png",
                
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
                goal1: "Desea realizar un viaje a Granada para publicar contenido en sus RRSS además de realizar patrocinios.",
                touch1: "Agenda/Calendario",
                feel1: "5",
                con1: "Debe ponerse en contacto con las empresas de Granada para fijar fechas.",
                ima1: "cartoon-writting2.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide contactar con otros influencers para organizar quedadas.",
                touch2: "Movil (RRSS)",
                feel2: "4",
                con2: "Ponerse de acuerdo con los influencers y las marcas es frustrante.",
                ima2: "cartoon-phoning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Las marcas le confirman los días y planes organizados.",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Le informan de que el alojamiento no está incluido en el contrato.",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca alojamientos económicos en los que hospedarse cerca de sus destinos.",
                touch4: "Ordenador",
                feel4: "3",
                con4: "Los hoteles ofertados en internet son demasiado caros.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Sus amigos influencers le recomiendan un hostel situado en el centro.",
                touch5: "Móvil (RRSS)",
                feel5: "4",
                con5: "No está segura de que sea una buena opción, ya que no es capaz de situarse bien en el mapa y desconocía lo que era un hostel.",
                ima5: "cartoon-why.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Realiza la reserva on-line en las fechas previstas.",
                touch6: "Ordenador (reserva on-line)",
                feel6: "5",
                con6: "Deberá buscar información acerca de cómo llegar desde la estación de tren.",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



