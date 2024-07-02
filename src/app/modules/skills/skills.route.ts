import express from 'express';
import { SkillsControllers } from './skills.controller';


const router = express.Router();

router.post('/create-skill', SkillsControllers.createSkillIntoDB);
router.get('/get-skills', SkillsControllers.getAllSkills);
router.get('/:id', SkillsControllers.getSingleSkill);
router.delete('/delete-skill/:id', SkillsControllers.deleteSkill);

export const SkillsRoutes = router;
