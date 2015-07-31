/**
 * Created by grahamclapham on 27/07/15.
 */
var gulp = require('gulp'),
    gutil = require("gulp-util"),
    exec = require("gulp-exec"),
    webpack = require("webpack"),
    webpackConfig = require('./webpack.config'),
    openfinConfigBuilder = require('openfin-config-builder'),
    openfinLauncher = require('openfin-launcher'),
    path = require('path'),
    nodemon = require('nodemon'),
    openfinLauncher = require('openfin-launcher'),
    q = require('q');

    /*
        Creates the config file which launches the app.
        It is copied to the 'dist' directory which is the root of the app
        and served up via the node server.
     */
function createConfig() {
    return openfinConfigBuilder.create({

        "devtools_port": 9090,
        "startup_app": {
            "name": "staging_app",
            "description": "OpenFin POC",
            "url": "http://localhost:5015",
            "uuid": "interAppMessagingPoC-lmdc4epie019k9",
            "autoShow": true
        },
        "runtime": {
            "arguments": "",
            "version": "beta"
        },
        "shortcut": {
            "company": "OpenFin",
            "description": "Openfin POC",
            "name": "Openfin POC"
        }

    }, 'dist/app.json');
}
/* Starts up theNode server - returning a promise so it may be chained in the 'openfin' task. */
function startServer(){
    var defered = q.defer();

    var _resolve = function(){
         defered.resolve()
    }

    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
        , events: {
            "start": _resolve()
        }
    });
    return defered.promise;
}

function openfinLaunchServer() {
    openfinLauncher.launchOpenFin({
            //Launch a hosted application
            configPath: 'http://localhost:5015/app.json'
            //Or a file path
            //configPath: 'file:/C:/helloWorld/app.json'
        })
        .then(function () {
            console.log('success!');
        })
        .fail(function (error) {
            console.log('error!', error);
        });
}

gulp.task('copyIco', function() {
    gulp.src('app/favicon.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyData', function() {
    gulp.src('app/data/**')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('copyAppJson', function() {
    gulp.src('app/*.json')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('server', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    });
})




gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

/* THIS IS THE MAIN CALL TO LAUNCH THE OPENFIN APP. */

gulp.task('openfin', function() {
    return createConfig()
        .then(startServer)
        .then(openfinLaunchServer);
});

gulp.task('build', ['copyIco', 'copyData', 'webpack']);
gulp.task('default', ['build', 'openfin']);