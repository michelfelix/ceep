import React from "react";

export default function Fragmento() {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
        //Não é possível usar uma propriedade num react fragment reduzida ex: < key="1"> </>
    )
}