import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootIntro from './components/boot/BootIntro'
import Home from './pages/Home'

/**
 * App - Orchestrates boot intro → home transition
 */
function App() {
  const [showBoot, setShowBoot] = useState(true)

  return (
    <>
      <AnimatePresence>
        {showBoot && (
          <div className="relative z-50">
            <BootIntro
              key="boot"
              onComplete={() => setShowBoot(false)}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-0">
        <Home />
      </div>
    </>
  )
}

export default App
