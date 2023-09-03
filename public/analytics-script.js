let currentRoute = window.location.pathname;
let startTime = new Date();

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}

document.addEventListener('click', function (event) {
    // Calculate time spent on the previous route
    const currentTime = new Date();
    const timeSpent = currentTime - startTime;
    
    // Update the current route and start time
    currentRoute = window.location.pathname;
    startTime = currentTime;
    
    const screenInfo = {
        width: window.screen.width,
        height: window.screen.height,
    };
    
    const eventObject = {
        type: event.target.tagName,
        screenInfo: screenInfo,
        timestamp: new Date().toString(),
        currentRoute: currentRoute,
        timeSpentOnRoute: formatTime(timeSpent),
    };
    
    if (event.target.id) {
        eventObject.targetId = event.target.id;
    }
    
    // Get Device Information
    (function () {
        'use strict';
        
        let module = {
            options: [],
            header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
            dataos: [
                {name: 'Windows Phone', value: 'Windows Phone', version: 'OS'},
                {name: 'Windows', value: 'Win', version: 'NT'},
                {name: 'iPhone', value: 'iPhone', version: 'OS'},
                {name: 'iPad', value: 'iPad', version: 'OS'},
                {name: 'Kindle', value: 'Silk', version: 'Silk'},
                {name: 'Android', value: 'Android', version: 'Android'},
                {name: 'PlayBook', value: 'PlayBook', version: 'OS'},
                {name: 'BlackBerry', value: 'BlackBerry', version: '/'},
                {name: 'Macintosh', value: 'Mac', version: 'OS X'},
                {name: 'Linux', value: 'Linux', version: 'rv'},
                {name: 'Palm', value: 'Palm', version: 'PalmOS'}
            ],
            databrowser: [
                {name: 'Chrome', value: 'Chrome', version: 'Chrome'},
                {name: 'Firefox', value: 'Firefox', version: 'Firefox'},
                {name: 'Safari', value: 'Safari', version: 'Version'},
                {name: 'Internet Explorer', value: 'MSIE', version: 'MSIE'},
                {name: 'Opera', value: 'Opera', version: 'Opera'},
                {name: 'BlackBerry', value: 'CLDC', version: 'CLDC'},
                {name: 'Mozilla', value: 'Mozilla', version: 'Mozilla'}
            ],
            init: function () {
                let agent = this.header.join(' '),
                    os = this.matchItem(agent, this.dataos),
                    browser = this.matchItem(agent, this.databrowser);
                
                return {os: os, browser: browser};
            },
            matchItem: function (string, data) {
                let i = 0,
                    j = 0,
                    html = '',
                    regex,
                    regexv,
                    match,
                    matches,
                    version;
                
                for (i = 0; i < data.length; i += 1) {
                    regex = new RegExp(data[i].value, 'i');
                    match = regex.test(string);
                    if (match) {
                        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                        matches = string.match(regexv);
                        version = '';
                        if (matches) {
                            if (matches[1]) {
                                matches = matches[1];
                            }
                        }
                        if (matches) {
                            matches = matches.split(/[._]+/);
                            for (j = 0; j < matches.length; j += 1) {
                                if (j === 0) {
                                    version += matches[j] + '.';
                                } else {
                                    version += matches[j];
                                }
                            }
                        } else {
                            version = '0';
                        }
                        return {
                            name: data[i].name,
                            version: parseFloat(version)
                        };
                    }
                }
                return {name: 'unknown', version: 0};
            }
        };
        
        const e = module.init();

        eventObject.deviceDetails = {
            os_name: e.os.name,
            os_version: e.os.version,
            browser_name: e.browser.name,
            browser_version: e.browser.version,
            user_agent: navigator.userAgent,
            app_version: navigator.appVersion,
            platform: navigator.platform,
            vendor: navigator.vendor,
        };
    }());

    // Get Client IP Address
    (function () {
        fetch("https://api.ipify.org/?format=json")
            .then(results => results.json())
            .then(data => {
                const {ip} = data;
                getClientGeolocationFromIPApi(ip);
                eventObject.ip = ip;
            })
            .catch(e => {
                console.log(e)
            })
    }());

    // Get Geolocation of client using IP API
    /*function getClientGeolocationFromIPApi(ip) {
        fetch(`http://ip-api.com/json/${ip}`)
            .then(results => results.json())
            .then(data => {
                eventObject.geoLocation = data;
                console.log("geolocation: ", data);
            })
            .catch(e => {
                console.log(e)
            });
    }*/
    
    console.log('eventObject:', eventObject);
});


const divElement = document.querySelector('#div-id');
let divStartTime;

divElement.addEventListener('click', function () {
    if (!divStartTime) {
        divStartTime = new Date();
    } else {
        const currentTime = new Date();
        const timeSpentOnDiv = currentTime - divStartTime;
        console.log('Time spent on div:', timeSpentOnDiv);
        divStartTime = currentTime;
    }
});
