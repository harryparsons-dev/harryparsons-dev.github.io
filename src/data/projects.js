export const projects = [
  {
    id: 'raspberry-pi-learning',
    title: 'Raspberry Pi Learning Platform',
    category: 'University project',
    description: 'A full-stack learning platform that helps young people explore programming and electronics by building programs visually and running them on a Raspberry Pi.',
    highlights: [
      'Graphical program construction connected to execution on physical hardware.',
      'Custom Django API endpoints with token-based user authentication.',
      'Developed from November 2023 to April 2024 using reusable frontend components.'
    ],
    technologies: ['React', 'Django', 'MySQL', 'Docker', 'Raspberry Pi'],
    links: [],
    sourceNote: 'Source managed in GitLab.'
  },
  {
    id: 'share-portfolio-reports',
    title: 'Share Portfolio Reports',
    category: 'Personal project',
    description: 'A reporting tool that turns share-portfolio CSV exports into formatted PDF reports and sector-allocation charts, combining a Vue interface with Go and Python.',
    highlights: [
      'Upload a CSV and customise the report title, font size, and spacing.',
      'Python enriches holdings with sector and dividend-yield data using yfinance.',
      'A Go API handles uploads and starts report generation in the background.'
    ],
    technologies: ['Vue', 'TypeScript', 'Go', 'Echo', 'Python', 'Pandas'],
    links: [
      { label: 'Frontend source', url: 'https://github.com/harryparsons-dev/go-shares-frontend' },
      { label: 'Backend source', url: 'https://github.com/harryparsons-dev/go-shares' }
    ]
  }
]
