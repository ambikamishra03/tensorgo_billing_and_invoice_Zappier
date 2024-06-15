const Usage = require('../models/Usage');

exports.getUsageDetails = async (req, res) => {
    try {
        const usage = await Usage.findOne({ userId: req.user._id });
        res.json(usage);
    } catch (error) {
        res.status(500).send(error);
    }
};
