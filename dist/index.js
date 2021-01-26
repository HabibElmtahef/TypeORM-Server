"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var gameRouter_1 = __importDefault(require("./routes/gameRouter"));
var app = express_1.default();
typeorm_1.createConnection();
// MiddleWares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//routes
app.use(gameRouter_1.default);
app.listen(5000);
console.log('Server on port', 5000);
