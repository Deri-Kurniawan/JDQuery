class JDQuery {
  constructor(query = null) {
    this._document = document.querySelector(query);
    this.len = this._document.length;
  }

  html(replacer = null) {
    if (!replacer) {
      return this._document.innerHTML;
    }

    this._document.innerHTML = replacer;
  }

  text(replacer = null) {
    if (!replacer) {
      return this._document.innerText;
    }

    this._document.innerText = replacer;
  }
}

export default JDQuery;
