//importacion del router generico
import MyRouter from '../router.js';
//importacion del controlador
import CategoriesController from '../../controllers/categories.controller.js';
//importacion de middlewares
import is_valid_category from '../../middlewares/is_valid_category.js';

const controller = new CategoriesController();

export default class CategoriesRouter extends MyRouter {
    init() {

        this.post(
            '/create',
            ["ADMIN"],
            is_valid_category,
            async (req, res, next) => {
                try {
                    const data = req.body;
                    const response = await controller.create(data);

                    return response
                        ? res.sendSuccessCreate(response) 
                        : res.sendNotFound('Categories')

                } catch (error) {
                    next(error);
                }
            }
        );

        this.get(
            '/',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    const query = req.query;
                    
                    const response = await controller.readAll(query);

                    res.sendSuccess(response)
                } catch (error) {
                    next(error)
                }
            }
        );

        this.get(
            '/:id',
            ['PUBLIC'],
            async (req, res, next) => {
                try {
                    const response = await controller.readById(req.params.id);
                    
                    return response
                        ? res.sendSuccess(response)
                        : res.sendNotFound('Countries')
                } catch (error) {
                    next(error);
                }
            }
        );       

        this.put(
            '/:id',
            ['ADMIN'],
            async (req, res, next) => {
                try {
                    const { id } = req.params;
                    const data = req.body;
                    const response = await controller.update(id, data);

                    return response
                        ? res.sendSuccess(response)
                        : res.sendNotFound('country')

                } catch (error) {
                    next(error);                    
                }
            }
        );

    }
}