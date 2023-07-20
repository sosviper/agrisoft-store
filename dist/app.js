"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _activities = _interopRequireDefault(require("./routes/activities.routes"));
var _morgan = _interopRequireDefault(require("morgan"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// settings
app.set("port", _config["default"].port);

// Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());

// Routes
app.use("/api", _products["default"]);
app.use("/api", _activities["default"]);
var _default = app;
exports["default"] = _default;