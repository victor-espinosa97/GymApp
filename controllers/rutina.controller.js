// Definimos los datos de las rutinas
const rutinas = {
    volumen: {
        "Pecho": [
            { ejercicio: "Press de banca", series: 4, repeticiones: 10 },
            { ejercicio: "Fondos en paralelas", series: 4, repeticiones: 10 },
            { ejercicio: "Aperturas con mancuernas", series: 4, repeticiones: 10 }
        ],
        "Espalda": [
            { ejercicio: "Dominadas", series: 4, repeticiones: 10 },
            { ejercicio: "Remo con barra", series: 4, repeticiones: 10 },
            { ejercicio: "Peso muerto", series: 4, repeticiones: 10 }
        ],
        "Piernas": [
            { ejercicio: "Sentadillas", series: 4, repeticiones: 12 },
            { ejercicio: "Prensa de piernas", series: 4, repeticiones: 12 },
            { ejercicio: "Extensiones de piernas", series: 4, repeticiones: 15 },
            { ejercicio: "Curl de piernas acostado", series: 4, repeticiones: 12 },
            { ejercicio: "Zancadas", series: 4, repeticiones: 10 },
            { ejercicio: "Elevación de talones de pie", series: 4, repeticiones: 15 }
        ],
        "Pantorillas": [
            { ejercicio: "Elevación de talones de pie", series: 4, repeticiones: 15 },
            { ejercicio: "Elevación de talones sentado", series: 4, repeticiones: 15 },
            { ejercicio: "Elevación de talones en máquina Smith", series: 4, repeticiones: 15 }
        ],
        "Hombros": [
            { ejercicio: "Press militar", series: 4, repeticiones: 10 },
            { ejercicio: "Elevaciones laterales", series: 4, repeticiones: 12 },
            { ejercicio: "Elevaciones frontales", series: 4, repeticiones: 12 },
            { ejercicio: "Pájaros", series: 4, repeticiones: 12 }
        ],
        "Bíceps": [
            { ejercicio: "Curl de barra", series: 4, repeticiones: 10 },
            { ejercicio: "Curl de concentración", series: 4, repeticiones: 12 },
            { ejercicio: "Curl de martillo", series: 4, repeticiones: 12 }
        ],
        "Tríceps": [
            { ejercicio: "Press francés", series: 4, repeticiones: 10 },
            { ejercicio: "Extensiones de tríceps en polea alta", series: 4, repeticiones: 12 },
            { ejercicio: "Fondos en paralelas", series: 4, repeticiones: 12 }
        ],
        "Trapecio": [
            { ejercicio: "Encogimientos de hombros con barra", series: 4, repeticiones: 12 },
            { ejercicio: "Encogimientos de hombros con mancuernas", series: 4, repeticiones: 12 },
            { ejercicio: "Remo al cuello", series: 4, repeticiones: 12 }
        ]
    },
    definicion: {
        "Pecho": [
            { ejercicio: "Press de banca inclinado", series: 5, repeticiones: 15 },
            { ejercicio: "Aperturas en máquina", series: 5, repeticiones: 15 },
            { ejercicio: "Flexiones en paralelas", series: 5, repeticiones: 15 }
        ],
        "Espalda": [
            { ejercicio: "Pull-ups", series: 5, repeticiones: 15 },
            { ejercicio: "Remo con mancuerna", series: 5, repeticiones: 15 },
            { ejercicio: "Hiperextensiones", series: 5, repeticiones: 15 }
        ],
        "Piernas": [
            { ejercicio: "Sentadillas", series: 4, repeticiones: 15 },
            { ejercicio: "Prensa de piernas", series: 4, repeticiones: 15 },
            { ejercicio: "Extensiones de piernas", series: 4, repeticiones: 15 },
            { ejercicio: "Curl de piernas acostado", series: 4, repeticiones: 15 },
            { ejercicio: "Zancadas", series: 4, repeticiones: 15 },
            { ejercicio: "Elevación de talones de pie", series: 4, repeticiones: 15 }
        ],
        "Pantorillas": [
            { ejercicio: "Elevación de talones de pie", series: 4, repeticiones: 20 },
            { ejercicio: "Elevación de talones sentado", series: 4, repeticiones: 20 },
            { ejercicio: "Elevación de talones en máquina Smith", series: 4, repeticiones: 20 }
        ],
        "Hombros": [
            { ejercicio: "Press militar", series: 4, repeticiones: 15 },
            { ejercicio: "Elevaciones laterales", series: 4, repeticiones: 15 },
            { ejercicio: "Elevaciones frontales", series: 4, repeticiones: 15 },
            { ejercicio: "Pájaros", series: 4, repeticiones: 15 }
        ],
        "Bíceps": [
            { ejercicio: "Curl de barra", series: 4, repeticiones: 15 },
            { ejercicio: "Curl de concentración", series: 4, repeticiones: 15 },
            { ejercicio: "Curl de martillo", series: 4, repeticiones: 15 }
        ],
        "Tríceps": [
            { ejercicio: "Press francés", series: 4, repeticiones: 15 },
            { ejercicio: "Extensiones de tríceps en polea alta", series: 4, repeticiones: 15 },
            { ejercicio: "Fondos en paralelas", series: 4, repeticiones: 15 }
        ],
        "Trapecio": [
            { ejercicio: "Encogimientos de hombros con barra", series: 4, repeticiones: 15 },
            { ejercicio: "Encogimientos de hombros con mancuernas", series: 4, repeticiones: 15 },
            { ejercicio: "Remo al cuello", series: 4, repeticiones: 15 }
        ]
    }
};

// Controlador para manejar la solicitud de la página de rutinas
exports.mostrarRutinas = (req, res) => {
    // Renderizamos la vista de rutinas y pasamos los datos de las rutinas como contexto
    res.render("rutinas/rutinas", { rutinas });
};
