const express = require('express');
const router = express.Router();
const { Monitor,validate} = require('../models/monitor');

router.get('/', async (req, res) => {
    const monitor = await Monitor.find({  });
    if (!monitor) return res.status(404).send('No data Available to display');
    res.send(monitor);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let monitor = new Monitor(req.body);
    monitor = await monitor.save();
    res.send(monitor)
});

module.exports = router; 