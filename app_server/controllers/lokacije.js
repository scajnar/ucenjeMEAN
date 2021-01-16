const novice = (req,res) => {
    res.render('novice', {title:'lokacije shit madrfakr aaa', glava:'glavic od lokacij',tic:'tic od lokacij'}
    );

}

const podrobnostiLokacije = (req, res) => {
    res.render('lokacija-podrobnosti', {
        title: 'Stari grad Celje Podrobnosti lokacije',
        glavaStrani: {
            naslov: 'Stari grad Celje'
        }
    })
};




module.exports = {
    novice
}