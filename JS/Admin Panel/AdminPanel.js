allPendingIcon=document.getElementById('all-Pending')
pendingUser=document.getElementById("pendingUser")
addUser=document.getElementById("addUser")
document.addEventListener("DOMContentLoaded", ()=>{
    allPendingIcon.addEventListener('click',()=>{
        if (pendingUser.style.display === 'none' || pendingUser.style.display === '') {
            pendingUser.style.display = 'flex'; 
        } else {
            pendingUser.style.display = 'none';
        }
        if (addUser.style.display === 'none' || addUser.style.display === '') {
            addUser.style.display = 'flex'; 
        } else {
            addUser.style.display = 'none';
        }
    })
})