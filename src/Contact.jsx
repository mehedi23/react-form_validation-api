import React, { Component } from 'react'

export class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "",
             lastName: "",
             email:"",
             password: "",
             ConfirmPassword:"",
             formError:{
                firstName: "Fill It",
                lastName: "",
                email:"",
                password: "",
                ConfirmPassword:""
             }
        };
    };

    handleChange = e =>{
        let input__name = e.target.name;
        let input__value = e.target.value;

        if(input__name === "first__name"){
            this.setState(
                {
                    firstName: input__value
                }
            )
        } else if(input__name === "last__name"){
            this.setState(
                {
                    lastName: input__value
                }
            )
        } else if(input__name === "email"){
            this.setState(
                {
                    email:input__value
                }
            )
        } else if(input__name === "password"){
            this.setState(
                {
                    password: input__value
                }
            )
        } else if(input__name === "confirm__password"){
            this.setState(
                {
                    ConfirmPassword:input__value
                }
            )
        } 
    };
    
    handelSubmit = e => {
        e.preventDefault()

        if( this.state.firstName.match(/^[a-zA-Z]+$/) && 
            this.state.lastName.match(/^[a-zA-Z]+$/) &&
            this.state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
            this.state.password === this.state.ConfirmPassword
            ){
                const abc = `   
                    firstName: ${this.state.firstName}
                    lastName: ${this.state.lastName}
                    email:  ${this.state.email}
                    password: ${this.state.password}
                    ConfirmPassword: ${this.state.ConfirmPassword}
                `
                alert(abc)
            }else{
                alert("error")
            }        
    };



    render() {

        return (
            <div className="contact-form">

                <h1>Create account</h1>


                <form className="create-ac" onSubmit={this.handelSubmit} action="https://www.facebook.com/">
                    <div className="inputs">
                        <label htmlFor="first__name">First name</label>
                        <input
                            className = { this.state.firstName.match(/^[a-zA-Z]+$/) ? '' : 'error'}
                            name="first__name"
                            type="text" 
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            placeholder= 'First Name'
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="last__name">Last name</label>
                        <input 
                            className = { this.state.lastName.match(/^[a-zA-Z]+$/) ? '' : 'error'}
                            name="last__name"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            placeholder="Last name" 
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input 
                            className = { this.state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : 'error'}
                            name="email"
                            type="text" 
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password</label>
                        <input 
                            className = {  this.state.password === this.state.ConfirmPassword && this.state.password !== '' ? '' : 'error'}
                            name="password"
                            type="password" 
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password"
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirm__password">Confirm Password</label>
                        <input 
                            className = {  this.state.password === this.state.ConfirmPassword && this.state.ConfirmPassword !== '' ? '' : 'error'}
                            name="confirm__password"
                            type="password" 
                            onChange={this.handleChange}
                            value={this.state.ConfirmPassword}
                            placeholder="Confirm Password"
                        />
                    </div>
                    <button type="submit" className="send">Create account</button>
                </form>
            </div>
        )
    }
}

export default Contact

