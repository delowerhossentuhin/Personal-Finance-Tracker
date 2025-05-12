const ctx_linechart = document.getElementById('panel1_lineChart_balance').getContext('2d');

const lineChart = new Chart(ctx_linechart, {
    type: 'line',
    data: {
        // All kind of data will be fetched from database
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September'],
        datasets: [{
            label: 'Expenses (in $)',
            data: [300, 500, 400, 600, 350, 450,300,350,50],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            backgroundColor: 'rgba(75, 192, 192, 0.03)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3498db',
            pointRadius: 3
        }]
    },
    options: {
        responsive: false, // ❌ prevent stretching to parent
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: { display: false }
            },
            y: {
                display: false,
                grid: { display: false },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        }
    }
});

const ctx_barchart = document.getElementById('panel1_barChart_savings').getContext('2d');
const barChart = new Chart(ctx_barchart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September'],
        datasets: [{
            label: 'Expenses (in $)',
            data: [300, 500, 400, 600, 350, 450,300,350,250],
            backgroundColor: [
                'rgb(255, 99, 132)',   // January
                'rgb(54, 162, 235)',   // February
                'rgb(255, 206, 86)',   // March
                'rgb(75, 192, 192)',   // April
                'rgb(153, 102, 255)',  // May
                'rgb(255, 159, 64)',   // June
                'rgb(231, 233, 237)',  // July
                'rgb(139, 195, 74)',   // August
                'rgb(244, 67, 54)'     // September
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(231, 233, 237)',
                'rgb(139, 195, 74)',
                'rgb(244, 67, 54)'
            ],
            borderWidth: 1,
            borderRadius: 6, // rounded bars (optional)
            barThickness: 15, // fixed width for each bar (optional)
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: { display: false }
            },
            y: {
                display: false,
                grid: { display: false },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        }
    }
});

const ctx_linechart2 = document.getElementById('panel1_lineChart_income').getContext('2d');
const lineChart2 = new Chart(ctx_linechart2, {
    type: 'line',
    data: {
        // All kind of data will be fetched from database
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September'],
        datasets: [{
            label: 'Expenses (in $)',
            data: [500, 600, 400, 200, 150, 750,800,900,550],
            borderColor: 'rgb(40, 199, 25)',
            borderWidth: 2,
            backgroundColor: 'rgba(75, 192, 192, 0.0)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3498db',
            pointRadius: 3
        }]
    },
    options: {
        responsive: false, 
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: { display: false }
            },
            y: {
                display: false,
                grid: { display: false },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        }
    }
});

const ctx_piechart = document.getElementById('panel1_pieChart_expense').getContext('2d');

const pieChart = new Chart(ctx_piechart, {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Expense',
            data: [500, 600, 400, 200, 150, 750, 800, 900, 550],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(199, 199, 199)',
                'rgb(83, 102, 255)',
                'rgb(40, 199, 25)'
            ],
            borderWidth: 1,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // hide legend
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

const ctx_statistics = document.getElementById('statisctics').getContext('2d');

const barChart_statistics = new Chart(ctx_statistics, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Income',
        data: [500, 600, 550, 700, 650, 680, 620, 700, 750],
        backgroundColor: '#4caf50',
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 10
      },
      {
        label: 'Expense',
        data: [300, 350, 400, 420, 380, 390, 410, 430, 400],
        backgroundColor: '#f44336',
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 10
      },
      {
        label: 'Saving',
        data: [200, 250, 150, 280, 270, 290, 210, 270, 350],
        backgroundColor: '#2196f3',
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 10
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        display: false,
        grid: { display: false },
        categoryPercentage: 0.5,  // spacing between months (lower = more gap)
                barPercentage: 0.8 
      },
      y: {
        display: false,
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    }
  }
});

///////////// Event Listener
document.getElementById('overview').addEventListener('click', function() {
    document.getElementById('panel1').style.display = 'block';
    document.getElementById('panel2').style.display = 'none';
});

document.getElementById('card').addEventListener('click', function() {
    document.getElementById('panel1').style.display = 'none';
    document.getElementById('panel2').style.display = 'block';
});
let cardCount = 2;

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("cardContainer");
  const addCardBtn = document.getElementById("addCardBtn");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");
  const menuShow=document.getElementById("showMenu")
  const SideNav=document.getElementById("SideNav")
  const panel1=document.getElementById('panel1')
  const panel2=document.getElementById('panel2')

  menuShow.addEventListener('click',()=>{
    if(SideNav.style.display=='block'){
        SideNav.style.display='none'
        panel1.style.left="100px"
        panel2.style.left="100px"
    }
    else {
        SideNav.style.display='block'
        panel1.style.left="200px"
        panel2.style.left="200px"
    }
  })

  // Add new card when "+" is clicked
  addCardBtn.addEventListener("click", () => {
    const cardName = prompt("Enter the name for your new card:");
    if (cardName && cardName.trim() !== "") {
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.textContent = cardName;
      cardContainer.insertBefore(newCard, addCardBtn);
    }
  });
  scrollLeftBtn.addEventListener("click", () => {
    cardContainer.scrollBy({
      left: -160,
      behavior: "smooth",
    });
  });

  // Scroll right
  scrollRightBtn.addEventListener("click", () => {
    cardContainer.scrollBy({
      left: 160,
      behavior: "smooth",
    });
  });
});
