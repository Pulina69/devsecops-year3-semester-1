const AllocationsDAO = require("../data/allocations-dao").AllocationsDAO;
const {
    environmentalScripts
} = require("../../config/config");

function AllocationsHandler(db) {
    "use strict";

    const allocationsDAO = new AllocationsDAO(db);

    this.displayAllocations = (req, res, next) => {
       
        const { userId } = req.session; 
        
        
        if (parseInt(req.params.userId, 10) !== userId) {
            return res.status(403).send("HTTP 403 Forbidden: Access Denied. You can only view your own allocations.");
        }

        allocationsDAO.getByUserId(parseInt(userId), (err, allocations) => {
            if (err) return next(err);
            return res.render("allocations", { userId, allocations, environmentalScripts });
        });
    };
}

module.exports = AllocationsHandler;

