
import { Navbar } from "@/components/navbar"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto max-w-5xl px-4 py-8">
        {/*
          Your page content goes here
        */}
        <h1 className="text-3xl font-bold">
          Personal Portfolio
        </h1>

        <p className="mt-2 text-muted-foreground">
          Built with React, Vite and Shadcn UI
        </p>
      </main>
    </div>
  )
}

export default App
