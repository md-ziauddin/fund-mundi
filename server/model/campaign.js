import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    isRequired: true,
  },
  subHeading: {
    type: String,
    isRequired: true,
  },
  description: {
    type: String,
    isRequired: true,
  },
  risk: {
    type: String,
    isRequired: true,
  },
  // @TODO
  // update: [updates], This field will get populate, once update model is created
  // comment: [comment], This field will get populate, once comment model is created
  like: Number,
  goal: {
    type: Number,
    isRequired: true,
  },
  raised: Number,
  // backer: [user], This field will get populate, once user model is created'
  targetDate: Date,
  hidden: {
    type: Boolean,
    default: false,
  },
});

export const Campaign = mongoose.model("campaign", campaignSchema);
