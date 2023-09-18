import React from "react";

export default function DescriptionMap() {
  const links = [
    {
      name: "Email",
      content: "jamesmca@live.com",
      link: "https://www.google.com",
    },
    { name: "GitHub", content: "jamezmca", link: "https://www.google.com" },
    {
      name: "LinkedIn",
      content: "jamezmcarthur",
      link: "https://www.google.com",
    },
    { name: "YouTube", content: "smoljames", link: "https://www.google.com" },
  ];

  const skills = [
    {
      name: "JavaScript",
      content: ["React", "React Native", "SvelteKit", "Node.js"],
    },
    {
      name: "Python",
      content: ["Data Analysis", "Django", "Flask", "Data Visualization"],
    },
    {
      name: "Web",
      content: [
        "Sass",
        "TailwindCSS",
        "Firebase",
        "NoSQL",
        "SQL",
        "Netlify",
        "AWS",
        "GCP",
        "GIT",
        "DOCKER",
        "Kubernetes",
      ],
    },
    { name: "Design", content: ["Canvas", "Pixlr", "Figma"] },
  ];

  const workHistory = [
    {
      name: "Zetane Systems (2021 - Present)",
      content: "Developer,...........",
    },
    {
      name: "Zetane Systems (2021 - Present)",
      content: "Developer,...........",
    },
    {
      name: "Zetane Systems (2021 - Present)",
      content: "Developer,...........",
    },
    {
      name: "Zetane Systems (2021 - Present)",
      content: "Developer,...........",
    },
  ];

  const hobbies = [
    {
      name: "Making coding videos",
      content: "I really really really really really enjoy programming",
    },
    {
      name: "Making coding videos",
      content: "I really really really really really enjoy programming",
    },
    {
      name: "Making coding videos",
      content: "I really really really really really enjoy programming",
    },
    {
      name: "Making coding videos",
      content: "I really really really really really enjoy programming",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {links.map((i, index) => {
        return (
          <div
            className="relative group overflow-hidden  flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            key={index}
          >
            <div className="bg-purple-400 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
            <p>
              <b>{i.name}</b>
            </p>
            {i.content}
          </div>
        );
      })}
    </div>
  );
}
