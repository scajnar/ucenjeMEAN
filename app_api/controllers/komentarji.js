const mongoose = require('mongoose');
const Lokacija = mongoose.model('Lokacija');

const komentarjiKreiraj = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const komentarjiPreberiIzbranega = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const komentarjiPosodobiIzbranega = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

const komentarjiIzbrisiIzbranega = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

module.exports = {
    komentarjiKreiraj,
    komentarjiPreberiIzbranega,
    komentarjiPosodobiIzbranega,
    komentarjiIzbrisiIzbranega
};