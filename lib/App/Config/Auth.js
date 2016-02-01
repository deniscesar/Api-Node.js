var jwt = require("jsonwebtoken");
var Auth = (function () {
    function Auth() {
    }
    Auth.authorize = function (req, res, next) {
        var token = req.headers['access_token'];
        if (!token) {
            res.status(401).send({ message: 'Acesso Restrito' });
        }
        else {
            jwt.verify(token, 'shhhhh', function (err, decoded) {
                if (err) {
                    res.status(401).send({ message: 'Token inválido' });
                }
                else {
                    next();
                }
            });
        }
    };
    Auth.isAdmin = function (req, res, next) {
        var token = req.headers['access_token'];
        if (!token) {
            res.status(401).send({ message: 'Acesso Restrito' });
        }
        else {
            jwt.verify(token, 'shhhhh', function (err, decoded) {
                if (err) {
                    res.status(401).send({ message: 'Token inválido' });
                }
                else {
                    if (decoded.Role == 'admin') {
                        next();
                    }
                    else {
                        res.status(401).send({ message: 'Você não tem permissão para esta funcionalidade.' });
                    }
                }
            });
        }
    };
    return Auth;
})();
module.exports = Auth;
//# sourceMappingURL=Auth.js.map