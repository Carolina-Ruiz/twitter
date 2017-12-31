//Declarar variables.
var btn = document.getElementById('btn'); //boton
var seccionTweets = document.getElementById("dos");

//Cuando se haga click al botn hara la funcion:
btn.addEventListener('click', function() {
//1 tomar el texto ingresado en el textarea.
var comentario = document.getElementById("comentario").value;
//2 limpiar el textarea.
document.getElementById("comentario").value = "";

/* 3 Si la variable comentario tiene NO es string vacio, 
 * entonces aplica lo siguiente: creara un div, luego un parrafo, y comenatario*/
  if (comentario !== "" && comentario !== " "){
    var contParrafo = document.createElement("div");
    var parrafo = document.createElement("p");
    var textTweet = document.createTextNode(comentario);
 //4 Se ordenaran de la siguiente manera
    parrafo.appendChild(textTweet);
    contenedorParrafo.appendChild(parrafo);
    seccionTweets.appendChild(contParrafo);
//5 Ingresa una clase para que luego se pueda editar el estilo.
    contenedorParrafo.setAttribute("class", "posteo");
//6 En caso contrario, pedir al usuario que ingrese algún texto */
} else {
    alert("Escriba su comentario");
}

});

//contador
var textArea = document.getElementById('comentario');
//cuando el usuario presione teclas dentro de texArea hara la funcion:
comenatrio.onkeydown = function(){
	var comentario = document.getElementById('comentario');
	var saveCommit = comentario.value.length;
	var cont = document.getElementById('cont');
	cont.innerHTML = 140 - saveCommit; 
	//cambia el color los caracteres (blue, red)
	if(saveCommit >= 120 && saveCommit <130){
		return cont.setAttribute('class','blue');
	}
	if(saveCommit >= 130 && saveCommit < 140){
		return cont.setAttribute('class','red');
	} else{
		
	};
	if(saveCommit > 140){
		return document.getElementById('btn').disabled = true;
	} else {
		return document.getElementById('btn').enabled = true;
	}



}