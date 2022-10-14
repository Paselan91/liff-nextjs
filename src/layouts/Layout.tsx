import React, { FC, memo, ReactNode } from 'react'
import MenuBar from '@/components/organisms/MenuBar'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <MenuBar />
      {children}
    </>
  )
}

export default memo(Layout)
