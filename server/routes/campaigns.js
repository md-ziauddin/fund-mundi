import express from 'express';

import { getAllCampaign } from '../controllers/campaigns.js'

const router = express.Router();

router.get('/', getAllCampaign)

export default router