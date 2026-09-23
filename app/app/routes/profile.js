const ProfileDAO = require("../data/profile-dao").ProfileDAO;
const ESAPI = require("node-esapi");
const {
    environmentalScripts
} = require("../../config/config");

/* The ProfileHandler must be constructed with a connected db */
function ProfileHandler(db) {
    "use strict";

    const profile = new ProfileDAO(db);

    this.displayProfile = (req, res, next) => {
        const {
            userId
        } = req.session;



        profile.getByUserId(parseInt(userId), (err, doc) => {
            if (err) return next(err);
            doc.userId = userId;

            // @TODO @FIXME
            // while the developer intentions were correct in encoding the user supplied input so it
            // doesn't end up as an XSS attack, the context is incorrect as it is encoding the firstname for HTML
            // while this same variable is also used in the context of a URL link element
            doc.website = ESAPI.encoder().encodeForHTML(doc.website);
            // fix it by replacing the above with another template variable that is used for 
            // the context of a URL in a link header
            // doc.website = ESAPI.encoder().encodeForURL(doc.website)

            return res.render("profile", {
                ...doc,
                environmentalScripts
            });
        });
    };

   this.handleProfileUpdate = (req, res, next) => {
        const escapeHtml = (unsafe) => {
            if (!unsafe) return "";
            return String(unsafe)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        };

       
        const firstName = escapeHtml(req.body.firstName);
        const lastName = escapeHtml(req.body.lastName);
        const ssn = escapeHtml(req.body.ssn);
        const dob = escapeHtml(req.body.dob);
        const address = escapeHtml(req.body.address);
        const bankAcc = escapeHtml(req.body.bankAcc);
        const bankRouting = req.body.bankRouting; 

        const regexPattern = /([0-9]+)+\#/;
        const testComplyWithRequirements = regexPattern.test(bankRouting);
        
        if (testComplyWithRequirements !== true) {
            const firstNameSafeString = firstName;
            return res.render("profile", {
                updateError: "Bank Routing number does not comply with requirements for format specified",
                firstNameSafeString,
                lastName,
                ssn,
                dob,
                address,
                bankAcc,
                bankRouting: escapeHtml(bankRouting), 
                environmentalScripts
            });
        }

        const { userId } = req.session;

        profile.updateUser(
            parseInt(userId),
            firstName,
            lastName,
            ssn,
            dob,
            address,
            bankAcc,
            escapeHtml(bankRouting), // Sanitize before saving to DB
            (err, user) => {
                if (err) return next(err);

                user.updateSuccess = true;
                user.userId = userId;

                return res.render("profile", {
                    ...user,
                    environmentalScripts
                });
            }
        );
    };

}

module.exports = ProfileHandler;
