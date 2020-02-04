# Gulp boilerplate

Needs npm : <https://nodejs.org/en/>

Gulp : <https://gulpjs.com/>

## Commands to execute before starting a project

### Install dependencies

```npm install```

Create a dist directory :

```mkdir dist```

### Add subdirectories

At the root of the project run :

Add directories for images : ```cd assets && mkdir images && cd images && mkdir icons```

Add directories for assets : ```cd assets && mkdir styles && mkdir js```

## When developing

When working, always make the path to your assets like if you were in the dist directory. You MUST develop in watch mode for making your code works.

Now only Sass is enabled but you shoul soon be able too use stylus or less for preprocessing CSS.

### I want to personnalise the behavior on my needs

You can put your constraints into ```.browserslitrc``` file and ```.postcss.config.js```. They allows you to supports some, browsers, code cleaning and futur CSS features.

## Pushing on production environment

ToDo

## Gulp tasks available

* ```gulp sass``` : Compile sass (SCSS) files into one single main.css file. Sourcemaps are generated too. The outputStyle compressed is used here, the CSS is cleaned (note that duplicated rules will be removed). These files are concatenated into one single file named main.scss. PostCss is launched on all that code and autoprefix it, enables the futur CSS and make it compatible with the browsers following the ```.browserslistrc``` file. The task logs some stats like, original size, final size, time spent into processing and errors about the code.
* ```gulp sass-prod``` : Compile sass (SCSS) files into one single main.css file. This task don't emitts any error, log or sourcemaps. It juste compile the code.
* ```gulp images-optimize``` : Optimize images by converting png and jpeg files into webp format. Responsives images are generated too.
* ```gulp svg``` : Optimize svg and compile theme in one sprite. Output a sass file too, used in sass compilation.
* ```gulp js``` : Optimize js files by minifying it, running babel and compiling all files in one file.
* ```gulp html``` : Minify your HTML by removing whitespaces and minify scripts and styles inside it,.
* ```gulp watch``` : Watch files, serves it with a tunnel and a local server into your default browser. All tasks above are executed for the right files by pressing ```ctrl + S```.
* ```gulp prod``` : A task that runs all the others, just once, before pushing to the production environnment.
Your browser will be reloaded at eaxh time.

## TODO *

* Fix the prod task, some errors are presents in the terminal.
* Move manage fonts
* clean-prod task by deleting sourcemaps and removing comments etc
* While running the watch prod, the server open most used browsers and on Ui
* Add prod server without logs or anithing else - it should run once the prod task
* Add config for stylus, use linter and emitts sourcemaps
* Add config for less, use linter and emitts sourcemaps
* Details about logs
* Details about browserSync
* Add a JS table with all formats for responsive images
