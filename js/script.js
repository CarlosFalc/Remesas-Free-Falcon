
function calcular_remesa(monto) {

    monto = parseFloat(monto);

    let remesa = 0;

    if (monto > 0) {
        remesa = monto * 26;
        return remesa
    }
}

function es_usuario(remesa, usuario) {

    if (usuario == "SI") {
        //ES USUARIO PREMIUM//
        let descuento = (monto * 0.05);
        return descuento
    }
    else {
        return 0
    }
}

// REMESAS //

alert("Bienvenido/a a Remesas Free (Cambio de Pesos CLP a Bolívares VES)");

let monto = "";


while (monto != "FIN") {

    monto = prompt("Ingrese el monto a enviar en CLP o ingrese FIN para finalizar");

    if (monto != "FIN") {
        let usuario = prompt("Es usuario Premium: SI o NO");
        let total = calcular_remesa(monto);
        let descuento = es_usuario(total, usuario);
        let total_descuento = monto - descuento;

        alert("Monto que envías en CLP (Tasa: CLP 1 = VES 0.026): $" + monto 
        + "\n\rDescuento usuario Premium (5%): $" + descuento
        + "\n\rTotal a pagar: $" + total_descuento
        + "\n\rEl destinatario recibe en VES: " + total);

        monto = "FIN";
    }
}
