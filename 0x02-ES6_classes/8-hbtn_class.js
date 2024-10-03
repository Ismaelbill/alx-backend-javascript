#!/usr/bin/node

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._floors;
  }

  set size(val) {
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
