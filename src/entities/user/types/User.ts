export type User = {
    username: string,
    email: string,
    title: string,
    country: string,
    avatar?: string,
}

export type UserSchema = {
    auth?: User
}