// function datos() {
// var clima = document.getElementById("clima").value;
// switch (clima) {
    // case 'lluvioso':
        // console.log('Recuerda llevar un paraguas.');
        // alert('Recuerda llevar paraguas.');
        // break;
    // case 'soleado':
        // console.log('Viste ligero.');
        // alert('Viste ligero.');
        // break;
    // case 'nublado':
        // console.log('Sal a la calle.');
        // alert('Sal a la calle.');
        // break;
    // default:    
        // console.log('Tipo de Clima desconocido.');
        // alert('Tipo de Clima desconocido.');
        // break; }}

function datos() {
    var fruta = document.getElementById("fruta").value;
    switch (fruta) {
        case 'uva':
            // console.log('Recuerda llevar un paraguas.');
            alert('El precio es de S/. 5.00.');
            break;
        case 'fresa':
            // console.log('Viste ligero.');
            alert('El precio es de S/. 3.00.');
            break;
        case 'naranja':
            // console.log('Sal a la calle.');
            alert('El precio es de S/. 3.50.');
            break;
        case 'manzana':
            alert('El precio es de S/ 4.00.');
            break;
        case 'plátano':
        alert('El precio es de S/. 2.00.');
        break;
        default:    
            // console.log('Tipo de Clima desconocido.');
            alert('Tipo de Fruta desconocido.');
            break;
    }
    }
