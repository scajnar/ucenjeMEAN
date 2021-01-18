const novice = (req,res) => {
    res.render('novice', {title:'lokacije shit madrfakr aaa', glava:'glavic od lokacij',tic:'tic od lokacij'}
    );

}

/* Vrni podrobnosti lokacije */
const podrobnostiLokacije = (req, res) => {
    res.render('lokacija-podrobnosti', {
        title: 'Stari grad Celje Podrobnosti lokacije',
        glavaStrani: {
            naslov: 'Stari grad Celje'
        },
        stranskaOrodnaVrstica: {
            kontekst: 'je na EduGeoCache, ker je zanimiva lokacija, ki si jo lahko ogledate, ko ste brez idej za kratek izlet.',
            poziv: 'Če vam je lokacija všeč, ali pa tudi ne, dodajte svoj komentar in s tem pomagajte ostalim uporabnikom pri odločitvi.'
        },
        lokacija: {
            naziv: 'Stari grad Celje',
            naslov: 'Cesta na grad 78, 3000 Celje, Slovenija',
            ocena: 3,
            lastnosti: ['slikovit razgled', 'vstopnina', 'otrokom prijazno'],
            koordinate: {lat: 46.219849, lng: 15.271601},
            delovniCas: [{
                dnevi: 'ponedeljek - petek',
                odprtje: '9:00',
                zaprtje: '21:00',
                zaprto: false
            }, {
                dnevi: 'sobota',
                odprtje: '9:00',
                zaprtje: '19:00',
                zaprto: false
            }, {
                dnevi: 'nedelja',
                zaprto: true
            }],
            komentarji: [{
                avtor: 'Dejan Lavbič',
                ocena: 5,
                datum: '7. november, 2019',
                besediloKomentarja: 'Odlična lokacija, ne morem je prehvaliti.'
            }, {
                avtor: 'Kim Jong Un',
                ocena: 1,
                datum: '8. november, 2019',
                besediloKomentarja: 'Čisti dolgčas, še kava je zanič.'
            }]
        }
    });
};

const podrobnostiIzdelka = (req,res) => {
    res.render('izdelki',{
        title: 'izdelki',

        izdelek:{
            imeIzdelka: 'Gunto',
            barve:{
                rdeca: true,
                modra: false,
                rumena: true,
                crna: false,
                bela: true
            },
            cena: 200,
            lastnosti:{
                zaOtroke: true,
                zaOdrasle: true,
                oznake: ['bavno','tro','normalno']
            },
            modifikatorCene:{
                anglijaX:2,
                italijaX:1.5,
                Avstrija:1
            }
        }
    })
}

const valuteVdrzavah = (req,res) => {
    res.render('valute',{
        title: 'valute',
        valuteVDrzavah:{
            ceneVAvstriji: 'euro',
            cenaVItaliji: 'franklni',
            cenaVAngliji: 'funti'
        }
    })
}



module.exports = {
    novice,
    podrobnostiLokacije,
    podrobnostiIzdelka,
    valuteVdrzavah
}