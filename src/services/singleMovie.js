import axios from 'axios';
import getToken from '../resolvers/getToken';
import constante from '../const';

export default (id) => {

    return axios({
        url:constante.url+'graphql',
        method:'post',
        data: {
            query: `
            query{
                singleMovies(id:"${id}"){
                    _id,
                    name,
                    image,
                    synopsis,
                    rank,
                    director,
                    genre{
                        name
                    },
                    rating{name},
                    year,
                    url,
                    language,
                    duration
                }
            }

        `
        }, headers:{'Authorization': 'JWT '+ getToken()}
    })
}