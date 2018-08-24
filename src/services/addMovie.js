import axios from 'axios';
import constantes from '../const';
import getToken from '../resolvers/getToken';

export default (data) => {
    
    let newMovie = `{
        name:"${data.name}",
        synopsis:"${data.synopsis}",
        genre:"${data.genres}",
        url:"${data.url}",
        director:"${data.director}",
        year: `+`${data.year}`+` ,
        image:"${data.image}",
        rating:"${data.ratings}"
    }
    `;
    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
            mutation{
                addMovie(data:${newMovie}){
                    _id,
                    name
                }
            }
            `
        },headers:{'Authorization':'JWT '+getToken()}
    })
}