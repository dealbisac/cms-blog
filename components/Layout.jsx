import React from 'react'
import { Header } from './'

const Layout = ({ childern }) => {
    return (
        <>
          <Header />
          {childern}   
        </>
    )
}

export default Layout
