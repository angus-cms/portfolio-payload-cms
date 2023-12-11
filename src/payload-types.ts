export interface User {
    id: string
    name?: string
    roles?: ('admin' | 'user')[]
    updatedAt: string
    createdAt: string
    email: string
    resetPasswordToken?: string
    resetPasswordExpiration?: string
    salt?: string
    hash?: string
    loginAttempts?: number
    lockUntil?: string
    password?: string
}