'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    responsive = require('gulp-responsive'),
    concat = require('gulp-concat'),
    autoprefixer = require('autoprefixer'),
    babel = require('gulp-babel'),
    htmlmin = require('gulp-htmlmin'),
    svgSprite = require('gulp-svg-sprite'),
    postCss = require('gulp-postcss'),
    historyApiFallback = require('connect-history-api-fallback'),
    uglify = require('gulp-uglify'),
    sassLint = require('gulp-sass-lint'),
    del = require('del');

sass.compiler = require('node-sass');

// Optimisation for sass files in dev
gulp.task('sass', () => {
    return gulp.src(['assets/styles/*.s+(a|c)ss', 'dist/images/view/sprite.s+(a|c)ss'])
        .pipe(sassLint(
            {
                rules: {
                    'no-ids': 1,
                    'no-mergeable-selectors': 1,
                    'hex-length': [
                        2,
                        {
                            'style': 'long'
                        }
                    ]
                }
            }
        ))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({
            debug: true,
            level: {
                1: {
                    all: true
                },
                2: {
                    all: true,
                    removeDuplicateRules: true // turns on removing duplicate rules
                }
            }
        }, (details) => {
            console.log(`${details.name} : =====>> Original size : ${details.stats.originalSize}kb => Minified : ${details.stats.minifiedSize}kb (${details.stats.timeSpent}ms)`);
        }))
        .pipe(concat('main.css'))
        .pipe(postCss([autoprefixer()]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass-prod', () => {
    return gulp.src(['assets/styles/*.s+(a|c)ss', 'dist/images/view/sprite.s+(a|c)ss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({
            debug: false,
            level: {
                1: {
                    all: true
                },
                2: {
                    all: true,
                    removeDuplicateRules: true // turns on removing duplicate rules
                }
            }
        }))
        .pipe(concat('main.css'))
        .pipe(postCss([autoprefixer()]))
        .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('images-optimize', () => {
    return gulp
        .src('assets/images/*')
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
gulp.task('js-prod', () => {
    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Task for JS Scripts
gulp.task('js', () => {
    return gulp.src('assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('stylus', () => {
    // TODO
});

gulp.task('less', () => {
    // TODO
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
gulp.task('svg', () => {
    return gulp.src('assets/images/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('dist/images'))
})

// Watch task
gulp.task('watch', () => {
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
    gulp.watch('assets/styles/*.s+(a|c)ss', gulp.parallel('sass'));
    gulp.watch('assets/js/*.js', gulp.parallel('js'));
    gulp.watch('assets/images/*', gulp.parallel('images-optimize'));
    gulp.watch('assets/images/icons', gulp.parallel('svg'));
    gulp.watch('*.html', gulp.parallel('html'));
    browserSync.watch("**/*.*").on('change', browserSync.reload);
});

gulp.task('clean-prod', () => {
    return del([
        'dist/**/*.map'
    ]);
});

// Prod task
gulp.task('prod', gulp.series(
    gulp.parallel(
        'sass-prod',
        'js-prod',
        'images-optimize',
        'svg',
        'html'
    ),
    'clean-prod'
));