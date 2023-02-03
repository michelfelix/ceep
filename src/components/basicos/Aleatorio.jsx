// import React from "react";

//Aqui estou usando arrow function, passando as propriedades do componente como parâmetro
export default (props) => 'O número aleatório é: ' + Math.floor(Math.random() * props.max + props.min) + '!'