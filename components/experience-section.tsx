import { FaBriefcase, FaGraduationCap } from "react-icons/fa"

interface TimelineItemProps {
  year: string
  title: string
  organization: string
  description: string
  isEducation?: boolean
}

const TimelineItem = ({ year, title, organization, description, isEducation = false }: TimelineItemProps) => {
  return (
    <div className="flex mb-12 relative">
      <div className="mr-6 relative">
        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white">
          {isEducation ? <FaGraduationCap size={24} /> : <FaBriefcase size={24} />}
        </div>
        <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>
      </div>
      <div>
        <div className="bg-gray-200 dark:bg-gray-800 px-4 py-1 rounded-full inline-block text-sm font-medium mb-2">
          {year}
        </div>
        <h3 className="text-xl font-bold mb-1">
          {title} <span className="text-amber-400">— {organization}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        EXPERIENCE & <span className="text-amber-400">EDUCATION</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <TimelineItem
            year="2022 - 2022"
            title="FRONTEND DEVELOPER"
            organization="IOWORK"
            description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit."
          />

          <TimelineItem
            year="2013 - 2018"
            title="UI/UX DESIGNER"
            organization="THEMEFOREST"
            description="Lorem incididunt dolor sit amet, consectetur eiusmod dunt dolabore dol elit, tempor incididunt."
          />

          <TimelineItem
            year="2005 - 2013"
            title="CONSULTANT"
            organization="VIDEOHIVE"
            description="Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt."
          />
        </div>

        <div>
          <TimelineItem
            year="2015"
            title="ENGINEERING DEGREE"
            organization="OXFORD UNIVERSITY"
            description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit."
            isEducation={true}
          />

          <TimelineItem
            year="2012"
            title="MASTER DEGREE"
            organization="KIEV UNIVERSITY"
            description="Lorem incididunt dolor sit amet, consectetur eiusmod dunt dolabore dol elit, tempor incididunt."
            isEducation={true}
          />

          <TimelineItem
            year="2009"
            title="BACHELOR DEGREE"
            organization="TUNIS HIGH SCHOOL"
            description="Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt."
            isEducation={true}
          />
        </div>
      </div>
    </div>
  )
}
