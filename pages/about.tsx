import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Container } from '../layouts/Container'
import { getDB } from 'lib/notion'

const about: NextPage = () => {

  return (
    <Container>
        <header>
          <h1 className="text-3xl font-bold">Everything About Me!</h1>
          <h3 className="text">What have I been doing for the past few years?</h3>
        </header>
        <p>I am a student from Monash Malaysia</p>
    </Container>
  )
}

export default about