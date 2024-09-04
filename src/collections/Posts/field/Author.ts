import { admin } from '@/access'
import { User } from '@/payload-types'
import { Field } from 'payload'

export default {
  name: 'author',
  type: 'relationship',
  relationTo: 'users',
  hasMany: false,
  admin: {
    condition: (_data, _sibling, { user }) => !!user && user.permissions === 'admin',
  },
  access: {
    create: admin,
    read: admin,
    update: admin,
  },
  defaultValue: ({ user }: {
    user: User | null
  }) => user?.id,
  hooks: {
    beforeValidate: [
      ({ req: { user }, operation, value }) => {
        if (!user) {
          return value
        }

        if (operation === 'create' || operation === 'update') {
          if (!value) {
            // pre-populate the current user as the author
            return user.id
          }

          return value
        }

        return value
      }
    ]
  }
} satisfies Field