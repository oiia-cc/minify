const router = require('express').Router();
const { fileQueue } = require('../../queue/queueConfig');
const { info } = require('../../utils/logger');

router.get('/dlq', async (req, res) => {
    const jobs = await fileQueue.getFailed(0, 200);
    info("11jobs: ", jobs);
    res.json(jobs.map(j => ({
        id: j.id,
        attemptsMade: j.attemptsMade,
        failedReason: j.failedReason,
        data: j.data,
        timestamp: j.timestamp
    })));
});
router.post('/retry/:id', async (req, res) => {
    const job = await fileQueue.getJob(req.params.id);
    info("idddd: ", req.params.id);
    info("11jobs: ", job);

    if (!job) return res.status(404).json({ message: 'Not found' });

    await job.retry();
    res.json({ success: true });
});
router.delete('/dlq/:id', async (req, res) => {
    const job = await fileQueue.getJob(req.params.id);
    info("1188job: ", job);
    if (!job) return res.status(404).json({ message: 'Not found' });

    await job.remove();
    res.json({ success: true });
});

module.exports = router;