"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEditFailure = exports.PostImportFailure = exports.PostCreationFailure = exports.PostAlreadyExists = exports.PostNotFound = exports.SettingsTooLarge = exports.UserAlreadyExists = exports.PasswordDoesntMeetRequirements = exports.PasswordReset = exports.LoginFailure = exports.BadCaptcha = exports.InternalServerError = exports.PermissionError = exports.RateLimited = exports.ValidationError = void 0;
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
class RateLimited extends Error {
}
exports.RateLimited = RateLimited;
class PermissionError extends Error {
}
exports.PermissionError = PermissionError;
class InternalServerError extends Error {
}
exports.InternalServerError = InternalServerError;
class BadCaptcha extends Error {
}
exports.BadCaptcha = BadCaptcha;
class LoginFailure extends Error {
}
exports.LoginFailure = LoginFailure;
class PasswordReset extends Error {
}
exports.PasswordReset = PasswordReset;
class PasswordDoesntMeetRequirements extends Error {
}
exports.PasswordDoesntMeetRequirements = PasswordDoesntMeetRequirements;
class UserAlreadyExists extends Error {
}
exports.UserAlreadyExists = UserAlreadyExists;
class SettingsTooLarge extends Error {
}
exports.SettingsTooLarge = SettingsTooLarge;
class PostNotFound extends Error {
}
exports.PostNotFound = PostNotFound;
class PostAlreadyExists extends Error {
}
exports.PostAlreadyExists = PostAlreadyExists;
class PostCreationFailure extends Error {
}
exports.PostCreationFailure = PostCreationFailure;
class PostImportFailure extends Error {
}
exports.PostImportFailure = PostImportFailure;
class PostEditFailure extends Error {
}
exports.PostEditFailure = PostEditFailure;
