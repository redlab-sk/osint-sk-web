

/*
         888             888             
         888             888             
         888             888             
.d8888b  888888  8888b.  888888 .d8888b  
88K      888        "88b 888    88K      
"Y8888b. 888    .d888888 888    "Y8888b. 
     X88 Y88b.  888  888 Y88b.       X88 
 88888P'  "Y888 "Y888888  "Y888  88888P' 
*/

var stats_list = [
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-db.json",
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-ports.json",
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-ssl.json",
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-ics.json",
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-cve.json",
    "https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/actual/shodan/stats-bluekeep_org.json",

]


$.each(stats_list, function( lk, lv ) {
    $.getJSON(lv, function(result) {
        $.each(result, function( k, v ) {
            $("#"+k).text(v);
            $("#carousel-"+k).text(v);
            });
        });
});


/*
888                                  888          
888                                  888          
888                                  888          
888888 888d888 .d88b.  88888b.   .d88888 .d8888b  
888    888P"  d8P  Y8b 888 "88b d88" 888 88K      
888    888    88888888 888  888 888  888 "Y8888b. 
Y88b.  888    Y8b.     888  888 Y88b 888      X88 
 "Y888 888     "Y8888  888  888  "Y88888  88888P' 
                                                  
*/


/* 
------------------------------ DB ------------------------------
*/

$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-db.json", function(result) {
var data = result;
var db = {"date":{},"MySQL": {},"PostgreSQL": {},"MongoDB": {},"Riak": {},"Elastic": {},"Memcached": {},"Redis": {},"Casandra": {},"CouchDB": {}};

for (var service in db) {
    db[service] = result.db.map(function(e) {
        return e[service];
        }); 
}

var ctx_db = document.getElementById("dbChart");
var dbChart = new Chart(ctx_db, {
type: 'line',
data: {
    labels: db.date,
    datasets: [{
        label: 'MySQL',
        data: db.MySQL,
        borderColor: 'rgba(200, 0, 0, 0.8)',
        fill: false, 
    },
    {
        label: 'PostgreSQL',
        data: db.PostgreSQL,
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'MongoDB',
        data: db.MongoDB,
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'Riak',
        data: db.Riak,
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
    },
    {
        label: 'Elastic',
        data: db.Elastic,
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: 'Memcached',
        data: db.Memcached,
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: 'Redis',
        data: db.Redis,
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: 'Casandra',
        data: db.Casandra,
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: 'CouchDB',
        data: db.CouchDB,
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    ]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                min: 0.1, //minimum tick
                max: 5000, //maximum tick
                callback: function (value, index, values) {
                    return Number(value.toString());//pass tick values as a string into Number function
                }
           },
           afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
               chartObj.ticks = [];
               chartObj.ticks.push(0.1);
               chartObj.ticks.push(1);
               chartObj.ticks.push(10);
               chartObj.ticks.push(100);
               chartObj.ticks.push(1000);
               chartObj.ticks.push(10000);
           },
            type: 'logarithmic'
        }]
    },
    // Container for pan options
    pan: {
        // Boolean to enable panning
        enabled: true,

        // Panning directions. Remove the appropriate direction to disable 
        // Eg. 'y' would only allow panning in the y direction
        mode: 'x',
        
        speed: 1
    },

    // Container for zoom options
    zoom: {
        // Boolean to enable zooming
        enabled: true,						
        // Zooming directions. Remove the appropriate direction to disable 
        // Eg. 'y' would only allow zooming in the y direction
        mode: 'x',
    }
}
});


});


/* 
------------------------------ PORTS ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-ports.json", function(result) {
var data = result;
var ports = { "date":{},"2000": {}, "8080": {}, "443": {}, "5060": {}, "1723": {}, "993": {}, "554": {}, "23": {}, "143": {}, "7547": {}, "80": {}, "995": {}, "53": {}, "22": {}, "8443": {}, "25": {}, "5061": {}, "123": {}, "3389": {}, "21": {},"8291": {}};

for (var port in ports) {
    ports[port] = result.ports.map(function(e) {
        return e[port];
        }); 
}

var ctx_ports = document.getElementById("portsChart");
var portsChart = new Chart(ctx_ports, {
type: 'line',
data: {
    labels: ports.date,
    datasets: [{
        label: '123',
        data: ports["123"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '143',
        data: ports["143"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '1723',
        data: ports["1723"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '2000',
        data: ports["2000"],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
    },
    {
        label: '21',
        data: ports["21"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: '22',
        data: ports["22"],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: '23',
        data: ports["23"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: '25',
        data: ports["25"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: '3389',
        data: ports["3389"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: '443',
        data: ports["443"],
        borderColor: 'rgba(190, 70, 20, 0.1)', 
        fill: false,
    },
    {
        label: '5060',
        data: ports["5060"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '5061',
        data: ports["5061"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '53',
        data: ports["53"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: '554',
        data: ports["554"],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
    },
    {
        label: '7547',
        data: ports["7547"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: '80',
        data: ports["80"],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: '8080',
        data: ports["8080"],
        borderColor: 'rgba(190, 70, 20, 0.1)', 
        fill: false,
    },
    {
        label: '8443',
        data: ports["8443"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: '993',
        data: ports["993"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: '995',
        data: ports["995"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: '8291',
        data: ports["8291"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    ]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                min: 1000, //minimum tick
                max: 60000, //maximum tick
                callback: function (value, index, values) {
                    return Number(value.toString());//pass tick values as a string into Number function
                }
           },
           afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
               chartObj.ticks = [];
               chartObj.ticks.push(0.1);
               chartObj.ticks.push(1);
               chartObj.ticks.push(10);
               chartObj.ticks.push(100);
               chartObj.ticks.push(1000);
               chartObj.ticks.push(10000);
               chartObj.ticks.push(100000);
           },
            type: 'logarithmic'
        }]
    },
    // Container for pan options
    pan: {
        // Boolean to enable panning
        enabled: true,

        // Panning directions. Remove the appropriate direction to disable 
        // Eg. 'y' would only allow panning in the y direction
        mode: 'x',
        
        speed: 1
    },

    // Container for zoom options
    zoom: {
        // Boolean to enable zooming
        enabled: true,						
        // Zooming directions. Remove the appropriate direction to disable 
        // Eg. 'y' would only allow zooming in the y direction
        mode: 'x',
    }
}
});


});
