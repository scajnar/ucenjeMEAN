const mongoose = require('mongoose');

const delovniCasShema = new mongoose.Schema({
    dnevi: {type: String, required: true},
    odprtje: String,
    zaprtje: String,
    zaprto: {type: Boolean, required: true}
});

const komentarjiShema = new mongoose.Schema({
    avtor: String,
    ocena: {type: Number, required: true, min: 0, max: 5},
    besediloKomentarja: String,
    datum: {type: Date, "default": Date.now}
});

const lokacijeShema = new mongoose.Schema({
    naziv: {type: String, required: true},
    naslov: String,
    ocena: {type: Number, "default": 0, min: 0, max: 5},
    lastnosti: [String],
    koordinate: {type: [Number], index: '2dsphere'},
    delovniCas: [delovniCasShema],
    komentarji: [komentarjiShema]
});


const izdelkiShema = new mongoose.Schema( {
    valuteVDrzavah:{
        ceneVAvstriji: String,
        cenaVItaliji: String,
        cenaVAngliji: String
    },
    izdelki:[izdelkiLastnostiShema]
})

const izdelkiLastnostiShema = new mongoose.Schema({
    imeIzdelka: String,
    barve:{
        rdeca: Boolean,
        modra: Boolean,
        rumena: Boolean,
        crna: Boolean,
        bela: Boolean
    },
    cena: Number,
    lastnosti:{
        zaOtroke: Boolean,
        zaOdrasle: Boolean,
        Oznake: [String]
    }
})

mongoose.model('lokacija', lokacijeShema,'lokacije');
mongoose.model('ime-paketa-izdelkov',izdelkiShema,'izdelkiKolekcija');