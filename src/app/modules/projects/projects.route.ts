import express from 'express';
import { ProjectControllers } from './projects.controller';

const router = express.Router();

router.post('/create-project', ProjectControllers.createProjectIntoDB);
router.get('/get-projects', ProjectControllers.getAllProjects);
router.get('/:id', ProjectControllers.getSingleProject);

export const ProjectsRoutes = router;
