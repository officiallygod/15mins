const axios = require('axios');

exports.homeRoutes = (req, res) => {
	// Make a get request to /api/users
	axios
		.get('http://localhost:3000/api/users')
		.then(function (response) {
			res.render('index', { users: response.data });
		})
		.catch((err) => {
			res.send(err);
		});
};

exports.add_user = (req, res) => {
	res.render('add_user');
};

exports.contact = (req, res) => {
	// Make a get request to /api/users
	axios
		.get('http://localhost:3000/api/users')
		.then(function (response) {
			res.render('contact', { users: response.data });
		})
		.catch((err) => {
			res.send(err);
		});
};

exports.membership = (req, res) => {
	res.render('membership');
};

exports.update_user = (req, res) => {
	axios
		.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
		.then(function (userdata) {
			res.render('update_user', { user: userdata.data });
		})
		.catch((err) => {
			res.send(err);
		});
};
