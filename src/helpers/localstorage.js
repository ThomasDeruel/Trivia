export default () => {
    let localstorage = localStorage.getItem('storage');
    if(!localstorage){
        console.log('pas créer');
        const storage = {
            category:'',
            bestScore:0,
            score:0,
            tried:0,
            questionId:{}
        };
        localStorage.setItem('storage', JSON.stringify(storage));
        localstorage = JSON.parse(localStorage.getItem('storage'));
    }
    return JSON.parse(localstorage);  
}