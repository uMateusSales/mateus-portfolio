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
      content: ["React", "React Native", "Next.js", "Node.js"],
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

  return (
    <div className="flex flex-col gap-3">
      {skills.map((i, index) => {
        return (
          <div
            className="relative group overflow-hidden  flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            key={index}
          >
            <p>
              <b>{i.name}</b>
            </p>
            {i.content.map((i) => (
              <p>{i}</p>
            ))}
            <div className="bg-purple-400 duration-500 group-hover:translate-x-full h-0.5 w-full absolute right-full bottom-0"></div>
          </div>
        );
      })}
    </div>
  );
}
