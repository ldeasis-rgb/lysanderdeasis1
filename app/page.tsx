
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            Welcome to My Personal Portfolio
          </CardTitle>

          <CardDescription className="text-base">
            Discover my skills, projects, and experiences.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center gap-4">
          <Button>
            View My Projects
          </Button>

          <Button variant="outline">
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
