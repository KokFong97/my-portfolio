import { About, Contact, Home, Navbar, Project } from "@/components"
import Head from "next/head"

export default function Portfolio() {
  return (
    <>
      <Head>
        <title> Lim Kok Fong </title>
        <meta name="description" content="Developer Portfolio for Kok Fong" key="desc" />
      </Head>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}