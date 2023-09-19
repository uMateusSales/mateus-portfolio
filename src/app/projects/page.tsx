import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
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
    },
    {
      titulo: "Painel CMS do administrador",
      link: "https://ecommerce-admin-roltec.vercel.app",
      desc: "asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df",
      videoLink: "video.mov",
      fotos: ["/admin-produtos.png", "/admin-cadastro.png", "/admin-tema.png"],
    },
    {
      titulo: "Landing page da NerdWeb",
      link: "https://github.com/uMateusSales/teste-nerdweb",
      desc: "asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df",
      videoLink: "video.mov",
      fotos: ["/nerd-front.png", "/nerd-2.png", "/nerd-3.png", "/nerd-4.png"],
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-100">
      {projects.map((i, index) => {
        return (
          <div
            className={
              "flex " +
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
            />
          </div>
        );
      })}
    </main>
  );
}
