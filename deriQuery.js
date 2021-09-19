/**
 * Query Selector
 * @param {String} query 
 * @returns document element
 */
function $(query) {
    return new deriQuery(query);
}

class deriQuery {
    constructor(query) {
        this.query = document.querySelector(query);
    }

    /**
     * get value of an element or replace element value
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
     * get innerHTML model on element or replace value of html document element
     * @param {string} replacer replace html element
     * @returns string
     */
    html(replacer = null) {
        if (replacer == null) {
            return this.query.innerHTML;
        }
        return this.query.innerHTML = replacer;
    }

    /**
     * get innerText model on element or replace value of text document element
     * @param {string} replacer replace html element
     * @returns string
     */
    text(replacer = null) {
        if (replacer == null) {
            return this.query.innerText;
        }
        return this.query.innerText = replacer;
    }
}
