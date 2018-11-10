export default () => {
    let localstorage = JSON.parse(localStorage.getItem('storage'));
    if(!localstorage){
        const storage = {
            category:'',
            score:0,
            tried:0,
            questionId:[]
        };
        localStorage.setItem('storage', JSON.stringify(storage));
        localstorage = JSON.parse(localStorage.getItem('storage'));
    }
    return localstorage;  
}