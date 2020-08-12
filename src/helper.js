//obtiene diferencia años
export function obtenerDiferenciaAnyo(anyo){
        return new Date().getFullYear() - anyo;
}
//calcula total a pagar por marca
export function calcularMarca(marca){
        let incremento;
        switch (marca) {
                case 'europeo':
                        incremento =1.30;
                        break;
                case 'asiatico':
                        incremento =1.05;
                        break;
                case 'americano':
                        incremento =1.15;
                        break;
                default:
                        console.log('boom!');
        }
        return incremento;
}
//calcula el tipo de seguro
export function obtenerPlan(plan){
        return (plan === 'basico') ? 1.20 : 1.50;
}
//Primera letra en mayuscula
export function firstCapital(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
}
