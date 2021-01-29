const GET_ALL_CONTENT = /* GraphQL */ `
{
  professors {
    nome
    foto {
      url
    }
    disciplinas {
      nome
      materials {
        descricao
        arquivo {
         url
        }
      }
      videos {
        descricao
        video {
          url
        }
      }
    }
  }
}
`

export default GET_ALL_CONTENT
