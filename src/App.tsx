import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootIntro from './components/BootIntro'
import Home from './pages/Home'

/**
 * App - Orchestrates boot intro → home transition
 */
function App() {
  const [showBoot, setShowBoot] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {showBoot && (
          <BootIntro
            key="boot"
            onComplete={() => setShowBoot(false)}
          />
        )}
      </AnimatePresence>

      {!showBoot && <Home />}
    </>
  )
}

export default App
