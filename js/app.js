// Dom7
var $$ = Dom7;

// isCordova helper
var isCordova = !!window.cordova;

// Framework7 App main instnce
var app  = new Framework7({
    root: '#app', // App root element
    material: Framework7.prototype.device.ios !== true, // Enable material theme on everything except iOS
    // Don't init automatically
    init: false
});

// Add main view
var mainView = app.addView('.view-main', {
    dynamicNavbar: true
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
    
    // Close login screen
    app.closeModal('#my-login-screen');

    // Alert username and password
    app.alert('Username: ' + username + '<br>Password: ' + password);
});

// Init Framework7 App
if (isCordova) {
    $$(document).on('deviceready', app.init);
}
else {
    app.init();
}