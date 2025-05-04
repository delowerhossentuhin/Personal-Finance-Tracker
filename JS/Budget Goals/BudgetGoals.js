function addCategory() {
    const labelText = prompt("Enter name for Budget Category:");
    if (!labelText) return;

    const container = document.getElementById("catg-container");
    const newDiv = document.createElement("div");
    newDiv.className = "category-box";

    const label = document.createElement("label");
    label.textContent = labelText;
    label.className = "newLabel";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "newInput";

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "button-wrapper";

    const save = document.createElement("button");
    save.textContent = "Save";
    save.className = "save-btn";
    
    save.addEventListener("click", () => {
        input.readOnly = true;
        input.style.color='grey'
    });


    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = "edit-btn";
    edit.addEventListener("click", () => {
        input.readOnly = false;
        input.style.color='black'
    });

    buttonWrapper.appendChild(save);
    buttonWrapper.appendChild(edit);

    newDiv.appendChild(label);
    newDiv.appendChild(input);
    newDiv.appendChild(buttonWrapper);

    container.insertBefore(newDiv, container.lastElementChild);
}
