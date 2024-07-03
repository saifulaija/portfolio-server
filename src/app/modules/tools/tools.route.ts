import express from 'express';
import { ToolsControllers } from './tools.controller';




const router = express.Router();

router.post('/create-tool-skill', ToolsControllers.createToolsIntoDB);
router.get('/', ToolsControllers.getAllTools);
router.get('/:id', ToolsControllers.getSingleTools);
router.delete('/delete-tool-skill/:id', ToolsControllers.deleteTools);
router.patch('/update-tool-skill/:id', ToolsControllers.updateTools);

export const ToolsRoutes = router;
