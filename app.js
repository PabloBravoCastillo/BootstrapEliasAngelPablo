var contenido=document.querySelector('#cuerpoTabla')
var id=0;
function traerDatos(){
    fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json')
    .then(res => res.json())
    .then( datos => {
        // console.log(datos)
        tabla(datos)
    })

}
function tabla(datos){
    for(let valor of datos){
        var idDefinitiva=id++
        var genero=comprobarGenero(valor.sexo);
       var valoractividadFisica=actividadFisica(genero,valor.actividad)
       var valorGer=calculoGer(valor.edad,valor.peso,valor.altura,genero)
        contenido.innerHTML+=`
        <tr id="${idDefinitiva}">
        <td>${valor.nombre}</td>
        <td>${valor.apellidos}</td>
        <td>${valor.sexo}</td>
        <td>${valor.edad}</td>
        <td>${valor.peso}</td>
        <td>${valor.altura}</td>
        <td>${valor.actividad}</td>
        <td>${calculoGer(valor.edad,valor.peso,valor.altura,genero)}</td>
        <td>${calculoGet(valorGer,valoractividadFisica)}</td>
        <td><button type="button" onclick="elimiar(${idDefinitiva})" class="btn btn-danger">Eliminar</button></td>
        
    </tr>`
    }
}
function calculoGer(edad, peso, altura, genero){
    if(genero=="1"){
        var resultado=66.475+13.751*peso+5.0033*altura-6.755*edad
        return Math.round(resultado)
    }else{
        var resultado=655.0955+9.463*peso+1.8496*altura-4.6756*edad
        return Math.round(resultado)
    }

}
function calculoGet(valor,valorActividad){
    return Math.round(valor*valorActividad)

}

function comprobarGenero(sexo){
    
    if(sexo=="hombre"){
        return 1;
    }else{
        return 0;
    }

}

function actividadFisica(genero, actividad){

if(genero=="1"){
switch (actividad){
    case 'sedentaria':
    return 1.3;
    break;
    case 'ligera':
    return 1.6;
    break;
    case 'moderada':
    return 1.7;
    break;
    case 'intensa':
    return 2.1;
    break;
}


}else{
    switch (actividad){
        case 'sedentaria':
        return 1.3;
        break;
        case 'ligera':
        return 1.5;
        break;
        case 'moderada':
        return 1.6;
        break;
        case 'intensa':
        return 1.9;
        break;
    }

}
}

function mostrarmodal(){
    $('#myModal').show();
}

function añadirCliente(){
var nombre=$("#validationNombre").val();
var apellidos=$("#validationApellidos").val();
var sexo=$("#validationSexo").val();
var edad=$("#validationEdad").val();
var altura=$("#validationAltura").val();
var peso=$("#validationPeso").val();
var actividad=$("#validationActividad").val();

var genero=comprobarGenero(sexo);
       var valoractividadFisica=actividadFisica(genero,actividad)
       var valorGer=calculoGer(edad,peso,altura,genero)
        contenido.innerHTML+=`
        <tr id="${id++}">
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${sexo}</td>
        <td>${edad}</td>
        <td>${peso}</td>
        <td>${altura}</td>
        <td>${actividad}</td>
        <td>${calculoGer(edad,peso,altura,genero)}</td>
        <td>${calculoGet(valorGer,valoractividadFisica)}</td>
        <td><button type="button" onclick="elimiar(${id++})" class="btn btn-danger">Eliminar</button></td>
        
    </tr>`
    $("#exampleModal").modal('hide')
    limpiarForm();

}



function limpiarForm(){
var nombre=$("#validationNombre").val("");
var apellidos=$("#validationApellidos").val("");
var sexo=$("#validationSexo").val("");
var edad=$("#validationEdad").val("");
var altura=$("#validationAltura").val("");
var peso=$("#validationPeso").val("");
var actividad=$("#validationActividad").val("");
}


function validacionFrom(){
    var nombre=$("#validationNombre").val();
    var apellidos=$("#validationApellidos").val();
    var sexo=$("#validationSexo").val();
    var edad=$("#validationEdad").val();
    var altura=$("#validationAltura").val();
    var peso=$("#validationPeso").val();
    var actividad=$("#validationActividad").val();

    //valido el nombre
    if (nombre==""){
           alert("Tiene que escribir su nombre")
           return 0;
    }
    if (apellidos==""){
        alert("Tiene que escribir su apellido")
        return 0;
 }
 if (sexo==""){
    alert("Tiene que seleccionar su sexo")
    return 0;
}
if (edad==""){
 alert("Tiene que poner su edad")
 return 0;
}
if (altura==""){
    alert("Tiene que poner su altura")
    return 0;
}
if (peso==""){
 alert("Tiene que escribir su peso")
 return 0;
}
if (actividad==""){
    alert("Tiene que escribir su actividad")
    return 0;
   }
   añadirCliente()
}

function elimiar(id){
        console.log(id)
        var consulta='#'+id
        $(consulta).remove()
    
}