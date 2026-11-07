import { Navbar } from "@/components/navbar"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Ang Navbar ay nasa pinakataas */}
      <Navbar />

      {/* 2. Ang Main Content na naglalaman ng mga Sections na may matching IDs */}
      <main className="mx-auto max-w-5xl px-4 py-8 space-y-24">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-2 text-muted-foreground">
            Dito mo ilalagay ang impormasyon tungkol sa iyo...
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Dito mo ilalagay ang iyong mga portfolio projects...
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-bold">Experience</h2>
          <p className="mt-2 text-muted-foreground">
            Dito mo ilalagay ang iyong work or educational experience...
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Dito ilalagay ang contact form o social links...
          </p>
        </section>

      </main>
    </div>
  )
}

export default App