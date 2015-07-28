/**
 * Created by grahamclapham on 27/07/15.
 */
var gulp = require('gulp'),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    webpackConfig = require('./webpack.config'),
    openfinConfigBuilder = require('openfin-config-builder'),
    openfinLauncher = require('openfin-launcher'),
    path = require('path');

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

gulp.task('openfin', function() {
    return createConfig()
        .then(updateConfig)
        .then(launchOpenfin);
});

gulp.task('copyIco', function() {
    gulp.src('app/favicon.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyData', function() {
    gulp.src('app/data/**')
        .pipe(gulp.dest('dist/data'));
});

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