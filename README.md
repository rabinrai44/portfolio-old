# rabinrai44.github.io
Here's my portfolio website using github.io
https://rabinrai44.github.io/

----------------------
Project Setting Up:
----------------------
  # ToDoList
  ===================
  1. Project Name
  2. Git install
  3. Node.js (global & local)
  4. HTML
  5. CSS (Well organized hand code)
  6. Mobile-first (Responsive Design for every device)
  7. Javascript
  8. Go-live


# Tools, Packages and Plugins:
===================
  * Tools:
  - git - version control
      >git init
  - Node.js -
      >npm install
      >npm install --save-dev
  - gulp - task runner
      >npm install gulp --save-dev

  - text-editor(Atom, Bracket etc) - code editor
    >go here https://atom.io/

  * Plugins:
  - gulp-watch - task runner gulp Plugin
    >npm install gulp-watch --save-dev

  - normalize.css
    >npm install normalize.css --save-dev    

  - jquery
    >npm install jquery --save-dev

  - PostCSS - css filter Plugin
    >npm install gulp-postcss --save-dev

  - Autoprefixer
    >npm install autoprefixer --save-dev

  - Postcss-simple-vars - css variables
    >npm install postcss-simple-vars --save-dev

  - Postcss-nested
    >npm install postcss-nested --save-dev

  - PostCSS-import - import css Files
    >npm install postcss-import --save-dev

  - Browsersync
    >npm install browswersync --save-dev

  - Postcss-mixins
    >npm install postcss-mixins --save-dev

  - Postcss-hexrgba - coverting hex to rgba
    >npm install postcss-hexrgba --save-dev

  - Webpack
    >npm install webpack -g
    >npm install webpack --save-dev (install locally into project folder.)

  - jQeury
    >npm install jquery --save-dev

  - Babel - ES6 standard code automatic convert ES5 code
    >npm install babel-core babel-loader babel-preset-es2015 --save-dev

  - Waypoints
    >npm install waypoints --save

  - jQuery-smooth-scroll
    >npm install jquery-smooth-scroll --save

  - Gulp-svg-sprite - automatic create svg sprite and css
    >npm install gulp-svg-sprite@1.3.1 --save-dev

  - Gulp-rename - rename file
    >npm install gulp-rename --save-dev

  - Del - delete file
    >npm install del --save-dev

  - LazyLoading
    >npm install lazysizes --save

  - Picturefill
    >npm install picturefill --save

  - Gulp-svg2png
    >npm install gulp-svg2png --save-dev

  - gulp-modernizr
    >npm install gulp-modernizr --save-dev


# File organized
====================

= main-folder
  = app
    > index.html
    > assets
      - images
        * images

      - js

      - styles
        > base
          _global.css
          _mixins.css
          _variables.css

        > modules
          _large-hero.css
          _wrapper.css
          _row.css
          _headline.css
          _page-section.css
          _btn.css
        -- styles.css (main styles)
            :) @import all sub-styles


    > temp
      > styles
        _styles.css


    = gulp
      > tasks
        - styles.js
        - watch.js
    - gulpfile.js
    - Packages.json
    ::readme.md
