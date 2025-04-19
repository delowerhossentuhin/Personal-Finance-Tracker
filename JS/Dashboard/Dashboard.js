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
