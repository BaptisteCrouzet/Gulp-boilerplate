'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    webp = require('gulp-webp'),
    responsive = require('gulp-responsive'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');

// Optimisation for sass files in dev
gulp.task('sass', () => {
    return gulp.src('./assets/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({
            debug: true,
            level: {
                1: {
                    all: true
                },
                2: {
                    all: true, // sets all values to `false`
                    removeDuplicateRules: true // turns on removing duplicate rules
                }
            }
        }, (details) => {
            console.log(`===== ${details.name} : =====`);
            console.log(`Original size : ${details.stats.originalSize}`);
            console.log(`Minified size : ${details.stats.minifiedSize}`);
            console.log(`time spent in compiling : ${details.stats.timeSpent}ms`);
            console.log(`Errors : ${details.errors}`);
        }))
        .pipe(concat('main.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

// Optimize images
gulp.task('images-optimize', () => {
    return gulp
        .src('./assets/images/*')
        .pipe(
            responsive(
                {
                    // Resize all JPG images different sizes and extensions
                    '*.jpg': [
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: '350',
                            rename: {
                                extname: '.jpg',
                                suffix: '-350'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 350,
                            rename: {
                                extname: '.jpg',
                                suffix: '-350'
                            },
                            format: 'webp'
                        }, {
                            width: 1920,
                            rename: {
                                extname: '.webp',
                                suffix: '-1920'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.webp',
                                suffix: '-1440'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.webp',
                                suffix: '-1366'
                            },
                            format: 'webp'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.webp',
                                suffix: '-980'
                            },
                            format: 'webp'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.webp',
                                suffix: '-500'
                            },
                            format: 'webp'
                        },
                        {
                            width: 350,
                            rename: {
                                extname: '.webp',
                                suffix: '-350'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 350,
                            rename: {
                                extname: '.jpg',
                                suffix: '-350'
                            },
                            format: 'jpeg'
                        },
                        {
                            // Compress, strip metadata, and rename original image
                            rename: { suffix: '-original' }
                        }
                    ],
                    // Resize all PNG images to be retina ready
                    '*.png': [
                        {
                            width: 1920,
                            rename: {
                                extname: '.png',
                                suffix: '-1920'
                            }
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.png',
                                suffix: '-1440'
                            }
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.png',
                                suffix: '-1366'
                            }
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.png',
                                suffix: '-980'
                            }
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.png',
                                suffix: '-500'
                            }
                        },
                        {
                            width: 350,
                            rename: {
                                extname: '.png',
                                suffix: '-350'
                            }
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.webp',
                                suffix: '-1920'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.webp',
                                suffix: '-1440'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.webp',
                                suffix: '-1366'
                            },
                            format: 'webp'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.webp',
                                suffix: '-980'
                            },
                            format: 'webp'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.webp',
                                suffix: '-500'
                            },
                            format: 'webp'
                        },
                        {
                            width: 350,
                            rename: {
                                extname: '.webp',
                                suffix: '-350'
                            },
                            format: 'webp'
                        },
                        {
                            // Compress, strip metadata, and rename original image
                            rename: { suffix: '-original' }
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 75,
                    // Use progressive (interlace) scan for JPEG and PNG output
                    progressive: true,
                    // Strip all metadata
                    withMetadata: false,
                    // Compression level for PNG
                    compressionLevel: 7,

                    // No Error !
                    errorOnEnlargement: false,
                    errorOnUnusedConfig: false,
                    errorOnUnusedImage: false
                }
            )
        )
        .pipe(gulp.dest('dist/images'));
});

// Task for JS Scripts
gulp.task('js', () => {
    return gulp.src('./assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

// Task for HTML files
gulp.task('html', () => {
    return gulp.src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true
        }))
        .pipe(gulp.dest('dist'));
});

// Watch task
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: true,
        online: true,
        open: "local",
        reloadOnRestart: true
    })
    gulp.watch('./assets/styles/*.scss', gulp.series('sass'));
    gulp.watch('./assets/js/*.js', gulp.series('js'));
    gulp.watch('./assets/images/*', gulp.series('images-optimize'));
    gulp.watch("**/*.*").on('change', browserSync.reload);
});