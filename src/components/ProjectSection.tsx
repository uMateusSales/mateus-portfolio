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

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      titulo: "Site da Roltec",
      link: "https://roltec.vercel.app",
      desc: "Site que oferece uma UI interativa pros clientes além de separar as categorias dovariados produtos que a Roltec trabalha, separar os pedidos que os clientes fazem no site e enviar para tanto para o email da roltec como em seu atendimento do whatsapp Facilitando tanto como o consumidor entra em contato com a  empresa, como também aplicando estratégias de SEO para o crescimento da mesma",

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
      desc: "Sistema que gereciona a api onde o lojista pode comandar tudo que pode ser exibido em seu site personalizado, como criar vitrines, categorias, protudos. Tudo que pode ser utilizado em qualquer aplicação que consuma a API dele e personalizar no seu front",
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
      titulo: "Loja de moda fashion",
      link: "https://https://loja-modelo-mateus.vercel.app/",
      desc: "Showcase mostrando uma loja de roupas utilizando a API gerada pelo CMS do dono de loja, consumindo a API gerada e criando seu front do ecommerce online. Com filtros para cada tipo de roupa e tamanhoo. Apresentando também reponsivo para mobile",
      videoLink: "",
      fotos: [
        "/fashion-front.png",
        "/fashion-categoria.png",
        "/fashion-mobile.png",
        "/fashion-carrinho.png",
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
    {
      titulo: "DT Money - Rocketseat ignite",
      link: "https://github.com/uMateusSales/dtmoney-rocketseat",
      desc: "Projeto realizado durante o curso de desenvolvimento front end com React da Rocketseat no qual podemos criar novas trasnsações bancarias e receber o extrato, feito com intuito de melhorar a performance da aplicação através de bons usos do React Hooks",
      videoLink: "",
      fotos: ["/dt-front.png", "/dt-modal.png", "/dt-form.png"],
      tecnologias: [
        {
          nome: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },

        {
          nome: "Typescript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },
        {
          nome: "Styled-Components",
          logo: "/styled-components-1.svg",
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-50-100 m-2">
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
