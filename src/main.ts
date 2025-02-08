import { Terminal } from "./terminal";
import * as commands from "./commands";
import "winbox/dist/css/winbox.min.css";

const wrapper = <HTMLDivElement>document.getElementById("terminal");

const prompt = `<span><span class="orange">visitor</span>@<span class="green">ntenebruso.com</span>:$ ~</span> `;

const terminal = new Terminal(wrapper);
terminal.setPrompt(prompt);

// Register Commands
terminal.registerCommand("banner", commands.banner);
terminal.registerCommand("gui", commands.gui);

terminal.execute("banner");
