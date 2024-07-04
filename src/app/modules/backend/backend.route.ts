import express from 'express';
import { BackendControllers } from './backend.controller';




const router = express.Router();

router.post('/create-backend-skill', BackendControllers.createBackendIntoDB);
router.get('/', BackendControllers.getAllBackend);
router.get('/:id', BackendControllers.getSingleBackend);
router.delete('/delete-backend-skill/:id', BackendControllers.deleteBackend);
router.patch('/update-backend-skill/:id', BackendControllers.updateBackend);

export const BackendRoutes = router;
