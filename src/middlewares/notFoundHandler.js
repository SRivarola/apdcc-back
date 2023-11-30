export default (req, res, next) => {
    return res.status(404).send({
        success: false,
        message: 'Endpoint not found'
    })
}