import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import payload from '../../resolvers/payload';


class NavBar extends Component{

    state = {
        animate: 'navbar-brand',
        
      };


    chargeProfile = () =>{
        const token = localStorage.getItem('token');
        if(token !== null){
            
            let pl = payload(token);
            return ( 
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to={`/profile/${pl.id}`}>Welcome, {pl.email}</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/movies/add">Add Movies</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </ul>
            )
        }else{
            return (
                <ul  className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>

                </ul>
            )
        }
    }



    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className={this.state.animate} to="/">Nectflix.</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {this.chargeProfile()}
            </div>
            </nav>
        )
    }
}

export default NavBar;