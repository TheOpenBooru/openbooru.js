export type Permissions = {
    canLogin: Permission,
    canRegister: Permission,

    canViewPosts: Permission,
    canCreatePosts: Permission,
    canVotePosts: Permission,
    canSearchPosts: Permission,
    canEditPosts: Permission,
    canDeletePosts: Permission,

    canRecieveAllTags: Permission,
    canSearchTags: Permission,
    canEditTags: Permission,

    canViewUsers: Permission,
    canSearchUsers: Permission,
    canEditUsers: Permission,
    canDeleteUsers: Permission,
    
    canCreateSubscriptions: Permission,
    canSearchSubscriptions: Permission,
    canDeleteSubscriptions: Permission,

    canViewProfile: Permission,
    canUpdateSettings: Permission,
}


export type Permission = {
    has_permission: boolean,
    captcha: boolean,
    ratelimit: string,
}
