export default () => {
    const localstorage = localStorage.getItem('storage');
    if(!localstorage){ // init localstorage
        const storage = {
            category:'',
            bestScore:0,
            score:0,
            tried:0,
            questionId:{}
        };
        localStorage.setItem('storage', JSON.stringify(storage));
        return JSON.parse(localStorage.getItem('storage'));
    } else {
        return JSON.parse(localStorage.getItem('storage')); // return current localstorage 
    }
   
}