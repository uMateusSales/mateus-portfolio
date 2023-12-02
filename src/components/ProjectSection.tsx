import { ProjectCard } from "@/components/ProjectCard";
import { Separator } from "./ui/separator";

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
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
      desc: "Realização do teste técnico para front-end da empresa Nerdweb, onde o desafio seria recriar a propia pagina deles utilizando apenas Javascript vanilla,CSS e a API SwiperJS para animções",
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
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      titulo: "Loja de moda fashion",
      link: "https://loja-modelo-mateus.vercel.app/",
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
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      titulo: "Market App - Lista inteligente para supermercados",
      link: "https://github.com/matmelous/marketapp/commit/71dfee8c1feb2d12d809d46f84b22cad973c50ff",
      desc: "App mobile feito para criar uma lista inteligente baseada nos valores de mercados proximos em que fiz parte do time de desenvolvimento, contruibuindo para a montagem de telas e melhoramentos de feedback na UI para o usuario ",
      videoLink: "",
      fotos: [
        "/marketapp-front.png",
        "/marketapp-first-page.png",
        "/marketapp-login.png",
        "/marketapp-lista.png",
        "/marketapp-resultado.png",
      ],
      tecnologias: [
        {
          nome: "React Native",
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
        {
          nome: "Nest.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
        },
        {
          nome: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
        },
        {
          nome: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
  ];

  return (
    <article className="flex flex-col  bg-slate-50-100 m-2">
      {projects.map((i, index) => {
        return (
          <div
            key={index}
            className={
              "flex border rounded gap-3 p-1 min-h-[350px] " +
              (index % 2 === 0
                ? "flex-col sm:flex-row"
                : "flex-col sm:flex-row-reverse")
            }
          >
            <ProjectCard
              titulo={i.titulo}
              desc={i.desc}
              link={i.link}
              fotos={i.fotos}
              tecnologias={i.tecnologias}
            />
          </div>
        );
      })}
    </article>
  );
}
