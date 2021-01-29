import { GetServerSideProps } from 'next'
import { Container, Tabs, Tab } from 'react-bootstrap'

import client from '../graphql/client'
import GET_ALL_CONTENT from '../graphql/queries/getAllContent'
import { Professors } from '../types/api'

import Layout from '../components/Layout'
import HeadBanner from '../components/HeadBanner'
import Disciplinas from '../components/Disciplinas'

type Props = {
  professors: Array<Professors>
}

const IndexPage = ({ professors }: Props) => (
  <Layout title={`Materiais de aula - BioME`}>
    <HeadBanner>{`Materiais de aula - BioME`}</HeadBanner>

    <Container className="py-5">
      <Tabs>
      {professors.map((prof, i) => (
        <Tab key={i} eventKey={i.toString()} title={prof.nome}>

          {prof.disciplinas ? (
            <Disciplinas disciplinas={prof.disciplinas} />
          ): (
            <p>Sem disciplinas cadastradas</p>
          )}


        </Tab>

      ))}

      </Tabs>

    </Container>

  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const { professors } = await client.request(GET_ALL_CONTENT)

  console.log(professors)

  return {
    props: {
      professors
    }
  }
}

export default IndexPage
