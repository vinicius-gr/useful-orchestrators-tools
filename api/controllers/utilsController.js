exports.delay = (req, res, next) => {
    const delayTime = req.body.delayTime;

    setTimeout(() => {
        res.status(200).json({
            message: `Everything went ok`
        });
    }, delayTime);
}