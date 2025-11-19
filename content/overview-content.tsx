import ProfileImg from '../public/images/overview/profile.jpeg';

export const profileImg = {
    src: ProfileImg.src,
    alt: 'profile img',
}

export const exampleProfile = {
    sectionId: "overview",
    name: 'Peter Aiello',
    jobTitle: 'Frontend Developer',
    profileImg: profileImg,
    profileDesc: 
`
My introduction to programming began during a project at University where I worked on a 
bespoke text editor. I discovered multiple emerging disciplines, such as user research, 
experience design and code. Since then, I have applied this strong foundation and love of 
learning to the world of web development, picking up essential programming languages and 
frameworks. I have worked in different integrated marketing companies and eventually joined
Dusted, an award-winning design studio working as a Front-end developer. Outside of work,
my main passion is running. I have completed three marathons, including the spectacular 
Midnight Sun Marathon in Norway in 2023.
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