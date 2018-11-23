import localstorage from './localstorage';

class storage {

  get() {
    return localstorage(); // get current localstorage
  }

  getQuestion(questionIndex){
    let storage = this.get();

    if(!storage.questionId[questionIndex]){
      storage.questionId[questionIndex] = 0;
      localStorage.setItem('storage', JSON.stringify(storage));
      return storage.questionId[questionIndex];
    }
    return storage.questionId[questionIndex];
  }

  setQuestion(newIndex,questionIndex) {
    let storage = this.get();
    storage.questionId[questionIndex] = newIndex;
    localStorage.setItem('storage', JSON.stringify(storage));
  }

  resetCategory() { // when I want to change my category
      let storage = this.get();
      storage.category = '';
      storage.score = 0;
      localStorage.setItem('storage', JSON.stringify(storage));
  }
}
export default new storage();