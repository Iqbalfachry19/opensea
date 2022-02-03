import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'd2mowall',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk3uVaIl5TrTmWf5QhRf8ZbbTwBn2wSlxKiZjgoNi4gKkazW8Yxy6VBLxbHEi0X8UTLy7xnkv7gNfPOYCWHssI3u11goODYDEnsDKrVmUSjTJ87Y9dxKj3qaizz3HlSWf9hLoQo0A3kHGX0weftkMOTrynv2NK3Zcsv9zxI9wqD93llsuw8D',
  useCdn: false,
})
