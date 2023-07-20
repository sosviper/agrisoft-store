"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _activities = require("../controllers/activities.controller");
var router = (0, _express.Router)();
router.get("/activities", _activities.getActivities);
router.post("/activities", _activities.createNewActivity);
router.get("/activities/count", _activities.getTotalActivities);
router.get("/activities/:id", _activities.getActivityById);
router["delete"]("/activities/:id", _activities.deleteActivityById);
router.put("/activities/:id", _activities.updateActivityById);
var _default = router;
exports["default"] = _default;