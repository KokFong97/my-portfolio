import { About, Contact, Home, Navbar, Project } from "@/components"
import Head from "next/head"

export default function Portfolio() {
  return (
    <>
      <Head>
        <title> Lim Kok Fong </title>
        <meta name="description" content="Developer Portfolio for Kok Fong" key="desc" />
      </Head>
      <div id="home"/>
      <Navbar/>
      <div className="container px-4">
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}