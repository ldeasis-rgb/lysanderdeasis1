import { Navbar } from "@/components/navbar"

// I-import ang iyong mga pahina/components
import AboutPage from "../about/page"        // i-adjust ang path depende sa lokasyon ng file
import ContactPage from "../contact/page"
import EducationPage from "../education/page"
import HobbiesPage from "../hobbies/page"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-8 space-y-24">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <AboutPage />
        </section>

        {/* Experience / Education Section */}
        <section id="experience" className="scroll-mt-20">
          <EducationPage />
        </section>

        {/* Projects / Hobbies Section */}
        <section id="projects" className="scroll-mt-20">
          <HobbiesPage />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <ContactPage />
        </section>
      </main>
    </div>
  )
}

export default App