import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

//Na função a seguir, o '_' está posicionado como um modo de dizer que não vou receber parâmetros nessa arrow function.
export default _ =>
    <div>
        <h1>Fundamentos react</h1>
        <Aleatorio
            min = {1}
            max= {20}
        />
        <Fragmento/>
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Pedro"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>