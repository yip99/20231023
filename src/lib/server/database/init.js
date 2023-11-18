import { dbRun, newArticle } from ".";

export const init = async () => {
    // for (let statement of initQuery) {
    await dbRun(initQuery);
    // }
    console.log('created table');
    await newArticle(...[
        'HTML elements',
        '0',
        'public',
        'HTML elements',
        'https://dummyimage.com/1920x1080/000/fff',
        `## This is a H2 Heading

### This is a H3 Heading

#### This is a H4 Heading

##### This is a H5 Heading

###### This is a H6 Heading

## Horizontal Rules

---

---

---

## Emphasis

**This is bold text**

_This is italic text_

~~Strikethrough~~

## Quotes

"Double quotes" and 'single quotes'

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...

## References

An example containing a clickable reference[^1] with a link to the source.

Second example containing a reference[^2] with a link to the source.

[^1]: Reference first footnote with a return to content link.
[^2]: Second reference with a link.

If you check out this example in \`src/content/post/markdown-elements/index.md\`, you'll notice that the references and the heading "Footnotes" are added to the bottom of the page via the [remark-rehype](https://github.com/remarkjs/remark-rehype#options) plugin.

## Lists

Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
- Ac tristique libero volutpat at
- Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
    return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Images

Image in the same folder: \`https://dummyimage.com/512x512/000/fff\`

![Astro theme cactus logo](https://dummyimage.com/512x512/000/fff)

Image in the aliased assets folder: \`https://dummyimage.com/512x512/000/fff\`

![A cartoon cactus looking at the Astro.build logo](https://dummyimage.com/512x512/000/fff)

## Links

[Content from markdown-it](https://markdown-it.github.io/)`,
        `This is a H2 Heading
This is a H3 Heading
This is a H4 Heading
This is a H5 Heading
This is a H6 Heading
Horizontal Rules
Emphasis
This is bold text

This is italic text

Strikethrough

Quotes
"Double quotes" and 'single quotes'

Blockquotes
Blockquotes can also be nested...

...by using additional greater-than signs right next to each other...

References
An example containing a clickable reference[^1] with a link to the source.

Second example containing a reference[^2] with a link to the source.

[^1]: Reference first footnote with a return to content link.
[^2]: Second reference with a link.

If you check out this example in src/content/post/markdown-elements/index.md, you'll notice that the references and the heading "Footnotes" are added to the bottom of the page via the remark-rehype plugin.

Lists
Unordered

Create a list by starting a line with +, -, or *
Sub-lists are made by indenting 2 spaces:
Marker character change forces new list start:
Ac tristique libero volutpat at
Facilisis in pretium nisl aliquet
Nulla volutpat aliquam velit
Very easy!
Ordered

Lorem ipsum dolor sit amet

Consectetur adipiscing elit

Integer molestie lorem at massa

You can use sequential numbers...

...or keep all the numbers as 1.

Start numbering with offset:

foo
bar
Code
Inline code

Indented code

// Some comments
line 1 of code
line 2 of code
line 3 of code
Block code "fences"

Sample text here...
Syntax highlighting

var foo = function (bar) {
    return bar++;
};

console.log(foo(5));
Tables
Option	Description
data	path to data files to supply the data that will be passed into templates.
engine	engine to be used for processing templates. Handlebars is the default.
ext	extension to be used for dest files.
Right aligned columns

Option	Description
data	path to data files to supply the data that will be passed into templates.
engine	engine to be used for processing templates. Handlebars is the default.
ext	extension to be used for dest files.
Images
Image in the same folder: https://dummyimage.com/512x512/000/fff

Astro theme cactus logo

Image in the aliased assets folder: https://dummyimage.com/512x512/000/fff

A cartoon cactus looking at the Astro.build logo

Links
Content from markdown-it`,
        ['test', 'tag1', 'TAG2'],
        ['author1', 'AUTHOR2']
    ]);
    await newArticle(...[
        'Creating a SvelteKit project',
        '1',
        'public',
        'The easiest way to start building a SvelteKit app is to run npm create',
        'https://dummyimage.com/1920x1080/000/fff',
        `# create-svelte

Everything you need to build a Svelte project, powered by [\`create-svelte\`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

\`\`\`bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
\`\`\`

## Developing

Once you've created a project and installed dependencies with \`npm install\` (or \`pnpm install\` or \`yarn\`), start a development server:

\`\`\`bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
\`\`\`

## Building

To create a production version of your app:

\`\`\`bash
npm run build
\`\`\`

You can preview the production build with \`npm run preview\`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.`,
        `create-svelte
Everything you need to build a Svelte project, powered by create-svelte.

Creating a project
If you're seeing this, you've probably already done this step. Congrats!

# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
Developing
Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
Building
To create a production version of your app:

npm run build
You can preview the production build with npm run preview.

To deploy your app, you may need to install an adapter for your target environment.`,
        ['framework'],
        ['sveltejs']
    ]);
    console.log('init 1');
    await newArticle(...[
        'SQLite Node.js',
        '2',
        'public',
        'Learn how to interact with SQLite databases from a Node.js.',
        'https://dummyimage.com/600x400/000/fff',
        `# ⚙️ node-sqlite3

Asynchronous, non-blocking [SQLite3](https://sqlite.org/) bindings for [Node.js](http://nodejs.org/).

[![Latest release](https://img.shields.io/github/release/TryGhost/node-sqlite3.svg)](https://www.npmjs.com/package/sqlite3)
![Build Status](https://github.com/TryGhost/node-sqlite3/workflows/CI/badge.svg?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3?ref=badge_shield)
[![N-API v3 Badge](https://img.shields.io/badge/N--API-v3-green.svg)](https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api)
[![N-API v6 Badge](https://img.shields.io/badge/N--API-v6-green.svg)](https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api)

# Features

- Straightforward query and parameter binding interface
- Full Buffer/Blob support
- Extensive [debugging support](https://github.com/tryghost/node-sqlite3/wiki/Debugging)
- [Query serialization](https://github.com/tryghost/node-sqlite3/wiki/Control-Flow) API
- [Extension support](https://github.com/TryGhost/node-sqlite3/wiki/API#databaseloadextensionpath-callback), including bundled support for the [json1 extension](https://www.sqlite.org/json1.html)
- Big test suite
- Written in modern C++ and tested for memory leaks
- Bundles SQLite v3.42.0, or you can build using a local SQLite

# Installing

You can use [\`npm\`](https://github.com/npm/cli) or [\`yarn\`](https://github.com/yarnpkg/yarn) to install \`sqlite3\`:

* (recommended) Latest published package:
\`\`\`bash
npm install sqlite3
# or
yarn add sqlite3
\`\`\`
* GitHub's \`master\` branch: \`npm install https://github.com/tryghost/node-sqlite3/tarball/master\`

### Prebuilt binaries

\`sqlite3\` v5+ was rewritten to use [Node-API](https://nodejs.org/api/n-api.html) so prebuilt binaries do not need to be built for specific Node versions. \`sqlite3\` currently builds for both Node-API v3 and v6. Check the [Node-API version matrix](https://nodejs.org/api/n-api.html#node-api-version-matrix) to ensure your Node version supports one of these. The prebuilt binaries should be supported on Node v10+.

The module uses [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) to download the prebuilt binary for your platform, if it exists. These binaries are hosted on GitHub Releases for \`sqlite3\` versions above 5.0.2, and they are hosted on S3 otherwise. The following targets are currently provided:

Format: \`napi-v{napi_build_version}-{platform}-{libc}-{arch}\`

* \`napi-v3-darwin-unknown-arm64\`
* \`napi-v3-darwin-unknown-x64\`
* \`napi-v3-linux-glibc-arm64\`
* \`napi-v3-linux-glibc-x64\`
* \`napi-v3-linux-musl-arm64\`
* \`napi-v3-linux-musl-x64\`
* \`napi-v3-win32-unknown-ia32\`
* \`napi-v3-win32-unknown-x64\`
* \`napi-v6-darwin-unknown-arm64\`
* \`napi-v6-darwin-unknown-x64\`
* \`napi-v6-linux-glibc-arm64\`
* \`napi-v6-linux-glibc-x64\`
* \`napi-v6-linux-musl-arm64\`
* \`napi-v6-linux-musl-x64\`
* \`napi-v6-win32-unknown-ia32\`
* \`napi-v6-win32-unknown-x64\`

Unfortunately, [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) cannot differentiate between \`armv6\` and \`armv7\`, and instead uses \`arm\` as the \`{arch}\`. Until that is fixed, you will still need to install \`sqlite3\` from [source](#source-install).

Support for other platforms and architectures may be added in the future if CI supports building on them.

If your environment isn't supported, it'll use \`node-gyp\` to build SQLite but you will need to install a C++ compiler and linker.

### Other ways to install

It is also possible to make your own build of \`sqlite3\` from its source instead of its npm package ([See below.](#source-install)).

The \`sqlite3\` module also works with [node-webkit](https://github.com/rogerwang/node-webkit) if node-webkit contains a supported version of Node.js engine. [(See below.)](#building-for-node-webkit)

SQLite's [SQLCipher extension](https://github.com/sqlcipher/sqlcipher) is also supported. [(See below.)](#building-for-sqlcipher)

# API

See the [API documentation](https://github.com/TryGhost/node-sqlite3/wiki/API) in the wiki.

# Usage

**Note:** the module must be [installed](#installing) before use.

\`\`\` js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
\`\`\`

## Source install

To skip searching for pre-compiled binaries, and force a build from source, use

\`\`\`bash
npm install --build-from-source
\`\`\`

The sqlite3 module depends only on libsqlite3. However, by default, an internal/bundled copy of sqlite will be built and statically linked, so an externally installed sqlite3 is not required.

If you wish to install against an external sqlite then you need to pass the \`--sqlite\` argument to \`npm\` wrapper:

\`\`\`bash
npm install --build-from-source --sqlite=/usr/local
\`\`\`

If building against an external sqlite3 make sure to have the development headers available. Mac OS X ships with these by default. If you don't have them installed, install the \`-dev\` package with your package manager, e.g. \`apt-get install libsqlite3-dev\` for Debian/Ubuntu. Make sure that you have at least \`libsqlite3\` >= 3.6.

Note, if building against homebrew-installed sqlite on OS X you can do:

\`\`\`bash
npm install --build-from-source --sqlite=/usr/local/opt/sqlite/
\`\`\`

## Custom file header (magic)

The default sqlite file header is "SQLite format 3". You can specify a different magic, though this will make standard tools and libraries unable to work with your files.

\`\`\`bash
npm install --build-from-source --sqlite_magic="MyCustomMagic15"
\`\`\`

Note that the magic *must* be exactly 15 characters long (16 bytes including null terminator).

## Building for node-webkit

Because of ABI differences, \`sqlite3\` must be built in a custom to be used with [node-webkit](https://github.com/rogerwang/node-webkit).

To build \`sqlite3\` for node-webkit:

1. Install [\`nw-gyp\`](https://github.com/rogerwang/nw-gyp) globally: \`npm install nw-gyp -g\` *(unless already installed)*

2. Build the module with the custom flags of \`--runtime\`, \`--target_arch\`, and \`--target\`:

\`\`\`bash
NODE_WEBKIT_VERSION="0.8.6" # see latest version at https://github.com/rogerwang/node-webkit#downloads
npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
\`\`\`

This command internally calls out to [\`node-pre-gyp\`](https://github.com/mapbox/node-pre-gyp) which itself calls out to [\`nw-gyp\`](https://github.com/rogerwang/nw-gyp) when the \`--runtime=node-webkit\` option is passed.

You can also run this command from within a \`sqlite3\` checkout:

\`\`\`bash
npm install --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
\`\`\`

Remember the following:

* You must provide the right \`--target_arch\` flag. \`ia32\` is needed to target 32bit node-webkit builds, while \`x64\` will target 64bit node-webkit builds (if available for your platform).

* After the \`sqlite3\` package is built for node-webkit it cannot run in the vanilla Node.js (and vice versa).
    * For example, \`npm test\` of the node-webkit's package would fail.

Visit the “[Using Node modules](https://github.com/rogerwang/node-webkit/wiki/Using-Node-modules)” article in the node-webkit's wiki for more details.

## Building for SQLCipher

For instructions on building SQLCipher, see [Building SQLCipher for Node.js](https://coolaj86.com/articles/building-sqlcipher-for-node-js-on-raspberry-pi-2/). Alternatively, you can install it with your local package manager.

To run against SQLCipher, you need to compile \`sqlite3\` from source by passing build options like:

\`\`\`bash
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/

node -e 'require("sqlite3")'
\`\`\`

If your SQLCipher is installed in a custom location (if you compiled and installed it yourself), you'll need to set some environment variables:

### On OS X with Homebrew

Set the location where \`brew\` installed it:

\`\`\`bash
export LDFLAGS="-L\`brew --prefix\`/opt/sqlcipher/lib"
export CPPFLAGS="-I\`brew --prefix\`/opt/sqlcipher/include/sqlcipher"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\`

node -e 'require("sqlite3")'
\`\`\`

### On most Linuxes (including Raspberry Pi)

Set the location where \`make\` installed it:

\`\`\`bash
export LDFLAGS="-L/usr/local/lib"
export CPPFLAGS="-I/usr/local/include -I/usr/local/include/sqlcipher"
export CXXFLAGS="$CPPFLAGS"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/local --verbose

node -e 'require("sqlite3")'
\`\`\`

### Custom builds and Electron

Running \`sqlite3\` through [electron-rebuild](https://github.com/electron/electron-rebuild) does not preserve the SQLCipher extension, so some additional flags are needed to make this build Electron compatible. Your \`npm install sqlite3 --build-from-source\` command needs these additional flags (be sure to replace the target version with the current Electron version you are working with):

\`\`\`bash
--runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
\`\`\`

In the case of MacOS with Homebrew, the command should look like the following:

\`\`\`bash
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\` --runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
\`\`\`

# Testing

\`\`\`bash
npm test
\`\`\`

# Contributors

* [Daniel Lockyer](https://github.com/daniellockyer)
* [Konstantin Käfer](https://github.com/kkaefer)
* [Dane Springmeyer](https://github.com/springmeyer)
* [Will White](https://github.com/willwhite)
* [Orlando Vazquez](https://github.com/orlandov)
* [Artem Kustikov](https://github.com/artiz)
* [Eric Fredricksen](https://github.com/grumdrig)
* [John Wright](https://github.com/mrjjwright)
* [Ryan Dahl](https://github.com/ry)
* [Tom MacWright](https://github.com/tmcw)
* [Carter Thaxton](https://github.com/carter-thaxton)
* [Audrius Kažukauskas](https://github.com/audriusk)
* [Johannes Schauer](https://github.com/pyneo)
* [Mithgol](https://github.com/Mithgol)
* [Kewde](https://github.com/kewde)

# Acknowledgments

Thanks to [Orlando Vazquez](https://github.com/orlandov),
[Eric Fredricksen](https://github.com/grumdrig) and
[Ryan Dahl](https://github.com/ry) for their SQLite bindings for node, and to mraleph on Freenode's #v8 for answering questions.

This module was originally created by [Mapbox](https://mapbox.com/) & is now maintained by [Ghost](https://ghost.org).

# Changelog

We use [GitHub releases](https://github.com/TryGhost/node-sqlite3/releases) for notes on the latest versions. See [CHANGELOG.md](https://github.com/TryGhost/node-sqlite3/blob/b05f4594cf8b0de64743561fcd2cfe6f4571754d/CHANGELOG.md) in git history for details on older versions.

# License

\`node-sqlite3\` is [BSD licensed](https://github.com/tryghost/node-sqlite3/raw/master/LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3?ref=badge_large)`,
        `⚙️ node-sqlite3
Asynchronous, non-blocking SQLite3 bindings for Node.js.

Latest release
Build Status
FOSSA Status
N-API v3 Badge
N-API v6 Badge

Features
Straightforward query and parameter binding interface
Full Buffer/Blob support
Extensive debugging support
Query serialization API
Extension support, including bundled support for the json1 extension
Big test suite
Written in modern C++ and tested for memory leaks
Bundles SQLite v3.42.0, or you can build using a local SQLite
Installing
You can use npm or yarn to install sqlite3:

(recommended) Latest published package:
npm install sqlite3
# or
yarn add sqlite3
GitHub's master branch: npm install https://github.com/tryghost/node-sqlite3/tarball/master
Prebuilt binaries
sqlite3 v5+ was rewritten to use Node-API so prebuilt binaries do not need to be built for specific Node versions. sqlite3 currently builds for both Node-API v3 and v6. Check the Node-API version matrix to ensure your Node version supports one of these. The prebuilt binaries should be supported on Node v10+.

The module uses node-pre-gyp to download the prebuilt binary for your platform, if it exists. These binaries are hosted on GitHub Releases for sqlite3 versions above 5.0.2, and they are hosted on S3 otherwise. The following targets are currently provided:

Format: napi-v{napi_build_version}-{platform}-{libc}-{arch}

napi-v3-darwin-unknown-arm64
napi-v3-darwin-unknown-x64
napi-v3-linux-glibc-arm64
napi-v3-linux-glibc-x64
napi-v3-linux-musl-arm64
napi-v3-linux-musl-x64
napi-v3-win32-unknown-ia32
napi-v3-win32-unknown-x64
napi-v6-darwin-unknown-arm64
napi-v6-darwin-unknown-x64
napi-v6-linux-glibc-arm64
napi-v6-linux-glibc-x64
napi-v6-linux-musl-arm64
napi-v6-linux-musl-x64
napi-v6-win32-unknown-ia32
napi-v6-win32-unknown-x64
Unfortunately, node-pre-gyp cannot differentiate between armv6 and armv7, and instead uses arm as the {arch}. Until that is fixed, you will still need to install sqlite3 from source.

Support for other platforms and architectures may be added in the future if CI supports building on them.

If your environment isn't supported, it'll use node-gyp to build SQLite but you will need to install a C++ compiler and linker.

Other ways to install
It is also possible to make your own build of sqlite3 from its source instead of its npm package (See below.).

The sqlite3 module also works with node-webkit if node-webkit contains a supported version of Node.js engine. (See below.)

SQLite's SQLCipher extension is also supported. (See below.)

API
See the API documentation in the wiki.

Usage
Note: the module must be installed before use.

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
Source install
To skip searching for pre-compiled binaries, and force a build from source, use

npm install --build-from-source
The sqlite3 module depends only on libsqlite3. However, by default, an internal/bundled copy of sqlite will be built and statically linked, so an externally installed sqlite3 is not required.

If you wish to install against an external sqlite then you need to pass the --sqlite argument to npm wrapper:

npm install --build-from-source --sqlite=/usr/local
If building against an external sqlite3 make sure to have the development headers available. Mac OS X ships with these by default. If you don't have them installed, install the -dev package with your package manager, e.g. apt-get install libsqlite3-dev for Debian/Ubuntu. Make sure that you have at least libsqlite3 >= 3.6.

Note, if building against homebrew-installed sqlite on OS X you can do:

npm install --build-from-source --sqlite=/usr/local/opt/sqlite/
Custom file header (magic)
The default sqlite file header is "SQLite format 3". You can specify a different magic, though this will make standard tools and libraries unable to work with your files.

npm install --build-from-source --sqlite_magic="MyCustomMagic15"
Note that the magic must be exactly 15 characters long (16 bytes including null terminator).

Building for node-webkit
Because of ABI differences, sqlite3 must be built in a custom to be used with node-webkit.

To build sqlite3 for node-webkit:

Install nw-gyp globally: npm install nw-gyp -g (unless already installed)

Build the module with the custom flags of --runtime, --target_arch, and --target:

NODE_WEBKIT_VERSION="0.8.6" # see latest version at https://github.com/rogerwang/node-webkit#downloads
npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
This command internally calls out to node-pre-gyp which itself calls out to nw-gyp when the --runtime=node-webkit option is passed.

You can also run this command from within a sqlite3 checkout:

npm install --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
Remember the following:

You must provide the right --target_arch flag. ia32 is needed to target 32bit node-webkit builds, while x64 will target 64bit node-webkit builds (if available for your platform).

After the sqlite3 package is built for node-webkit it cannot run in the vanilla Node.js (and vice versa).

For example, npm test of the node-webkit's package would fail.
Visit the “Using Node modules” article in the node-webkit's wiki for more details.

Building for SQLCipher
For instructions on building SQLCipher, see Building SQLCipher for Node.js. Alternatively, you can install it with your local package manager.

To run against SQLCipher, you need to compile sqlite3 from source by passing build options like:

npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/

node -e 'require("sqlite3")'
If your SQLCipher is installed in a custom location (if you compiled and installed it yourself), you'll need to set some environment variables:

On OS X with Homebrew
Set the location where brew installed it:

export LDFLAGS="-L\`brew --prefix\`/opt/sqlcipher/lib"
export CPPFLAGS="-I\`brew --prefix\`/opt/sqlcipher/include/sqlcipher"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\`

node -e 'require("sqlite3")'
On most Linuxes (including Raspberry Pi)
Set the location where make installed it:

export LDFLAGS="-L/usr/local/lib"
export CPPFLAGS="-I/usr/local/include -I/usr/local/include/sqlcipher"
export CXXFLAGS="$CPPFLAGS"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/local --verbose

node -e 'require("sqlite3")'
Custom builds and Electron
Running sqlite3 through electron-rebuild does not preserve the SQLCipher extension, so some additional flags are needed to make this build Electron compatible. Your npm install sqlite3 --build-from-source command needs these additional flags (be sure to replace the target version with the current Electron version you are working with):

--runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
In the case of MacOS with Homebrew, the command should look like the following:

npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\` --runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
Testing
npm test
Contributors
Daniel Lockyer
Konstantin Käfer
Dane Springmeyer
Will White
Orlando Vazquez
Artem Kustikov
Eric Fredricksen
John Wright
Ryan Dahl
Tom MacWright
Carter Thaxton
Audrius Kažukauskas
Johannes Schauer
Mithgol
Kewde
Acknowledgments
Thanks to Orlando Vazquez,
Eric Fredricksen and
Ryan Dahl for their SQLite bindings for node, and to mraleph on Freenode's #v8 for answering questions.

This module was originally created by Mapbox & is now maintained by Ghost.

Changelog
We use GitHub releases for notes on the latest versions. See CHANGELOG.md in git history for details on older versions.

License
node-sqlite3 is BSD licensed.`,
        ['database'],
        ['TryGhost']
    ]);
    await newArticle(...[
        `!@#$%^&*()_+-=[];',./{}:"<>?.\`~`,
        '4',
        'public',
        `!@#$%^&*()_+-=[];',./{}:"<>?.\`~`,
        'https://dummyimage.com/1920x1080/000/fff',
        `!@#$%^&*()_+-=[];',./{}:"<>?.\`~`,
        `!@#$%^&*()_+-=[];',./{}:"<>?.\`~`,
        ['test', 'tag1', 'TAG2'],
        ['author1', 'AUTHOR2']
    ]);
    await newArticle(...[
        `asd`,
        '5',
        'public',
        `asd`,
        'https://dummyimage.com/1920x1080/000/fff',
        `asd`,
        `asd`,
        ['test', 'tag1', 'TAG2'],
        ['author1', 'AUTHOR2']
    ]);
    console.log('init 2');
}

