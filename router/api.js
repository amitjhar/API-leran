const router = require("express").Router();
const Product = require("../model/products");

router.get("/", async (req, res) => {
  try {
    const productRecords = await Product.find();
    res.status(200).json(productRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // const productRecords = await Product.findOne({ _id: id });
    const productRecords = await Product.findById(id)
    res.status(200).json(productRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, desc, price } = req.body;
  const product = new Product({ name: name, desc: desc, price: price });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "successfully record delete" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
