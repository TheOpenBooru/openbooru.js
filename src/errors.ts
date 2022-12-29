export class InvalidToken extends Error{}
export class ValidationError extends Error{}
export class RateLimited extends Error{
    try_after: number;
    constructor(try_after: number) {
        super(`Ratelimted: ${try_after}s`);
        this.try_after = try_after;
    }
}
export class PermissionError extends Error{}
export class InternalServerError extends Error{}
export class BadCaptcha extends Error{ }

export class LoginRequired extends Error{}
export class LoginFailure extends Error{}
export class PasswordReset extends Error{ }
export class PasswordDoesntMeetRequirements extends Error{}
export class UserAlreadyExists extends Error{ }

export class SettingsTooLarge extends Error{ }

export class PostNotFound extends Error{}
export class PostAlreadyExists extends Error{}
export class PostCreationFailure extends Error{}
export class PostImportFailure extends Error{}
export class PostEditFailure extends Error{ }

export class TagEditFailure extends Error{}