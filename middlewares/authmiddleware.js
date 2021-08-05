const jwt = require("jsonwebtoken");
const client = require("../configs/db");


exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.send(500).json({ error: "server error" });
        }
        const userEmail = decoded.email;

        client
            .query(`SELECT * FROM users WHERE email='${userEmail}';`)
            .then((data) => {
                if (data.rows.length === 0) {
                    res.status((400)).json({ error: "Invalid token" });
                }
                else {
                    req.email = userEmail;
                    next();
                }
            })
            .catch((err) => {
                res.status((500)).json({ error: "DB error occured" });
            });
    });

};