export function getID(length:number=6){
  let cadena='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstu0123456789'
  let token='';

  for(let i=0;i<length;i++){
      token+=cadena[random(0,cadena.length-1)];
  }
  return token;
}

function random(min:number, max:number) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
