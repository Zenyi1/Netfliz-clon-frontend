
//trae el token y lo analiza

export default (token) => {
    let base64Uri = token.split('.')[1];
    console.log(base64Uri,'<<<< ASI LLEGA');
    let base64 = base64Uri.replace('-','+').replace('_','/');
    console.log(base64,'<<<< ASI despues del replace');
    console.log(JSON.parse(window.atob(base64)),'<<<< ASI LLEGA');
    return JSON.parse(window.atob(base64));
}