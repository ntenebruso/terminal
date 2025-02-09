import { Terminal } from "./lib/terminal";
import * as commands from "./commands";
import "winbox/dist/css/winbox.min.css";
import { initTheme } from "./lib/colors";

initTheme();

const wrapper = <HTMLDivElement>document.getElementById("terminal");

const prompt = `<span><span class="yellow">visitor</span>@<span class="green">ntenebruso.com</span>:$ ~</span> `;

const terminal = new Terminal(wrapper);
terminal.setPrompt(prompt);

// Register Commands
terminal.registerCommand("banner", commands.banner);
terminal.registerCommand("gui", commands.gui);
terminal.registerCommand("repo", commands.repo, {
    description: "Opens this project's GitHub repository",
});
terminal.registerCommand("theme", commands.theme, {
    description: "Sets the active color scheme",
});

terminal.execute("banner");
