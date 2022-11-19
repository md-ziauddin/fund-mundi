import express from "express";

import {
  getAllCampaign,
  creatCampaign,
  getCampaign,
  updateCampaign,
  hideCampaign,
} from "../controllers/campaigns.js";

const router = express.Router();

router.get("/:id", getCampaign);
router.get("/", getAllCampaign);
router.post("/", creatCampaign);
router.patch("/:id", updateCampaign);
router.delete("/:id", hideCampaign);

export default router;
