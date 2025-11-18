import DustedThumbnail from "../../public/images/projects/dusted.jpg";
import IntralinksThumbnail from "../../public/images/projects/Intralinks_portrait.jpg";
import { imageSize } from "../../components/image/image";

export const data = {
    projectOne: {
        status: "published",
        thumbnail: {
            src: DustedThumbnail?.src,
            alt: "Dusted website",
            caption: "Screenshot of homepage"
        },
        title: `Dusted Site`,
        tags: [`React`, `Next`, `TypeScript`, `Sanity CMS`, `Tailwind`],
        excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
        content: `<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque.</strong></p>
                    <p>Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.</p>
                    <p>Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.</p>`,
        buttonLink: {
            label: "Visit Website",
            href: "https://www.dusted.com"
        }
    },
    projectTwo: {
        status: "published",
        thumbnail: {
            src: IntralinksThumbnail?.src,
            alt: "Intralinks website",
            caption: "Intralinks calculator screenshot",
            size: "portrait" as imageSize
        },
        title: `Dusted Site`,
        tags: [`React`, `Next`, `TypeScript`, `Sanity CMS`, `Tailwind`],
        excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum leo non enim sollicitudin imperdiet.`,
        content: `<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget magna commodo, maximus quam ac, posuere neque.</strong></p>
                    <p>Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.</p>
                    <p>Fusce a vulputate risus. Quisque vel nisi magna. Praesent sodales ante eu massa maximus faucibus. Nunc rutrum interdum pellentesque. Suspendisse felis purus, pharetra sed tempus nec, tempor quis urna. Donec eget leo cursus.</p>`,
        buttonLink: {
            label: "Visit Website",
            href: "https://www.dusted.com"
        }
    }
}

