import localstorage from './localstorage';

class storage {

  get() {
    return localstorage();
  }

  set(newdata) {
    localStorage.setItem('storage', JSON.stringify(newdata));
    JSON.parse(localStorage.getItem('storage'));
  }
  resetCategory() {
      let storage = this.get();
      storage.category = '';
      storage.score = 0;
      this.set(storage);
  }
}
export default new storage();