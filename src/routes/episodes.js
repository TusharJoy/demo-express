const express = require("express");
const router = express.Router();
const episodeController = require("../controllers/episodeController");

/**
 * @swagger
 * /api/episodes:
 *   get:
 *     summary: Get all episodes
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", episodeController.getAllEpisodes);

/**
 * @swagger
 * /api/episodes:
 *   post:
 *     summary: Add a new episode
 *     parameters:
 *       - name: seasonId
 *         description: ID of the season
 *         required: true
 *       - name: title
 *         description: Title of the episode
 *         required: true
 *       - name: description
 *         description: Description of the episode
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", episodeController.createEpisode);

/**
 * @swagger
 * /api/episodes/{id}:
 *   put:
 *     summary: Update an episode
 *     parameters:
 *       - name: id
 *         description: ID of the episode
 *         required: true
 *       - name: title
 *         description: Title of the episode
 *         required: true
 *       - name: description
 *         description: Description of the episode
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", episodeController.updateEpisode);

/**
 * @swagger
 * /api/episodes/{id}:
 *   delete:
 *     summary: Delete an episode
 *     parameters:
 *       - name: id
 *         description: ID of the episode
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", episodeController.deleteEpisode);

module.exports = router;
