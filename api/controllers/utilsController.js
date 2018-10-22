exports.delay = async (req, res, next) => {
    try {
        const delayTime = req.body.delayTime;

        await delay(delayTime);

        res.status(200).json({
            message: `Everything went ok`
        });
    } catch (error) {
        res.status(500).json({
            message: `Ops, somenthig went wrong`
        });
    }
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}