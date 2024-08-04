const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", paymentController.getAllPayments);

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Add a new payment
 *     parameters:
 *       - name: userId
 *         description: ID of the user
 *         required: true
 *       - name: seasonId
 *         description: ID of the season
 *         required: true
 *       - name: amount
 *         description: Payment amount
 *         required: true
 *       - name: date
 *         description: Payment date
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", paymentController.createPayment);

/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     summary: Update a payment
 *     parameters:
 *       - name: id
 *         description: ID of the payment
 *         required: true
 *       - name: amount
 *         description: Payment amount
 *         required: true
 *       - name: date
 *         description: Payment date
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", paymentController.updatePayment);

/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     summary: Delete a payment
 *     parameters:
 *       - name: id
 *         description: ID of the payment
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
