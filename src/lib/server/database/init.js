import { dbRun, newArticle, signup, newComment } from '.';

export const init = async () => {
    // for (let statement of initQuery) {
    await dbRun(initQuery);
    // }
    console.log('created table');
    await newArticle(
        ...[
            'HTML elements',
            '0',
            'public',
            'https://dummyimage.com/1920x1080/000/fff',
            `<h2 id="This is a H2 Heading" tabindex="-1">This is a H2 Heading</h2>
<h3 id="This is a H3 Heading" tabindex="-1">This is a H3 Heading</h3>
<h4 id="This is a H4 Heading" tabindex="-1">This is a H4 Heading</h4>
<h5 id="This is a H5 Heading" tabindex="-1">This is a H5 Heading</h5>
<h6 id="This is a H6 Heading" tabindex="-1">This is a H6 Heading</h6>
<h2 id="Horizontal Rules" tabindex="-1">Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2 id="Emphasis" tabindex="-1">Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><s>Strikethrough</s></p>
<h2 id="Quotes" tabindex="-1">Quotes</h2>
<p>"Double quotes" and 'single quotes'</p>
<h2 id="Blockquotes" tabindex="-1">Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using additional greater-than signs right next to each other...</p>
</blockquote>
</blockquote>
<h2 id="References" tabindex="-1">References</h2>
<p>An example containing a clickable reference[^1] with a link to the source.</p>
<p>Second example containing a reference[^2] with a link to the source.</p>
<p>[^1]: Reference first footnote with a return to content link.<br>
[^2]: Second reference with a link.</p>
<p>If you check out this example in <code>src/content/post/markdown-elements/index.md</code>, you'll notice that the references and the heading "Footnotes" are added to the bottom of the page via the <a href="https://github.com/remarkjs/remark-rehype#options">remark-rehype</a> plugin.</p>
<h2 id="Lists" tabindex="-1">Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:</li>
<li>Marker character change forces new list start:</li>
<li>Ac tristique libero volutpat at</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers...</p>
</li>
<li>
<p>...or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2 id="Code" tabindex="-1">Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre>
<p>Block code "fences"</p>
<pre><code>Sample text here...
</code></pre>
<p>Syntax highlighting</p>
<pre><code class="language-js">var foo = function (bar) {
    return bar++;
};

console.log(foo(5));
</code></pre>
<h2 id="Tables" tabindex="-1">Tables</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td>engine</td>
<td>engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td>ext</td>
<td>extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<p>Right aligned columns</p>
<table>
<thead>
<tr>
<th style="text-align:right">Option</th>
<th style="text-align:right">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">data</td>
<td style="text-align:right">path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td style="text-align:right">engine</td>
<td style="text-align:right">engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td style="text-align:right">ext</td>
<td style="text-align:right">extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<h2 id="Images" tabindex="-1">Images</h2>
<p>Image in the same folder: <code>https://dummyimage.com/512x512/000/fff</code></p>
<p><img src="https://dummyimage.com/512x512/000/fff" alt="Astro theme cactus logo"></p>
<p>Image in the aliased assets folder: <code>https://dummyimage.com/512x512/000/fff</code></p>
<p><img src="https://dummyimage.com/512x512/000/fff" alt="A cartoon cactus looking at the Astro.build logo"></p>
<h2 id="Links" tabindex="-1">Links</h2>
<p><a href="https://markdown-it.github.io/">Content from markdown-it</a></p>
            `,
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
        ]
    );
    await newArticle(
        ...[
            'Creating a SvelteKit project',
            '1',
            'public',
            'https://dummyimage.com/1920x1080/000/fff',
            `<h1 id="create-svelte" tabindex="-1">create-svelte</h1>
<p>Everything you need to build a Svelte project, powered by <a href="https://github.com/sveltejs/kit/tree/master/packages/create-svelte"><code>create-svelte</code></a>.</p>
<h2 id="Creating a project" tabindex="-1">Creating a project</h2>
<p>If you're seeing this, you've probably already done this step. Congrats!</p>
<pre><code class="language-bash"># create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
</code></pre>
<h2 id="Developing" tabindex="-1">Developing</h2>
<p>Once you've created a project and installed dependencies with <code>npm install</code> (or <code>pnpm install</code> or <code>yarn</code>), start a development server:</p>
<pre><code class="language-bash">npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
</code></pre>
<h2 id="Building" tabindex="-1">Building</h2>
<p>To create a production version of your app:</p>
<pre><code class="language-bash">npm run build
</code></pre>
<p>You can preview the production build with <code>npm run preview</code>.</p>
<blockquote>
<p>To deploy your app, you may need to install an <a href="https://kit.svelte.dev/docs/adapters">adapter</a> for your target environment.</p>
</blockquote>
            `,
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
        ]
    );
    console.log('init 1');
    await newArticle(
        ...[
            'SQLite Node.js',
            '2',
            'public',
            'https://dummyimage.com/600x400/000/fff',
            `<h1 id="⚙️ node-sqlite3" tabindex="-1">⚙️ node-sqlite3</h1>
<p>Asynchronous, non-blocking <a href="https://sqlite.org/">SQLite3</a> bindings for <a href="http://nodejs.org/">Node.js</a>.</p>
<p><a href="https://www.npmjs.com/package/sqlite3"><img src="https://img.shields.io/github/release/TryGhost/node-sqlite3.svg" alt="Latest release"></a><br>
<img src="https://github.com/TryGhost/node-sqlite3/workflows/CI/badge.svg?branch=master" alt="Build Status"><br>
<a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3?ref=badge_shield"><img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3.svg?type=shield" alt="FOSSA Status"></a><br>
<a href="https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api"><img src="https://img.shields.io/badge/N--API-v3-green.svg" alt="N-API v3 Badge"></a><br>
<a href="https://nodejs.org/dist/latest/docs/api/n-api.html#n_api_n_api"><img src="https://img.shields.io/badge/N--API-v6-green.svg" alt="N-API v6 Badge"></a></p>
<h1 id="Features" tabindex="-1">Features</h1>
<ul>
<li>Straightforward query and parameter binding interface</li>
<li>Full Buffer/Blob support</li>
<li>Extensive <a href="https://github.com/tryghost/node-sqlite3/wiki/Debugging">debugging support</a></li>
<li><a href="https://github.com/tryghost/node-sqlite3/wiki/Control-Flow">Query serialization</a> API</li>
<li><a href="https://github.com/TryGhost/node-sqlite3/wiki/API#databaseloadextensionpath-callback">Extension support</a>, including bundled support for the <a href="https://www.sqlite.org/json1.html">json1 extension</a></li>
<li>Big test suite</li>
<li>Written in modern C++ and tested for memory leaks</li>
<li>Bundles SQLite v3.42.0, or you can build using a local SQLite</li>
</ul>
<h1 id="Installing" tabindex="-1">Installing</h1>
<p>You can use <a href="https://github.com/npm/cli"><code>npm</code></a> or <a href="https://github.com/yarnpkg/yarn"><code>yarn</code></a> to&nbsp;install <code>sqlite3</code>:</p>
<ul>
<li>(recommended) Latest published package:</li>
</ul>
<pre><code class="language-bash">npm install sqlite3
# or
yarn add sqlite3
</code></pre>
<ul>
<li>GitHub's <code>master</code> branch: <code>npm install https://github.com/tryghost/node-sqlite3/tarball/master</code></li>
</ul>
<h3 id="Prebuilt binaries" tabindex="-1">Prebuilt binaries</h3>
<p><code>sqlite3</code> v5+ was rewritten to use <a href="https://nodejs.org/api/n-api.html">Node-API</a> so prebuilt binaries do not need to be built for specific Node versions. <code>sqlite3</code> currently builds for both Node-API v3 and v6. Check the <a href="https://nodejs.org/api/n-api.html#node-api-version-matrix">Node-API version matrix</a> to ensure your Node version supports one of these. The prebuilt binaries should be supported on Node v10+.</p>
<p>The module uses <a href="https://github.com/mapbox/node-pre-gyp">node-pre-gyp</a> to download the prebuilt binary for your platform, if it exists. These binaries are hosted on GitHub Releases for <code>sqlite3</code> versions above 5.0.2, and they are hosted on S3 otherwise. The following targets are currently provided:</p>
<p>Format: <code>napi-v{napi_build_version}-{platform}-{libc}-{arch}</code></p>
<ul>
<li><code>napi-v3-darwin-unknown-arm64</code></li>
<li><code>napi-v3-darwin-unknown-x64</code></li>
<li><code>napi-v3-linux-glibc-arm64</code></li>
<li><code>napi-v3-linux-glibc-x64</code></li>
<li><code>napi-v3-linux-musl-arm64</code></li>
<li><code>napi-v3-linux-musl-x64</code></li>
<li><code>napi-v3-win32-unknown-ia32</code></li>
<li><code>napi-v3-win32-unknown-x64</code></li>
<li><code>napi-v6-darwin-unknown-arm64</code></li>
<li><code>napi-v6-darwin-unknown-x64</code></li>
<li><code>napi-v6-linux-glibc-arm64</code></li>
<li><code>napi-v6-linux-glibc-x64</code></li>
<li><code>napi-v6-linux-musl-arm64</code></li>
<li><code>napi-v6-linux-musl-x64</code></li>
<li><code>napi-v6-win32-unknown-ia32</code></li>
<li><code>napi-v6-win32-unknown-x64</code></li>
</ul>
<p>Unfortunately, <a href="https://github.com/mapbox/node-pre-gyp">node-pre-gyp</a> cannot differentiate between <code>armv6</code> and <code>armv7</code>, and instead uses <code>arm</code> as the <code>{arch}</code>. Until that is fixed, you will still need to install <code>sqlite3</code> from <a href="#source-install">source</a>.</p>
<p>Support for other platforms and architectures may be added in the future if CI supports building on them.</p>
<p>If your environment isn't supported, it'll use <code>node-gyp</code> to build SQLite but you will need to install a C++ compiler and linker.</p>
<h3 id="Other ways to install" tabindex="-1">Other ways to install</h3>
<p>It is also possible to make your own build of <code>sqlite3</code> from&nbsp;its&nbsp;source instead&nbsp;of its&nbsp;npm&nbsp;package (<a href="#source-install">See&nbsp;below.</a>).</p>
<p>The <code>sqlite3</code> module also works with <a href="https://github.com/rogerwang/node-webkit">node-webkit</a> if&nbsp;node-webkit contains a&nbsp;supported version of&nbsp;Node.js engine. <a href="#building-for-node-webkit">(See&nbsp;below.)</a></p>
<p>SQLite's <a href="https://github.com/sqlcipher/sqlcipher">SQLCipher extension</a> is&nbsp;also supported. <a href="#building-for-sqlcipher">(See&nbsp;below.)</a></p>
<h1 id="API" tabindex="-1">API</h1>
<p>See the <a href="https://github.com/TryGhost/node-sqlite3/wiki/API">API documentation</a> in the wiki.</p>
<h1 id="Usage" tabindex="-1">Usage</h1>
<p><strong>Note:</strong> the&nbsp;module must&nbsp;be <a href="#installing">installed</a> before&nbsp;use.</p>
<pre><code class="language-js">const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() =&gt; {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i &lt; 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) =&gt; {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
</code></pre>
<h2 id="Source install" tabindex="-1">Source install</h2>
<p>To skip searching for pre-compiled binaries, and force a build from source, use</p>
<pre><code class="language-bash">npm install --build-from-source
</code></pre>
<p>The sqlite3 module depends only on libsqlite3. However, by default, an internal/bundled copy of sqlite will be built and statically linked, so an externally installed sqlite3 is not required.</p>
<p>If you wish to install against an external sqlite then you need to pass the <code>--sqlite</code> argument to <code>npm</code> wrapper:</p>
<pre><code class="language-bash">npm install --build-from-source --sqlite=/usr/local
</code></pre>
<p>If building against an external sqlite3 make sure to have the development headers available. Mac OS X ships with these by default. If you don't have them installed, install the <code>-dev</code> package with your package manager, e.g. <code>apt-get install libsqlite3-dev</code> for Debian/Ubuntu. Make sure that you have at least <code>libsqlite3</code> &gt;= 3.6.</p>
<p>Note, if building against homebrew-installed sqlite on OS X you can do:</p>
<pre><code class="language-bash">npm install --build-from-source --sqlite=/usr/local/opt/sqlite/
</code></pre>
<h2 id="Custom file header (magic)" tabindex="-1">Custom file header (magic)</h2>
<p>The default sqlite file header is "SQLite format 3". You can specify a different magic, though this will make standard tools and libraries unable to work with your files.</p>
<pre><code class="language-bash">npm install --build-from-source --sqlite_magic="MyCustomMagic15"
</code></pre>
<p>Note that the magic <em>must</em> be exactly 15 characters long (16 bytes including null terminator).</p>
<h2 id="Building for node-webkit" tabindex="-1">Building for node-webkit</h2>
<p>Because of ABI differences, <code>sqlite3</code> must be built in a custom to be&nbsp;used with&nbsp;<a href="https://github.com/rogerwang/node-webkit">node-webkit</a>.</p>
<p>To build <code>sqlite3</code> for node-webkit:</p>
<ol>
<li>
<p>Install <a href="https://github.com/rogerwang/nw-gyp"><code>nw-gyp</code></a> globally: <code>npm install nw-gyp -g</code> <em>(unless already installed)</em></p>
</li>
<li>
<p>Build the&nbsp;module with the custom flags of <code>--runtime</code>, <code>--target_arch</code>, and <code>--target</code>:</p>
</li>
</ol>
<pre><code class="language-bash">NODE_WEBKIT_VERSION="0.8.6" # see latest version at https://github.com/rogerwang/node-webkit#downloads
npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
</code></pre>
<p>This command internally calls out to <a href="https://github.com/mapbox/node-pre-gyp"><code>node-pre-gyp</code></a> which itself calls out to <a href="https://github.com/rogerwang/nw-gyp"><code>nw-gyp</code></a> when the <code>--runtime=node-webkit</code> option is passed.</p>
<p>You can also run this command from within a <code>sqlite3</code> checkout:</p>
<pre><code class="language-bash">npm install --build-from-source --runtime=node-webkit --target_arch=ia32 --target=$(NODE_WEBKIT_VERSION)
</code></pre>
<p>Remember the following:</p>
<ul>
<li>
<p>You must provide the right <code>--target_arch</code> flag. <code>ia32</code> is needed to target 32bit node-webkit builds, while <code>x64</code> will target 64bit node-webkit builds (if available for your platform).</p>
</li>
<li>
<p>After the <code>sqlite3</code> package is built for node-webkit it&nbsp;cannot run in&nbsp;the&nbsp;vanilla Node.js (and vice&nbsp;versa).</p>
<ul>
<li>For&nbsp;example, <code>npm test</code> of the&nbsp;node-webkit's package would&nbsp;fail.</li>
</ul>
</li>
</ul>
<p>Visit the “<a href="https://github.com/rogerwang/node-webkit/wiki/Using-Node-modules">Using Node modules</a>” article in&nbsp;the node-webkit's wiki for&nbsp;more&nbsp;details.</p>
<h2 id="Building for SQLCipher" tabindex="-1">Building for SQLCipher</h2>
<p>For instructions on building SQLCipher, see <a href="https://coolaj86.com/articles/building-sqlcipher-for-node-js-on-raspberry-pi-2/">Building SQLCipher for Node.js</a>. Alternatively, you can install it with your local package manager.</p>
<p>To run against SQLCipher, you need to compile <code>sqlite3</code> from source by passing build options like:</p>
<pre><code class="language-bash">npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/

node -e 'require("sqlite3")'
</code></pre>
<p>If your SQLCipher is installed in a custom location (if you compiled and installed it yourself), you'll need to set some environment variables:</p>
<h3 id="On OS X with Homebrew" tabindex="-1">On OS X with Homebrew</h3>
<p>Set the location where <code>brew</code> installed it:</p>
<pre><code class="language-bash">export LDFLAGS="-L\`brew --prefix\`/opt/sqlcipher/lib"
export CPPFLAGS="-I\`brew --prefix\`/opt/sqlcipher/include/sqlcipher"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\`

node -e 'require("sqlite3")'
</code></pre>
<h3 id="On most Linuxes (including Raspberry Pi)" tabindex="-1">On most Linuxes (including Raspberry Pi)</h3>
<p>Set the location where <code>make</code> installed it:</p>
<pre><code class="language-bash">export LDFLAGS="-L/usr/local/lib"
export CPPFLAGS="-I/usr/local/include -I/usr/local/include/sqlcipher"
export CXXFLAGS="$CPPFLAGS"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/local --verbose

node -e 'require("sqlite3")'
</code></pre>
<h3 id="Custom builds and Electron" tabindex="-1">Custom builds and Electron</h3>
<p>Running <code>sqlite3</code> through <a href="https://github.com/electron/electron-rebuild">electron-rebuild</a> does not preserve the SQLCipher extension, so some additional flags are needed to make this build Electron compatible. Your <code>npm install sqlite3 --build-from-source</code> command needs these additional flags (be sure to replace the target version with the current Electron version you are working with):</p>
<pre><code class="language-bash">--runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
</code></pre>
<p>In the case of MacOS with Homebrew, the command should look like the following:</p>
<pre><code class="language-bash">npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=\`brew --prefix\` --runtime=electron --target=18.2.1 --dist-url=https://electronjs.org/headers
</code></pre>
<h1 id="Testing" tabindex="-1">Testing</h1>
<pre><code class="language-bash">npm test
</code></pre>
<h1 id="Contributors" tabindex="-1">Contributors</h1>
<ul>
<li><a href="https://github.com/daniellockyer">Daniel Lockyer</a></li>
<li><a href="https://github.com/kkaefer">Konstantin Käfer</a></li>
<li><a href="https://github.com/springmeyer">Dane Springmeyer</a></li>
<li><a href="https://github.com/willwhite">Will White</a></li>
<li><a href="https://github.com/orlandov">Orlando Vazquez</a></li>
<li><a href="https://github.com/artiz">Artem Kustikov</a></li>
<li><a href="https://github.com/grumdrig">Eric Fredricksen</a></li>
<li><a href="https://github.com/mrjjwright">John Wright</a></li>
<li><a href="https://github.com/ry">Ryan Dahl</a></li>
<li><a href="https://github.com/tmcw">Tom MacWright</a></li>
<li><a href="https://github.com/carter-thaxton">Carter Thaxton</a></li>
<li><a href="https://github.com/audriusk">Audrius Kažukauskas</a></li>
<li><a href="https://github.com/pyneo">Johannes Schauer</a></li>
<li><a href="https://github.com/Mithgol">Mithgol</a></li>
<li><a href="https://github.com/kewde">Kewde</a></li>
</ul>
<h1 id="Acknowledgments" tabindex="-1">Acknowledgments</h1>
<p>Thanks to <a href="https://github.com/orlandov">Orlando Vazquez</a>,<br>
<a href="https://github.com/grumdrig">Eric Fredricksen</a> and<br>
<a href="https://github.com/ry">Ryan Dahl</a> for their SQLite bindings for node, and to mraleph on Freenode's #v8 for answering questions.</p>
<p>This module was originally created by <a href="https://mapbox.com/">Mapbox</a> &amp; is now maintained by <a href="https://ghost.org">Ghost</a>.</p>
<h1 id="Changelog" tabindex="-1">Changelog</h1>
<p>We use <a href="https://github.com/TryGhost/node-sqlite3/releases">GitHub releases</a> for notes on the latest versions. See <a href="https://github.com/TryGhost/node-sqlite3/blob/b05f4594cf8b0de64743561fcd2cfe6f4571754d/CHANGELOG.md">CHANGELOG.md</a> in git history for details on older versions.</p>
<h1 id="License" tabindex="-1">License</h1>
<p><code>node-sqlite3</code> is <a href="https://github.com/tryghost/node-sqlite3/raw/master/LICENSE">BSD licensed</a>.</p>
<p><a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3?ref=badge_large"><img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmapbox%2Fnode-sqlite3.svg?type=large" alt="FOSSA Status"></a></p>
            `,
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
        ]
    );
    await newArticle(...[`!@#$%^&*()_+-=[];',./{}:"<>?.\`~\\`, '4', 'public', 'https://dummyimage.com/1920x1080/000/fff', `!@#$%^&*()_+-=[];',./{}:"<>?.\`~\\`, `!@#$%^&*()_+-=[];',./{}:"<>?.\`~\\`, ['test', 'tag1', 'TAG2', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8'], ['author1', 'AUTHOR2']]);
    await newArticle(...[`Article title`, '5', 'public', 'https://dummyimage.com/1920x1080/000/fff', `article content`, `article content for search`, ['test', 'Just Chatting', 'League of Legends', 'Apex Legends'], ['author1', 'AUTHOR2']]);
    // await dbRun([`select tag.id
    //     from tag
    //     where tag.name in ('database')`]);
    // await dbRun([`select article_tag.article_id
    //     from article_tag
    //     where article_tag.tag_id in (select tag.id
    //     from tag
    //     where tag.name in ('database'))`]);
    // await dbRun([`SELECT title from article where article.id in(select article_tag.article_id
    //     from article_tag
    //     where article_tag.tag_id in (select tag.id
    //     from tag
    //     where tag.name in ('database')))`]);
    await newComment({
        articleId: 4,
        userId: 1,
        content: 'comment 1',
        createdAt: Date.now(),
    });
    await newComment({
        articleId: 4,
        userId: 1,
        content: 'comment 2',
        createdAt: Date.now(),
    });
    await newComment({
        articleId: 4,
        userId: 1,
        content: 'comment 3',
        createdAt: Date.now(),
    });
    await signup({
        username: 'user 1',
        hash: '123'
    });
    console.log('init 2');
};

const initQuery = [
    'DROP TABLE IF EXISTS article_author',
    'DROP TABLE IF EXISTS article_tag',
    'DROP TABLE IF EXISTS author',
    'DROP TABLE IF EXISTS tag',
    'DROP TABLE IF EXISTS article',
    'DROP TABLE IF EXISTS user',
    'DROP TABLE IF EXISTS comment',
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
    `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        role TEXT,
        hash TEXT
    );`,
    `CREATE TABLE comment (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        article_id INTEGER,
        user_id INTEGER,
        content TEXT,
        created_at INTEGER,
        FOREIGN KEY(article_id) REFERENCES article(id),
        FOREIGN KEY(user_id) REFERENCES user(id)
    );`,
    `CREATE TABLE login_session (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        session_id TEXT UNIQUE,
        timestamp INTEGER,
        FOREIGN KEY(user_id) REFERENCES user(id)
    );`
    // `CREATE TABLE article_comment (
    //     article_id INTEGER,
    //     comment_id INTEGER,
    //     FOREIGN KEY(article_id) REFERENCES article(id),
    //     FOREIGN KEY(comment_id) REFERENCES comment(id)
    //     );`
    // `CREATE VIRTUAL TABLE article_fts USING fts5 (
    //     title,
    //     summary,
    //     search_content,
    //     content=article
    // );`,
    // `CREATE TRIGGER article_fts_insert AFTER INSERT ON article
    // BEGIN
    //     INSERT INTO article_fts (rowid, title, summary, search_content) VALUES (new.rowid, new.title, new.summary, new.search_content);
    // END;
    // 
    // CREATE TRIGGER article_fts_delete AFTER DELETE ON article
    // BEGIN
    //     INSERT INTO article_fts (article_fts, rowid, title, summary, search_content) VALUES ('delete', old.rowid, old.title, old.summary, old.search_content);
    // END;
    // 
    // CREATE TRIGGER article_fts_update AFTER UPDATE ON article
    // BEGIN
    //     INSERT INTO article_fts (article_fts, rowid, title, summary, search_content) VALUES ('delete', old.rowid, old.title, old.summary, old.search_content);
    //     INSERT INTO article_fts (rowid, title, summary, search_content) VALUES (new.rowid, new.title, new.summary, new.search_content);
    // END;`
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
