import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (id,data) => {

    let {name,phone,lastName,email} = data;

    let dataDATA = `{name:"${name}",phone:"${phone}",lastName:"${lastName}",email:"${email}"}`
    console.log(dataDATA);

    return axios({
        url:constantes.url+'graphql',
        method: 'post',
        data: {
            query:`
                mutation{
                    updateUser(id:"${id}",data:"${dataDATA}){
                        _id,
                        name,
                        email,
                        phone
                    }
                }
            `
        },headers: {'Authorization': 'JWT '+ getToken()}
    })
}