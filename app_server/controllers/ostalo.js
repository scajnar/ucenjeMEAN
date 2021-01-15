const tutorial = (req,res) => {
    res.render('tutorial', {title:'tutorial shit madrfakr aaa', glava:'glavic od tutorial',tic:'tic od tutorial'}
    );

}

const uporabnik = (req,res) => {
    res.render('uporabnik', {title:'uporabnik shit madrfakr aaa', glava:'glavic od uporabnik',tic:'tic od uporabnik'}
    );

}

const ostalo = (req, res) => {
    res.render('ostalo', {title:'ostalo'});
}
module.exports = {
    tutorial,
    uporabnik,
    ostalo

}