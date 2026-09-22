<<<<<<< HEAD
/* The ResearchDAO must be constructed with a connected database object */
function ResearchDAO(db) {

    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof ResearchDAO)) {
        console.log("Warning: ResearchDAO constructor called without 'new' operator");
        return new ResearchDAO(db);
    }

    this.getBySymbol = (symbol, callback) => {

        const searchCriteria = () => {

            if (symbol) {
                console.log("in if symbol");
                return {
                    symbol
                };
            }
        };
    };
}

module.exports = { ResearchDAO };
=======
/* The ResearchDAO must be constructed with a connected database object */
function ResearchDAO(db) {

    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof ResearchDAO)) {
        console.log("Warning: ResearchDAO constructor called without 'new' operator");
        return new ResearchDAO(db);
    }

    this.getBySymbol = (symbol, callback) => {

        const searchCriteria = () => {

            if (symbol) {
                console.log("in if symbol");
                return {
                    symbol
                };
            }
        };
    };
}

module.exports = { ResearchDAO };
>>>>>>> cec4cbe1e37e9c421c590bfe9c67e5667513222d
