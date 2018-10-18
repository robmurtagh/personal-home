# personal-site

## Quick start

You can find all useful commands as [npm scripts](package.json)

* From root directory, install dependecies:

```bash
npm install
```

* Run the site on a local development server (`webpack-dev-server`):

```bash
npm run start
```

* Create a static build in `/dist`:

```bash
npm run build
```

* Deployment requires AWS configuration (AWS account && `brew install awscli`) but is run using:

```bash
npm run deploy
```

## Developer details

* The [Javascript](src/index.js) for this site depends on [three.js](https://github.com/mrdoob/three.js) and [typed.js](https://github.com/mattboldt/typed.js) - thanks to those projects!
* CSS is mainly via the great [Tachyons Functional CSS framework](https://github.com/tachyons-css/tachyons) framework, with extra classes added in [style.css](src/css/style.css). All CSS is then [Purified](https://github.com/purifycss/purifycss) to remove unneeded classes
* Build is done using [Webpack](webpack.config.js), this includes injecting purified CSS into a [Handlebars template](index.hbs)
* Site is deployed to AWS S3 static website hosting with a Cloudfront CDN and SSL certification