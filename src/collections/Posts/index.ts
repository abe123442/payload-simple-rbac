import { adminOrAuthor } from '@/access'
import { CollectionConfig } from 'payload'

import Author from './field/Author'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: adminOrAuthor
  },
  admin: {
    defaultColumns: ['title', 'createdAt', 'updatedAt']
  },
  timestamps: true,
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 50
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    Author
  ]
}