//------CREATE ELEMENT-----------

/**
 * Create an HTML Element
 * 
 * @param {string} el 
 * @returns HTMLElement
 */
const c = (el) => document.createElement(el);

//------FINE CREATE ELEMENT-----------

//---------QUERY SELECTOR------------

/**
 * Select an element in HTML
 * 
 * @param {string} el
 * @returns HTMLElement
 */
const q = (el) => document.querySelector(el);

//------FINE QUERY SELECTOR-----------

//-----------GENERAL GET---------------

/**
 * General function to send a GET request to a specific end-point
 * 
 * @param {string} URL
 * @returns data
 */

const GET = async(URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return await data;
}

//-----------FINE GENERAL GET---------------

//-------------GET ID------------

/**
 * Return the id formatted as following #000
 * 
 * @param {number} n
 * @returns id
 */

const getId = (n) => {
    if (!n) return "000";

    let id = n;
    if (id < 10) {
        id = '00' + id
    }
    else if (id < 100) {
        id = '0' + id
    }

    return id
}

//-------------FINE GET ID------------



export {q, c, getId, GET}
