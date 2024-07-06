import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogsRoutes } from '../modules/blog/blog.route';
import { ProjectsRoutes } from '../modules/projects/projects.route';
import { UserRoutes } from '../modules/user/user.route';
import { SkillsRoutes } from '../modules/skills/skills.route';
import { FrontendRoutes } from '../modules/frontent/frontend.route';
import { BackendRoutes } from '../modules/backend/backend.route';
import { ToolsRoutes } from '../modules/tools/tools.route';
import { MetaRoutes } from '../modules/meta/meta.route';

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
    path: '/frontend',
    route: FrontendRoutes,
  },
  {
    path: '/backend',
    route: BackendRoutes,
  },
  {
    path: '/tool',
    route: ToolsRoutes,
  },
  {
    path: '/meta',
    route: MetaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
