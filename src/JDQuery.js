// Javascript Deri Query
// Author : Deri Kurniawan
// Source : https://github.com/Deri-Kurniawan/JDQuery

/**
 * Query Selector
 * @param {String} query
 * @returns document element
 */
const $ = (query) => {
    return new JDQuery(query);
}

/**
 * Query Selector All
 * @param {String} query
 * @returns 
 */
const $$ = (query) => {
    return document.querySelectorAll(query);
}

/**
 * Javascript Deri Query Class
 */
class JDQuery {
    /**
     * Initialize selected element
     * @param {String} query selector
     */
    constructor(query = "undefined") {
        this.element = document.querySelector(query);
    }

    /**
     * Get value of an element or replace element value
     * @param {String} replacer 
     * @returns undefined
     */
    val(replacer = null) {
        if (replacer == null) {
            return this.element.value;
        }
        return this.element.value = replacer;
    }

    /**
     * Get innerHTML model on element or replace value of html document element
     * @param {String} replacer replace html document element
     * @returns undefined
     */
    html(replacer = null) {
        if (replacer == null) {
            return this.element.innerHTML;
        }
        return this.element.innerHTML = replacer;
    }

    /**
     * Get innerText model on element or replace value of text document element
     * @param {String} replacer replace html text value element
     * @returns undefined
     */
    text(replacer = null) {
        if (replacer == null) {
            return this.element.innerText;
        }
        return this.element.innerText = replacer;
    }

    /**
     * Adding Class(s) 
     * @param {String} values class values
     * @returns 
     */
    addClass(values) {
        return this.element.classList.add(values);
    }

    /**
     * Get, Set and Replace attribute element
     * @param {String} key attribute key 
     * @param {String} value value of attribute key
     * @returns 
     */
    attr(key = null, value = null) {
        if (key !== null && value !== null) {
            return this.element.setAttribute(key, value);
        } else if (key === null && value === null) {
            return this.element.attributes;
        } else if (key !== null) {
            return this.element.getAttribute(key);
        }
    }

    /**
     * Set event listener
     * @param {String} event event receive
     * @param {Function} callbackEventHandler event handler
     * @returns undefined
     */
    on(event = null, callbackEventHandler) {
        if (event == null) {
            return console.error('Event rule not set!');
        } else if (typeof callbackEventHandler !== "function") {
            return console.error('Callback Event Handler not set!');
        } else {
            return this.element.addEventListener(event, callbackEventHandler);
        }
    }
}