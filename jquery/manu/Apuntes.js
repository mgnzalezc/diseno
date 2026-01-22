$(document).ready (function () {//Cuando trabajemos jQuery siempre aqui dentro
    //codigo
});
$(function () {//Version acortada de lo anterior
    //codigo
})

//La seleccion de elementos es la siguiente
    //Para una id
    $("#id")
    //Para una clase
    $(".clase")
    //Para una etiqueta HTML
    $("p")
    //Para una etiqueta dentro de otra
    $("#div span")

//Eventos de teclado
    //Al presionar la tecla (Keydown)
    $("#campo").keydown(function (e) {
        console.log("keydown:", e.key);
    });
    //Al soltar la tecla (Keyup)
    $("#campo").keyup(function (e) {
        console.log("keyup:", e.key);
    });
    //Cuando la tecla produce un caracter. No cuentan teclas como shift Ctrl (Keypress)
    $("#campo").keypress(function (e) {
        console.log("keypress:", e.key);
    });

//Codigo de teclas
    //Enter:    13
    //Esq:      27
    //Tab:      9
    //Shift     16
    //Delete    46 o 8
    //Para el codigo del evento usamos e.keyCode
    $("#input").keydown(function (e) {
        if (e.keyCode === 13) {
            console.log("Enter presionado");
        }
    });

//Eventos de raton
    //click :       Ejecuta con un click
        $("#btnClick").click(function () {
            alert("Hiciste click");
        });
    //dblclick :    Ejecuta con doble click
        $("#btnDbl").dblclick(function () {
            alert("Doble click detectado");
        });
    //mouseenter :  Ejecuta cuando entra al elemento
        $("#caja1").mouseenter(function () {
            $(this).css("background", "lightblue");
        });
    //mouseleave :  Ejecuta cuando sale del elemento
        $("#caja1").mouseleave(function () {
            $(this).css("background", "white");
        });
    //mousemove :   Ejecuta cada vez que se mueve dentro del elemento
        $("#area").mousemove(function (e) {
            console.log("X:", e.pageX, "Y:", e.pageY);
        });
    //contextmenu : Ejecuta con el click derecho
        $("#menu").contextmenu(function (e) {
            e.preventDefault(); // evita menú del navegador
            alert("Click derecho detectado");
        });
    //hover :       Ejecuta tanto cuando mousenter y mouseleave
        $("#caja2").hover(
        function () {
            $(this).css("background", "yellow");
        },
        function () {
            $(this).css("background", "white");
        }
        );

//Eventos de ventana
    //.resize() :           Ejecuta cuando cambia el tamaño de la ventana
        $(window).resize(function () {
            $("#size").text(
                "Ancho: " + $(window).width() + 
                " - Alto: " + $(window).height()
            );
        });
    //.scroll() :           Ejecuta cuando se hace scroll
        $(window).scroll(function () {
            $("#scrollPos").text("Scroll Y: " + $(window).scrollTop());
        });
    //.load() :             Ejecuta cuando se carga todo el contenido
        $(window).load(function () {
            alert("Todo cargado");
        });
    //.beforeunload() :     ejecuta antes de salir o recargar la pagina
        $(window).on("beforeunload", function (e) {
            return "¿Seguro que quieres salir?";
        });

//Manipulacion del DOM
    //.text :       Cambiar texto
        $(".item").text("Nuevo texto");
    //.html :       Cambiar HTML
        $("#div").html("<b>Hola</b>");
    //.css :        Cambiar CSS
        $("#titulo").css("color", "red");
    //.append :     Añadir elementos
        $("#lista").append("<li>Nuevo</li>");
    //.remove :     Eliminar
        $(".eliminar").remove();
    //.attr :       Atributos
        $("#imagen").attr("src", "nueva.jpg");
    //.val :        Valor inputs
        $("#nombre").val("Juan Pérez");
    //.addClass :   Añadir clases
        $("nav a").addClass("activo");