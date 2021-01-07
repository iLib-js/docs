webpackJsonp([83696897134843],{1062:function(e,t){e.exports={data:{markdownRemark:{html:'<!--\n* Concept: Events\n  * Notification not data flow\n* Concept: React State Management\n  * Selection\n  * Navigation\n* Component: introduce spotlight + spottable\n  * explain how spottable works (onMouseOver, onMouseLeave, onClick, onKeyPress, mouse emulation)\n-->\n<p>In the <a href="../panels/">last step</a>, we focused on the app structure with Panels. Next, we’ll investigate how custom and native events are used to notify your app of user actions, how state is defined for the app, and how to use events to update the state of your app.  We’ll wrap up with a brief discussion on how to manage state data.</p>\n<h2 id="events-in-react"><a href="#events-in-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events in React</h2>\n<p><a href="https://facebook.github.io/react/docs/events.html">Native events in React</a> are registered using the camelCase version (<code class="language-text">onMouseDown</code>) of their native name (<code class="language-text">onmousedown</code>). If you wish to be notified of an event, you can pass a function as the value for the appropriate prop. The function will receive a synthetic event as its first argument, which is a cross-browser wrapper around the original event.</p>\n<p>React doesn’t provide an explicit implementation of custom events. In Enact, custom events follow React’s event name pattern of having an <code class="language-text">on</code> prefix followed by the name of the event. Like native events, custom events will receive the event payload as the first argument but it will be a simple object, not a synthetic event.</p>\n<h2 id="defining-our-state"><a href="#defining-our-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Defining our State</h2>\n<p>For our App, we have two pieces of state we need to manage: the active panel and the selected kitten. Both can be represented as numbers representing the index of the panel and the index of the kitten in <code class="language-text">kittens</code>. We will also define two custom events, <code class="language-text">onNavigate</code> and <code class="language-text">onSelectKitten</code>, that we can use to indicate when each of those indices should change.</p>\n<p><strong>./src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">\tpropTypes: {\n\t\tindex: PropTypes.number,\n\t\tkitten: PropTypes.number,\n\t\tonNavigate: PropTypes.func,\n\t\tonSelectKitten: PropTypes.func\n\t},\n\n\tdefaultProps: {\n\t\tindex: 0,\n\t\tkitten: 0\n\t},</code></pre>\n      </div>\n<p>We’ve also added default values for both indices. Including a default for <code class="language-text">kitten</code> isn’t necessary but makes our render logic a bit simpler by allowing us to assume a valid value before accessing the array.</p>\n<h2 id="connecting-our-events"><a href="#connecting-our-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Connecting our Events</h2>\n<p>With our events defined on the interface of <code class="language-text">App</code>, we need to pass them down the component tree and connect them to the native event that will ultimately trigger the action.</p>\n<p><strong>./src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">render: ({index, onNavigate, onSelectKitten, kitten, ...rest}) =&gt; (\n\t&lt;ActivityPanels {...rest} index={index} onSelectBreadcrumb={onNavigate}&gt;\n\t\t{/* omitted */}\n\t&lt;/ActivityPanels&gt;\n)</code></pre>\n      </div>\n<h3 id="selection"><a href="#selection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selection</h3>\n<p><code class="language-text">onSelectKitten</code> will eventually need to be connected to a <code class="language-text">Kitten</code> element that the user can select. Since those are contained within our <code class="language-text">List</code> view, we’ll have to pass it through to that component first. To start, we’ll add the handler to the <code class="language-text">List</code> component and then work down the component tree until we reach the target DOM node. We’ll also pass the selected kitten to our <code class="language-text">Detail</code> view</p>\n<p><strong>./src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">render: ({index, onNavigate, onSelectKitten, kitten, ...rest}) =&gt; (\n\t&lt;ActivityPanels {...rest} index={index} onSelectBreadcrumb={onNavigate}&gt;\n\t\t&lt;List onSelectKitten={onSelectKitten}&gt;{kittens}&lt;/List&gt;\n\t\t&lt;Detail name={kittens[kitten]} /&gt;\n\t&lt;/ActivityPanels&gt;\n)</code></pre>\n      </div>\n<p>We’re now passing a new property to List, so let’s define it properly on the component. As before, we’ll add a new entry to <code class="language-text">propTypes</code> that expects a function. Next, we’ll connect <code class="language-text">onSelectKitten</code> to each Kitten element using the <code class="language-text">itemProps</code> prop of Repeater. <code class="language-text">itemProps</code> allow us to pass a static set of props to each repeated component. In this case, we’ll define another new prop, <code class="language-text">onSelect</code>, which will be called when the Kitten is selected.</p>\n<p><strong>./src/views/List.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">\tpropTypes: {\n\t\tchildren: PropTypes.array,\n\t\tonSelectKitten: PropTypes.func\n\t},\n\n\trender: ({children, onSelectKitten, ...rest}) =&gt; (\n\t\t&lt;Panel {...rest}&gt;\n\t\t\t&lt;Header title=&quot;Kittens!&quot; /&gt;\n\t\t\t&lt;Repeater childComponent={Kitten} indexProp=&quot;index&quot; itemProps={{onSelect: onSelectKitten}}&gt;\n\t\t\t\t{children}\n\t\t\t&lt;/Repeater&gt;\n\t\t&lt;/Panel&gt;\n\t)</code></pre>\n      </div>\n<h3 id="custom-event-handlers"><a href="#custom-event-handlers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Event Handlers</h3>\n<p>Finally, we’ll define and connect <code class="language-text">onSelect</code> to the right DOM node in Kitten. The <code class="language-text">propType</code> is defined the same as before. This is the bottom of our custom component tree so we’ll connect our custom <code class="language-text">onSelect</code> event to <code class="language-text">onClick</code> on the root DOM element. However, the <code class="language-text">onClick</code> event will include a synthetic mouse event whereas we need <code class="language-text">onSelect</code> to indicate the <code class="language-text">index</code> of the Kitten selected. To adapt the DOM event to our custom event, we’ll add a handler using the <code class="language-text">handlers</code> block of <code class="language-text">kind()</code> that takes the <code class="language-text">onSelect</code> from props and calls it with the <code class="language-text">index</code>.</p>\n<p>The <code class="language-text">handlers</code> block maps handlers to props and allows you to define event handlers whose references are cached thereby preventing unnecessary re-renders when properties change. In this example, the handler function will be passed to the component’s <code class="language-text">render</code> method in the <code class="language-text">onCustomEvent</code> prop.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">handlers: {\n\tonCustomEvent: (ev, props, context) =&gt; {\n\t\t// process the event using props and context as necessary\n\t}\n}</code></pre>\n      </div>\n<p><strong>./src/components/Kitten/Kitten.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">propTypes: {\n\tchildren: PropTypes.string,\n\tindex: PropTypes.number,\n\tonSelect: PropTypes.func,\n\tsize: PropTypes.number\n},\n\ndefaultProps: { /* unchanged */ },\n\nstyles: { /* unchanged */ },\n\nhandlers: {\n\tonSelect: (ev, {index, onSelect}) =&gt; {\n\t\tif (onSelect) {\n\t\t\tonSelect({index});\n\t\t}\n\t}\n},\n\ncomputed: {\n\turl: ({index, size}) =&gt; {\n\t\treturn `//loremflickr.com/${size}/${size}/kitten?random=${index}`;\n\t}\n},\n\nrender: ({children, onSelect, url, ...rest}) =&gt; {\n\tdelete rest.index;\n\tdelete rest.size;\n\n\treturn (\n\t\t&lt;div {...rest} onClick={onSelect}&gt;\n\t\t\t&lt;img src={url} /&gt;\n\t\t\t&lt;div&gt;{children}&lt;/div&gt;\n\t\t&lt;/div&gt;\n\t);\n}</code></pre>\n      </div>\n<h3 id="adding-spotlight-support"><a href="#adding-spotlight-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Spotlight Support</h3>\n<p>In <a href="../../tutorial-hello-enact/">Hello, Enact!</a>, we <a href="../../tutorial-hello-enact/adding-moonstone-support/">introduced <code class="language-text">MoonstoneDecorator</code></a>, which adds the base support for Spotlight in an application. All of our Moonstone controls that should be spottable support Spotlight out of the box. If you’re creating a custom component, like we have in this example, you’ll have to add that support yourself. Fortunately, in most cases, you can add Spotlight support by wrapping your component with the <code class="language-text">Spottable</code> HOC.</p>\n<p><strong>./src/components/Kitten/Kitten.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import Spottable from &#39;@enact/spotlight/Spottable&#39;;\nconst KittenBase = kind({ /* ... */ });\nconst Kitten = Spottable(KittenBase);\n\nexport default Kitten;\nexport {Kitten, KittenBase};</code></pre>\n      </div>\n<p><code class="language-text">Spottable</code> works by adding a custom CSS class and key event handlers which must be applied to the root DOM node. The class <code class="language-text">spottable</code> is appended to the <code class="language-text">className</code> prop to make the DOM node discoverable by the <code class="language-text">@enact/spotlight</code> module. The event handlers, <code class="language-text">onKeyDown</code>, <code class="language-text">onKeyUp</code>, and <code class="language-text">onKeyPress</code>, allow <code class="language-text">@enact/spotlight</code> to support 5-way navigation between elements. These handlers are also injected to the props received by the component wrapped by <code class="language-text">Spottable</code>.</p>\n<p>These event handlers then must be attached to a DOM node in order for React to register the appropriate listeners. You can register them explicitly by setting each prop on the desired DOM node, but that tends to be a bit verbose.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">// applying each handler individually is repetitive\nrender: ({onKeyDown, onKeyUp, onKeyPress}) =&gt; (\n\t&lt;div onKeyDown={onKeyDown} onKeyUp={onKeyUp} onKeyPress={onKeyPress} /&gt;\n)</code></pre>\n      </div>\n<p>Instead, you’ll most often apply these using the <a href="../lists#rest-and-spread-operators">rest and spread operators</a>. Since we have already used those in the render method of Kitten, no additional work was required for spotlight.</p>\n<blockquote>\n<p><strong>Advanced</strong></p>\n<p>In most cases, wrapping a component with Spottable is sufficient to make it navigable and selectable. However, in the case of Kitten, it won’t be selectable because we’ve hijacked the <code class="language-text">onClick</code> handler for our custom <code class="language-text">onSelect</code> event. The current solution is to wrap the root element (<code class="language-text">&lt;div&gt;</code>) with Spottable instead of the component (<code class="language-text">Kitten</code>) but that is left as an exercise for the reader.</p>\n</blockquote>\n<h3 id="navigation"><a href="#navigation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Navigation</h3>\n<p><code class="language-text">onNavigate</code> is (mostly) simple because it will be passed to the <code class="language-text">onSelectBreadcrumb</code> event of our <code class="language-text">Panels</code> instance, which will handle the rest. The payload for the <code class="language-text">onSelectBreadcrumb</code> event is an object with a single member, <code class="language-text">index</code>, indicating the index of the panel the selected breadcrumb represents. In other words, when the user selects the breadcrumb for the List view, <code class="language-text">onSelectBreadcrumb</code> will be called with <code class="language-text">index</code> equal to 0.</p>\n<p>However, we do have one more requirement to handle: when a kitten is selected via <code class="language-text">onSelectKitten</code>, we also want to navigate to the <code class="language-text">Detail</code> view. In order to achieve this, we’ll add a new handler to call <code class="language-text">onSelectKitten</code> (adapted to use the <code class="language-text">kitten</code> property rather than <code class="language-text">index</code>) and <code class="language-text">onNavigate</code> with a fixed <code class="language-text">index</code> of <code class="language-text">1</code> indicating the <code class="language-text">Detail</code> view. Now, when the <code class="language-text">onSelectKitten</code> handler is called from <code class="language-text">List</code> (and ultimately <code class="language-text">Kitten</code>), it will invoke our new function which combines both selection and navigation.</p>\n<p><strong>./src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">handlers: {\n    onSelectKitten: (ev, {onNavigate, onSelectKitten}) =&gt; {\n        if (onSelectKitten) {\n            onSelectKitten({\n                kitten: ev.index\n            });\n        }\n\n        // navigate to the detail panel on selection\n        if (onNavigate) {\n            onNavigate({\n                index: 1\n            });\n        }\n    }\n},</code></pre>\n      </div>\n<h2 id="managing-state"><a href="#managing-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Managing State</h2>\n<p>The final step to connecting everything together is to add state management on top of our App that will provide the event handlers, update its internal state, and provide that state to our App as props. In larger apps, you’ll likely use <a href="http://redux.js.org/">Redux</a> to manage your state but for our simple app we’ll use React’s built-in state management.</p>\n<p>Enact ships with a set of configurable HOCs that can manage state for components. To keep things simple, we’ll use one of those HOCs, <code class="language-text">@enact/ui/Changeable</code>, to manage our <code class="language-text">index</code> and <code class="language-text">kitten</code> state properties.</p>\n<p><code class="language-text">Changeable</code> is designed to manage a single value via a single handler that updates the value. Both the property name and the handler name are configurable by passing an object to <code class="language-text">Changeable</code> as the first argument and your component as the second. Since we need to manage two properties, we’ll use two instances of <code class="language-text">Changeable</code> with unique configurations: one for <code class="language-text">index</code> and <code class="language-text">onNavigate</code> and one for <code class="language-text">kitten</code> and <code class="language-text">onSelectKitten</code>.</p>\n<p><strong>./src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import Changeable from &#39;@enact/ui/Changeable&#39;;\nconst AppBase = kind({ /* ... */ });\nconst App = Changeable({prop: &#39;index&#39;, change: &#39;onNavigate&#39;},\n\tChangeable({prop: &#39;kitten&#39;, change: &#39;onSelectKitten&#39;},\n\t\tMoonstoneDecorator(AppBase)\n\t)\n);</code></pre>\n      </div>\n<blockquote>\n<p>We wouldn’t normally recommend managing your App’s state this way but it’s an easy way to get started. More advanced discussion of application state, and in particular Redux, is out of scope for this tutorial.\nIf you would like to learn more about using Redux to manage application and component state, please see our <a href="../../../developer-guide/redux/redux-intro/">Introduction to Redux</a></p>\n</blockquote>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>If everything has gone smoothly, you should now have a working Enact Kitten Browser with state managed by the <code class="language-text">Changeable</code> HOCs flowing downstream via props and user actions flowing back upstream via events. This style of architecture will be useful as you build larger, more complex apps allowing you to decouple state and behavior from your components and views.</p>\n<p>Below is the complete source for each of files modified in this tutorial which may be useful to see how the changes introduced above should be integrated together.</p>\n<p><strong>src/App/App.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import {ActivityPanels} from &#39;@enact/moonstone/Panels&#39;;\nimport Changeable from &#39;@enact/ui/Changeable&#39;;\nimport kind from &#39;@enact/core/kind&#39;;\nimport MoonstoneDecorator from &#39;@enact/moonstone/MoonstoneDecorator&#39;;\nimport PropTypes from &#39;prop-types&#39;;\nimport React from &#39;react&#39;;\n\nimport Detail from &#39;../views/Detail&#39;;\nimport List from &#39;../views/List&#39;;\n\nconst kittens = [\n\t&#39;Garfield&#39;,\n\t&#39;Nermal&#39;,\n\t&#39;Simba&#39;,\n\t&#39;Nala&#39;,\n\t&#39;Tiger&#39;,\n\t&#39;Kitty&#39;\n];\n\nconst AppBase = kind({\n\tname: &#39;App&#39;,\n\n\tpropTypes: {\n\t\tindex: PropTypes.number,\n\t\tkitten: PropTypes.number,\n\t\tonNavigate: PropTypes.func,\n\t\tonSelectKitten: PropTypes.func\n\t},\n\n\tdefaultProps: {\n\t\tindex: 0,\n\t\tkitten: 0\n\t},\n\n\thandlers: {\n\t\tonSelectKitten: (ev, {onNavigate, onSelectKitten}) =&gt; {\n\t\t\tif (onSelectKitten) {\n\t\t\t\tonSelectKitten({\n\t\t\t\t\tkitten: ev.index\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// navigate to the detail panel on selection\n\t\t\tif (onNavigate) {\n\t\t\t\tonNavigate({\n\t\t\t\t\tindex: 1\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t},\n\n\trender: ({index, kitten, onNavigate, onSelectKitten, ...rest}) =&gt; (\n\t\t&lt;ActivityPanels {...rest} index={index} onSelectBreadcrumb={onNavigate}&gt;\n\t\t\t&lt;List onSelectKitten={onSelectKitten}&gt;{kittens}&lt;/List&gt;\n\t\t\t&lt;Detail name={kittens[kitten]} /&gt;\n\t\t&lt;/ActivityPanels&gt;\n\t)\n});\n\nconst App = Changeable({prop: &#39;index&#39;, change: &#39;onNavigate&#39;},\n\tChangeable({prop: &#39;kitten&#39;, change: &#39;onSelectKitten&#39;},\n\t\tMoonstoneDecorator(AppBase)\n\t)\n);\n\nexport default App;\nexport {App, AppBase};</code></pre>\n      </div>\n<p><strong>src/views/List.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import {Header, Panel} from &#39;@enact/moonstone/Panels&#39;;\nimport kind from &#39;@enact/core/kind&#39;;\nimport PropTypes from &#39;prop-types&#39;;\nimport React from &#39;react&#39;;\nimport Repeater from &#39;@enact/ui/Repeater&#39;;\n\nimport Kitten from &#39;../components/Kitten&#39;;\n\nconst ListBase = kind({\n\tname: &#39;List&#39;,\n\n\tpropTypes: {\n\t\tchildren: PropTypes.array,\n\t\tonSelectKitten: PropTypes.func\n\t},\n\n\trender: ({children, onSelectKitten, ...rest}) =&gt; (\n\t\t&lt;Panel {...rest}&gt;\n\t\t\t&lt;Header title=&quot;Kittens!&quot; /&gt;\n\t\t\t&lt;Repeater childComponent={Kitten} indexProp=&quot;index&quot; itemProps={{onSelect: onSelectKitten}}&gt;\n\t\t\t\t{children}\n\t\t\t&lt;/Repeater&gt;\n\t\t&lt;/Panel&gt;\n\t)\n});\n\nexport default ListBase;\nexport {ListBase as List, ListBase};</code></pre>\n      </div>\n<p><strong>src/components/Kitten/Kitten.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import kind from &#39;@enact/core/kind&#39;;\nimport React from &#39;react&#39;;\nimport Spottable from &#39;@enact/spotlight/Spottable&#39;;\nimport PropTypes from &#39;prop-types&#39;;\n\nimport css from &#39;./Kitten.less&#39;;\n\nconst KittenBase = kind({\n\tname: &#39;Kitten&#39;,\n\n\tpropTypes: {\n\t\tchildren: PropTypes.string,\n\t\tindex: PropTypes.number,\n\t\tonSelect: PropTypes.func,\n\t\tsize: PropTypes.number\n\t},\n\n\tdefaultProps: {\n\t\tsize: 300\n\t},\n\n\tstyles: {\n\t\tcss,\n\t\tclassName: &#39;kitten&#39;\n\t},\n\n\tcomputed: {\n\t\turl: ({index, size}) =&gt; {\n\t\t\treturn `//loremflickr.com/${size}/${size}/kitten?random=${index}`;\n\t\t}\n\t},\n\n\thandlers: {\n\t\tonSelect: (ev, {index, onSelect}) =&gt; {\n\t\t\tif (onSelect) {\n\t\t\t\tonSelect({index});\n\t\t\t}\n\t\t}\n\t},\n\n\trender: ({children, onSelect, url, ...rest}) =&gt; {\n\t\tdelete rest.index;\n\t\tdelete rest.size;\n\n\t\treturn (\n\t\t\t&lt;div {...rest} onClick={onSelect}&gt;\n\t\t\t\t&lt;img src={url} /&gt;\n\t\t\t\t&lt;div&gt;{children}&lt;/div&gt;\n\t\t\t&lt;/div&gt;\n\t\t);\n\t}\n});\n\nconst Kitten = Spottable(KittenBase);\n\nexport default Kitten;\nexport {Kitten, KittenBase};</code></pre>\n      </div>',frontmatter:{title:"State and Data Management",github:"https://github.com/enactjs/docs/blob/develop/src/pages/docs/tutorials/tutorial-kitten-browser/data-and-state/index.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/app-setup/"},frontmatter:{title:"App Setup"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/reusable-components/"},frontmatter:{title:"Reusable Components"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/lists/"},frontmatter:{title:"Repeaters and Lists"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/"},frontmatter:{title:"Kitten Browser"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/panels/"},frontmatter:{title:"Organizing Your App with Panels"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/data-and-state/"},frontmatter:{title:"State and Data Management"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/tutorials/tutorial-kitten-browser/data-and-state/",title:"State and Data Management",parentRegex:"/\\/docs\\/tutorials\\/tutorial-kitten-browser(\\/[^/]*)?\\/$/"}}}});