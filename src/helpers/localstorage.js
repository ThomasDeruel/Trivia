export default () => {
    const localstorage = localStorage .getItem('storage');
    if(!localstorage){
        const storage = {
            category:'',
            score:0,
            tried:0,
            questionId:[]
        };
        localStorage.setItem('storage', JSON.stringify(storage));
        return localstorage;
    } else {
        return localstorage;
    }  
}