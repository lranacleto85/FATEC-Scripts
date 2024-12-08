import React from 'react'

import { ContactForm } from './_components/ContactForm'
import { Hero } from './_components/Hero'
import { OurServices } from './_components/OurServices'
import { WeAreAuthorized } from './_components/WeAreAuthorized'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <WeAreAuthorized />
      <ContactForm />
    </div>
  )
}
