export default function (req, res, next) {
    try {
        let { first_name, last_name, mail, password, role, country_id } = req.body;
        if(first_name && last_name && mail && password && role) {
            if(role === 'MANAGER') {
                if(!country_id){
                    return res.status(400).json({
                        status: 400,
                        method: req.method,
                        path: req.url,
                        message: 'all fields are required'
                    })
                } 
            } 
            next()
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