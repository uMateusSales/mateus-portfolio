import DescriptionMap from "@/components/DescriptionMap";
import MainTitle from "@/components/MainTitle";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

function SectionHeaderText(props) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

const projetos = {
  titulo: "Projetos",
  fotos: ["/roltec-front.png", "/nerd-front.png", "/clarifion-1.png"],
};

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-4xl w-full">
      <MainTitle
        titulo="Mateus Lins Sales"
        subtitulo="Desenvolvedor front end"
      />

      <section>
        <SectionHeaderText>Skills</SectionHeaderText>

        <DescriptionMap />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>

        <ProjectCard
          titulo={projetos.titulo}
          link="/projects"
          fotos={projetos.fotos}
        />
      </section>
    </main>
  );
}
