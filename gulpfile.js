'use strict';

import { src, dest, parallel, series, watch } from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import browserSync from 'browser-sync';
import responsive from 'gulp-responsive';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import htmlmin from 'gulp-htmlmin';
import svgSprite from 'gulp-svg-sprite';
import postCss from 'gulp-postcss';
import historyApiFallback from 'connect-history-api-fallback';
import uglify from 'gulp-uglify';

sass.compiler = require('node-sass');

// Optimisation for sass files in dev
exports.scss = function scss() {
    return src(['assets/styles/*.scss', 'dist/images/view/sprite.scss'])
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
        .pipe(postCss([autoprefixer()]))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'));
}

// Optimize images
exports.imagesOptimize = function imagesOptimize() {
    return src('assets/images/*')
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
        .pipe(dest('dist/images'));
}

// Task for JS Scripts
exports.js = function js() {
    return src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist'));
}

exports.stylus = function stylus() {
    // TODO
}

exports.less = function less() {
    // TODO
}

// Task for HTML files
exports.html = function html() {
    return src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true
        }))
        .pipe(dest('dist'));
}

// Task for svg ->generate svg sprite and optimized svg
// Declare the config
let config = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 50,
            maxHeight: 50
        },
        transform: ['svgo']
    },
    mode: {
        view: { // Activate the «view» mode
            bust: false,
            render: {
                scss: true // Activate Sass output (with default options)
            }
        }
    }
};
// Here come the task
exports.svg = function svg() {
    return src('assets/images/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(dest('dist/images'))
}

// Watch task
exports.watchBuild = function watchBuild() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: false,
        online: false,
        open: "local",
        reloadOnRestart: true,
        ui: {
            port: 8080
        },
        logLevel: "debug",
        logPrefix: 'Log',
        middleware: [require("connect-logger")(), historyApiFallback()]
    })
    watch('assets/styles/*.scss', parallel('sass'));
    watch('assets/js/*.js', parallel('js'));
    watch('assets/images/*', parallel('images-optimize'));
    watch('assets/images/icons', parallel('svg'));
    watch('*.html', parallel('html'));
    browserSync.watch("**/*.*").on('change', browserSync.reload);
}

// Clean prod task
exports.cleanProd = function cleanProd() {
    // TODO
    return true;
}

// Prod task
exports.prod = series([
    parallel([
        exports.scss,
        exports.js,
        exports.imagesOptimize,
        exports.svg,
        exports.html
    ]),
    exports.cleanProd
]);