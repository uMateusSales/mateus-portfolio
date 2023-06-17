import DescriptionMap from '@/components/DescriptionMap'
import Image from 'next/image'
import Link from 'next/link'

function SectionHeaderText(props) {
  const { children } = props
  return (
    <h4 className='pb-5 text-xl font-semibold'>{children}</h4>
  )

}

export default function Home() {
  const links = [
    { name: 'Email', content: 'jamesmca@live.com', link:'https://www.google.com' },
    { name: 'GitHub', content: 'jamezmca', link:'https://www.google.com' },
    { name: 'LinkedIn', content: 'jamezmcarthur', link:'https://www.google.com' },
    { name: 'YouTube', content: 'smoljames', link:'https://www.google.com' }
  ]

  const skills = [
    { name: 'JavaScript', content: ['React', 'React Native', 'SvelteKit', 'Node.js'] },
    { name: 'Python', content: ['Data Analysis', 'Django', 'Flask', 'Data Visualization'] },
    { name: 'Web', content: ['Sass', 'TailwindCSS', 'Firebase', 'NoSQL', 'SQL', 'Netlify', 'AWS', 'GCP', 'GIT', 'DOCKER', 'Kubernetes'] },
    { name: 'Design', content: ['Canvas', 'Pixlr', 'Figma'] },
  ]

  const workHistory = [
    { name: 'Zetane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zetane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zetane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zetane Systems (2021 - Present)', content: 'Developer,...........' }
  ]

  const hobbies = [
    { name: 'Making coding videos', content: 'I really really really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really really really enjoy programming' },
  ]

  return (
    <main className='flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full'>
      <h2 className='font-bold sm:py-4 md:py-8 text-4xl sm:text-5xl md:text-6xl'>Digital Résumé</h2>
      <section>
        <SectionHeaderText>James McArthur - Web Developer and Educator</SectionHeaderText>
        <DescriptionMap list={links} type={"links"} />
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>

        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>

        <p className='text-xs sm:text-sm'>Check out my latest <Link href={'/projects'} className='text-sky-400'>projects</Link></p>
      </section>
      <section>
        <SectionHeaderText>Work History</SectionHeaderText>

        <DescriptionMap list={workHistory} type={"work"} />
      </section>
      <section>
        <SectionHeaderText>Just For Fun</SectionHeaderText>

        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  )
}
