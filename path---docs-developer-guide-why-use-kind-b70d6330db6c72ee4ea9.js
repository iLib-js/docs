webpackJsonp([0x944577161cfc],{971:function(n,a){n.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n<ul>\n<li><a href="#what-does-it-do">What Does it Do?</a></li>\n<li><a href="#features">Features</a></li>\n<li><a href="#show-me-an-example">Show Me an Example</a></li>\n<li><a href="#what-are-the-downsides">What Are the Downsides?</a></li>\n<li><a href="#conclusion">Conclusion</a></li>\n</ul>\n</nav>\n<p>One question we hear a lot is:  What is the use of <code class="language-text">kind()</code> and why should I use it?  It is true\nthat <code class="language-text">kind()</code> is Enact specific and it is not a required feature. So, why does the Enact team use\nit and why should you consider it? The simple is answer is that it allows for more consistent and\nmore readable React components. There are many other features of <code class="language-text">kind()</code>, which will be\ndiscussed below, but we think that the key is reducing the mental load developers have in creating\nand maintaining components.</p>\n<h2 id="what-does-it-do"><a href="#what-does-it-do" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Does it Do?</h2>\n<p>The Enact <code class="language-text">kind()</code> method is a factory for creating components. The concept is simple enough: <code class="language-text">kind()</code>\ncreates a component that transforms <code class="language-text">props</code> and calls a <code class="language-text">render()</code> method to create the output\nmarkup. The initial configuration for the component is passed as an object and the return value is a\nregular React component that can be used anywhere.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<p>The main features of <code class="language-text">kind()</code> include:</p>\n<ul>\n<li>A centralized place to transform incoming props</li>\n<li>A way to create persistent event handlers</li>\n<li>A method for dealing with concatenating CSS classes, including user-supplied classes</li>\n<li>A consistent means for adding <code class="language-text">propTypes</code> and <code class="language-text">defaultProps</code></li>\n<li>A way to easily add a name to the component for debugging</li>\n</ul>\n<h2 id="show-me-an-example"><a href="#show-me-an-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Show Me an Example</h2>\n<p>Sure. Stateless Functional Components (SFC’s) are great and provide for an easy way to make React\ncomponents. Let’s look at a simple component:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">export default (props) =&gt; (\n\t&lt;div {...props}&gt;Hooray!&lt;/div&gt;\n);</code></pre>\n      </div>\n<p>This component is so simple that, if this were the imaginary world where things never change, there\nwould be no reason to convert this to <code class="language-text">kind()</code>. But, let’s do it anyhow:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> kind <span class="token keyword">from</span> <span class="token string">\'@enact/core/kind\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>It’s a little more verbose, but not too bad.</p>\n<p>Now, let’s say we want to cheer on a specific person. We’ll need to add a prop for that:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The <code class="language-text">kind()</code> conversion is pretty similar (we’re going to leave out the <code class="language-text">import</code> line for brevity):</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then, we get told we need to validate the type of <code class="language-text">name</code> so that we don’t get any funny data passed\nin. <code class="language-text">PropTypes</code> (import not shown) to the rescue:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Hooray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nHooray<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Hooray<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Not too bad yet. Let’s see what happens with the <code class="language-text">kind()</code> version:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tpropTypes<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We’re starting to save a little space here. Our next task is to fix up that ugly comma that gets\nleft if the name is not supplied. We have two approaches here: we could create a temporary name\nformatted like we want or we could drop a ternary into the jsx markup. Let’s go with the first to\nkeep our jsx as clean as possible:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Hooray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> formattedName <span class="token operator">=</span> name <span class="token operator">?</span> <span class="token string">\', \'</span> <span class="token operator">+</span> name <span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> <span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">{</span>formattedName<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nHooray<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Hooray<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Our simple little SFC is getting complicated. Let’s see what we could do with <code class="language-text">kind()</code>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tpropTypes<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tcomputed<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> name <span class="token operator">?</span> <span class="token string">\', \'</span> <span class="token operator">+</span> name <span class="token operator">:</span> <span class="token string">\'\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We’re using <code class="language-text">kind()</code>’s ability to transform the props before they are passed to <code class="language-text">render()</code> to\nrewrite <code class="language-text">name</code> so that our render method barely has to change. And, we’re keeping it clean so that\nmarkup is in one place and logic is in another. Neat!</p>\n<p>Next, we have to add a default <code class="language-text">className</code> to our component so we can get a little styling in there.\nBut, we also know that our consumer may want to pass in one, too. So, we’ll have to concatenate or\nuse an npm module like <a href="https://www.npmjs.com/package/classnames">classnames</a>. How’s it look now?\nLet’s see:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">\'classnames\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">\'./hooray.less\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Hooray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> className<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> formattedName <span class="token operator">=</span> name <span class="token operator">?</span> <span class="token string">\', \'</span> <span class="token operator">+</span> name <span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">(</span>css<span class="token punctuation">.</span>hooray<span class="token punctuation">,</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">{</span>formattedName<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nHooray<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Hooray<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>With <code class="language-text">kind()</code>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">\'./hooray.less\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tpropTypes<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tname<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tstyles<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tcss<span class="token punctuation">,</span>\n\t\tclassName<span class="token operator">:</span> <span class="token string">\'hooray\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tcomputed<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> name <span class="token operator">?</span> <span class="token string">\', \'</span> <span class="token operator">+</span> name <span class="token operator">:</span> <span class="token string">\'\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t\t<span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>Hooray<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Kind takes care of merging <code class="language-text">className</code> for us, there’s nothing to import. Nifty! There’s still more\nto discover with <code class="language-text">kind()</code>, such as the <code class="language-text">handlers</code> block, which caches event handlers so we don’t\nre-create them each time <code class="language-text">render()</code> is called and the <code class="language-text">name</code> member, which allows us to set a debug\nname for our component.</p>\n<blockquote>\n<p>Note: We used a little ES2015 shortcut (shorthand property names) to set the <code class="language-text">css</code> member in the\n<code class="language-text">styles</code> object to the <code class="language-text">css</code> import.</p>\n</blockquote>\n<h2 id="what-are-the-downsides"><a href="#what-are-the-downsides" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Are the Downsides?</h2>\n<p>Sadly, nothing is free in this world. There are some downsides to <code class="language-text">kind()</code> and it’s important to be\naware of them. First, there is some small overhead at app startup where the configuration is\nprocessed and the component is created. Second, there is some overhead during execution of the\nrender method, though we have worked very hard to keep this minimal. Third, you do not have access\nto React lifecycle methods with these components. If you do feel the need for this, it’s a fairly\nsimple matter to decompose a <code class="language-text">kind()</code> component into a <code class="language-text">React.Component</code>, or just wrap the kind with\none of the existing HOCs from the <code class="language-text">ui</code> library.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>For us, the upsides outweigh the downsides. We encourage you to check it out and see if it works for\nyou. It won’t hurt our feelings (promise!) if you don’t adopt it. But, if you do, we’d like to hear\nfrom you how we can make it better. And, keep in mind, that using this method provides us a single\npoint for future enhancements and performance improvements that can apply to an entire app all at\nonce!</p>',frontmatter:{title:"Why Use kind()?",github:"https://github.com/enactjs/enact/blob/develop/docs/why-use-kind.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/accessibility/"},frontmatter:{title:"Accessibility Support in Enact"}}},{node:{fields:{slug:"/docs/developer-guide/resources/"},frontmatter:{title:"Additional Developer Resources"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/"},frontmatter:{title:"Contribution Guide"}}},{node:{fields:{slug:"/docs/developer-guide/creating-components/"},frontmatter:{title:"Creating Components the Enact Way"}}},{node:{fields:{slug:"/docs/developer-guide/best-practices/"},frontmatter:{title:"Enact Best Practices"}}},{node:{fields:{slug:"/docs/developer-guide/performance/"},frontmatter:{title:"Enact Performance Guide"}}},{node:{fields:{slug:"/docs/developer-guide/glossary/"},frontmatter:{title:"Glossary"}}},{node:{fields:{slug:"/docs/developer-guide/migration/"},frontmatter:{title:"Migration Guides"}}},{node:{fields:{slug:"/docs/developer-guide/redux/"},frontmatter:{title:"Redux"}}},{node:{fields:{slug:"/docs/developer-guide/spotlight/"},frontmatter:{title:"Spotlight"}}},{node:{fields:{slug:"/docs/developer-guide/testing-components/"},frontmatter:{title:"Testing Your Components"}}},{node:{fields:{slug:"/docs/developer-guide/theming/"},frontmatter:{title:"Theming"}}},{node:{fields:{slug:"/docs/developer-guide/interoperability/"},frontmatter:{title:"Using Enact with Third-party Libraries"}}},{node:{fields:{slug:"/docs/developer-guide/why-use-kind/"},frontmatter:{title:"Why Use kind()?"}}},{node:{fields:{slug:"/docs/developer-guide/i18n/"},frontmatter:{title:"i18n (Internationalization)"}}},{node:{fields:{slug:"/docs/developer-guide/webos/"},frontmatter:{title:"webOS Support Module"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/developer-guide/why-use-kind/",title:"Why Use kind()?",parentRegex:"/\\/docs\\/developer-guide(\\/[^/]*)?\\/$/"}}}});