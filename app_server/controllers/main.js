
const index = (req,res) => {
    res.render('index', {title:'express', glava:'glavic',tic:'tic'}
    );

}

module.exports = {
    index
}