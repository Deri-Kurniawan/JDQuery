// DERI KURNIAWAN QUERY
// https://github.com/Deri-Kurniawan/JDQuery

/**
 * Query Selector
 * @param {String} query 
 * @returns document element
 */
const $ = (query) => {
    return new JDQuery(query);
}

class JDQuery {
    constructor(query) {
        this.query = document.querySelector(query);
    }

    /**
     * Get value of an element or replace element value
     * @param {String} replacer 
     * @returns string
     */
    val(replacer = null) {
        if (replacer == null) {
            return this.query.value;
        }
        return this.query.value = replacer;
    }

    /**
     * Get innerHTML model on element or replace value of html document element
     * @param {String} replacer replace html document element
     * @returns string
     */
    html(replacer = null) {
        if (replacer == null) {
            return this.query.innerHTML;
        }
        return this.query.innerHTML = replacer;
    }

    /**
     * Get innerText model on element or replace value of text document element
     * @param {String} replacer replace html text value element
     * @returns string
     */
    text(replacer = null) {
        if (replacer == null) {
            return this.query.innerText;
        }
        return this.query.innerText = replacer;
    }

    /**
     * Set event listener
     * @param {String} event event receive
     * @param {Function} handler callback event handler
     * @returns event
     */
    on(event = null, handler) {
        if (event == null) {
            console.error('Event not set!');
        } else if (typeof callback !== "function") {
            console.error('Callback Event Handler not set!')
        }
        return this.query.addEventListener(event, handler);
    }
}