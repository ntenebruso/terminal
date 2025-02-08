export const THEMES = [
    {
        name: "dracula",
        file: "dracula.css",
    },
    {
        name: "gruvbox",
        file: "gruvbox.css",
    },
    {
        name: "solarized",
        file: "solarized.css",
    },
];

const themeElem = <HTMLLinkElement>document.getElementById("themeSrc");

const THEME_KEY = "color";
const SAVED_THEME = localStorage.getItem(THEME_KEY);
let currentTheme = "";

export function initTheme() {
    if (SAVED_THEME) {
        setTheme(SAVED_THEME);
        return;
    }

    setTheme("dracula");
}

export function setTheme(name: string) {
    const theme = THEMES.find((theme) => theme.name == name);

    if (!theme) throw new Error(`Theme ${name} not found.`);

    if (currentTheme == name) return;

    themeElem.href = `/themes/${theme.file}`;
    currentTheme = theme.name;
    localStorage.setItem(THEME_KEY, theme.name);
}
