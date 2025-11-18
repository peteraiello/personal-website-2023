import projectCardImage from '../../public/images/projects/dusted.jpg';

export const projectImage = {
    src: projectCardImage.src,
    alt: 'profile img',
}

export const projectCardData = {
    thumbnail: {
        src: projectImage?.src,
        alt: projectImage?.alt
    },
    title: `Dusted Site`,
    tags: [`React`, `Next`, `TypeScript`, `Sanity CMS`, `Tailwind`],
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}