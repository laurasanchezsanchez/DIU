/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Mei",
				Photo: "FotoMei.jpg",
				Quote: "La vida es para vivirla",
				Age: 24,
				Occupation: "Estudiante del Grado de Historia ",
				Family: "Con pareja desde hace 3 años",
				Location: "Murcia (Cartagena)",
				Character: "Tranquila, disfruta de pasar buenos momentos con sus amigos.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Disfrutar de un viaje romántico con su pareja.", "Encontrar inspiración para finalizar sus estudios.", "Descubrir una ciudad histórica, en la que pueda encontrar un trabajo relacionado con sus estudios."],
				Frustrations: ["Su pareja no está muy interesada en descubrir nuevos lugares, lo que supone una disputa.", "Hace 6 meses, sufrió una lesión de tobillo, de la aún no se encuentra completamente recuperada.", "No dispone de la posibilidad de realizar tantos viajes al año como le gustaría."],
				Bio: "Es de Cartagena, Murcia y lleva 6 años estudiando Historia, debido a que repitió varias asignaturas a causa de problemas familiares. Se acerca el fin de sus estudios, por lo que ha decidido realizar un viaje con su pareja a Granada, con el objetivo de inspirarse en esta histórica ciudad para realizar su Trabajo de Fin de Grado.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Se siente desubicada respecto a su Trabajo de Fin de Grado ya que todavía no ha sido capaz de elegir una temática. Sus amigas de la universidad han realizado viajes por Europa a lo largo del grado, y varias de ellas realizarán sus trabajos sobre las ciudades que han visitado. Por tanto, Mei desea realizar un viaje dentro de España, adaptándose a sus posibilidades, con el fin de encontrar inspiración.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Claudia Rosales",
				Photo: "FotoClaudia.jpg",
				Quote: "Sonríe para la vida, no solo para la foto.",
				Age: 28,
				Occupation: "Instagramer y TikToker",
				Family: "Soltera, tiene dos hermanos pequeños que viven con sus padres.",
				Location: "Madrid",
				Character: "Enérgica, alegre y con carácter explosivo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Realizar fotografías y publicarlas en sus redes sociales.", "Encontrar lugares turísticos para actualizar su perfil.", "Dar a conocer pequeños comercios.", "Conocer a otros influencers de la ciudad."],
				Frustrations: ["Es diabética.", "No es capaz de orientarse correctamente en lugares nuevos.", "A veces su conexión a internet falla."],
				Bio: "De pequeña, Claudia fue protagonista de un video viral en la red social Tuenti. Desde entonces, ha sido conocida en su entorno, y siempre ha buscado aumentar su popularidad. Durante los últimos años, se ha dedicado a realizar viajes, patrocinando marcas y lugares a través de sus redes. Algunos de los patrocinios no incluyen alojamiento en la ciudad de destino, por lo que busca un lugar económico próximo al centro de la ciudad, ya que permanecerá la mayor parte del tiempo fuera del alojamiento.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Claudia desea encontrar alojamiento en Granada, donde realizará patrocinios con 4 empresas, por lo que deberá desplazarse por la ciudad e informarse de los medios de transporte." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])