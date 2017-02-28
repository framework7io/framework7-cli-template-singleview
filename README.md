# Framework7 Cli Single View Template

This is the base and default Single View template for [Framework7 CLI](https://github.com/nolimits4web/framework7-cli)

## Install

Make sure you have Cordova and Framework7 CLI installed globally (may require "sudo"):
```
$ npm install cordova -g
$ npm install framework7-cli -g
```

Create Framework7 App using Framework7 CLI:
```
$ f7 create hello com.example.hello HelloWorld
```

Go to created app folder and add required target platforms (iOS and/or Android):
```
$ f7 platfrom add ios
$ f7 platfrom add android
```

Serve app locally. App will be hosted at `http://localhost/www/ios/` (for iOS platform) and `http://localhost/www/android/` (for Android platform):
```
$ f7 serve
```