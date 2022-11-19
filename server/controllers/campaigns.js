import mongoose from "mongoose";

import { Campaign } from "../model/campaign.js";

export const getAllCampaign = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ hidden: false }).select("-__v");

    res.status(200).json({ length: campaigns.length, data: campaigns });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCampaign = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new Error("Id is not correct");
    }

    const campaign = await Campaign.findById(req.params.id);

    res.status(200).json({ data: campaign });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const creatCampaign = async (req, res) => {
  try {
    const { name, subHeading, description, risk, goal, targetDate } = req.body;

    const campaign = await new Campaign({
      name,
      subHeading,
      description,
      risk,
      goal,
      targetDate,
    }).save();

    res.status(201).json({ data: campaign });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCampaign = async (req, res) => {
  try {
    const { name, subHeading, description, risk, goal, targetDate } = req.body;
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      {
        name,
        subHeading,
        description,
        risk,
        goal,
        targetDate,
      },
      { new: true }
    );

    res.status(200).json({ data: updatedCampaign });
  } catch (err) {
    req.status(400).json({ message: err.message });
  }
};

export const hideCampaign = async (req, res) => {
  try {
    const hiddenCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      { hidden: true },
      { new: true }
    );

    res.status(200).json({ data: null });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @TODO: Will get enable when Admin controller is created
// export const adminDeleteCampaign = async (req, res) => {
//   try {
//     const deleteCampaign = await Campaign.findByIdAndDelete(req.params.id);

//     res.status(200).json({ data: null });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
