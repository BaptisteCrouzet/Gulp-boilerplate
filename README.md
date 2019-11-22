# Gulp boilerplate
Needs npm : https://nodejs.org/en/

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
* ```gulp sass``` : Compile sass files with autoprefixer, minify it and 
* ```gulp images-optimize``` : Optimize images by converting png and jpeg files into webp format. Responsives images are generated too.
* ```gulp js``` : Optimize js files by minifying it.
* ```gulp watch``` : Watch files, serves it with a tunnel and a local server into your default browser. All tasks above are executed for the right files by pressing ```ctrl + S```.
