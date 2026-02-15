const express = require('express');
const Products = require("./Model")
const router = express.Router();

router.get("/products/getAll", async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.status(200).json( products );
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      err: error.stack,
    });
  }
});

module.exports = router