import React from 'react'
import styled from 'styled-components'
interface LayoutProps {
  children: React.ReactNode
}

const PageLayout = styled.div`
  margin: 0 400px;
`

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <PageLayout>{children}</PageLayout>
}

export default Layout
