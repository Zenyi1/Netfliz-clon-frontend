import axios from 'axios';

import constantes from '../const';

//crea un usuario
export default (data) => {
    return axios.post(constantes.url+"register/", data)
}