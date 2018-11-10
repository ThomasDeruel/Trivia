import localstorage from './localstorage';

class storage {

  get() {
    return localstorage(); // get current localstorage of storage
  }

  set(newdata) {// add or modify my storage
    localStorage.setItem('storage', JSON.stringify(newdata));
    JSON.parse(localStorage.getItem('storage'));
  }
  resetCategory() { // when I want to change my category
      let storage = this.get();
      storage.category = '';
      storage.score = 0;
      this.set(storage);
  }
}
export default new storage();