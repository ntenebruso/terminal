import * as commands from "./commands";
const terminalContainer = document.getElementById("terminal")!;

export function addLine(text: string, style?: string) {
    const lineEl = document.createElement("p");
    lineEl.innerHTML = text;

    if (style) {
        lineEl.classList.add(style);
    }

    terminalContainer?.append(lineEl);
}

export function execute(command: string) {
    switch (command) {
        case "clear":
            terminalContainer.innerHTML = "";
            break;
        default:
            if (Object.keys(commands).indexOf(command) == -1) {
                addLine(`${command}: command not found`);
            } else {
                const output = commands[command]();
                addLine(output);
            }
            break;
    }
}
