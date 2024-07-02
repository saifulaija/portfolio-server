import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogsRoutes } from '../modules/blog/blog.route';
import { ProjectsRoutes } from '../modules/projects/projects.route';
import { UserRoutes } from '../modules/user/user.route';
import { SkillsRoutes } from '../modules/skills/skills.route';
import { FrontendRoutes } from '../modules/frontent/frontend.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blog',
    route: BlogsRoutes,
  },
  {
    path: '/project',
    route: ProjectsRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/skill',
    route: SkillsRoutes,
  },
  {
    path: '/frontend-skill',
    route: FrontendRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
