import {
    IconBrandGithub,
    IconBrandX,
    IconSend,
    IconHome,
    IconBriefcase,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Github } from "lucide-react";

export const links = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Contact",
        href: "#contact",
    },
]

export const links2 = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#home",
    },

    {
        title: "Projects",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
    },
    {
        title: "Experience",
        icon: (
            <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
    },
    {
        title: "Contact",
        icon: (
            <IconSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.github.com/SHREYASHDhande",
    },
];

export const experience = [
    {
        title: "B.Tech in CSE",
        dates: "2022-2026 ",
        location: "Jaypee University of Engineering and Technology",
        description:
            "Pursuing B.Tech in Computer Science and Engineering.",
        image:
            "/juet.png",
    }, {
        title: "Senior Secondary",
        dates: "2020-2022",
        location: "Chandrapur Maharashtra",
        description:
            "Completed Class 12th from Janta College Chandrapur with 78%.",
        image:
            "gdg.jpg",

    }, {
        title: "Pitchmatter Intern",
        dates: "Jun 2025 - September 2025",
        location: "Remote.",
        description:
            "Worked as a software Tester intern at Pitchmatter. Worked on testing and debugging of the application.",
        image:
            "pitchmatter.png",
    },
]


