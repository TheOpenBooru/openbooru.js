"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const request_1 = __importDefault(require("../request"));
function search(apiUrl, query, index = 0, limit = 64) {
    return __awaiter(this, void 0, void 0, function* () {
        let params = Object.assign(query, { index, limit });
        let r = yield (0, request_1.default)("/posts/search", {
            method: "GET",
            apiUrl: apiUrl,
            params: params,
        });
        let posts = yield r.json();
        return posts;
    });
}
exports.search = search;
