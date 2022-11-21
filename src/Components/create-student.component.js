import axios from "axios";
import React, {Component} from "react";
import { Form, Button } from 'react-bootstrap';

export default class CreateStudent extends Component{
    
    constructor(props){
        super(props); //Inicializa los props ¡Importante!!
        this.onChangeStudentName=this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail=this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollNo=this.onChangeStudentRollNo.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
        //Inicializamos los estados
        this.state = {
            name:"",
            email:"",
            rollno:"",
        };
    }

    onChangeStudentName(e){
        this.setState({name:e.taget.value});//traerá el valor del elemento que haya cambiado
    }
    onChangeStudentEmail(e){
        this.setState({email:e.taget.value});//traerá el valor del elemento que haya cambiado
    }
    onChangeStudentRollNo(e){
        this.setState({rollno:e.taget.value});//traerá el valor del elemento que haya cambiado
    }
    OnSubmit(e){
        e.preventDefault();
        const studentObject = {     //Creamos el objeto
            name:this.state.name,   //Obtenemos el estado actual
            email:this.state.email,
            rollno:this.state.rollno,
        }

        axios
            .post("http://localhost:4000/students/create-student", studentObject) //Aquí enviaremos los datos
            .then((res) => console.log(res.data)); //Me mostrará que está fallando como respuesta
        
        this.setState({name:"", email:"", rollno:""}); //Aquí ya envía los datos
    }

    render(){
        return(
            <div className="form-wrapper">
                <Form onSubmit={this.OnSubmit}>

                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeStudentName}
                        />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control 
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail}
                        />
                    </Form.Group>

                    <Form.Group controlId="Documento">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.rollno}
                            onChange={this.onChangeStudentRollNo}
                        />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">Crear Estudiante</Button>
                </Form>
            </div>
        );
    }
}