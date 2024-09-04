import { admin, adminOrSelf, authenticated } from '@/access'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: admin,
    read: adminOrSelf,
    update: adminOrSelf,
    delete: admin,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['id', 'email', 'permissions']
  },
  auth: true,
  fields: [
    {
      name: 'permissions',
      type: 'select',
      saveToJWT: true,
      hasMany: false,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Blogger', value: 'blogger' },
      ],
      defaultValue: 'blogger',
      required: true,
      access: {
        read: authenticated,
        create: admin,
        update: admin
      },
    },
  ],
}
