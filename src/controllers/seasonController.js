const Season = require("../models/season");

exports.getAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.find();
    res.json(seasons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSeason = async (req, res) => {
  const season = new Season({
    tvSeriesId: req.body.tvSeriesId,
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newSeason = await season.save();
    res.status(201).json(newSeason);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSeason = async (req, res) => {
  try {
    const updatedSeason = await Season.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    res.json(updatedSeason);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSeason = async (req, res) => {
  try {
    await Season.findByIdAndDelete(req.params.id);
    res.json({ message: "Season deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
