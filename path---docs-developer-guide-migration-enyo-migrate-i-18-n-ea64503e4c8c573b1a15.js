webpackJsonp([0x631ef9c30bdc],{954:function(n,a){n.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n</nav>\n<h3 id="adding-base-internationalization-support"><a href="#adding-base-internationalization-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Base Internationalization Support</h3>\n<p>The <code class="language-text">I18nDecorator</code> is usually applied at the root level of an application and provides basic internationalization support to your application. It adds locale and text directionality CSS classes, provides automatic re-rendering when the locale changes via the <code class="language-text">onlanguagechange</code> event, and adds <a href="https://facebook.github.io/react/docs/context.html" title="React Context"><code class="language-text">context</code></a> parameters for downstream components to <a href="#updating-the-locale">update the locale</a> or <a href="#current-locale-text-directionality">determine the current text directionality</a>.</p>\n<blockquote>\n<p><strong>Note:</strong> <code class="language-text">MoonstoneDecorator</code> automatically applies <code class="language-text">I18nDecorator</code> by default but can be disabled by settings its <code class="language-text">i18n</code> config property to <code class="language-text">false</code>.</p>\n</blockquote>\n<h3 id="ilib-modules"><a href="#ilib-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ilib Modules</h3>\n<p><code class="language-text">ilib</code> modules are supplied with the <code class="language-text">i18n</code> library but can be imported using an <code class="language-text">enact cli</code> provided shortcut:</p>\n<p><strong>Previous:</strong> <code class="language-text">enyo-ilib/[MODULE_NAME]</code></p>\n<p><strong>Current:</strong> <code class="language-text">ilib/[MODULE_NAME]</code></p>\n<h3 id="string-translation"><a href="#string-translation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String translation</h3>\n<p><strong>Previous:</strong> <code class="language-text">$L()</code></p>\n<p><strong>Current:</strong> <code class="language-text">$L()</code></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> $<span class="token constant">L</span> <span class="token keyword">from</span> <span class="token string">\'@enact/i18n/$L\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyTranslatedString <span class="token operator">=</span> $<span class="token constant">L</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="string-translation---ilib-string"><a href="#string-translation---ilib-string" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String Translation - ilib string</h3>\n<p><strong>Previous:</strong> <code class="language-text">$L.rb()</code></p>\n<p><strong>Current:</strong> <code class="language-text">toIString()</code></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>toIString<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/i18n/$L\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyIString <span class="token operator">=</span> <span class="token function">toIString</span><span class="token punctuation">(</span><span class="token string">\'Hello IString\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MyIStringText <span class="token operator">=</span> MyIString<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="updating-the-locale"><a href="#updating-the-locale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Updating the locale</h3>\n<p><strong>Previous:</strong> The <code class="language-text">updateLocale()</code> method of the <code class="language-text">enyo/i18n</code> library could be invoked</p>\n<p><strong>Current:</strong> The <code class="language-text">updateLocale()</code> method is available for any component whose ancestor is wrapped with the <code class="language-text">I18nDecorator</code>, which provides this method as part of the <a href="https://reactjs.org/docs/context.html">Context API</a>. <code class="language-text">I18nDecorator</code> provides easy access via the <code class="language-text">I18nContextDecorator</code> HOC which can provide the locale, rtl state, and <code class="language-text">updateLocale</code> method via props by specifying the <code class="language-text">localeProp</code>, <code class="language-text">rtlProp</code>, and <code class="language-text">updateLocaleProp</code> configuration options, respectively.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@enact/moonstone/Button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>I18nContextDecorator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/i18n/I18nDecorator\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">I18nContextDecorator</span><span class="token punctuation">(</span>\n\t<span class="token punctuation">{</span>updateLocaleProp<span class="token operator">:</span> <span class="token string">\'updateLocale\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n\t\t<span class="token function-variable function">setLocale</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">locale</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">const</span> <span class="token punctuation">{</span>updateLocale<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\t\t\t<span class="token function">updateLocale</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\n\t\t<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t\t<span class="token operator">&lt;</span>div<span class="token operator">></span>\n\t\t\t\t\t<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'ar-SA\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>ar<span class="token operator">-</span><span class="token constant">SA</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\t\t\t\t\t<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>en<span class="token operator">-</span><span class="token constant">US</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\t\t\t\t\t<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'ko-KR\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>ko<span class="token operator">-</span><span class="token constant">KR</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\t\t\t\t\t<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'th-TH\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>th<span class="token operator">-</span><span class="token constant">TH</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\t\t\t\t<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="current-locale-text-directionality"><a href="#current-locale-text-directionality" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Current Locale Text Directionality</h3>\n<p><strong>Previous:</strong> Components could check the value of <code class="language-text">this.rtl</code></p>\n<p><strong>Current:</strong> The <code class="language-text">rtl</code> state method is available for any component whose ancestor is wrapped with the <code class="language-text">I18nDecorator</code>, which provides this value as part of the <a href="https://reactjs.org/docs/context.html">Context API</a>. <code class="language-text">I18nDecorator</code> provides easy access via the <code class="language-text">I18nContextDecorator</code> HOC which can provide the locale, rtl state, and <code class="language-text">updateLocale</code> method via props by specifying the <code class="language-text">localeProp</code>, <code class="language-text">rtlProp</code>, and <code class="language-text">updateLocaleProp</code> configuration options, respectively.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@enact/moonstone/Button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>I18nContextDecorator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/i18n/I18nDecorator\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">I18nContextDecorator</span><span class="token punctuation">(</span>\n\t<span class="token punctuation">{</span>rtlProp<span class="token operator">:</span> <span class="token string">\'rtl\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n\t\t<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">const</span> <span class="token punctuation">{</span>rtl<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n\t\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t\t<span class="token operator">&lt;</span>Button<span class="token operator">></span>My <span class="token punctuation">{</span>rtl <span class="token operator">?</span> <span class="token string">\'RTL\'</span> <span class="token operator">:</span> <span class="token string">\'LTR\'</span><span class="token punctuation">}</span> button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\t\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="determine-text-directionality"><a href="#determine-text-directionality" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Determine Text Directionality</h3>\n<p><strong>Previous:</strong> <code class="language-text">isRtl()</code> provided by <code class="language-text">enyo/utils</code></p>\n<p><strong>Current:</strong> <code class="language-text">isRtlText()</code> provided by <code class="language-text">@enact/i18n/util</code></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>isRtlText<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/i18n/util\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> isHebrewRtl <span class="token operator">=</span> <span class="token function">isRtlText</span><span class="token punctuation">(</span><span class="token string">\'שועל החום\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> isEnglishRtl <span class="token operator">=</span> <span class="token function">isRtlText</span><span class="token punctuation">(</span><span class="token string">\'LTR Text\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="i18n-classes"><a href="#i18n-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>i18n Classes</h3>\n<p><strong>Previous:</strong> <code class="language-text">enyo-locale-...</code></p>\n<p><strong>Current:</strong> <code class="language-text">enact-locale-...</code></p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.div .enact-locale-non-latin</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"Migrating i18n",github:"https://github.com/enactjs/enact/blob/develop/docs/migration/enyo/migrate-i18n.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrating-enyo-apps/"},frontmatter:{title:"Enyo Application Migration Guide"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/enyo-enact-component-map/"},frontmatter:{title:"Enyo to Enact Component Map"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-fittables/"},frontmatter:{title:"Migrating Enyo Fittables"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/"},frontmatter:{title:"Migrating from Enyo"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-i18n/"},frontmatter:{title:"Migrating i18n"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/developer-guide/migration/enyo/migrate-i18n/",title:"Migrating i18n",parentRegex:"/\\/docs\\/developer-guide\\/migration\\/enyo(\\/[^/]*)?\\/$/"}}}});