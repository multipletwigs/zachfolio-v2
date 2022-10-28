import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Container } from '../layouts/Container'
import SerifHeader from 'components/SerifHeader'

const about: NextPage = () => {

  return (
    <Container>
      <SerifHeader title={'Everything about me!'} footer_desc={"PERSONAL"}></SerifHeader>
      <p>I am a student from Monash Malaysia</p>
    </Container>
  )
}

export default about