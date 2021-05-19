const { Router } = require("express");
const router = Router();
//Phone Model
const Phone = require("../../models/Phone");
// @route GET api/phones
// @desc Get all Phones
// @access Public
router.get("/", async (req, res) => {
  try {
    const phone = await Phone.find();
    if (!phone) throw new Error("No Phone");
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @route Put api/phones
// @desc edits phone
// @access Public
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Phone.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Somthing went wrong");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @route Delete api/phones
// @desc deletes phone
// @access Public
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removedPhone = await Phone.findByIdAndDelete(id);
    if (!removedPhone) throw Error("Somthing went wrong");
    res.status(200).json(removedPhone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @route Post api/phones
// @desc post new Phone
// @access Public
router.post("/", async (req, res) => {
  let newPhone = new Phone(req.body.phone);
  try {
    const phone = await newPhone.save();
    if (!phone) throw new Error("Somthing went wrong saving the phone");
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
