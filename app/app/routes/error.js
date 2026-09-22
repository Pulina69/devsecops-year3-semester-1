<<<<<<< HEAD
// Error handling middleware

const errorHandler = (err, req, res,next) => {

    "use strict";

    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render("error-template", {
        error: err
    });
};

module.exports = { errorHandler };
=======
// Error handling middleware

const errorHandler = (err, req, res,next) => {

    "use strict";

    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render("error-template", {
        error: err
    });
};

module.exports = { errorHandler };
>>>>>>> cec4cbe1e37e9c421c590bfe9c67e5667513222d
