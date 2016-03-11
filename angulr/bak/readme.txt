1: Please put the files on a server or local host to preview. 
eg: put the "/src" files under a localhost "src" folder

looks like:
"src/css"
"src/fonts"
"src/img"
"src/js"
"src/tpl"
"src/l10n"
"src/index.html"

then preview:  http://localhost/src/index.html  in your browser.

2: Documents locate "tpl/docs.html" or "http://localhost/src/index.html#/app/docs"
online: http://flatfull.com/themes/angulr/#/app/docs

3: Use Grunt and Bower

install node.js
go to the app root

>npm install -g grunt-cli
>npm install
>grunt bower-install
>grunt build:dev
>grunt build:dist
>npm start