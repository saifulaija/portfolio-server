import express from 'express';
import { BackendControllers } from './backend.controller';




const router = express.Router();

router.post('/create-tool-skill', BackendControllers.createBackendIntoDB);
router.get('/', BackendControllers.getAllBackend);
router.get('/:id', BackendControllers.getSingleBackend);
router.delete('/delete-tool-skill/:id', BackendControllers.deleteBackend);
router.patch('/update-tool-skill/:id', BackendControllers.updateBackend);

export const BackendRoutes = router;
