import mongoose from "mongoose";

const careerTrendSchema = new mongoose.Schema(
  {
    career: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    count: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

careerTrendSchema.index({ career: 1 });

const CareerTrend = mongoose.model(
  "CareerTrend",
  careerTrendSchema
);

export default CareerTrend;