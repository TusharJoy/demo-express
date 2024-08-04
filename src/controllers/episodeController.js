const Episode = require("../models/episode");

exports.getAllEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEpisode = async (req, res) => {
  const episode = new Episode({
    seasonId: req.body.seasonId,
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newEpisode = await episode.save();
    res.status(201).json(newEpisode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEpisode = async (req, res) => {
  try {
    const updatedEpisode = await Episode.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    res.json(updatedEpisode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEpisode = async (req, res) => {
  try {
    await Episode.findByIdAndDelete(req.params.id);
    res.json({ message: "Episode deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
