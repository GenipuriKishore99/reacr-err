import React from "react";

export  class Employyee extends React.Component{
    constructor(){
        super();
        this.state={
            view:""
        }
    }

    handlerLogin(){
        this.setState({
            view:<Login></Login>
        })
    }
    handlerReg(){
        this.setState({
            view:<Register></Register>
        })
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.handlerLogin()}}>Login</button>
                <button onClick={()=>{this.handlerReg()}}>Register</button>
                <p>{this.state.view}</p>


            </div>
        )
    }
}

export class Login extends React.Component{
    componentDidMount(){
        alert("login mount")
    }


    componentWillUnmount(){
        alert("component will unmount")
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export class Register extends React.Component{
    componentDidMount(){
        alert("register mount")
    }

    componentWillUnmount(){
        alert("register will mount")
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}