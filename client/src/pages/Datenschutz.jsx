import React from 'react'

const Datenschutz = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl text-gray-800 dark:text-gray-100 space-y-6">
      <h2 className="text-3xl font-bold border-b border-gray-300 dark:border-gray-700 pb-3">
        Datenschutzvereinbarung
      </h2>

      <p className="text-lg italic text-zinc-600 dark:text-zinc-400">
        Bro ich mach es kurz und knapp:
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <span className="font-medium text-gray-900 dark:text-gray-100">Deine Daten sind bei mir</span>
        </li>
        <li>
          <span className="font-medium text-gray-900 dark:text-gray-100">Da bleiben sie auch</span>
        </li>
        <li>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Was ich mit deinen Daten mache geht nur mich selber was an
          </span>
        </li>
      </ul>

      <p className="text-sm text-right text-gray-500 dark:text-gray-400">
        — Mit vertrauensvollem Gruß, dein Datenschutzbeauftragter
      </p>
    </div>
  )
}

export default Datenschutz
