document.addEventListener("DOMContentLoaded", ()=>{
    allPendingIcon=document.getElementById('all-Pending')
    pendingUser=document.getElementById("pendingUser")
    addUser=document.getElementById("addUser")
    settingBTN=document.getElementById("setting")
    settingPanel=document.getElementById('settingPanel')
    profileDetails=document.getElementById('profileDetails')
    adminDetails=document.getElementById('adminDetails')
    DashboardBTN=document.getElementById("Dashboard")
    DashboardPanel=document.getElementById("dashboardPanel")
    //
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
    profileDetails.addEventListener('click',()=>{
        if(adminDetails.style.display==='none'||adminDetails.style.display===''){
            adminDetails.style.display="block"
            
        }
        else{
            adminDetails.style.display='none'
        }
    }) 



    //Click Setting btn and open setting panel
    settingBTN.addEventListener('click', () => {
        if (settingPanel.style.display === 'none') {
            settingPanel.style.display = 'block';
            DashboardPanel.style.display="none"
        } else {
            settingPanel.style.display = 'none';
        }
    });   
    
    DashboardBTN.addEventListener('click',()=>{
        if(DashboardPanel.style.display==='none'||DashboardPanel.style.display===""){
            DashboardPanel.style.display="block"
            settingPanel.style.display = 'none';
        }
        else {
            DashboardPanel.style.display="none"
        }
    })

})