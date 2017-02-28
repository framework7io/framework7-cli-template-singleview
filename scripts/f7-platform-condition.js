var fs = require('fs');
var path = require('path');
module.exports = function (ctx) {
    var projectRoot = ctx.opts.projectRoot;
    var filesToReplace = [
        'platforms/ios/www/index.html',
        'platforms/android/assets/www/index.html'
    ];
    filesToReplace.forEach(function (filename) {
        var fullFilePath = path.join(projectRoot, filename);
        var isIos = filename.indexOf('platforms/ios/') >= 0;
        if (!fs.existsSync(fullFilePath)) return;
        var fileContent = fs.readFileSync(fullFilePath, 'utf-8');
        var conditions;


        var finalContent = '';
        if (isIos) {
            conditions = fileContent.split('<!-- f7-if-android -->');
            if (conditions.length === 1) return;
            conditions.forEach(function (str) {
                if (str.indexOf('<!-- f7-endif-android -->') >= 0) {
                    finalContent += str.split('<!-- f7-endif-android -->')[1];
                }
                else {
                    finalContent += str;
                }
            });

        }
        else {
            conditions = fileContent.split('<!-- f7-if-ios -->');
            if (conditions.length === 1) return;
            conditions.forEach(function (str) {
                if (str.indexOf('<!-- f7-endif-ios -->') >= 0) {
                    finalContent += str.split('<!-- f7-endif-ios -->')[1];
                }
                else {
                    finalContent += str;
                }
            });
        }
        fs.writeFileSync(fullFilePath, finalContent);
    });
};