export default function (req, res, next) {
    try {
        let { title, list, sport, category_id, location } = req.body;
        if((title, sport, category_id, location) && (list && list.length > 0)) {
            return next()
        } else {
            return res.status(400).json({
                status: 400,
                method: req.method,
                path: req.url,
                message: 'all fields are required'
            })
        }
    } catch (error) {
        next(error);
    }
}