import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/delete.svg"

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <div className="content-card">
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          </header>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </div>
        <p className="card-nota_texto">{this.props.texto}</p>
        <h4>{this.props.categoria}</h4>
      </section>
    );
  }
}

export default CardNota;
