const express = require("express");
const router = express.Router();
const seasonController = require("../controllers/seasonController");

/**
 * @swagger
 * /api/seasons:
 *   get:
 *     summary: Get all seasons
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", seasonController.getAllSeasons);

/**
 * @swagger
 * /api/seasons:
 *   post:
 *     summary: Add a new season
 *     parameters:
 *       - name: tvSeriesId
 *         description: ID of the TV series
 *         required: true
 *       - name: title
 *         description: Title of the season
 *         required: true
 *       - name: description
 *         description: Description of the season
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", seasonController.createSeason);

/**
 * @swagger
 * /api/seasons/{id}:
 *   put:
 *     summary: Update a season
 *     parameters:
 *       - name: id
 *         description: ID of the season
 *         required: true
 *       - name: title
 *         description: Title of the season
 *         required: true
 *       - name: description
 *         description: Description of the season
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", seasonController.updateSeason);

/**
 * @swagger
 * /api/seasons/{id}:
 *   delete:
 *     summary: Delete a season
 *     parameters:
 *       - name: id
 *         description: ID of the season
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", seasonController.deleteSeason);

module.exports = router;
