import express from 'express';
import { FrontendControllers } from './frontend.controller';



const router = express.Router();

router.post('/create-frontend-skill', FrontendControllers.createFrontendIntoDB);
router.get('/', FrontendControllers.getAllFrontend);
router.get('/:id', FrontendControllers.getSingleFrontend);
router.delete('/delete-frontend-skill/:id', FrontendControllers.deleteFrontend);
router.patch('/update-frontend-skill/:id', FrontendControllers.updateFrontend);

export const FrontendRoutes = router;
