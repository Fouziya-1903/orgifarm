
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check on mount
    checkIfMobile()
    
    // Listen for window resize events
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return isMobile
}
