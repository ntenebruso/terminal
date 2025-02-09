import * as packageJSON from "../../package.json";
import WinBox from "winbox/src/js/winbox";
import { Terminal } from "../lib/terminal";
import { setTheme, THEMES } from "../lib/colors";

export function gui(term: Terminal) {
    new WinBox({
        title: "Portfolio",
        html: `<iframe src="https://ntenebruso.github.io/" frameborder="0" />`,
        class: "no-full no-min",
    });

    term.print("Opening portfolio gui...");
}

export function repo(term: Terminal) {
    window.open("https://github.com/ntenebruso/terminal", "_blank");

    term.println("Opening GitHub repo...");
}

export function banner(term: Terminal) {
    term.println(`<span class="green">
    _   __   ______                __                        
   / | / /  /_  __/__  ____  ___  / /_  _______  ___________ 
  /  |/ /    / / / _ \\/ __ \\/ _ \\/ __ \\/ ___/ / / / ___/ __ \\
 / /|  /    / / /  __/ / / /  __/ /_/ / /  / /_/ (__  ) /_/ /
/_/ |_/    /_/  \\___/_/ /_/\\___/_.___/_/   \\__,_/____/\\____/   ${packageJSON.version}
                                                             
</span>
<span class="blue">Type '<span class="cyan">help</span>' to see a list of available commands.</span>

--
&#127881; This project is open-source! Type "repo" to view the repository.
`);
}

export function theme(term: Terminal, scheme: string) {
    if (!scheme) {
        term.println("Usage: theme [name]");
        term.println(
            "Available themes: " +
                THEMES.map((theme) => theme.name).join(" ") +
                " random"
        );
        return;
    }

    try {
        setTheme(scheme);
    } catch (e) {
        term.println(`Theme not found: ${scheme}`);
    }
}
