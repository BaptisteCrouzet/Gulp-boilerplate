# A ready Gulp Boilerplate


![](https://img.shields.io/badge/gulp%40latest-%3E%3D%204.0.2-brightgreen)    ![](https://img.shields.io/badge/node%40latest-%3E%3D%2012.16.3-brightgreen)    ![](https://img.shields.io/github/watchers/BaptisteCrouzet/https://img.shields.io/github/stars/BaptisteCrouzet/Gulp-boilerplate?style=social?style=social)    ![](https://img.shields.io/github/stars/BaptisteCrouzet/Gulp-boilerplate?style=social)    ![](https://img.shields.io/github/followers/BaptisteCrouzet?label=Happy%20followers&style=social)

This boilerplate let you start with a ready to use Gulp configuration. You are free to choose your preprocessing language for your styles and specify your constraints for minification or browsers compatibility.
You are welcome to create an issue or help me at any time !

Please consider that the last release of Gulp was made in 2019, this project can be ran in 2021 but I can't promise you up-to-date plug-ins.

* Needs NodeJS and npm : <https://nodejs.org/en/> (v12.* at least, v14 recommended for node)
* Gulp : <https://gulpjs.com/> (^4.0.2)

<br>

**Documentation :**

* [Commands to execute before starting a project](#commands-to-execute-before-starting-a-project)
    * [Intall dependencies](#install-dependencies)
    * [Add subdirectories](#add-subdirectories)
* [Develop](#develop)
    * [General behavior](#general-behavior)
    * [Customization](#customization)
* [Production](#production)
* [List of gulp tasks available](#list-of-gulp-tasks-available)
* Comming soon: Details about tasks
* [Todos](#todos)

## Commands to execute before starting a project

### Install dependencies

```npm install```

Maybe you can update them but I can't sure you the abality of the system to works after a `npm update`. Be carefull.

### Add subdirectories

1. Create a dist directory :

    ```mkdir dist```

2. At the root of the project run :

    a. Add directories for images : ```cd assets && mkdir images && cd images && mkdir icons```

    b. Add directories for assets : ```cd assets && mkdir styles && mkdir js```

## Develop

### General behavior

When working, always make the path to your assets like if you were in the dist directory.
**You MUST develop in watch mode to make your code working**.

Now only Sass is enabled but you shoul soon be able too use stylus or less for preprocessing CSS.

### Customization

You can put your constraints into ```.browserslitrc``` file and ```.postcss.config.js```. They allows you to supports some browsers, code cleaning and futur CSS features.

Be carefull, this project is given "as is" so I can't garantee you any behavior if you alter the configuration.

## Production

Comming soon

## List of gulp tasks available

* ```gulp scss``` : Compile sass (SCSS) files into one single main.css file. Sourcemaps are generated too. The outputStyle compressed is used here, the CSS is cleaned (note that duplicated rules will be removed). These files are concatenated into one single file named main.scss. PostCss is launched on all that code and autoprefix it, enables the futur CSS and make it compatible with the browsers following the `.browserslistrc` file. The task logs some stats like, original size, final size, time spent into processing and errors about the code.
* ```gulp scss-prod``` : Compile sass (SCSS) files into one single main.css file. This task don't emitts any error, log or sourcemaps. It juste compile the code.
* ```gulp imagesOptimize``` : Optimize images by converting png and jpeg files into webp format. Responsives images are generated too in multiple formats.
* ```gulp svg``` : Optimize svg and compile theme in one sprite. Output a sass file too, used in sass compilation.
* ```gulp js``` : Optimize JavaScript files by minifying it and generating sourcemaps.
* ```gulp jsProd``` : Optimize your JavaScript files for the production environment. Do same things like the *gulp js* task but run babels on it following your `.browserslistrc` file.
* ```gulp html``` : Minify your HTML by removing whitespaces and minify scripts and styles inside it,.
* ```gulp watch``` : Watch files, serves it with a tunnel and a local server into your default browser. All tasks above are executed for the right files by pressing ```ctrl + S```. Your browser will be reloaded at each time.
* ```gulp prod``` : A task that runs all the others, just once, before pushing to the production environnment.
* ```gulp cleanProd``` : A task for cleaning unwanted files in an production environment.

## TODOs *

Any help is welcome, just create a merge request or a fork, and tell me your intention to participate.

* Move manage fonts
* Improving clean-prod task by removing comments etc
* While running the watch prod, the server open default browser and on Ui. Maybe add a configuration file somewhere for specifing it.
* Add prod server without logs or anithing else - it should run once the prod task
* Add config for stylus, use linter and emitts sourcemaps
* Add config for less, use linter and emitts sourcemaps
* Details about logs
* Details about browserSync
* Add a JS table with all formats for responsive images
