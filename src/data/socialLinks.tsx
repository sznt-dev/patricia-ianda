// =============================================================================
// Patrícia Ianda — links sociais reais
// Fonte única pro footer, drawer mobile, página de contato e CTAs Instagram.
// =============================================================================

import type { ReactNode } from "react";

export const socialUrls = {
    instagram: "https://www.instagram.com/patricia.ianda/",
    linkedin: "https://www.linkedin.com/in/patríciaianda/",
    facebook: "https://www.facebook.com/patriciaianda.suas",
    youtube: "https://www.youtube.com/@PatriciaIanda",
} as const;

export const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
);

export const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10v7M8 7.5v.01M11.5 17v-4.5a2 2 0 0 1 4 0V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 8h2.5V5H14a3 3 0 0 0-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V8.5A.5.5 0 0 1 14.5 8H14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
);

export const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9.5l4 2.5-4 2.5v-5z" fill="currentColor" />
    </svg>
);

export type SocialLink = {
    label: string;
    href: string;
    icon: ReactNode;
};

export const socialLinks: SocialLink[] = [
    { label: "Instagram", href: socialUrls.instagram, icon: <InstagramIcon /> },
    { label: "LinkedIn",  href: socialUrls.linkedin,  icon: <LinkedInIcon /> },
    { label: "Facebook",  href: socialUrls.facebook,  icon: <FacebookIcon /> },
    { label: "YouTube",   href: socialUrls.youtube,   icon: <YouTubeIcon /> },
];
