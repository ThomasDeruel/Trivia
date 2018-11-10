import localstorage from './localstorage';

class storage {
  constructor() {
    this.storage = localstorage();
  }
  get() {
    return this.storage;
  }

}
export default new storage();