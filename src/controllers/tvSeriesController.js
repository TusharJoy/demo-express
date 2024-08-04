// src/controllers/tvSeriesController.js
const TVSeries = require("../models/tvSeries");

exports.getAllTVSeries = async (req, res) => {
  try {
    const tvSeries = await TVSeries.find();
    res.json(tvSeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTVSeries = async (req, res) => {
  const tvSeries = new TVSeries({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTVSeries = await tvSeries.save();
    res.status(201).json(newTVSeries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTVSeries = async (req, res) => {
  try {
    const updatedTVSeries = await TVSeries.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    res.json(updatedTVSeries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTVSeries = async (req, res) => {
  try {
    await TVSeries.findByIdAndDelete(req.params.id);
    res.json({ message: "TV Series deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
