'use client'

import dynamic from 'next/dynamic'

const InteractiveWorldMap = dynamic(() => import('./InteractiveWorldMap'), {
  ssr: false,
})

export default function DynamicMap(props) {
  return <InteractiveWorldMap {...props} />
}
