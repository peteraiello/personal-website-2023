import ProfileImg from '../public/images/overview/peter_aiello_fullstack_web_developer.jpg';

export const profileImg = {
    src: ProfileImg.src,
    alt: 'profile img',
}

export const exampleProfile = {
    sectionId: "overview",
    name: 'Peter Aiello',
    jobTitle: 'Full Stack Developer',
    profileImg: profileImg,
    profileDesc: 
        `Hi 👋. I'm Peter, an experienced web developer from the UK currently living in Canada 🇨🇦. I have over eight years of industry experience in web development, with five years specializing in frontend web development. I've worked with clients from a variety of industries (automotive, financial, and charity) in diverse sectors (EV, FinTech, and specialist banking). Whether I'm building extensive component libraries or using cutting-edge frameworks, complexity is prevalent, and my strength lies in using resilience to see projects through to completion. Outside of work, I love running and have completed over four marathons. 
    `,
    links: 
        [
            {preLabel: 'WWW', label: 'peteraiello.dev', customLink: {href: 'https://peteraiello.dev', target: "_blank"}},
            {preLabel: 'EM', label: 'hello@peteraiello.dev', customLink: {href: 'mailto:hello@peteraiello.dev'}},
            {preLabel: 'GIT', label: 'github.com/peteraiello', customLink: {href: 'https://github.com/peteraiello', target: "_blank"}},
            {preLabel: 'IN', label: 'linkedin.com/in/peter-aiello', customLink: {href: 'https://linkedin.com/in/peter-aiello', target: "_blank"}}
        ],
    resumeLink: {
        label: '',
        href: '',
        icon: ''
    },
    skillGroups: [
        {
            title: 'Hard Skills',
            skills: ["JavaScript", "TypeScript", "React", "Next.JS", "Gatsby", "Storybook", "Jest", "Tailwind CSS", "WordPress", "PHP", "UI & UX Design"],
        },
        {
            title: 'Soft Skills',
            skills: ["Collaboration", "Problem Solving", "Attention to Detail", "Adaptability"],
        },
    ],
    cards: 
        [   
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`}
        ]
}