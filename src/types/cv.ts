export interface ContactLink {
  display: string
  url: string
}

export interface IntroductionData {
  name: string
  title: string
  lastUpdated: string
  profileImage: string
  heroIntro: string
  availability: string
  contact: {
    location: string
    email: string
    phone: string
    linkedin: ContactLink
    github: ContactLink
    website: ContactLink
  }
}

export interface StatItem {
  value: string
  label: string
  icon: 'calendar' | 'projects' | 'code'
}

export interface AchievementItem {
  metric: string
  title: string
  description: string
  tone: 'violet' | 'pink' | 'blue' | 'orange'
}

export interface KeyAchievementsData {
  title: string
  items: AchievementItem[]
}

export interface ProgressMetric {
  label: string
  value: number
}

export interface ProfessionalSummaryData {
  title: string
  content: string
  attributes: string[]
  progress: ProgressMetric[]
}

export interface ExperienceHighlight {
  title?: string
  description: string
}

export interface ExperienceItem {
  company: string
  title: string
  duration: string
  location: string
  isCurrent: boolean
  description: string
  highlights: ExperienceHighlight[]
  technologies: string[]
}

export interface SkillCategory {
  name: string
  icon: 'languages' | 'frontend' | 'backend' | 'cloud' | 'tools'
  rating: number
  skills: string[]
}

export interface SkillsData {
  title: string
  categories: SkillCategory[]
}

export interface CvData {
  introduction: IntroductionData
  stats: StatItem[]
  keyAchievements: KeyAchievementsData
  professionalSummary: ProfessionalSummaryData
  experience: ExperienceItem[]
  skills: SkillsData
}
