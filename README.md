# React with Font Awesome 5 Web Fonts with CSS

*NOTE: this demo uses package names for Font Awesome 5.0.x. The concepts apply to Font Awesome 5.1.x, but
with different package names and paths.*

Our _strong_ recommendation for using Font Awesome 5 with React is to use our official
[React component](https://github.com/FortAwesome/react-fontawesome). It uses our
[SVG with JS](https://fontawesome.com/how-to-use/svg-with-js) method of rendering icons.
We think that method is superior for use with React.

However, you may have reasons for needing to stick with the
[Web Fonts with CSS](https://fontawesome.com/how-to-use/web-fonts-with-css) method while using React.

If so, then hopefully you're at least using a tool like [create-react-app](https://github.com/facebook/create-react-app)
that will handle some of the bundling of the assets easily for you. If not, then you'll have 
to follow the guidelines to either [Download, Customize, and Serve Yourself ](https://fontawesome.com/get-started/web-fonts-with-css#download) or use the Free or Pro [CDN](https://fontawesome.com/get-started).

# Setup

This demo uses `create-react-app`, which makes things simple.

1. Install the webfonts package

```
npm i --save '@fortawesome/fontawesome-free-webfonts'
```
or
```
yarn add '@fortawesome/fontawesome-free-webfonts'
```

2. Import the CSS into your React component.

Be sure to import the core css first: `fontawesome.css`,
and then the css for each style that you'll use, like `fa-solid.css`


In your React component, import the relevant CSS files using local paths, like this:
```javascript
// src/App.css
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
```

When your app runs, it needs to be able to access both the CSS files, and also the web font files
that the CSS files refer to. `create-react-app` is configured to handle this magically for you if you
import like this.

3. place `<i>` tags in your `JSX` templates

```jsx harmony
  <i className="fas fa-coffee"></i>
```

Remember, this is _React_, so where you'd normally use `class=` in an `<i>`, you need to use `className=` instead.

# Build

Again, if you're using `create-react-app`, it's all magic. When you do your production build with 
```
yarn build
```
or
```
npm run build
```
you get a build folder that looks like this:
```
build/
build//favicon.ico
build//index.html
build//asset-manifest.json
build//static
build//static/css
build//static/css/main.42273046.css.map
build//static/css/main.42273046.css              <----- Font Awesome CSS bundled here
build//static/js
build//static/js/main.e2da00e2.js
build//static/js/main.e2da00e2.js.map
build//static/media
build//static/media/fa-solid-900.b1a0b327.svg
build//static/media/fa-solid-900.4f564f7e.woff2  <----- Font Awesome web fonts files here
build//static/media/fa-solid-900.6e93d227.eot
build//static/media/fa-solid-900.db362eb5.woff
build//static/media/fa-solid-900.47ead845.ttf
build//manifest.json
build//service-worker.js
```

# Also

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

