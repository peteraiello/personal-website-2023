import ProfileImg from '../../public/images/overview/profile.png';

export const profileImg = {
    src: ProfileImg.src,
    alt: 'profile img',
}

export const exampleProfile = {
    sectionId: "overview",
    name: 'Peter Aiello',
    jobTitle: 'Developer / Creative Coder / Writer / Designer',
    profileImg: profileImg,
    profileDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum at blandit felis, et lobortis nulla. 
        Proin eu dolor et nisl euismod. [Some link](https://google.com) pretium sit amet eget orci. 
        Cras ullamcorper turpis erat, ac vulputate justo bibendum iaculis. 
        Vivamus maximus semper sem, sed cursus lorem tempus tempor.
        Nunc lacinia rhoncus porta. Pellentesque pellentesque`,
    links: 
        [
            {preLabel: 'WWW', label: 'peteraiello.dev', customLink: {href: 'https://peteraiello.dev', target: "_blank"}},
            {preLabel: 'EM', label: 'hello@peteraiello.dev', customLink: {href: 'hello@peteraiello.dev', target: "_blank"}},
            {preLabel: 'GIT', label: 'github.com/peteraiello', customLink: {href: 'https://github.com/peteraiello', target: "_blank"}},
            {preLabel: 'IN', label: 'linkedin.com/in/peter-aiello', customLink: {href: 'https://linkedin.com/in/peter-aiello', target: "_blank"}}
        ],
    resumeLink: {
        label: 'Download Resume',
        href: '/#',
        icon: 'download'
    },
    cards: 
        [   
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`}
        ]
}