function datos(){
    var nombres = document.getElementById("nombres").value;
    // console.log(nombres);
    // var mensaje = ("Hola tu nombre es: " + nombres);
    // console.log(mensaje);

    var apellidos = document.getElementById("apellidos").value;
    // console.log(apellidos);
    // var mensaje = ("Hola tu apellido es: " + apellidos);
    // console.log(mensaje);

    var email = document.getElementById("email").value;
    // console.log(email);
    // var mensaje = ("Hola tu correo es: " + email);
    // console.log(mensaje);

    var fechanacimiento = document.getElementById("fechanacimiento").value;
    // console.log(fechanacimiento);

    var femenino = document.getElementById("f").value;
    // console.log(femenino);

    var masculino = document.getElementById("m").value;
    // console.log(masculino);

    var estatura = document.getElementById("estatura").value;
    // console.log(estatura);

    var peso = document.getElementById("peso").value;
    // console.log(peso);

    var deporte = document.getElementById("deporte").value;
    // console.log(deporte);

    // var texto = "Tu nombre es: " + nombres  + apellidos + "\nTu correo es: " + email;
    // console.log(texto);

    var resultado = peso/(estatura**2);
    var sobrepeso = resultado <= 30;
    // resultado<= 30
    console.log("resultado " + resultado + "\nsobrepeso " + sobrepeso);
    






















}