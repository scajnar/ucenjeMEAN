var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlLokacije = require('../controllers/lokacije');
const ctrlOstalo = require('../controllers/ostalo');
//VSI URLJI
// lokacije
// tutorial
// uporabnik
// ostalo


/* GET home page. */
router.get('/', ctrlMain.index);

//get lokacije shit
router.get('/lokacije', ctrlLokacije.lokacije);

//get ostali shit
router.get('/tutorial', ctrlOstalo.tutorial);
router.get('/uporabnik', ctrlOstalo.uporabnik);
router.get('/ostalo', ctrlOstalo.ostalo);

module.exports = router;
