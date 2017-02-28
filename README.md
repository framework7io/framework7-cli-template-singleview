# Framework7 CLI Single View Template

This is the base and default Single View template for [Framework7 CLI](https://github.com/nolimits4web/framework7-cli)

## Install & Run

Make sure you have Cordova and Framework7 CLI installed globally (may require "sudo"):
```
$ npm install cordova -g
$ npm install framework7-cli -g
```

Create Framework7 App using Framework7 CLI:
```
$ f7 create myapp com.example.myapp MyApp
```

Go to created app folder:
```
$ cd hello
```

And add required target platforms (iOS and/or Android):
```
$ f7 platfrom add ios
$ f7 platfrom add android
```

Use `f7 serve` command to run the app locally (in browser). App will be hosted at `http://localhost:8000/www/ios/` (for iOS platform) and `http://localhost:8000/www/android/` (for Android platform):
```
$ f7 serve
```

To build the app:
```
$ f7 build
```

## Conditional Rendering

This app/template comes with Cordova hook that may differentiate HTML output for different platforms. It could be very handy in case you need to use different layout (HTML structure) for different platforms (according to Framework7 spec). So you may use the following conditions in your project's html files:

```html
<!-- f7-if-ios -->
<p>This content will be rendered only for iOS platform</p>
<!-- f7-endif-ios -->

<!-- f7-if-android -->
<p>This content will be rendered only for Android platform</p>
<!-- f7-endif-android -->
```

You can use it in any place of HTML files, even in HEAD section to use different stylesheets:
```html
<head>
    ...
    <!-- @f7-if-ios -->
    <link rel="stylesheet" href="css/framework7-icons.css">
    <link rel="stylesheet" href="css/framework7.ios.min.css">
    <link rel="stylesheet" href="css/framework7.ios.colors.min.css">
    <!-- @f7-endif-ios -->

    <!-- @f7-if-android -->
    <link rel="stylesheet" href="css/material-icons.css">
    <link rel="stylesheet" href="css/framework7.material.min.css">
    <link rel="stylesheet" href="css/framework7.material.colors.min.css">
    <!-- @f7-endif-android -->
</head>
```

Or inside of attribures:
```html
<div class="view <!-- @f7-if-ios -->navbar-through<!-- @f7-endif-ios --> <!-- @f7-if-android -->navbar-fixed<!-- @f7-endif-android -->">
    ...
</div>
```
