import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Zaphenath - Frontend Engineer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #111111)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '60px 80px',
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 800,
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Zaphenath
          </h1>
          <p
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: '#a0a0a0',
              margin: '0 0 40px 0',
            }}
          >
            Frontend Engineer
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ fontSize: '24px', color: '#606060' }}>React</span>
            <span style={{ fontSize: '24px', color: '#606060' }}>•</span>
            <span style={{ fontSize: '24px', color: '#606060' }}>Next.js</span>
            <span style={{ fontSize: '24px', color: '#606060' }}>•</span>
            <span style={{ fontSize: '24px', color: '#606060' }}>TypeScript</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
