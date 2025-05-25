document.addEventListener("DOMContentLoaded", ()=>{
    bname=document.getElementById('bname')
    bamount=document.getElementById('bamount')
    addBudget=document.getElementById("addBudget")
    showPanel=document.getElementById("showPanel")
    newPaAdPanel=document.getElementById("newPaAd")
    showPanel.addEventListener('click',()=>{
        if(newPaAdPanel.style.display=='none'){
            newPaAdPanel.style.display="block"
        }
        else {
             newPaAdPanel.style.display="none"
        }
    })
    const form = addBudget.closest('form');
    form.addEventListener('submit', (e) => {
        if (bname.value.trim() === "" || bamount.value.trim() === "") {
            e.preventDefault();
            alert("Please fill all fields.");
        }
    });
})