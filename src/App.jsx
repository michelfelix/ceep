import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ => {
    <div>
        <h1>Fundamentos react</h1>
        <Fragmento/>
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Pedro"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
}