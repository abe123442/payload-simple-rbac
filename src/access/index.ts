import { Access, FieldAccess } from 'payload'

export const admin: FieldAccess = ({ req: { user } }) => user?.permissions === 'admin'
export const authenticated: FieldAccess = ({ req: { user } }) => !!user
export const adminOrAuthor: Access = ({ req: { user } }) => !!user && (user.permissions === 'admin' || { author: { equals: user.id } })
export const adminOrSelf: Access = ({ req: { user } }) => !!user && (user.permissions === 'admin' || { id: { equals: user.id } })