import { ProjectCard } from "@/components/ProjectCard";

export type Project = {
  titulo: string;
  link: string;
  desc: string;
  videoLink: string;
  fotos: string[];
  tecnologias: Tecnologia[];
};
export interface Tecnologia {
  nome: string;
  logo: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      titulo: "Site da Roltec",
      link: "https://roltec.vercel.app",
      desc: "asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df",
      videoLink: "video.mov",
      fotos: [
        "/roltec-front.png",
        "/roltec-modal.png",
        "/roltec-carrinho.png",
        "/roltec-produto-pagina.png",
        "/roltec-produtos.png",
      ],
      tecnologias: [
        {
          nome: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          nome: "Nextjs 13",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          nome: "Typescript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },

        {
          nome: "TailwindCSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
    {
      titulo: "Painel CMS do administrador",
      link: "https://ecommerce-admin-roltec.vercel.app",
      desc: "asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df",
      videoLink: "video.mov",
      fotos: ["/admin-produtos.png", "/admin-cadastro.png", "/admin-tema.png"],
      tecnologias: [
        {
          nome: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          nome: "Nextjs 13",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          nome: "Typescript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },
        {
          nome: "Nodejs",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          nome: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
        },
        {
          nome: "TailwindCSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
    {
      titulo: "Landing page da NerdWeb",
      link: "https://github.com/uMateusSales/teste-nerdweb",
      desc: "asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df",
      videoLink: "video.mov",
      fotos: ["/nerd-front.png", "/nerd-2.png", "/nerd-3.png", "/nerd-4.png"],
      tecnologias: [
        {
          nome: "Javascript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          nome: "HTML",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        },
        {
          nome: "CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        },
      ],
    },
    {
      titulo: "Pagina do purificador Clarifion",
      link: "https://clarifion-upsell-ejam-mateus.vercel.app/",
      desc: "Teste para vaga de fullstack aplicado pela Ejam, trata-se de uma pagina para procedimento de pagamento do produto e a proposta era melhorar a UI para gerar um desejo de upsell melhor para o produto",
      videoLink: "",
      fotos: ["/clarifion-1.png", "/clarifion-2.png", "/clarifion-3.png"],
      tecnologias: [
        {
          nome: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          nome: "Nextjs 13",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          nome: "Typescript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },
        {
          nome: "TailwindCSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-100">
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-extrabold">
          Projetos mais recentes em que trabalhei
        </h1>
      </div>

      {projects.map((i, index) => {
        return (
          <div
            key={index}
            className={
              "flex border rounded p-1 " +
              (index % 2 === 0
                ? "flex-col sm:flex-row"
                : "flex-col sm:flex-row-reverse")
            }
          >
            <ProjectCard
              key={index}
              titulo={i.titulo}
              desc={i.desc}
              link={i.link}
              fotos={i.fotos}
              tecnologias={i.tecnologias}
            />
          </div>
        );
      })}
    </main>
  );
}
