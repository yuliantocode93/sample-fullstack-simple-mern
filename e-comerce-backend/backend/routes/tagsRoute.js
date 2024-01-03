const express = require("express");
const router = express.Router();
const { getTags, getTagsById } = require("../controller/tagController");

router.get("/tags", getTags);
router.get("/tags/:id", getTagsById);

module.exports = router;
