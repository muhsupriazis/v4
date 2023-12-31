const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'reo656vx6b8v',
  accessToken: 'HigcE1W1LtAtt_YUgj1KQiQ-Z0l8vX0-jzjAptpae88'
})

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: 'reo656vx6b8v',
  accessToken: 'HigcE1W1LtAtt_YUgj1KQiQ-Z0l8vX0-jzjAptpae88'
})