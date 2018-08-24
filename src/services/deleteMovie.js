import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (data) => {
    console.log(data);

    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                mutation{
                    deleteMovie(id:"${data}"){
                        name
                    )
                }
            `
        },headers:{'Authorization': 'JWT ' + getToken()}
    })
}