const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =

<div class='alert-banner'>
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class='alert-banner-close'>X</p>
</div>

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alert.style.display = 'none';
    }
});

//Traffic Chart

const trafficCanvas = document.getElementById('traffic-chart');

let hourData = {
    labels: ['2', '4', '6','8', '10', '12', '14', '16', '18', '20', '22', '24'],
    datasets: [{data: [45, 78, 95, 03, 10, 36, 90, 11, 05, 15, 110, 6, 17, 89, 50],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let dayData = {
    labels: ['02', '04', '06','08', '10', '12', '14', '16', '18', '20', '22', '24', '31'],
    datasets: [{data: [45, 70, 100, 120, 130, 360, 900, 1500, 2560, 15, 110, 6000, 170, 1780, 6800],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let weeklyData = {
    labels: ['12-32', '14-0', '0-10','8-17', '10-10', '20-22', '14-23', '8-45', '9-19', '9-20', '10-22', '13-4'],
    datasets: [{data: [1890, 7800, 78095, 14803, 10008, 3600, 9000, 45701, 14705, 1500, 1100, 6000, 2790, 8914, 2550],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let monthData = {
    labels ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{data: [1145, 718, 4595, 1003, 1010, 236, 900, 1851, 05, 14525, 1140, 800, 1070, 809, 500],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let trafficOptions = {
    responsive: true,
    aspectRatio: 2.5,
    animation {
        duration: 0
    },
    scales: {
        yAxes: [{
        ticks: {
        beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new CharacterData(trafficCanvas, {
    type: 'line',
    data: dayData,
    options: trafficOptions
});