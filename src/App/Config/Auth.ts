import express = require("express");
import jwt = require("jsonwebtoken");

class Auth {

	static authorize = (req: express.Request, res: express.Response, next) => {

		var token = req.headers['access_token'];

		if (!token) {		
			res.status(401).send({ message: 'Acesso Restrito' });
		} else {
			jwt.verify(token, 'shhhhh', (err, decoded) => {
				if (err) {
					res.status(401).send({ message: 'Token inválido' });
				} else {
					next();
				}
			});
		}
	}

	static isAdmin = (req: express.Request, res: express.Response, next) => {

		var token = req.headers['access_token'];

		if (!token) {
			res.status(401).send({ message: 'Acesso Restrito' });
		} else {
			jwt.verify(token, 'shhhhh', (err, decoded) => {				
				if (err) {
					res.status(401).send({ message: 'Token inválido' });
				} else {
					if (decoded.Role == 'admin') {
						next();
					} else {
						res.status(401).send({ message: 'Você não tem permissão para esta funcionalidade.' });
					}
				}
			});
		}
	}
}

export = Auth;