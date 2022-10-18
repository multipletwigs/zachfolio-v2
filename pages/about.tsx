import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Container } from '../layouts/Container'
import { getDB } from 'lib/notion'
import PageHeader from 'components/PageHeader'

const about: NextPage = () => {

  return (
    <Container>
        <PageHeader title={"Everything About Me"} desc={'What I am current doing'}/>
        <p>I am a student from Monash Malaysia</p>
    </Container>
  )
}

export default about