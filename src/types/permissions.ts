export type Permissions = {
    canViewPosts: Permission,
    canSearchPosts: Permission,
    canEditPosts: Permission,
    canDeletePosts: Permission,
    canCreatePosts: Permission,
    canVotePosts: Permission,
    canViewUsers: Permission,
    canSearchUsers: Permission,
    canEditUsers: Permission,
    canDeleteUsers: Permission,
}


export type Permission = {
    has_permission: boolean,
    captcha: boolean,
    ratelimit: string,
}
