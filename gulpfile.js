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


function createConfig() {
    return openfinConfigBuilder.create({
        startup_app: {
            name: 'interAppMessagingPoC',
            url: 'http://openfin.co'
        }
    }, 'app.json');
}

function updateConfig() {
    return openfinConfigBuilder.update({
        startup_app: {
            name: 'staging_app'
        }
    }, 'app.json');
}

function launchOpenfin () {
    return openfinLauncher.launchOpenFin({
        configPath: 'file:/' + path.resolve('app.json')
    });
}

function startServer(){
    var defered = q.defer();

    var _resolve = function(){
        "use strict";
        return defered.resolve()
    }

    var _to = setTimeout(_resolve, 10000);

    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
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

gulp.task('openfin', function() {
    return createConfig()
        .then(updateConfig)
        .then(startServer)
        .then(openfinLaunchServer);
});

gulp.task('copyIco', function() {
    gulp.src('app/favicon.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyData', function() {
    gulp.src('app/data/**')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('server', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
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

gulp.task('build', ['copyIco', 'copyData', 'webpack']);
gulp.task('default', ['openfin']);