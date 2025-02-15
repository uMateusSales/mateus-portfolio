import DescriptionMap from "@/components/DescriptionMap";
import MainTitle from "@/components/MainTitle";

import ProjectsSection from "@/components/ProjectSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-4xl w-full bg-purple-100">
      <MainTitle
        titulo="Mateus Lins Sales"
        subtitulo="Desenvolvedor front end"
      />

      <section>
        <h4 className="pb-5 text-xl font-semibold">Skills</h4>
        <DescriptionMap />
      </section>
      <Separator />
      <section>
        <h4 className="pb-5 text-xl font-semibold">Projetos que ja fiz:</h4>
        <ProjectsSection />
      </section>
    </main>
  );
}
