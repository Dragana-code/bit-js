function printWindowInfo() {
    console.log(window.navigator.vendor);
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
}
printWindowInfo();

function isOnline() {
    if (window.navigator.isOnline) {
        console.log('Online');
    } else {
        console.log('Offline');
    }
}

isOnline();

function windowScreen() {
    console.log(window.screen.width);
    console.log(window.screen.height);
}
windowScreen();

function windowLocation() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
}
windowLocation();