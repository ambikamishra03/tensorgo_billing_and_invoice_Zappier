const Usage = require('../models/Usage');
const axios = require('axios');
const { ZAPIER_WEBHOOK_URL } = require('../config/config');

exports.generateInvoice = async (req, res) => {
    try {
        const usage = await Usage.findOne({ userId: req.params.userId });

        if (!usage) {
            return res.status(404).json({ message: 'Usage data not found' });
        }

        // Example usage metrics
        const { apiCalls, storageGB, activeUsers } = usage.metrics;

        // Define your rates
        const rates = {
            apiCallRate: 0.01, // $0.01 per API call
            storageRate: 0.10, // $0.10 per GB of storage
            activeUserRate: 5.00 // $5.00 per active user
        };

        // Calculate the total cost
        const apiCallsCost = apiCalls * rates.apiCallRate;
        const storageCost = storageGB * rates.storageRate;
        const activeUsersCost = activeUsers * rates.activeUserRate;

        const totalCost = apiCallsCost + storageCost + activeUsersCost;

        // Invoice object
        const invoice = {
            userId: req.params.userId,
            usageMetrics: usage.metrics,
            totalCost,
            invoiceDate: new Date(),
            billingCycle: {
                start: usage.billingCycleStart,
                end: usage.billingCycleEnd
            }
        };

        // Send data to Zapier webhook
        await axios.post(ZAPIER_WEBHOOK_URL, invoice);

        res.json(invoice);
    } catch (error) {
        res.status(500).send(error);
    }
};
