import localstorage from './localstorage';

class storage {

  get() {
    return localstorage();
  }

  set(newdata) {
    localStorage.setItem('storage', JSON.stringify(newdata));
    JSON.parse(localStorage.getItem('storage'));
  }
}
export default new storage();