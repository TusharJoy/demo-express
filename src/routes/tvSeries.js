// src/routes/tvSeries.js
const express = require("express");
const router = express.Router();
const tvSeriesController = require("../controllers/tvSeriesController");

/**
 * @swagger
 * /api/tvseries:
 *   get:
 *     summary: Get all TV series
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", tvSeriesController.getAllTVSeries);

/**
 * @swagger
 * /api/tvseries:
 *   post:
 *     summary: Add a new TV series
 *     parameters:
 *       - name: title
 *         description: Title of the TV series
 *         required: true
 *       - name: description
 *         description: Description of the TV series
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", tvSeriesController.createTVSeries);

/**
 * @swagger
 * /api/tvseries/{id}:
 *   put:
 *     summary: Update a TV series
 *     parameters:
 *       - name: id
 *         description: ID of the TV series
 *         required: true
 *       - name: title
 *         description: Title of the TV series
 *         required: true
 *       - name: description
 *         description: Description of the TV series
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", tvSeriesController.updateTVSeries);

/**
 * @swagger
 * /api/tvseries/{id}:
 *   delete:
 *     summary: Delete a TV series
 *     parameters:
 *       - name: id
 *         description: ID of the TV series
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", tvSeriesController.deleteTVSeries);

module.exports = router;
