import { GraphQLClient } from 'graphql-request'

const env_host = process.env.STRAPI_HOST

const addr = env_host ? 'http://'+process.env.STRAPI_HOST+':1341/graphql' : 'https://bioinfo.imd.ufrn.br/aulas-api/graphql'

const client = new GraphQLClient(addr)

export default client
