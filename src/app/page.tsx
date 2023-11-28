import DescriptionMap from "@/components/DescriptionMap";
import MainTitle from "@/components/MainTitle";

import ProjectsPage from "./projects/page";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-4xl w-full">
      <MainTitle
        titulo="Mateus Lins Sales"
        subtitulo="Desenvolvedor front end"
      />

      <section>
        <h4 className="pb-5 text-xl font-semibold">Skills</h4>;
        <DescriptionMap />
      </section>
      <section>
        <ProjectsSection />
      </section>
    </main>
  );
}
