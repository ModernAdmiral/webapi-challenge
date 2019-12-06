const express = require("express");
const Actions = require("./actionModel");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  Actions.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to retrieve projects" });
    });
});

router.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to retrieve projects" });
    });
});

router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then(action => {
      res.status(201).json({ message: "action has posted", action });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to post action" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Actions.update(id, body)
    .then(user => {
      res.status(200).json({ message: "action has been updated", user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "The action could not be modified." });
    });
});

router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then(project => {
      res.status(200).json({ message: "action successfully removed" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "unable to delete action" });
    });
});

module.exports = router;
