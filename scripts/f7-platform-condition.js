var fs = require('fs');
var path = require('path');
module.exports = function (ctx) {
    var projectRoot = ctx.opts.projectRoot;
    var walk = function(dir) {
        var results = [];
        var list = fs.readdirSync(dir);
        list.forEach(function(file) {
            file = dir + '/' + file;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) results = results.concat(walk(file));
            else results.push(file);
        });
        return results;
    };
    var iosFiles = walk(path.join(projectRoot, 'platforms/ios/www'));
    var androidFiles = walk(path.join(projectRoot, 'platforms/android/assets/www'));
    var filesToReplace = [];
    iosFiles.concat(androidFiles).forEach(function(filename) {
        if (path.extname(filename) === '.html') filesToReplace.push(filename);
    });
    
    filesToReplace.forEach(function (filename) {
        
        var isIos = filename.indexOf('platforms/ios/') >= 0;
        if (!fs.existsSync(filename)) return;
        var fileContent = fs.readFileSync(filename, 'utf-8');
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
        finalContent = finalContent
            .replace(/<!-- f7-if-ios -->/g, '')
            .replace(/<!-- f7-endif-ios -->/g, '')
            .replace(/<!-- f7-if-android -->/g, '')
            .replace(/<!-- f7-endif-android -->/g, '');

        fs.writeFileSync(filename, finalContent);
    });
};