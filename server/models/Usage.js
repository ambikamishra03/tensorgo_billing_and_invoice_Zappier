const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    metrics: {
        apiCalls: { type: Number, default: 0 },
        storageGB: { type: Number, default: 0 },
        activeUsers: { type: Number, default: 0 },
    },
    billingCycleStart: { type: Date, default: Date.now },
    billingCycleEnd: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usage', usageSchema);
