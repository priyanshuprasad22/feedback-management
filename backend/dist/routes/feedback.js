"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedback_1 = require("../controllers/feedback");
const limiter_1 = require("../middleware/limiter");
const router = (0, express_1.Router)();
router.route('/feedback').get(feedback_1.getFeedback);
router.route('/feedback').post(limiter_1.limiter, feedback_1.addFeedback);
exports.default = router;
