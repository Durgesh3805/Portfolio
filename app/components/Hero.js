"use client"

// Imports for hooks are no longer needed.

export default function Hero() {
  // The entire useEffect hook and all animation functions have been removed.

  return (
    <section className="hero">
      <div className="hero__inner container">
        
        <div className="hero__visual">
          <h2>Your Content Here</h2>
          <p>This is now a static component without any animation.</p>
        </div>
      </div>
    </section>
  )
}