import React, { Component } from 'react';
import singup from '../../services/signup';
import './Signup.css'

class Singup extends Component{

    state ={
        name:"",
        lastName: "",
        email: "",
        password: "",
        check_password: "",
        birthDate: "",
        phone: ""
    }

    validatePasswords(password,passwordToVerify){
        console.log(password,'<<<PASSWORD')
        console.log(passwordToVerify,'<<<PASSWORDVERIFY')
        if(password === passwordToVerify){
            return true;
        }else{
            alert("Passwords dont match");
        }
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        if(this.validatePasswords(this.state.password, this.state.check_password)){
            singup(this.state).then((response)=>{
                console.log(response.data)
                this.props.history.push('/login')
            }).catch((err)=>{
                console.log(err)
                alert("Something Went Wrong bro :( ")
            })
        }
       
    }

    onInputCheck = (event) =>{
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]:value
        })
    }


    render(){
        return(
            <div className="container">
                <div className="row justify-content-center centered-form">
                    <div className="col-xs-12 col-sm-8 col-md-10 col-sm-offset-2 col-md-offset-4">
                        <div className="panel panel-default container">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sing up for Nectflix</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onFormSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="name" 
                                                    className="form-control input-sm" 
                                                    placeholder="First Name" 
                                                    value={this.state.name}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="lastName" 
                                                    className="form-control input-sm" 
                                                    placeholder="Last Name" 
                                                    value={this.state.lastName}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="date" 
                                                    name="birthDate" 
                                                    className="form-control input-sm" 
                                                    placeholder="birthDate" 
                                                    value={this.state.birthDate}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="tel" 
                                                    name="phone" 
                                                    className="form-control input-sm" 
                                                    placeholder="phone" 
                                                    value={this.state.phone}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    <input type="email" 
                                                    name="email" 
                                                    className="form-control input-sm" 
                                                    placeholder="Email Address" 
                                                    value={this.state.email}
                                                    onChange={this.onInputCheck}
                                                    />
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                            <input type="password" 
                                                    name="password"
                                                    id="password" 
                                                    className="form-control input-sm" 
                                                    placeholder="password" 
                                                    value={this.state.password}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                            <input type="password" 
                                                    name="check_password"
                                                    id="check_password"  
                                                    className="form-control input-sm" 
                                                    placeholder="check_password" 
                                                    value={this.state.check_password}
                                                    onChange={this.onInputCheck}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <input type="submit" value="Register" className="btn btn-success btn-block"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singup;