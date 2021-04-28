var correctas = 0;
var incorrectas = 0;

document.getElementById("correctas").innerHTML = correctas;
document.getElementById("incorrectas").innerHTML = incorrectas;

var pregunta = {
    pregunta: "¿En qué año descubrio Colón America?",
    opciones: "1894,1492,1623,1925",
    correcta: 1,
    puntuacion: 1
};

var pregunta2 = {
    pregunta: "¿Cuáles son los colores de la bandera de Colombia?",
    opciones: "Amarillo-Azul-Rojo,Verde-Rojo-Violeta,Fucsia-Naranja",
    correcta: 0,
    puntuacion: 1
};

var pregunta3 = {
    pregunta: "¿Cuándo ocurrió el Bogotazo?",
    opciones: "24 de julio de 1956,4 de julio de 1991,9 de abril de 1948",
    correcta: 2,
    puntuacion: 1

};

var pregunta4 = {
    pregunta: "¿En qué fecha ocurrió la masacre de las bananeras?",
    opciones: "Diciembre 6 de 1928,1 de diciembre de 1949,7 de enero de 1964",
    correcta: 0,
    puntuacion: 1

};

var pregunta5 = {
    pregunta: "¿Qué presidente inicio el proceso de industrialización en Colombia?",
    opciones: "Rafael Reyes,Jorge Holguín Mallarino,Alfonso López Pumarejo",
    correcta: 0,
    puntuacion: 1

};

var pregunta6 = {
    pregunta: "¿Quién declaro la guerra de los 1000 días?",
    opciones: "Juan Francisco Gómez y Paulo E.,Gabriel Vargas Santos y Rafael Uribe Uribe,General Benjamín Herrera y Foción Soto",
    correcta: 0,
    puntuacion: 1

};
//Pregunta 1

var trozos = pregunta.opciones.split(",");
document.getElementById("pregunta").innerHTML = "<span class=material-icons>settings</span> " + pregunta.pregunta;
document.getElementById("t_opc1").innerHTML = trozos[0];
document.getElementById("t_opc2").innerHTML = trozos[1];
document.getElementById("t_opc3").innerHTML = trozos[2];
document.getElementById("t_opc4").innerHTML = trozos[3];

document.getElementById("opc1_1").value = "0"
document.getElementById("opc1_2").value = "1"
document.getElementById("opc1_3").value = "2"
document.getElementById("opc1_4").value = "3"

//Pregunta 2

var trozos2 = pregunta2.opciones.split(",");
document.getElementById("pregunta2").innerHTML = "<span class=material-icons>settings</span> " + pregunta2.pregunta;
document.getElementById("t2_opc1").innerHTML = trozos2[0];
document.getElementById("t2_opc2").innerHTML = trozos2[1];
document.getElementById("t2_opc3").innerHTML = trozos2[2];


document.getElementById("opc2_1").value = "0";
document.getElementById("opc2_2").value = "1";
document.getElementById("opc2_3").value = "2";


//Pregunta 3

var trozos3 = pregunta3.opciones.split(",");
document.getElementById("pregunta3").innerHTML = "<span class=material-icons>settings</span> " + pregunta3.pregunta;
document.getElementById("t3_opc1").innerHTML = trozos3[0];
document.getElementById("t3_opc2").innerHTML = trozos3[1];
document.getElementById("t3_opc3").innerHTML = trozos3[2];


document.getElementById("opc3_1").value = "0";
document.getElementById("opc3_2").value = "1";
document.getElementById("opc3_3").value = "2";

//Pregunta 4

var trozos4 = pregunta4.opciones.split(",");
document.getElementById("pregunta4").innerHTML = "<span class=material-icons>settings</span> " + pregunta4.pregunta;
document.getElementById("t4_opc1").innerHTML = trozos4[0];
document.getElementById("t4_opc2").innerHTML = trozos4[1];
document.getElementById("t4_opc3").innerHTML = trozos4[2];


document.getElementById("opc4_1").value = "0";
document.getElementById("opc4_2").value = "1";
document.getElementById("opc4_3").value = "2";


//Pregunta 5

var trozos5 = pregunta5.opciones.split(",");
document.getElementById("pregunta5").innerHTML = "<span class=material-icons>settings</span> " + pregunta5.pregunta;
document.getElementById("t5_opc1").innerHTML = trozos5[0];
document.getElementById("t5_opc2").innerHTML = trozos5[1];
document.getElementById("t5_opc3").innerHTML = trozos5[2];


document.getElementById("opc5_1").value = "0";
document.getElementById("opc5_2").value = "1";
document.getElementById("opc5_3").value = "2";


//Pregunta 6

var trozos6 = pregunta6.opciones.split(",");
document.getElementById("pregunta6").innerHTML = "<span class=material-icons>settings</span> " + pregunta6.pregunta;
document.getElementById("t6_opc1").innerHTML = trozos6[0];
document.getElementById("t6_opc2").innerHTML = trozos6[1];
document.getElementById("t6_opc3").innerHTML = trozos6[2];


document.getElementById("opc6_1").value = "0";
document.getElementById("opc6_2").value = "1";
document.getElementById("opc6_3").value = "2";

function evaluar() {
    lleno = false;
    var p1 = document.cuestionario.p1;
    var p2 = document.cuestionario.p2;
    var p3 = document.cuestionario.p3;
    var p4 = document.cuestionario.p4;
    var p5 = document.cuestionario.p5;
    var p6 = document.cuestionario.p6;

    for (i = 0; i < p1.length; i++) {
        if (p1[i].checked) {
            lleno = true;
            break;
        } else {
            lleno = false;
        }
    }

    if (lleno) {
        for (i = 0; i < p2.length; i++) {
            if (p2[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p3.length; i++) {
            if (p3[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p4.length; i++) {
            if (p4[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p5.length; i++) {
            if (p5[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p6.length; i++) {
            if (p6[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }



    correctas = 0;
    incorrectas = 0;
    var r_p1 = document.forms["cuestionario"]["p1"].value;
    var r_p2 = document.forms["cuestionario"]["p2"].value;
    var r_p3 = document.forms["cuestionario"]["p3"].value;
    var r_p4 = document.forms["cuestionario"]["p4"].value;
    var r_p5 = document.forms["cuestionario"]["p5"].value;
    var r_p6 = document.forms["cuestionario"]["p6"].value;


    if (lleno) {

        //evaluacion pregunta 1
        if (r_p1 == pregunta.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p1");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p1");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 2
        if (r_p2 == pregunta2.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p2");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p2");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }


        //evaluacion pregunta 3
        if (r_p3 == pregunta3.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p3");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p3");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 4
        if (r_p4 == pregunta4.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p4");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p4");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 5
        if (r_p5 == pregunta5.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p5");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p5");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 6
        if (r_p6 == pregunta6.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p6");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p6");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        document.getElementById("correctas").innerHTML = correctas;
        document.getElementById("incorrectas").innerHTML = incorrectas;

    } else {
        alert("Tienes que marcar todas las preguntas");
    }
}