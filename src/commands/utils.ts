import * as commands from "../commands";
import * as packageJSON from "../../package.json";
import WinBox from "winbox/src/js/winbox";

export function help() {
    const availableCommands = Object.keys(commands).sort().join(", ");

    return `Available commands:\n\t${availableCommands}`;
}

export function gui() {
    new WinBox({
        title: "Portfolio",
        html: `<iframe src="https://ntenebruso.github.io/" frameborder="0" />`,
        class: "no-full no-min",
    });

    return "Opening portfolio gui...";
}

export function repo() {
    window.open("https://github.com/ntenebruso/terminal-portfolio", "_blank");

    return "Opening GitHub repo...";
}

export function banner() {
    return `<span class="green">
    _   __   ______                __                        
   / | / /  /_  __/__  ____  ___  / /_  _______  ___________ 
  /  |/ /    / / / _ \\/ __ \\/ _ \\/ __ \\/ ___/ / / / ___/ __ \\
 / /|  /    / / /  __/ / / /  __/ /_/ / /  / /_/ (__  ) /_/ /
/_/ |_/    /_/  \\___/_/ /_/\\___/_.___/_/   \\__,_/____/\\____/   ${packageJSON.version}
                                                             
</span>
<span class="purple">Type '<span class="cyan">help</span>' to see a list of available commands.</span>

--
&#127881; This project is open-source! Type "repo" to view the repository.
`;
}
