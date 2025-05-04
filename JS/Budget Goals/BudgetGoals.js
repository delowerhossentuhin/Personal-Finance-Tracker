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

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = "edit-btn";

    // Progress bar creation
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = "0%"; // Initial width

    progressContainer.appendChild(progressBar);

    save.addEventListener("click", () => {
        input.readOnly = true;
        input.style.color = 'grey';

        // Set progress bar width based on random value
        let value = parseFloat(input.value);
        let ratio=0;
        
        if (isNaN(value)){
            ratio=0;
        }
        else{
            randomInt = Math.floor(Math.random() * (value - 0 + 1)) + 0;
            ratio=(randomInt/value)*100
        }
        progressBar.style.width = ratio + "%";
        progressBar.textContent = ''; // Clear existing text
        const span = document.createElement("span");
        span.textContent = labelText + ": " + ratio.toFixed(1) + "%";
        span.style.color = "white";
        span.style.fontWeight = "bold";
        span.style.fontSize = "15px";
        span.style.marginLeft = "10px";

        // Add the span to the progress bar
        progressBar.appendChild(span);
    });

    edit.addEventListener("click", () => {
        input.readOnly = false;
        input.style.color = 'black';
    });

    buttonWrapper.appendChild(save);
    buttonWrapper.appendChild(edit);

    newDiv.appendChild(label);
    newDiv.appendChild(input);
    newDiv.appendChild(buttonWrapper);

    container.insertBefore(newDiv, container.lastElementChild);

    // Append the progress bar to the progress container
    const progressBarWrapper = document.querySelector(".progress_bar");
    progressBarWrapper.appendChild(progressContainer);
}
