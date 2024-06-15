const Usage = require('../models/Usage');

exports.getBillingDetails = async (req, res) => {
    try {
        const usage = await Usage.findOne({ userId: req.user._id });

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

        // Billing details object
        const billingDetails = {
            apiCalls,
            storageGB,
            activeUsers,
            rates,
            totalCost,
            billingCycle: {
                start: usage.billingCycleStart,
                end: usage.billingCycleEnd
            }
        };

        res.json(billingDetails);
    } catch (error) {
        res.status(500).send(error);
    }
};
