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
exports.Delete = void 0;
const request_1 = __importDefault(require("../request"));
/**
 * Delete's the current selected Post
 * @param apiUrl
 * @param post_id
 * @param token
 */
function Delete(apiUrl, post_id, token = null) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.default)(`/post/${post_id}`, {
            method: "DELETE",
            token: token,
            apiUrl: apiUrl,
        });
    });
}
exports.Delete = Delete;
