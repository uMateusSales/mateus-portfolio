import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'

export default function ProjectsPage() {
    const projects = [
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: 'asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df', videoLink: 'video.mov'},
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: 'asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df', videoLink: 'video.mov'},
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: 'asfdsdjf kha sdfjkh asdlkjfh aljksdh flakjsdh fkjlash dfkljha sdkjfh aslkjdhfalkj dfkaj sdhfkjas hdfkljahs dklfjahsdkljf haskjldfh aksljdhfkljasd hflkajshdf jkasdhflkjas dhfklja hsdfkljah sdlkfjh asldkjfhalksjdf halkjsd fhklajsdhfkljas dhfjklah sdflkajhs dflkjahs dfklajsdhfkjah sdfkjlash df', videoLink: 'video.mov'},
     
    ]

  return (
   <main className='flex flex-col flex-1 bg-slate-100'>
    {projects.map((project, projectIndex) => {
        return (
            <ProjectCard key={projectIndex} project={project} index={projectIndex}/>
        )
    })}
   </main>
  )
}
