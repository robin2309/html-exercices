import { useState } from 'react'
import './App.css'

// Un composant React est une fonction qui retourne du JSX.
// Il peut recevoir des "props" (propriétés) en paramètre.
function Carte({ nom, description }) {
  return (
    <div className="carte">
      <h2>{nom}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  // useState retourne [valeur, fonctionPourLaModifier]
  const [compteur, setCompteur] = useState(0)

  return (
    <div className="app">
      <h1>Bienvenue dans React !</h1>

      {/* --- Composant réutilisable --- */}
      <Carte
        nom="Alice"
        description="J'adore le JavaScript et les chats."
      />
      <Carte
        nom="Bob"
        description="Je préfère Python, mais React me plaît bien."
      />

      {/* --- État (state) --- */}
      <div className="compteur-bloc">
        <p>Clics : <strong>{compteur}</strong></p>
        <button onClick={() => setCompteur(compteur + 1)}>+1</button>
        <button onClick={() => setCompteur(0)}>Réinitialiser</button>
      </div>
    </div>
  )
}

export default App
