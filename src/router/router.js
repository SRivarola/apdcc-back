import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../dao/mongo/models/user.model.js';
import env from '../config/env.js';

export default class MyRouter {

    constructor() {
        this.router = Router();
        this.init();
    };

    getRouter() {
        return this.router;
    };

    init() { };

    applyCbs(cbs) {
        return cbs.map((cb) => async (...params) => {
            try {
                await cb.apply(this, params);
            } catch (error) {
                params[1].status(500).send(error)
            }
        })
    };

    responses = (req, res, next) => {
        res.sendSuccessCreate = (payload) => res.status(201).json(payload);
        res.sendSuccess = (payload) => res.status(200).json(payload);
        res.sendNotFound = () => res.status(404).json({ success: false, response: 'Not found' });
        res.sendNotAuthenticatedError = (error) => res.status(401).json({ status: 'error', error });
        res.sendNotAuthorizedError = (error) => res.status(403).json({ status: 'error', error });

        return next();
    };

    handlePolicies = (policies) => async (req, res, next) => {
        // let token = req.headers.token || null;
        let token = req.cookies.apdcc_token;
        if (policies.includes('PUBLIC')) {
            if (token) {
                const payload = jwt.verify(token, env.SECRET_KEY);
                const user = await User.findOne(
                { mail: payload.mail },
                "mail role country_id _id"
                ); 
                req.user = user;
            }
            return next();
        } else {
            if (!token) {
                return res.sendNotAuthenticatedError('Unauthenticated');
            } else {
                const payload = jwt.verify(token, env.SECRET_KEY);
                const user = await User.findOne({ mail: payload.mail }, 'mail role country_id');

                const role = user.role;
                if (
                    (policies.includes('ADMIN') && role === 'ADMIN') ||
                    (policies.includes('MANAGER') && role === 'MANAGER') ||
                    (policies.includes('JUEZ') && role === 'JUEZ')
                ) {  
                    req.user = user;
                    return next();
                } else {
                    return res.sendNotAuthorizedError('Unauthorized');
                };
            };
        };
    };

    // create
    post(path, policies, ...cbs) {
        this.router.post(path, this.responses, this.handlePolicies(policies), this.applyCbs(cbs));
    };

    //read
    get(path, policies, ...cbs) {
        this.router.get(path, this.responses, this.handlePolicies(policies), this.applyCbs(cbs));
    };

    //updated
    put(path, policies, ...cbs) {
        this.router.put(path, this.responses, this.handlePolicies(policies), this.applyCbs(cbs));
    };

    //delete
    delete(path, policies, ...cbs) {
        this.router.delete(path, this.responses, this.handlePolicies(policies), this.applyCbs(cbs));
    };

    //use
    use(path, ...cbs) {
        this.router.use(path, this.responses, this.applyCbs(cbs))
    };

}