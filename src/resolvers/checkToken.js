export default () => {
    if(localStorage.getItem('token') !== null){
        return true;
    } else {
        return false;
    }
}

//checa que venga un token