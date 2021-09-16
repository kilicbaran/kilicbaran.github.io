import colors from 'tailwindcss/colors.js';

const strokeShade = 100;
const textShade = 500;

export const menuItems = [
    { href: "/projects/", name: "Projects", bgColor: "bg-blue-500", strokeColor: colors.blue[strokeShade], textColor: colors.blue[textShade] },
    { href: "/resources/", name: "Resources", bgColor: "bg-amber-500", strokeColor: colors.amber[strokeShade], textColor: colors.amber[textShade] },
    { href: "/publications/", name: "Publications", bgColor: "bg-lime-500", strokeColor: colors.lime[strokeShade], textColor: colors.lime[textShade]},
    { href: "/blog/", name: "Blog", bgColor: "bg-cyan-500", strokeColor: colors.cyan[strokeShade], textColor: colors.cyan[textShade] },
    { href: "/about/", name: "About", bgColor: "bg-rose-500", strokeColor: colors.rose[strokeShade], textColor: colors.rose[textShade] },
];