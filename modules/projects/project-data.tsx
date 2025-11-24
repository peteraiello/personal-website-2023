import DustedThumbnail from "../../public/images/projects/dusted.jpg";
import PIDGThumbnail from '../../public/images/projects/PIDG.jpg';
import WealthtimeThumbnail from '../../public/images/projects/wealthtime.jpg';
import IntraThumbnail from '../../public/images/projects/intra-calc.jpg';
import HTBThumbnail from "../../public/images/projects/htb.jpg";
import Cap10Thumbnail from "../../public/images/projects/cap10.jpg";

const DustedCard = {
    id: `dusted`,
    status: "published",
    thumbnail: {
        src: DustedThumbnail?.src,
        alt: "Dusted website"
    },
    featuredImage: {
        src: DustedThumbnail?.src,
        alt: "Dusted website"
    },
    title: `Dusted`,
    industry: "Marketing",
    featured: true,
    tags: ["React", "Next", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "https://www.dusted.com"
    }
}

const PIDGCard = {
    id: 'pidg',
    status: "published",
    thumbnail: {
        src: PIDGThumbnail?.src,
        alt: "PIDG website"
    },
    featuredImage: {
        src: PIDGThumbnail?.src,
        alt: "PIDG website"
    },
    title: `PIDG`,
    tags: ["React", "Next", "GraphQL", "TypeScript", "Storybook", "Tailwind CSS"],
    industry: "Investment",
    excerpt: `PIDG (Private Investment Development Group) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}

const IntralinksCard = {
    id: 'intralinks',
    status: "published",
    thumbnail: {
        src: IntraThumbnail?.src,
        alt: "Intralinks calculator"
    },
    featuredImage: {
        src: IntraThumbnail?.src,
        alt: "Intralinks calculator"
    },
    title: `Intralinks Calculator`,
    tags: ["React", "JavaScript", "Gatsby", "Tailwind CSS"],
    industry: "FinTech",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}

const HTBCard = {
    id: 'htb',
    status: "published",
    thumbnail: {
        src: HTBThumbnail?.src,
        alt: "HTB website"
    },
    featuredImage: {
        src: HTBThumbnail?.src,
        alt: "HTB website"
    },
    title: `HTB`,
    industry: "Banking",
    tags: ["React", "JavaScript", "Gatsby", "GraphQL"],
    excerpt: `Hampshire Trust Bank lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}

const Cap10Card = {
    id: 'cap10',
    status: "published",
    thumbnail: {
        src: Cap10Thumbnail?.src,
        alt: "Cap10 website"
    },
    featuredImage: {
        src: Cap10Thumbnail?.src,
        alt: "Cap10 website"
    },
    title: `Cap10 Partners`,
    industry: "Investment",
    tags: [`WordPress`, `JavaScript`, `SASS`],
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}

const WealthtimeCard = {
    id: 'wealthtime',
    status: "published",
    thumbnail: {
        src: WealthtimeThumbnail?.src,
        alt: "Wealthtime website"
    },
    featuredImage: {
        src: WealthtimeThumbnail?.src,
        alt: "Wealthtime website"
    },
    title: `Wealthtime`,
    industry: "Investment",
    tags: [`WordPress`, `Multisite`, `SASS`],
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque. Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.`,
    buttonLink: {
        label: "LEARN MORE",
        href: "#"
    }
}

export const exampleProjectData = {
    id: 'projects',
    title: 'projects',
    layout: 'alternating',
    filters: {
        skills: ["Skills", "React", "Next", "TypeScript", "Sanity CMS", "Tailwind CSS", "GraphQL", "WordPress", "PHP", "JavaScript", "Gatsby", "Multisite", "SASS"],
        industries: ["Industry / Sector", "Marketing", "Banking", "FinTech", "Investment"],
    },
    projects: [
        {...DustedCard}, 
        {...PIDGCard},
        {...IntralinksCard},
        {...HTBCard},
        {...Cap10Card},
        {...WealthtimeCard}
    ]   
};