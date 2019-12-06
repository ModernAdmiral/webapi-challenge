const express = require("express");
const Projects = require("./projectModel");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      console.log(req.query);
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to retrieve projects" });
    });
});

router.get("/:id/actions", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(projects => {
      console.log(req.query);
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to retrieve projects" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json({ message: "project has posted", project });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to post project" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Projects.update(id, body)
    .then(user => {
      res.status(200).json({ message: "Project has been updated", user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "The project could not be modified." });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then(project => {
      res.status(200).json({ message: "project successfully removed" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to delete project" });
    });
});

router;
module.exports = router;
