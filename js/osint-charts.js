

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

// Populate actual stats and carousel from las entry in trends
function stats(data) {
    $.each(data, function( k, v ) {
        var kr=k.replace(/ /g, '-').replace(/\./g, '-').replace(/,/g, '-');
        $("#"+kr).text(v[v.length - 1]);
        $("#carousel-"+kr).text(v[v.length - 1]);
        });
}


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


stats(db); // populate actual stats


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
        hidden: true,
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
        hidden: true,
    },
    {
        label: 'CouchDB',
        data: db.CouchDB,
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
        hidden: true,
    },
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
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
    },
    aspectRatio: 3,
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

stats(ports); // populate actual stats

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
        hidden: true,
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
        hidden: true,
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
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    elements: {
        line:{
            spanGaps: true
        }
    },
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
    },
    aspectRatio: 3,
}
});


});

/* 
------------------------------ cve ------------------------------
*/

$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-cve.json", function(result) {
var data = result;
var cve = {"date":{},"cve-2016-8612": {},"cve-2014-0231": {},"cve-2017-7679": {},"cve-2019-0220": {},"cve-2017-9788": {},"cve-2017-9798": {},"cve-2019-0211": {},"cve-2017-15710": {},"cve-2018-1283": {},"cve-2018-17199": {},"cve-2017-7668": {},"cve-2018-1312": {},"cve-2013-6438": {},"cve-2017-3167": {},"cve-2017-3169": {},"cve-2016-4975": {},"cve-2016-8743": {},"cve-2019-0197": {},"cve-2014-0098": {},"cve-2017-15715": {}};


for (var service in cve) {
    cve[service] = result.cve.map(function(e) {
        return e[service];
        }); 
}

stats(cve); // populate actual stats

