import express from 'express';
import { MetaController } from './meta.controller';






const router = express.Router();
router.get(
    '/',

    MetaController.fetchDashboardMetadata
);

export const MetaRoutes = router;