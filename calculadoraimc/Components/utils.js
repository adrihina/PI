   
export const calcularIMG = (laAltura, elPeso) => {
    laAltura = laAltura/100;
    let resultado = elPeso/(laAltura * laAltura);
    return resultado;
  }
  