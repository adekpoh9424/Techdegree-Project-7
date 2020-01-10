//const trafficNav = document.getElementsByClassName('traffic-nav-link');
//const chartSelector = document.getElementById('traffic-nav');


const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =

`<div class='alert-banner'>
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class='alert-banner-close'>X</p>
</div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = 'none';
    }
});


//Traffic Chart

const trafficCanvas = document.getElementById('traffic-chart');

let hourlyData = {
    labels: ['2', '4', '6','8', '10', '12', '14', '16', '18', '20', '22', '24'],
    datasets: [{data: [45, 78, 95, 03, 10, 36, 90, 11, 05, 15, 110, 6, 17, 89, 50],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let dailyData = {
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

let monthlyData = {
    labels: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{data: [1145, 718, 4595, 1003, 1010, 236, 900, 1851, 05, 14525, 1140, 800, 1070, 809, 500],
    
   backgroundColor: 'rgba(116, 119, 191, .3)', 
   borderWidth: 1, }],
};

let trafficOptions = {
    responsive: true,
    aspectRatio: 2.5,
    animation: {
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

var chartData = hourlyData;
var ul = document.getElementById('traffic-nav');
var items = ul.getElementsByTagName('li');
for (var i  = 0; i < items.length; ++i) {
    console.log('for looping:'+ items [i].textContent);
    items[0].style.backgroundColor = "green";
}

items[0].addEventListener('click', (e) => {
    console.log("Button Pressed: "+ items[0].textContent);
    items[0].style.backgroundColor = "green";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "white";
    chartData=hourlyData;
    updateChart();
});

items[1].addEventListener('click', (e) => {
    console.log("Button Pressed: "+ items[1].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "green";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "white";
    chartData=dailyData1;
    updateChart();
});

items[2].addEventListener('click', (e) => {
    console.log("Button Pressed: "+ items[2].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "green";
    items[3].style.backgroundColor = "white";
    chartData=weeklyData;
    updateChart();
});

items[3].addEventListener('click', (e) => {
    console.log("Button Pressed: "+ items[3].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "green";
    chartData=monthlyData;
    updateChart();
});

function updateChart(){
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: chartData,
        options: trafficOptions
    });
}
updateChart();


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: dailyData,
    options: trafficOptions
});

// Bar Graph

const dailyCanvas = document.getElementById('daily-chart');

const dailyData2 = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



//Mobile Doughnut Chart

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};


let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//User Search...

const user = document.getElementById('userField');
const message = document.getElementById('MessageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
    } else if (message.value == '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

