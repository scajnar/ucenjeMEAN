const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const izdelek = mongoose.model('ime-paketa-izdelkov', schema);

const izdelkibyID = (req, res) => {
    izdelek
        .findById(req.params.izdelek._id)
        .exec((napaka, izdelek) => {
            res.status(200).json(izdelek);
        });
};
