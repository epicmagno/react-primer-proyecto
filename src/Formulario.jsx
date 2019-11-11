import React, {Component} from 'react'

class Formulario extends Component {
    constructor(props){
        super(props);

        this.state = {
            nombre: "",
            correo: ""
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }
    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        });
    }

    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario</h1>

                <form>
                    <div className="form__Item">
                        
                        <label>Nombre Completo</label>
                        <input type="text" onChange = { this.cambiarNombre}/>
                    </div>
                    <div className="form__Item">
                        
                        <label>Correo electronico</label>
                        <input type="text" onChange = { this.cambiarCorreo}/>
                    </div>
                    <div className="form__Item">
                        
                        <input className="button full" type="button" value="Enviar"/>
                    </div>
                </form>

                <h2>{`Hola ${this.state.nombre}`}</h2>
                <h3>{`Tu correo es el siguiente: ${this.state.correo}`}</h3>
            </div>
        );
    }
}

export default Formulario;

/* <input type="text" onChange = { e => this.setState({
                            correo: e.target.value
                        })}/> */