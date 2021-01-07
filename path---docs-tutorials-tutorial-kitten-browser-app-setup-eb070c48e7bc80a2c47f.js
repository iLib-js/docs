webpackJsonp([0x85f35340e432],{1061:function(t,e){t.exports={data:{markdownRemark:{html:'<!--\n* Concept: App Scaffolding\n* Concept: JSX - syntax and comments\n-->\n<p>To explore some more interesting features of ES6, React, and Enact, we’re going to pivot from our\n<a href="../../tutorial-hello-enact/">Hello, Enact!</a> app to a new app: Kitten Browser. In this step, we will setup the\nmodule and create the initial App component to lay the foundation for the rest of\nthe guide.</p>\n<blockquote>\n<p>We’ll use the placeholder image site <a href="http://loremflickr.com/">LoremFlickr</a> to source our images.\nIf you’re not a fan of kittens, you’re welcome to substitute a different keyword in the URLs.  No judgments.</p>\n</blockquote>\n<h3 id="directory-structure"><a href="#directory-structure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Directory Structure</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">+ App\n\t+ src\t\t\t\t\t\t&lt;-- All of our source code\n\t\t+ App\t\t\t\t\t&lt;-- The App component to be rendered into the DOM\n\t\t\t- App.js\n\t\t\t- package.json\n\t\t+ components\t\t\t&lt;-- Any reusable components for our App\n\t\t\t+ Kitten\n\t\t\t\tKitten.js\n\t\t\t\tKitten.less\n\t\t\t\tpackage.json\n\t\t+ views\t\t\t\t\t&lt;-- Composite components that make up a distinct view of the app\n\t\t\tDetail.js\n\t\t\tList.js\n\t\t- index.js\t\t\t\t&lt;-- The entry point for the module\n\t- package.json\t\t\t\t&lt;-- Module meta-data</code></pre>\n      </div>\n<h3 id="packagejson"><a href="#packagejson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>./package.json</h3>\n<p>Let’s give our module a name and establish its dependencies.  Edit <code class="language-text">package.json</code> and update the <code class="language-text">name</code> property.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">{\n  &quot;name&quot;: &quot;enact-tutorial-kitten-browser&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;description&quot;: &quot;A general template for an Enact Moonstone application.&quot;,\n  &quot;author&quot;: &quot;&quot;,\n  &quot;main&quot;: &quot;src/index.js&quot;,\n  &quot;scripts&quot;: { [omitted] },\n  &quot;license&quot;: &quot;UNLICENSED&quot;,\n  &quot;private&quot;: true,\t\n  &quot;repository&quot;: &quot;&quot;,\n  &quot;enact&quot;: {\n      &quot;theme&quot;: &quot;moonstone&quot;\n  },\n  &quot;eslintConfig&quot;: {\n      &quot;extends&quot;: &quot;enact&quot;\n  },\n  &quot;dependencies&quot;: { [omitted] }\n}</code></pre>\n      </div>\n<h3 id="srcindexjs"><a href="#srcindexjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>./src/index.js</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import React from &#39;react&#39;;\nimport {render} from &#39;react-dom&#39;;\n\nimport App from &#39;./App&#39;;\n\nlet appElement = (&lt;App /&gt;);\n\n// In a browser environment, render instead of exporting\nif (typeof window !== &#39;undefined&#39;) {\n\trender(\n\t\tappElement,\n\t\tdocument.getElementById(&#39;root&#39;) // provided by Enact&#39;s HTML template\n\t);\n}\n\nexport default appElement;</code></pre>\n      </div>\n<h2 id="app"><a href="#app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>App</h2>\n<h3 id="srcapppackagejson"><a href="#srcapppackagejson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>./src/App/package.json</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">{\n\t&quot;main&quot;: &quot;App.js&quot;\n}</code></pre>\n      </div>\n<h3 id="srcappappjs"><a href="#srcappappjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>./src/App/App.js</h3>\n<p>At this point, our app looks a lot like Hello, Enact!‘s <a href="../../tutorial-hello-enact/kind#srcappappjs">App.js</a>\nwith a couple small changes. We won’t need any custom CSS for our App component so we’ve removed that\n<code class="language-text">import</code>. We’ve also replaced the content with the basic markup for a single photo.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import kind from &#39;@enact/core/kind&#39;;\nimport MoonstoneDecorator from &#39;@enact/moonstone/MoonstoneDecorator&#39;;\nimport React from &#39;react&#39;;\n\nconst AppBase = kind({\n\tname: &#39;App&#39;,\n\n\trender: function (props) {\n\t\treturn (\n\t\t\t&lt;div className={props.className}&gt;\n\t\t\t\t&lt;div&gt;\n\t\t\t\t\t{/* For the feline-declined, you can replace the keyword below */}\n\t\t\t\t\t&lt;img src=&quot;//loremflickr.com/300/300/kitten&quot; /&gt;\n\t\t\t\t\t&lt;div&gt;Kitten&lt;/div&gt;\n\t\t\t\t&lt;/div&gt;\n\t\t\t&lt;/div&gt;\n\t\t);\n\t}\n});\n\nconst App = MoonstoneDecorator(AppBase);\n\nexport default App;\nexport {App, AppBase};</code></pre>\n      </div>\n<h4 id="jsx-hints"><a href="#jsx-hints" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Hints</h4>\n<p>You might be wondering why the <code class="language-text">&lt;img /&gt;</code> tag uses the self-closing syntax (<code class="language-text">/&gt;</code>). This is a\n<a href="https://facebook.github.io/react/tips/self-closing-tag.html">requirement imposed by JSX</a>, so\nwhenever you include an element that doesn’t have any children, you must either use the self-closing\nsyntax or explicitly close it (<code class="language-text">&lt;img src=&quot;&quot;&gt;&lt;/img&gt;</code>).</p>\n<p>Comments in your code are helpful and JSX is no different. <a href="https://facebook.github.io/react/docs/jsx-in-depth.html#comments">Comments in JSX</a>\nmust be within an <a href="https://facebook.github.io/react/docs/jsx-in-depth.html#javascript-expressions">expression</a> to be correctly\nparsed by the plugin.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>With the scaffolding in place, you should be able to fire up the Enact dev server and see\nKitten Browser in action:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm run serve</code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/KittenBrowser-Step1-4add2b5bb81c29b60aa35cb223865797-4323b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 325px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 111.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAE8ElEQVQ4y62UbUyVZRjHn/M85+V5zgsHDgcOnAMcQCFA8IC8Tc4hAUEPCchL5luCpc183VIGajMzbNr84HKSK7M2RBGm5UsvppvOqaRCa6Ms1gc3sy3XmtkqMob9us8BZutj9eH/3Hue577+9//6X9d1SzqdDlfydFIzS4hPyiXSU4grxY9mTcBkScRoSSbSkYorLp0Er4+NbVuYFVyEM7lIxPiJ8hYRm1WNM30WkqQTCD2MbhSzCIwvwplaTmrBEjw5jSRNKWDDmpW8vX83+3e1sXvHRrZt3cS8ppV07tvDlvZWXGkVxGY34Cl4SpDJIUIJnaRiMEQJdcVEp8zClVmDPWUuS+sqOfvOZm5cO8+FTwfo6u2hY0cHO19sZ+miJcQkFWNPKBXw485fiGIyjxNKOj1GzYXVlSdSKMOVWsGzCxvo2bOaM53tnPvoDFe+/I6eU+doXdVCcWEFJvs0rLHFRCZXET2lmpiMJ9DpjRMKZSMGc1z4NL09jwr/LC6fPMDw9bMMD1zk5je36R/6lo6OV3F7slCsPuxxASLiy7DGFOMtbSdyqiCUlb8RqnGojjy0yAw2rd/IF8O3uPvrGCMP4d4ovNdzmJkFfoz2fEHmx55YjcGSQ3zOcuKLWnFkLUbWmyYIdYLQFI1k8pKZnkv34V6+vnOfu/d/48HDMX4Q66bVG7CKA23Rhdg9VajRjwvP5+LOXYsz+zli8lYgyYYJDyUTimIXayQNwRqOdPcxePM2P438wYOxMS6cOk5uTimaowhr5HTMjgLMzhKhch6OlAU4MlqwpTWJWiiThKpQaUWWLDTPr6Wrq4frn33FyOgoo2N/Cj+PMcNXhtHmw2KfjhZVKLwrx+auxhxbic27ANU951HbSJImYA6vzTUV9B3q5PK1IX7+ZUSk+zs3+y8wO1CNpE/DHJGLFu1HjQpgii5HdVZidM5Ficj/J6EWTnvv1vUMdu9kaPAGd76/x6UrQ1x9v4vt655Hr2ViEhU22goxCOgj/OhtJchavmiZpMlJCRXFEia0qQ5OHNzHj8MD3Pq8n08++JADHVs4sHktA5evkJldKfYloFcz0RnS0SlThW9eMRhuASfj4kIPOQpZFyqKgZa6Gm6c6ebqyaP0HOnl9Y6XaV0Q5NLRN2hqWBEmlJVEscYJhEiiBOwTWUrjs6wzusSm2LCPURYnu9evZHiwn57uYxzvvciq+jr6Ol+hdfNrorWKUCx5IkaoVIQ6XbyIC8VGPCJUbI+hqFOFh6EfFjLSijn/8UVOH32Xp+cEmenzc+itg7S9tBcpshxjXBDZUYYsPNRpMwR5tiiYd5JQxiD6ymAXJ5szxQimi48O0ryZnDj0JhvWvSDePbStWcW27buQ3fNRk5/EmNSIPn4eiqMC2R5AZ542URSdjFHMpCWhBk1sUF1BVNFjkpRKVkYxp/tOUl//DE2z/bSvXoGa1ow5vQUtvRmj6D99TBDFWYVsyxsnDA10UlYFnqwa0vIbSfE14BX3W7pvPlEuH7W1i6lvXEZFoIS1y5cRP60eQ1ItpsQakXqVyK5UqAwgWyYUyuLGTvC4cblcxMY4ibDZsFotqKoJVdNEsfRhbwwGIxaLBaNJDV934TELI/RfmWxqJIPBQDAYpLy8nLKycurq6ggEApMG/xtImExCjaoKZVZsQqGmmf8b4f+JvwCPF8nXtCpMwgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Kitten Browser Step 1"\n        title=""\n        src="/static/KittenBrowser-Step1-4add2b5bb81c29b60aa35cb223865797-4323b.png"\n        srcset="/static/KittenBrowser-Step1-4add2b5bb81c29b60aa35cb223865797-ac1b5.png 173w,\n/static/KittenBrowser-Step1-4add2b5bb81c29b60aa35cb223865797-4323b.png 325w"\n        sizes="(max-width: 325px) 100vw, 325px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>Tell the kids to avert their eyes!</p>\n</blockquote>\n<p>In the Step 2 we’ll start to make our app more flexible and composable,\nas well as dive into another new feature of ES6: <code class="language-text">=&gt;</code> arrow functions.</p>\n<p><strong>Next step: <a href="../reusable-components/">Kitten Browser: Step 2</a></strong></p>',frontmatter:{title:"App Setup",github:"https://github.com/enactjs/docs/blob/develop/src/pages/docs/tutorials/tutorial-kitten-browser/app-setup/index.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/app-setup/"},frontmatter:{title:"App Setup"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/reusable-components/"},frontmatter:{title:"Reusable Components"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/lists/"},frontmatter:{title:"Repeaters and Lists"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/"},frontmatter:{title:"Kitten Browser"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/panels/"},frontmatter:{title:"Organizing Your App with Panels"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/data-and-state/"},frontmatter:{title:"State and Data Management"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/tutorials/tutorial-kitten-browser/app-setup/",title:"App Setup",parentRegex:"/\\/docs\\/tutorials\\/tutorial-kitten-browser(\\/[^/]*)?\\/$/"}}}});