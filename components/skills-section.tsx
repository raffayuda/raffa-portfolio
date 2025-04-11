import type React from "react"
import { SiJavascript, SiHtml5, SiCss3, SiPhp, SiWordpress, SiJquery, SiAngular, SiReact, SiPython, SiLaravel, SiCodeigniter, SiNextdotjs, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiBootstrap, SiExcalidraw } from "react-icons/si"

interface SkillProps {
  icon: React.ReactNode
  name: string
}

const Skill = ({ icon, name }: SkillProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gray-800 dark:bg-gray-900 border-4 border-amber-400 flex items-center justify-center text-amber-400 mb-4">
        {icon}
      </div>
      <span className="font-bold">{name}</span>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 rounded-lg px-8 mb-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        MY <span className="text-amber-400">SKILLS</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Skill icon={<SiHtml5 size={48} />} name="HTML" />
        <Skill icon={<SiJavascript size={48} />} name="JAVASCRIPT" />
        <Skill icon={<SiCss3 size={48} />} name="CSS" />
        <Skill icon={<SiPhp size={48} />} name="PHP" />
        <Skill icon={<SiLaravel size={48} />} name="Laravel" />
        <Skill icon={<SiCodeigniter size={48} />} name="CODEIGNITER" />
        <Skill icon={<SiReact size={48} />} name="REACT" />
        <Skill icon={<SiNextdotjs size={48} />} name="NEXTJS" />
        <Skill icon={<SiMysql size={48} />} name="MYSQL" />
        <Skill icon={<SiPostgresql size={48} />} name="POSTGRESQL" />
        <Skill icon={<SiMongodb size={48} />} name="MONGODB" />
        <Skill icon={<SiTailwindcss size={48} />} name="TAILWIND" />
        <Skill icon={<SiBootstrap size={48} />} name="BOOTSTRAP" />
        <Skill icon={<SiExcalidraw size={48} />} name="EXCALIDRAW" />
      </div>
    </div>
  )
}
