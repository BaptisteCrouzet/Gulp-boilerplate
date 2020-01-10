# Gulp boilerplate
Needs npm : https://nodejs.org/en/

Gulp : https://gulpjs.com/

## Commands to execute before starting a project
Install dependencies :

```npm install```

Create a dist directory :

```mkdir dist```

Add subdirectories :

```cd dist```

```mkdir images```

```mkdir pages```

## Gulp tasks enable
* ```gulp sass``` : Compile sass files with autoprefixer and minify it.
* ```gulp images-optimize``` : Optimize images by converting png and jpeg files into webp format. Responsives images are generated too.
* ```gulp js``` : Optimize js files by minifying it, running babel and compiling all files in one file.
* ```gulp watch``` : Watch files, serves it with a tunnel and a local server into your default browser. All tasks above are executed for the right files by pressing ```ctrl + S```.

## TODO *
* Add a JS table with all formats for responsive images
* Add config for stylus and less
* Add html minifying
* Add svg 
