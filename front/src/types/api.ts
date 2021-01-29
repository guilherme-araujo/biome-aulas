export type Material = {
  descricao: string
  arquivo: {
    url: string
  }
}

export type Video = {
  descricao: string
  video: {
    url: string
  }
}

export type Disciplina = {
  nome: string
  materials?: Array<Material>
  videos?: Array<Video>
}

export type Professors = {
  nome: string
  foto?: {
    url: string
  }
  disciplinas?: Array<Disciplina>
}
