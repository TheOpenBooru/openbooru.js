"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const login_1 = __importDefault(require("./login"));
exports.login = login_1.default;
const register_1 = __importDefault(require("./register"));
exports.register = register_1.default;