var ctx_cve = document.getElementById("cveChart");
var cveChart = new Chart(ctx_cve, {
type: 'line',
data: {
    labels: cve.date,
    datasets: [{
        label: 'cve-2016-8612',
        data: cve["cve-2016-8612"],
        borderColor: 'rgba(200, 0, 0, 0.8)',
        fill: false, 
    },
    {
        label: 'cve-2014-0231',
        data: cve["cve-2014-0231"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'cve-2017-7679',
        data: cve["cve-2017-7679"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'cve-2019-0220',
        data: cve["cve-2019-0220"],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
    },
    {
        label: 'cve-2017-9788',
        data: cve["cve-2017-9788"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: 'cve-2017-9798',
        data: cve["cve-2017-9798"],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2019-0211',
        data: cve["cve-2019-0211"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: 'cve-2017-15710',
        data: cve["cve-2017-15710"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: 'cve-2018-1283',
        data: cve["cve-2018-1283"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2018-17199',
        data: cve["cve-2018-17199"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2017-7668',
        data: cve["cve-2017-7668"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2017-7668',
        data: cve["cve-2017-7668"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2013-6438',
        data: cve["cve-2013-6438"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2017-3167',
        data: cve["cve-2017-3167"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2017-3169',
        data: cve["cve-2017-3169"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2016-4975',
        data: cve["cve-2016-4975"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'cve-2016-8743',
        data: cve["cve-2016-8743"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },                             
    {
        label: 'cve-2019-0197',
        data: cve["cve-2019-0197"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },                             
    {
        label: 'cve-2014-0098',
        data: cve["cve-2014-0098"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },                            
    {
        label: 'cve-2017-15715',
        data: cve["cve-2017-15715"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },                                          
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 1000, //minimum tick
                max: 15000, //maximum tick
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
    },
    aspectRatio: 3,
}
});


});

/* 
------------------------------ ics ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-ics.json", function(result) {
var data = result;
var ics = { "date":{},"Modbus": {},"DNP3": {},"IEC-60870-5-104": {},"CODESYS": {},"ProConOS": {},"EtherNet-IP": {},"OMRON-FINS": {},"Siemens-S7": {},"PCWorx": {},"Crimson-v3": {},"BACnet": {},"Niagara": {},"HART-IP": {},"GE-SRTP": {},"MELSEC-Q": {}};

for (var port in ics) {
    ics[port] = result.ics.map(function(e) {
        return e[port];
        }); 
}

stats(ics); // populate actual stats

var ctx_ics = document.getElementById("icsChart");
var icsChart = new Chart(ctx_ics, {
type: 'line',
data: {
    labels: ics.date,
    datasets: [{
        label: 'Modbus',
        data: ics["Modbus"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'DNP3',
        data: ics["DNP3"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'IEC-60870-5-104',
        data: ics["IEC-60870-5-104"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'CODESYS',
        data: ics["CODESYS"],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
    },
    {
        label: 'ProConOS',
        data: ics["ProConOS"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
        hidden: true,
    },
    {
        label: 'EtherNet-IP',
        data: ics["EtherNet-IP"],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: 'OMRON-FINS',
        data: ics["OMRON-FINS"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: 'Siemens-S7',
        data: ics["Siemens-S7"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: 'PCWorx',
        data: ics["PCWorx"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
        hidden: true,
    },
    {
        label: 'Crimson-v3',
        data: ics["Crimson-v3"],
        borderColor: 'rgba(190, 70, 20, 0.1)', 
        fill: false,
        hidden: true,
    },
    {
        label: 'BACnet',
        data: ics["BACnet"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'Niagara',
        data: ics["Niagara"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'HART-IP',
        data: ics["HART-IP"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
        hidden: true,
    },
    {
        label: 'GE-SRTP',
        data: ics["GE-SRTP"],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: false,
        hidden: true,
    },
    {
        label: 'MELSEC-Q',
        data: ics["MELSEC-Q"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
        hidden: true,
    },
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 0.1, //minimum tick
                max: 160, //maximum tick
            },
            type: 'linear'
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
    },
    aspectRatio: 3,
}
});


});


/* 
------------------------------ ssl ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-ssl.json", function(result) {
var data = result;
var ssl = { "date":{},"cert_expired": {},"http": {},"https": {}};

for (var port in ssl) {
    ssl[port] = result.ssl.map(function(e) {
        return e[port];
        }); 
}

stats(ssl); // populate actual stats

var ctx_ssl = document.getElementById("sslChart");
var sslChart = new Chart(ctx_ssl, {
type: 'line',
data: {
    labels: ssl.date,
    datasets: [{
        label: 'http',
        data: ssl["http"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'https',
        data: ssl["https"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'cert_expired',
        data: ssl["cert_expired"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: true,
    },
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 1000, //minimum tick
                max: 180000, //maximum tick
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
               chartObj.ticks.push(1000000);
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
    },
    aspectRatio: 3,
}
});


});


/* 
------------------------------ bluekeep ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/shodan/trends-bluekeep_org.json", function(result) {
var data = result;
var bluekeep = { "date":{},"Cloud Services CZ": {},"LightStorm Communications s.r.o.": {},"Slovanet a.s.": {},"Slovak Telekom": {},"MyjavaNET, s.r.o.": {}, "Orange Slovensko, a.s.": {}, "RadioLAN": {},"ANTIK NAT Customers": {},"Zdruzenie pouzivatelov Slovenskej akademickej dato": {}, "NETLAB plus, spol. s r. o.": {}, "Orange Slovensko a.s.": {},"UPC Slovakia": {},"DSI DATA, a. s.": {}, "University of Zilina": {}, "SWAN, a.s.": {},"DTnet Detva s.r.o.": {},"Slovak Technical University": {},"VNET, a.s.": {},"Slovak Academy of Sciences": {},"Slovak Telecom": {}};

for (var port in bluekeep) {
    bluekeep[port] = result.bluekeep.map(function(e) {
        return e[port];
        }); 
}

stats(bluekeep); // populate actual stats

var ctx_bluekeep = document.getElementById("bluekeepChart");
var bluekeepChart = new Chart(ctx_bluekeep, {
type: 'line',
data: {
    labels: bluekeep.date,
    datasets: [{
        label: 'Cloud Services CZ',
        data: bluekeep["Cloud Services CZ"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'LightStorm Communications s.r.o.',
        data: bluekeep["LightStorm Communications s.r.o. "],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'Slovanet a.s.',
        data: bluekeep["Slovanet a.s."],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'Slovak Telekom',
        data: bluekeep["Slovak Telekom"],
        borderColor: 'rgba(180, 0, 0, 0,0.6)', 
        fill: true,
    },
    {
        label: 'MyjavaNET, s.r.o.',
        data: bluekeep["MyjavaNET, s.r.o."],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: true,
    },
    {
        label: 'Orange Slovensko, a.s. ',
        data: bluekeep["Orange Slovensko, a.s. "],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: true,
    },
    {
        label: 'RadioLAN',
        data: bluekeep["RadioLAN"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: true,
    },
    {
        label: 'ANTIK NAT Customers',
        data: bluekeep["ANTIK NAT Customers"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: true,
    },
    {
        label: 'Zdruzenie pouzivatelov Slovenskej akademickej dato',
        data: bluekeep["Zdruzenie pouzivatelov Slovenskej akademickej dato"],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: true,
    },
    {
        label: 'NETLAB plus, spol. s r. o.',
        data: bluekeep["NETLAB plus, spol. s r. o."],
        borderColor: 'rgba(190, 70, 20, 0.1)', 
        fill: true,
    },
    {
        label: 'Orange Slovensko a.s.',
        data: bluekeep["Orange Slovensko a.s."],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'UPC Slovakia',
        data: bluekeep["UPC Slovakia"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'DSI DATA, a. s.',
        data: bluekeep["DSI DATA, a. s."],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: true,
    },
    {
        label: 'University of Zilina ',
        data: bluekeep["University of Zilina "],
        borderColor: 'rgba(0, 0, 0, 0,0.5)', 
        fill: true,
    },
    {
        label: 'SWAN, a.s.',
        data: bluekeep["SWAN, a.s."],
        borderColor: 'rgba(160, 20, 20, 1)', 
        fill: true,
    },
    {
        label: 'DTnet Detva s.r.o.',
        data: bluekeep["DTnet Detva s.r.o."],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: true,
    },
    {
        label: 'Slovak Technical University',
        data: bluekeep["Slovak Technical University"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: true,
    },
    {
        label: 'VNET, a.s.',
        data: bluekeep["VNET, a.s."],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: true,
    },
    {
        label: 'Slovak Academy of Sciences',
        data: bluekeep["Slovak Academy of Sciences"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: true,
    },
    {
        label: 'Slovak Telecom',
        data: bluekeep["Slovak Telecom"],
        borderColor: 'rgba(120, 0, 0, 1)', 
        fill: true,
    },                    
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 0.1, //minimum tick
                max: 500, //maximum tick
            },
            stacked: true,
            type: 'linear'
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
    },
    aspectRatio: 3,
}
});


});


/* 
------------------------------ domain-changes ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/domain/trends-domain-changes.json", function(result) {
var data = result;
var domain_changes = { "date":{},"added": {},"deleted": {}};

for (var port in domain_changes) {
    domain_changes[port] = result['domain-changes'].map(function(e) {
        return e[port];
        }); 
}

stats(domain_changes); // populate actual stats

var ctx_domain_changes = document.getElementById("domain-changesChart");
var domain_changesChart = new Chart(ctx_domain_changes, {
type: 'line',
data: {
    labels: domain_changes.date,
    datasets: [{
        label: 'Pridané',
        data: domain_changes["added"],
        borderColor: 'rgba(200, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'Odobrané',
        data: domain_changes["deleted"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: true,
    },
    ]
},
options: {
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 0.1, //minimum tick
                max: 1500, //maximum tick
            },
            stacked: false,
            type: 'linear'
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
    },
    aspectRatio: 3,
}
});


});


/* 
------------------------------ domains_count_by_registrar ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/domain/trends-count-by-registrar.json", function(result) {
var data = result;
var domains_count_by_registrar = { "date":{},"Webglobe - Yegon, s. r. o.":{},"ZONER s.r.o.":{},"INTERNET SK, s.r.o.":{},"Websupport, s.r.o.":{},"WebHouse, s.r.o.":{},"IGNUM s.r.o.":{},"WEDOS Internet, a.s.":{},"ACTIVE 24, s.r.o.":{},"Gransy s.r.o.":{},"EXO TECHNOLOGIES spol. s r.o.":{}};

for (var port in domains_count_by_registrar) {
    domains_count_by_registrar[port] = result['domains-count-by-registrar'].map(function(e) {
        return e[port];
        }); 
}

stats(domains_count_by_registrar); // populate actual stats

var ctx_domains_count_by_registrar = document.getElementById("domains-count-by-registrarChart");
var domains_count_by_registrarChart = new Chart(ctx_domains_count_by_registrar, {
type: 'line',
data: {
    labels: domains_count_by_registrar.date,
    datasets: [{
        label: 'Webglobe - Yegon, s. r. o.',
        data: domains_count_by_registrar["Webglobe - Yegon, s. r. o."],
        borderColor: 'rgba(80, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'ZONER s.r.o.',
        data: domains_count_by_registrar["ZONER s.r.o."],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'INTERNET SK, s.r.o.',
        data: domains_count_by_registrar["INTERNET SK, s.r.o."],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'Websupport, s.r.o.',
        data: domains_count_by_registrar["Websupport, s.r.o."],
        borderColor: 'rgba(200, 0, 0, 0.9)', 
        fill: false,
    },
    {
        label: 'WebHouse, s.r.o.',
        data: domains_count_by_registrar["WebHouse, s.r.o."],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: 'IGNUM s.r.o.',
        data: domains_count_by_registrar["IGNUM s.r.o."],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: 'WEDOS Internet, a.s.',
        data: domains_count_by_registrar["WEDOS Internet, a.s."],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: 'ACTIVE 24, s.r.o.',
        data: domains_count_by_registrar["ACTIVE 24, s.r.o."],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: 'Gransy s.r.o.',
        data: domains_count_by_registrar["Gransy s.r.o."],
        borderColor: 'rgba(190, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'EXO TECHNOLOGIES spol. s r.o.',
        data: domains_count_by_registrar["EXO TECHNOLOGIES spol. s r.o."],
        borderColor: 'rgba(190, 70, 20, 0.1)', 
        fill: false,
    },
    ]
},
options: {
    elements: {
        point:{
            radius: 0
        },
        line: {
            tension: 0 // disables bezier curves
        }
    },
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 5000, //minimum tick
                max: 150000, //maximum tick
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
               chartObj.ticks.push(1000000);
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
    },
    aspectRatio: 3,
}
});


});



/* 
------------------------------ domains_count_by_holder ------------------------------
*/


$.getJSON("https://raw.githubusercontent.com/redlab-sk/osint-sk-data/master/trends/domain/trends-count-by-holder.json", function(result) {
var data = result;
var domains_count_by_holder = { "date":{},"WY-98059": {},"ASC0007": {}, "MEDI-0096-581": {}, "H637573": {}, "WEST-SK": {}, "SWAN-0004": {}, "LLAR-0001": {}, "PTS1196641": {}, "sub_712895": {}, "NIC-HOSTING": {},"CSK-WHOISP": {},"H635897": {},"BLUE-0058":{},"sub_1140449":{}};

for (var port in domains_count_by_holder) {
    domains_count_by_holder[port] = result['domains-count-by-holder'].map(function(e) {
        return e[port];
        }); 
}

stats(domains_count_by_holder); // populate actual stats

var ctx_domains_count_by_holder = document.getElementById("domains-count-by-holderChart");
var domains_count_by_holderChart = new Chart(ctx_domains_count_by_holder, {
type: 'line',
data: {
    labels: domains_count_by_holder.date,
    datasets: [{
        label: 'WEST-SK ',
        data: domains_count_by_holder["WEST-SK "],
        borderColor: 'rgba(80, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'PTS1196641',
        data: domains_count_by_holder["PTS1196641"],
        borderColor: 'rgba(100, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'sub_712895',
        data: domains_count_by_holder["sub_712895"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'CSK-WHOISP',
        data: domains_count_by_holder["CSK-WHOISP"],
        borderColor: 'rgba(150, 0, 0, 0.8)', 
        fill: false,
    },
    {
        label: 'NIC-HOSTING',
        data: domains_count_by_holder["NIC-HOSTING"],
        borderColor: 'rgba(200, 0, 0, 0.9)', 
        fill: false,
    },
    {
        label: 'LLAR-0001',
        data: domains_count_by_holder["LLAR-0001"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: 'H635897',
        data: domains_count_by_holder["H635897"],
        borderColor: 'rgba(0, 0, 0, 1)', 
        fill: false,
    },
    {
        label: 'MEDI-0096-581',
        data: domains_count_by_holder["MEDI-0096-581"],
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        fill: false,
    },
    {
        label: 'H637573',
        data: domains_count_by_holder["H637573"],
        borderColor: 'rgba(190, 70, 30, 0.8)', 
        fill: false,
    },
    {
        label: 'ASC0007',
        data: domains_count_by_holder["ASC0007"],
        borderColor: 'rgba(190, 70, 30, 0.4)', 
        fill: false,
    },
    {
        label: 'WY-98059',
        data: domains_count_by_holder["WY-98059"],
        borderColor: 'rgba(150, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'SWAN-0004',
        data: domains_count_by_holder["SWAN-0004"],
        borderColor: 'rgba(130, 70, 20, 0.1)', 
        fill: false,
    },
    {
        label: 'BLUE-0058',
        data: domains_count_by_holder["BLUE-0058"],
        borderColor: 'rgba(120, 70, 30, 0.2)', 
        fill: false,
    },
    {
        label: 'sub_1140449',
        data: domains_count_by_holder["sub_1140449"],
        borderColor: 'rgba(110, 70, 20, 0.1)', 
        fill: false,
    },
    ]
},
options: {
    elements: {
        point:{
            radius: 0
        },
        line: {
            tension: 0 // disables bezier curves
        }
    },
    animation: {
        duration: 0 // general animation time
    },
    hover: {
        animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                min: 200, //minimum tick
                max: 3000, //maximum tick
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
    },
    aspectRatio: 3,
}
});


});
