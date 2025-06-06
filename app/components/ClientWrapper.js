'use client'

import { useEffect, useState } from 'react'
import Loading from './Loading'

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!hasMounted) {
    // Render nothing or a placeholder to avoid mismatch
    return null
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && children}
    </>
  )
}
