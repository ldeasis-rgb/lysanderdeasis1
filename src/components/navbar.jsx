import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            LP
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-foreground">Lysander Portfolio</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#projects" className="transition hover:text-foreground">Projects</a>
          <a href="#experience" className="transition hover:text-foreground">Experience</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>

        <Button variant="outline" size="sm">
          Resume
        </Button>
      </div>
    </header>
  )
}

export { Navbar }
