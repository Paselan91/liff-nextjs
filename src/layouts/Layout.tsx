import React, { FC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default memo(Layout)
