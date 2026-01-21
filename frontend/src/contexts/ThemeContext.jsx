import React, { useEffect } from 'react'

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Luôn áp dụng dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return <>{children}</>
}

