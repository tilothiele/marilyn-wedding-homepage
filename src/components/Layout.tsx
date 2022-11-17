import React, { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

type LayoutProps = {
    children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main style={pageStyles}>
    <Header/>
    <section style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </section>
    <Footer/>
    </main>
  )
}