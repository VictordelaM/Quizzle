import React from 'react'
import Nav from '../components/Nav'

const Datenschutz = () => {
  return (
    <div>
      <Nav />
      <div className='flex flex-col items-center justify-center min-h-screen bg-[var(--primary-colour)]'>
        <div className="flex flex-col justify-center max-w-2xl mx-auto px-6 py-10 bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-2xl shadow-xl space-y-6">
          <h2 className="text-3xl font-bold border-b border-[var(--primary-colour)] pb-3">
            Datenschutzvereinbarung
          </h2>

          <p className="text-lg italic opacity-80">
            Bro ich mach es kurz und knapp:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-medium">Deine Daten sind bei mir</span>
            </li>
            <li>
              <span className="font-medium">Da bleiben sie auch</span>
            </li>
            <li>
              <span className="font-medium">
                Was ich mit deinen Daten mache geht nur mich selber was an
              </span>
            </li>
          </ul>

          <p className="text-sm text-right opacity-60">
            — Mit vertrauensvollem Gruß, dein Datenschutzbeauftragter
          </p>
          </div>
        </div>
      </div>

  )
}

export default Datenschutz
