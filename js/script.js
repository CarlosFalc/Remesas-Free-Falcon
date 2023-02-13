
function calcular_remesa(monto) {

    monto = parseFloat(monto);

    let remesa = 0;

    if (monto > 0) {
        remesa = monto * 28;
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


class Moneda{
    constructor( tipo, stock){

            this.tipo = tipo;
            this.stock = stock;
    }

    get_datos(){
        console.log("---------------");
        console.log("Tipo: ", this.tipo);
        console.log("Stock: ", this.stock);
        console.log();
    }

    get_stock(){

        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    venta_stock( cantidad ){

        if( this.stock >= cantidad ){
            //VENTA

            this.stock = this.stock - cantidad;
            return true
        }
        else{
            return false
        }
    }

}

// CARGA DE MONEDAS //

let lista_monedas = [];

lista_monedas.push( new Moneda("Bolivar", 5000000));

// FIN CARGA DE MONEDA //

// INICIO RENDER DE MONEDAS //

for( let moneda of lista_monedas){

    moneda.get_datos();
}

// FIN RENDER DE MONEDAS //

function buscar_moneda( moneda ){
    return moneda.tipo == compra_usuario
}

    let compra_usuario = prompt("Ingrese el tipo de moneda que desea enviar: ");
    let resultado_find = lista_monedas.find( buscar_moneda );
    console.log( resultado_find);

    if ( resultado_find !=undefined ){

        // COMPRA //
        if( resultado_find.get_stock() ){
            let unidades = prompt("¿Cuantos Bolivares deseas enviar?");            
                   
            if( resultado_find.venta_stock (unidades) ){
            monto = prompt("Ingrese el monto a enviar en CLP");        
            let usuario = prompt("Es usuario Premium: SI o NO");
            let total = calcular_remesa(monto);
            let descuento = es_usuario(total, usuario);
            let total_descuento = monto - descuento;

            console.log("Monto que envías en CLP (Tasa: CLP 1 = VES 0.028): $" + monto 
            + "\n\rDescuento usuario Premium (5%): $" + descuento
            + "\n\rTotal a pagar: $" + total_descuento
            + "\n\rEl destinatario recibe en VES: " + total);
            console.log("Gracias por la compra");
        }
        else{
        console.log("No contamos con el monto solicitado");
        }

        }
        else{
        console.log("No se puede realizar la transacción");
        }
        resultado_find.get_datos();
        }
        else{
            console.log("Moneda no encontrada: ", compra_usuario);
            }