const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const validatorOuther = require('./validators/validatorOuther');
const validatorOngs = require('./validators/validatorOngs');
const validatorIncidents = require('./validators/validatorIncidents');

routes.post('/sessions', validatorOuther.session, sessionController.create);
routes.get('/profile', validatorOuther.profile, profileController.index);

routes.get('/ongs', ongController.index);
routes.post('/ongs', validatorOngs.createOng, ongController.create);

routes.get('/incidents', validatorIncidents.ready, incidentController.index);
routes.post('/incidents', validatorIncidents.create, incidentController.create);
routes.delete('/incidents/:id', validatorIncidents.deleteI, incidentController.delete);

module.exports = routes;