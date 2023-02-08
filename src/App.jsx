import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

//Na função a seguir, o '_' está posicionado como um modo de dizer que não vou receber parâmetros nessa arrow function.
export default _ => {
    return(
        <div>
            <h1>Fundamentos react</h1>
            {/* <Aleatorio
                min = {1}
                max= {20}
                />
                <Fragmento/>
                <ComParametro
                titulo="Situação do aluno"
                subtitulo="Pedro"
                nota={9.3}
                />
            <Primeiro></Primeiro> */}

            <Card titulo="#1 Primeiro componente">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#2 Com parâmetro">
                <ComParametro
                titulo="Situação do aluno"
                subtitulo="Pedro"
                nota={9.3}
                />
            </Card>

            <Card titulo="#3 Fragmento">
                <Fragmento/>
            </Card>

            <Card titulo="#4 Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>

        </div>
    )
};