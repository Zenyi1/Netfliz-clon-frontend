//service to add a ranking to a movie
import axios from 'axios';
import getToken from '../resolvers/getToken';
import constatantes from '../const';

export default (data)=> {
    let {id,rank} = data;
    let newRank = `{rank:${rank}}`;

    return axios({
        url:constatantes.url+'graphql',
        method:'post',
        data:{
            query:`
            mutation{
                addRank(id:"${id}",data:${newRank}){
                    _id,
                    name,
                    rank
                }
            }
            `

            
        },headers:{'Authorization': 'JWT '+ getToken()}
    }

    )
}