const router = require("express").Router();
const Project = require("../models/Project");

// SUBMIT

router.post("/submit", async (req, res) => {
  const newProject = new Project({
    sourceUrl: req.body.sourceUrl,
    deploymentUrl: req.body.deploymentUrl,
    description: req.body.description,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ err });
  }
});

// GET ALL

router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
