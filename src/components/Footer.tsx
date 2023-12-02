import React from "react";
const Footer = () => {
  return (
    <footer className=" bg-slate-400 flex flex-col  p-4 py-16 text-xs text-neutral-950 sm:text-sm border-t items-center justify-center gap-6">
      <div className="flex items-center justify-center gap-4">
        <a
          download
          href={"/MateusCurriculo.pdf"}
          className="cursor-pointer hover:opacity-60 duration-200"
        >
          {" "}
          Meu curriculo
        </a>
        <p>|</p>

        <a
          href="https://www.linkedin.com/in/mateus-lins-061a5424a"
          className="cursor-pointer hover:opacity-60 duration-200"
          target="_blank"
        >
          Contato
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 text-lg sm:text-xl">
        <a
          className="cursor-pointer hover:opacity-60 duration-200"
          href={"https://www.linkedin.com/in/mateus-lins-061a5424a/"}
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="cursor-pointer hover:opacity-60 duration-200"
          href={"https://github.com/uMateusSales"}
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="cursor-pointer hover:opacity-60 duration-200"
          href={"mailto:mateus.lins.sales@gmail.com"}
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
