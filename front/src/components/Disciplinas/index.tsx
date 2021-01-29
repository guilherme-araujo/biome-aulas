import { Disciplina } from '../../types/api'
import { strapiAddr } from '../../utils/strapiAddr'

type Props = {
  disciplinas: Array<Disciplina>
}

export default function Disciplinas( { disciplinas }: Props ) {
  return (
    <div>
      {disciplinas.map((disciplina, i) => (
        <div key={i}>
          <h3>{i+1} - {disciplina.nome}</h3>
          {disciplina.materials && disciplina.materials.length > 0 ? (
            <div className="px-4">
              <h4>Materiais</h4>
              <ul>
                {disciplina.materials.map((material, i) => (
                  <li key={i}><a href={`${strapiAddr}${material.arquivo.url}`}> {material.descricao} </a> </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul></ul>
          ) }
          {disciplina.videos && disciplina.videos.length > 0 ? (
            <div className="px-4">
              <h4>Vídeos</h4>
              <ul>
                {disciplina.videos.map((video, i) => (
                  <li key={i}><a href={`${strapiAddr}${video.video.url}`}> {video.descricao} </a> </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul></ul>
          ) }

        </div>
      ))}

    </div>
  )
}