const initQuery = [
    'DROP TABLE IF EXISTS article_author',
    'DROP TABLE IF EXISTS article_tag',
    'DROP TABLE IF EXISTS author',
    'DROP TABLE IF EXISTS tag',
    'DROP TABLE IF EXISTS article',
    `CREATE TABLE article (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    slug TEXT UNIQUE,
    status TEXT,
    summary TEXT,
    thumbnail TEXT,
    content TEXT,
    search_content TEXT,
    uploaded_at INTEGER,
    updated_at INTEGER
    );`,
    // `CREATE TABLE type (
    // id INTEGER PRIMARY KEY AUTOINCREMENT,
    // name TEXT UNIQUE
    // );`,
    // `CREATE TABLE article_type (
    // article_id INTEGER,
    // type_id INTEGER,
    // FOREIGN KEY(article_id) REFERENCES article(id),
    // FOREIGN KEY(type_id) REFERENCES type(id)
    // );`,
    // `CREATE TABLE category (
    // id INTEGER PRIMARY KEY AUTOINCREMENT,
    // name TEXT UNIQUE
    // );`,
    // `CREATE TABLE article_category (
    // article_id INTEGER,
    // category_id INTEGER,
    // FOREIGN KEY(article_id) REFERENCES article(id),
    // FOREIGN KEY(category_id) REFERENCES category(id)
    // );`,
    `CREATE TABLE tag (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
    );`,
    `CREATE TABLE article_tag (
    article_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY(article_id) REFERENCES article(id),
    FOREIGN KEY(tag_id) REFERENCES tag(id)
    );`,
    `CREATE TABLE author (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
    );`,
    `CREATE TABLE article_author (
    article_id INTEGER,
    author_id INTEGER,
    FOREIGN KEY(article_id) REFERENCES article(id),
    FOREIGN KEY(author_id) REFERENCES author(id)
    );`,
    `CREATE VIRTUAL TABLE article_fts USING fts5 (
        title,
        summary,
        search_content,
        content=article
    );`,
    `CREATE TRIGGER article_fts_insert AFTER INSERT ON article
    BEGIN
        INSERT INTO article_fts (rowid, title, summary, search_content) VALUES (new.rowid, new.title, new.summary, new.search_content);
    END;
    
    CREATE TRIGGER article_fts_delete AFTER DELETE ON article
    BEGIN
        INSERT INTO article_fts (article_fts, rowid, title, summary, search_content) VALUES ('delete', old.rowid, old.title, old.summary, old.search_content);
    END;
    
    CREATE TRIGGER article_fts_update AFTER UPDATE ON article
    BEGIN
        INSERT INTO article_fts (article_fts, rowid, title, summary, search_content) VALUES ('delete', old.rowid, old.title, old.summary, old.search_content);
        INSERT INTO article_fts (rowid, title, summary, search_content) VALUES (new.rowid, new.title, new.summary, new.search_content);
    END;`,
    // `INSERT INTO article (title,slug,status,summary,thumbnail,content,uploaded_at) VALUES (
    //   'Superconductor',
    //   'slug_0',
    //   'public',
    //   'summary_0',
    //   'https://upload.wikimedia.org/wikipedia/commons/0/05/LK-99_pellet.png',
    //   '> 1. Dramatically improved energy efficiency - Superconductors have zero electrical resistance, so energy could be transported without losses. This could revolutionize power grids, electronics, transportation, etc.
    // > 2. Faster computing - Superconducting materials can transmit information with no resistance or heat production, enabling faster computer processors. Quantum computing may also benefit.
    // > 3. More powerful magnets - Superconducting magnets are used in MRI machines, maglev trains, particle accelerators and fusion energy research. More powerful and cheaper magnets could be produced.
    // > 4. Lossless power transmission - Electrical power could be transmitted over long distances with no energy lost as heat. This could enable better power transmission efficiency.
    // > 5. Higher magnetic field strengths - Stronger magnetic fields could be created for applications in physics, materials science, imaging, etc. Fields are limited today partly due to superconductor limitations.
    // > 6. Compact particle accelerators - Higher magnetic fields would allow for more compact particle accelerators for physics research.
    // > 7. Cheaper medical imaging - MRI scanners and other imaging devices would become cheaper and more widespread if superconducting magnets were cheaper.
    // > 8. Quieter transportation - Maglev trains and electric ship propulsion could become more widespread without resistive losses.
    // 
    // [Bilibili user was able to get results that are consistent with the original paper about LK99 : r/singularity (reddit.com)](https://www.reddit.com/r/singularity/comments/15efhvy/comment/ju7nx19/)',
    //   '1692282361000'
    // );`,
    // `INSERT INTO article (title,slug,status,summary,thumbnail,content,uploaded_at) VALUES (
    //   'Showmaker explains K’Sante',
    //   'slug_1',
    //   'public',
    //   'summary_1',
    //   'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg',
    //   '> 체력 4700 방어력 329 마저201 인 챔피언👤이 저지불가🚫, 쉴드🛡, 벽🧱 넘기는 거 있고요. 에어본🌪 있고, 심지어 쿨타임은 1️⃣초밖에 안되고 마나🧙‍♂️는 1️⃣5️⃣ 들고 w는 심지어 변신💫하면 쿨 초기화에다가 패시브는 고정피해🗡가 들어가며 그 다음에 방마저🥋 올리면📈 올릴수록📈 스킬 가속⏰이 생기고! q에 스킬가속⏰이 생기고 스킬 속도🚀가 빨라지고📈 그 다음에 공격력🗡 계수가 있어가지고 W가 그 이익-으아아아악😱😱
    // 
    // > 4700 HP, 329 armor, 201 MR champion👤 has unstoppable🚫, shield 🛡, wall🧱 hopping abilities. Has an airborne 🌪, furthermore the cooldown is only 1️⃣ second mana🧙‍♂️ cost is 1️⃣5️⃣ then when he transforms 💫 w cooldown is refunded and passive deals true damage 🗡 and then for armor/mr 🥋 the more 📈 and more 📈 you stack, you get cdr ⏰! you get cdr⏰ on your q and the casting speed 🚀 gets faster 📈 and then he has an AD 🗡 ratio so his W is eek-AAAAAAAAAAAAAAAAAAAA😱😱
    // 
    // > 你說得對，但是這就是卡桑帝，🤔HP 4700，護甲 329，魔抗 201的英雄。有不可阻擋🤚，有護盾👌，還能過牆✌️。有控制🤙，甚至冷卻時間只有1秒✊，只要15點藍👍。轉換姿態時甚至可以刷新W的cd👈，還有✌️真實傷害。然後，護甲和魔抗提升後還能獲得技能加速👐，縮短Q的cd🙌，還縮短釋放時間😨，然後還有攻擊力😰。W就👊🏿😭👊🏿啊啊啊啊啊啊🖐️😭🤚
    // 
    // > 汝言是，則奎桑提，壽命長達四千七百餘，甲胄三百二十九，戲法抵抗二百有一。有不可禦，有護盾，猶能過牆。有製者，極則冷日止一秒，但十五點藍耳。轉勢相傾，更有甚者則為w武技之煥然一新，猶得其技速，縮十八丈餘，乃縮其積而釋之，則或擊其力，則有矣矣矣矣矣
    // 
    // > 你講得啱，呢個就係卡桑帝，🤔四千七百血，329物防，201魔防嘅英雄，有霸體✋，有盾👌，仲可以穿牆✌️。有CC🤙，甚至CD得1秒✊，只要15魔👍。轉Mode仲可以重置W嘅CD👈，仲有✌️真傷。然後，加左雙防之後仲有技能加速👐，減Q嘅CD🙌，放技仲快左😨，跟住仲有攻擊力😰，W就👊🏿😭👊🏿啊啊啊啊啊啊啊啊啊啊✋😭🤚',
    //   '1692282361000'
    // );`,
    // `INSERT INTO type (name) VALUES ('Article');`,
    // `INSERT INTO category (name) VALUES ('Academic');`,
    // `INSERT INTO category (name) VALUES ('Game');`,
    // `INSERT INTO tag (name) VALUES ('Science');`,
    // `INSERT INTO tag (name) VALUES ('Game');`,
    // `INSERT INTO tag (name) VALUES ('League of Legends');`,
    // `INSERT INTO author (name) VALUES ('Scientist A');`,
    // `INSERT INTO author (name) VALUES ('Viewer A');`,
    // `INSERT INTO author (name) VALUES ('Viewer B');`,
    // `INSERT INTO author (name) VALUES ('Viewer C');`,
    // `INSERT INTO author (name) VALUES ('Author B');`,
    // `INSERT INTO author (name) VALUES ('Author C');`,
    // `INSERT INTO article_type (article_id, type_id) VALUES (1, 1);`,
    // `INSERT INTO article_type (article_id, type_id) VALUES (2, 1);`,
    // `INSERT INTO article_category (article_id, category_id) VALUES (1, 1);`,
    // `INSERT INTO article_category (article_id, category_id) VALUES (2, 2);`,
    // `INSERT INTO article_tag (article_id, tag_id) VALUES (1, 1);`,
    // `INSERT INTO article_tag (article_id, tag_id) VALUES (2, 2);`,
    // `INSERT INTO article_tag (article_id, tag_id) VALUES (2, 3);`,
    // `INSERT INTO article_author (article_id, author_id) VALUES (1, 1);`,
    // `INSERT INTO article_author (article_id, author_id) VALUES (2, 2);`,
    // `INSERT INTO article_author (article_id, author_id) VALUES (2, 3);`,
    // `INSERT INTO article_author (article_id, author_id) VALUES (2, 4);`
];