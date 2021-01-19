const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Lokacija = mongoose.model('lokacija', schema);

const lokacijeSeznamPoRazdalji = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const lokacijeKreiraj = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};


const lokacijePosodobiIzbrano = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const lokacijeIzbrisiIzbrano = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const lokacijePreberiIzbrano = (req, res) => {
    Lokacija
        .findById(req.params.idLokacije)
        .exec((napaka, lokacija) => {
            res.status(200).json(lokacija);
        });
};



module.exports = {
    lokacijeSeznamPoRazdalji,
    lokacijeKreiraj,
    lokacijePreberiIzbrano,
    lokacijePosodobiIzbrano,
    lokacijeIzbrisiIzbrano
};


