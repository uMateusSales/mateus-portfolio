import DescriptionMap from "@/components/DescriptionMap";
import Image from "next/image";
import Link from "next/link";

function SectionHeaderText(props) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      
      <h2 className="font-bold sm:py-4 md:py-8 text-4xl sm:text-5xl md:text-6xl">
        Mateus lins Sales
      </h2>
      <section>
        <SectionHeaderText>
         Desenvolvedor Javascript
        </SectionHeaderText>
        <DescriptionMap />
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>

        <DescriptionMap />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>

        <p className="text-xs sm:text-sm">
          Check out my latest{" "}
          <Link href={"/projects"} className="text-sky-400">
            projects
          </Link>
        </p>
      </section>

      <section>
        <SectionHeaderText>Just For Fun</SectionHeaderText>

        <DescriptionMap />
      </section>
    </main>
  );
}
