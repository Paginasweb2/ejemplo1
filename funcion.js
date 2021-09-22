
function datos(){
	
	
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var correo = document.getElementById('correo').value;
	var contraseña = document.getElementById('contraseña').value;
	var comentario= document.getElementById('comentario').value;
	var saludo=document.getElementById('saludo').value;
	
	document.registro.nombreobtenido.value=nombre;
	document.registro.apellido2.value=apellido;
	document.registro.correo2.value=correo;
	document.registro.contraseña2.value= contraseña;
	document.registro.comentario2.value=comentario;


	

}

function suma(){
	var numero1 = document.getElementById("num1").value;
	var numero2 = document.getElementById("num2").value;
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	var respuesta=numero1+numero2;
    
    document.getElementById("resp").value=respuesta;
    alert("presione aceptar para saber la suma")
 	
}
function resta(){
	var numero1 = document.getElementById("num1").value;
	var numero2 = document.getElementById("num2").value;
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	var respuesta=numero1-numero2;
    
    document.getElementById("resp").value=respuesta;

}
function multiplicacion(){
	var numero1 = document.getElementById("num1").value;
	var numero2 = document.getElementById("num2").value;
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	var respuesta=numero1*numero2;
    
    document.getElementById("resp").value=respuesta;

}
function division(){
	var numero1 = document.getElementById("num1").value;
	var numero2 = document.getElementById("num2").value;
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	var respuesta=numero1/numero2;
    
    document.getElementById("resp").value=respuesta;

}