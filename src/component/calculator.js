import React from 'react';
import './estilos.css'

class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cero: 0,
            uno: 1,
            dos: 2,
            tres: 3,
            cuatro: 4,
            cinco: 5,
            seis: 6,
            siete: 7,
            ocho: 8,
            nueve: 9,
            numeros: [],
            num: 0,
            array: [],
            resultado: 0,
            letras: [0],
        }
    }
    Cero = () => {
        this.state.numeros.push(this.state.cero)
        console.log(this.state.numeros)
        this.pintar();
    }
    Uno = () => {
        this.state.numeros.push(this.state.uno)
        this.pintar();
    }
    Dos = () => {
        this.state.numeros.push(this.state.dos)
        this.pintar();
    }
    Tres = () => {
        this.state.numeros.push(this.state.tres)
        this.pintar();
    }
    Cuatro = () => {
        this.state.numeros.push(this.state.cuatro)
        this.pintar();
    }
    Cinco = () => {
        this.state.numeros.push(this.state.cinco)
        this.pintar();
    }
    Seis = () => {
        this.state.numeros.push(this.state.seis)
        this.pintar();
    }
    Siete = () => {
        this.state.numeros.push(this.state.siete)
        this.pintar();
    }
    Ocho = () => {
        this.state.numeros.push(this.state.ocho)
        this.pintar();
    }
    Nueve = () => {
        this.state.numeros.push(this.state.nueve)
        this.pintar();
    }
    sumar = () => {
        this.state.numeros.push("+")
        this.pintar();
    }
    restar = () => {
        this.state.numeros.push("-")
        this.pintar();
    }
    multiplicar = () => {
        this.state.numeros.push("*")
        this.pintar();
    }
    dividir = () => {
        this.state.numeros.push("/")
        this.pintar();
    }
    Punto = () => {
        this.state.numeros.push(".")
        this.pintar();
    }
    Igual = () => {   
        for (let i = 0; i < this.state.numeros.length; i++) {
            if (this.state.numeros == Number) {
                console.log("hola")
                this.state.numeros[i] = (parseInt(this.state.numeros[i]))
            }
        }     
        this.setState({
            resultado: (eval(this.state.numeros.join('')))
        })   
    }
    pintar = () => {
        this.setState({
            letras: this.state.numeros.join('')
        })
        console.log(this.state.letras)
    }
    cleaner = () => {
        return (
            this.setState({
                resultado: 0,
                numeros: [],
                letras: 0,
            })
        )
    }

    render() {
        return (
            <div className="card container justify-content-center contenedor ">
                <div className="card container  pantalla letras mt-2">
                    <h4 className="text-black">{this.state.resultado}</h4>
                    <div>  <h4 className="text-black">{this.state.letras} </h4> </div>
                </div>
                <div className="container mx-0 ml-3 mt-3">
                    <div className="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">

                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Cero} > {this.state.cero} </button>
                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Uno} > {this.state.uno} </button>
                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Dos}> {this.state.dos} </button>
                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Tres}> {this.state.tres} </button>
                            <button type="button" class="btn btn  btn-light mx-1 my-1  " width="150" onClick={this.multiplicar}> * </button>
                            
                            <button type="button" class="btn btn-light mx-1 my-1 " onClick={this.sumar}> + </button>
                        </div>
                    </div>
                    <div class="btn-toolbar  " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn  btn-light mx-1 my-1" onClick={this.Cuatro}> {this.state.cuatro} </button>
                            <button type="button" class="btn  btn-light mx-1 my-1" onClick={this.Cinco}> {this.state.cinco} </button>
                            <button type="button" class="btn  btn-light mx-1 my-1 " onClick={this.Seis}> {this.state.seis} </button>
                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Siete}> {this.state.siete} </button>
                            <button type="button" class="btn  btn-light mx-1 my-1  " onClick={this.restar}>- </button>
                            <button type="button" class="btn btn  btn-light mx-1 my-1" onClick={this.dividir}> /  </button>
    
                        </div>
                    </div>
                    <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn btn  btn-light mx-1 my-1" onClick={this.Ocho}> {this.state.ocho} </button>
                            <button type="button" class="btn btn  btn-light mx-1 my-1" onClick={this.Nueve}> {this.state.nueve} </button>
                            <button type="button" class="btn btn-light mx-1 my-1" onClick={this.Punto}> . </button>
                            <button type="button" class="btn btn  btn-light mx-2 my-1" onClick={this.Igual}> = </button>
                            <button type="button" class="btn btn  btn-light mx-1 my-1 btn-block" onClick={this.cleaner} > AC </button>
             
        
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculadora;