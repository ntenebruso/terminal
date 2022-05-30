import { addLine, execute } from "./terminal";
import "winbox/dist/css/winbox.min.css";

const inputEl = <HTMLInputElement>document.getElementById("input")!;
const labelEl = document.getElementById("label")!;

const label = `<span><span class="orange">visitor</span>@<span class="green">ntenebruso.me</span>:$ ~</span>`;

const commandHistory = [];
let commandHistoryIndex = 0;

window.addEventListener("load", () => {
    labelEl.innerHTML = label;
    execute("banner");
    inputEl.focus();
});

// Use keydown to handle input, so
// we can properly check for enter
inputEl.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        commandHistory.push(inputEl.value);
        commandHistoryIndex = commandHistory.length;
        addLine(label + " " + inputEl.value);
        execute(inputEl.value);
        inputEl.value = "";
    }

    if (e.code == "ArrowUp" && commandHistoryIndex != 0) {
        e.preventDefault();
        commandHistoryIndex--;
        inputEl.value = commandHistory[commandHistoryIndex];
        inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
    }

    if (e.code == "ArrowDown" && commandHistoryIndex != commandHistory.length) {
        e.preventDefault();
        commandHistoryIndex++;

        if (!commandHistory[commandHistoryIndex]) {
            inputEl.value = "";
        } else {
            inputEl.value = commandHistory[commandHistoryIndex];
            inputEl.setSelectionRange(
                inputEl.value.length,
                inputEl.value.length
            );
        }
    }
});
