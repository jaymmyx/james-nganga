// Import your screenshots here
import aetlantiqImg from '../assets/aetlantiq.png';
import makaoImg from '../assets/makao.png';
import audiophileImg from '../assets/audiophile.png';
import acfImg from '../assets/acf.png';

export const projects = [
    {
        id: 'aetlantiq-os',
        title: 'The Aetlantiq-OS',
        description: 'An accounting desktop application designed for seamless financial management and operations.',
        tags: ['Electron', 'React', 'SQLite', 'TypeScript'],
        github: 'https://github.com/jaymmyx/Aetlantiq-os',
        demo: 'https://github.com/jaymmyx/Aetlantiq-os/releases/tag/v2.0.0', // Add live link if applicable for the desktop app landing page
        image: aetlantiqImg,
    },
    {
        id: 'makao-archives',
        title: 'MakaoArchives',
        description: 'A real estate listing platform built with Next.js. Users can explore properties and make smarter housing decisions.',
        tags: ['Next.js', 'Tailwind CSS', 'React'],
        github: 'https://github.com/jaymmyx/makao',
        demo: 'https://makao-mauve.vercel.app/', // Replace with actual demo
        image: makaoImg,
    },
    {
        id: 'audiophile',
        title: 'AudioPhile',
        description: 'A full-stack ecommerce webapp implementing SSR and real-time product data retrieval with a pixel-perfect design.',
        tags: ['Next.js', 'PostgreSQL', 'Full-Stack'],
        github: 'https://github.com/jaymmyx/audiophile',
        demo: 'https://audiophile-orpin.vercel.app/', // Replace with actual demo
        image: audiophileImg,
    },
    {
        id: 'acf-youth',
        title: 'ACF Youth Spotlight',
        description: 'A visually engaging section of a church website highlighting youth programs and spiritual events with responsive imagery and elegant layout design.',
        tags: ['Next.js', 'Tailwind CSS', 'UI/UX'],
        github: 'https://github.com/jaymmyx/acf-revamp',
        demo: 'https://acf-revamp.vercel.app/', // Replace with actual demo
        image: acfImg,
    }
];