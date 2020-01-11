# Gulp boilerplate

Needs npm : <https://nodejs.org/en/>

Gulp : <https://gulpjs.com/>

## Commands to execute before starting a project

### Install dependencies

```npm install```

Create a dist directory :

```mkdir dist```

### Add subdirectories

In assets :

```cd assets```

```mkdir images```

````cd images```

```mkdir icons```

In dist :

```cd dist```

```mkdir images```

## When developing

When working, always make the path to your assets like if you were in the dist directory. You MUST develop in watch mode.

## Pushing on production environment

ToDo

## Gulp tasks enable

* ```gulp sass``` : Compile sass files with autoprefixer and minify it.
* ```gulp images-optimize``` : Optimize images by converting png and jpeg files into webp format. Responsives images are generated too.
* ```gulp js``` : Optimize js files by minifying it, running babel and compiling all files in one file.
* ```gulp html``` : Minify your HTML by removing whitespaces and minify scripts and styles inside it.
* ```gulp watch``` : Watch files, serves it with a tunnel and a local server into your default browser. All tasks above are executed for the right files by pressing ```ctrl + S```.

## TODO *

* Add a JS table with all formats for responsive images
* Add config for stylus and less
* Add svg
