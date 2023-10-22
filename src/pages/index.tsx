import { Metadata } from "next"
import { About, Contact, Home, Navbar, Project } from "@/components"

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}

export default function PlaygroundPage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}