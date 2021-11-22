const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    sourceUrl: { type: String, required: true },
    deploymentUrl: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
