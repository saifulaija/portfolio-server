import express from 'express';
import { ProjectControllers } from './projects.controller';

const router = express.Router();

router.post('/create-project', ProjectControllers.createProjectIntoDB);
router.get('/', ProjectControllers.getAllProjects);
router.get('/:id', ProjectControllers.getSingleProject);
router.delete('/delete-project/:id', ProjectControllers.deleteProject);
router.patch('/update-project/:id', ProjectControllers.updateProject);

export const ProjectsRoutes = router;
