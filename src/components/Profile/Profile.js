import React , { Component } from 'react';
import singleUser from '../../services/singleUser';

import { Link } from 'react-router-dom';

class Profile extends Component {

    state={
        userData: ""
    }

    componentDidMount(){
        singleUser(this.props.match.params.id).then((resp)=>{
            this.setState({
                userData:resp.data.data.singleUsers
            })
        }).catch((err)=>{
            console.log(err);
        })
       
    }

    chargeProfile(){
        let { name, email, phone, lastName } = this.state.userData;

        if(this.state.userData === ""){
            return(
                <div>HOLO</div>
            )
        }else{
            return(
                <div>
                <h1>This is your Profile</h1>
                <h2>Name: <strong>{name}</strong></h2>
                <h2>LastName: <strong>{lastName}</strong></h2>
                <h2>Phone: <strong>{phone}</strong></h2>
                <Link to={`/profile/edit/${this.props.match.params.id}`}>Edit Profile</Link>
            </div>
            )
            
        }
    }

    render(){
        return(
            <div>
                hola
                {this.chargeProfile()}
            </div>
        )
    }
}

export default Profile;