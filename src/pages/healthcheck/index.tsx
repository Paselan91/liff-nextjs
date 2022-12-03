import type { NextPage } from 'next'

import { memo } from 'react'

const Healthcheck: NextPage = () => {
  return <p>Health Check OK !</p>
}

export default memo(Healthcheck)
