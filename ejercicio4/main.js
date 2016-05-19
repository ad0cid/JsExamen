$(document).ready(function(){
	$("#agregar").click(function(){
		agregar();
	});
});
var cont = 5;
function agregar(){
	cont++;
	var lista ='<li>'+cont+'</li>';
	$("#lyst").append(lista);
}
