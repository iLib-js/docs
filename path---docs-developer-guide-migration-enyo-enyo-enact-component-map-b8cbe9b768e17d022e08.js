webpackJsonp([20493006747969],{952:function(t,e){t.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n</nav>\n<blockquote>\n<p><strong>Enact version</strong>: 1.0.0</p>\n</blockquote>\n<h3 id="utilities"><a href="#utilities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Utilities</h3>\n<table>\n<thead>\n<tr>\n<th align="center">Enyo</th>\n<th align="center">Enact</th>\n<th align="right">Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><code class="language-text">animation</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Transition</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">dispatcher</code></td>\n<td align="center"><code class="language-text">@enact/core/dispatcher</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">dom</code></td>\n<td align="center"></td>\n<td align="right">not required</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">hooks</code></td>\n<td align="center"></td>\n<td align="right">not required</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">jobs</code></td>\n<td align="center"><code class="language-text">Job</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/core</code>\n module</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">json</code></td>\n<td align="center"></td>\n<td align="right">not required</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">resolution</code></td>\n<td align="center"><code class="language-text">resolution</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/ui</code>\n module</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">utils</code></td>\n<td align="center">various</td>\n<td align="right">spread among \n<code class="language-text">@enact/core</code>\n and \n<code class="language-text">@enact/i18n</code>\n modules</td>\n</tr>\n</tbody>\n</table>\n<h3 id="core-components"><a href="#core-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Core Components</h3>\n<table>\n<thead>\n<tr>\n<th align="center">Enyo</th>\n<th align="center">Enact</th>\n<th align="right">Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><code class="language-text">Application</code></td>\n<td align="center"></td>\n<td align="right">not required (index.js + root element = application)</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Animator</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Transition</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Audio</code></td>\n<td align="center">*</td>\n<td align="right">under review</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Collection</code></td>\n<td align="center">use React state management/Redux</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DataRepeater</code></td>\n<td align="center"><code class="language-text">Repeater</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Model</code></td>\n<td align="center">use React state management/Redux</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">NewDataList</code></td>\n<td align="center"><code class="language-text">VirtualList</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Signals</code></td>\n<td align="center"><code class="language-text">@enact/core/dispatcher</code>\n (provides \n<code class="language-text">on()</code>\n, \n<code class="language-text">off()</code>\n, and \n<code class="language-text">once()</code>\n methods)</td>\n<td align="right"></td>\n</tr>\n</tbody>\n</table>\n<h3 id="layout-components"><a href="#layout-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Layout Components</h3>\n<table>\n<thead>\n<tr>\n<th align="center">Enyo</th>\n<th align="center">Enact</th>\n<th align="right">Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><code class="language-text">Fittable*</code></td>\n<td align="center">use CSS (i.e. flexbox)</td>\n<td align="right"></td>\n</tr>\n</tbody>\n</table>\n<h3 id="moonstone-components"><a href="#moonstone-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Moonstone Components</h3>\n<blockquote>\n<p><strong>Note</strong>: <code class="language-text">@enact/moonstone</code> is not an identical match to Enyo Moonstone, and we are not aiming for 100% feature equivalence.\nWe are trying to make smart decisions about the features and components that were not used (or rarely used) and are easily\nimplemented at the application level.  Please refer to the documentation for each <code class="language-text">@enact/moonstone</code> component to get details on\nhow to use it.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th align="center">Enyo</th>\n<th align="center">Enact</th>\n<th align="right">Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><code class="language-text">Accordion</code></td>\n<td align="center"><code class="language-text">ExpandableItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">AnimatedButton</code></td>\n<td align="center"></td>\n<td align="right">deprecated</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ApplicationCloseButton</code></td>\n<td align="center"><code class="language-text">ApplicationCloseButton</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/Panels</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">AudioPlayback</code></td>\n<td align="center"></td>\n<td align="right">previously work-in-progress (WIP)/unused</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">BodyText</code></td>\n<td align="center"><code class="language-text">BodyText</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">BreadCrumbArranger</code></td>\n<td align="center"><code class="language-text">BreadCrumbArranger</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/Panels</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Button</code></td>\n<td align="center"><code class="language-text">Button</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Calendar</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">CaptionDecorator</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ChannelInfo</code></td>\n<td align="center"></td>\n<td align="right">deprecated</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Checkbox</code></td>\n<td align="center"><code class="language-text">Checkbox</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">CheckboxItem</code></td>\n<td align="center"><code class="language-text">CheckboxItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ClampedText</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Clock</code></td>\n<td align="center">*</td>\n<td align="right">under review</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ContextualPopup</code></td>\n<td align="center"><code class="language-text">ContextualPopup</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/ContextualPopupDecorator</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ContextualPopupButton</code></td>\n<td align="center"></td>\n<td align="right">deprecated</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ContextualPopupDecorator</code></td>\n<td align="center"><code class="language-text">ContextualPopupDecorator</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DataGridList</code></td>\n<td align="center"><code class="language-text">VirtualGridList</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DataList</code></td>\n<td align="center"><code class="language-text">VirtualList</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DataTable</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DatePicker</code></td>\n<td align="center"><code class="language-text">DatePicker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">DayPicker</code></td>\n<td align="center"><code class="language-text">DayPicker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Dialog</code></td>\n<td align="center"><code class="language-text">Dialog</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Divider</code></td>\n<td align="center"><code class="language-text">Divider</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Drawers</code></td>\n<td align="center">*</td>\n<td align="right">under review</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandableDataPicker</code></td>\n<td align="center"><code class="language-text">ExpandableList</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandableInput</code></td>\n<td align="center"><code class="language-text">ExpandableInput</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandableIntegerPicker</code></td>\n<td align="center"><code class="language-text">ExpandablePicker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandableListItem</code></td>\n<td align="center"><code class="language-text">ExpandableItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandablePicker</code></td>\n<td align="center"><code class="language-text">ExpandableList</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ExpandableText</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">FormCheckbox</code></td>\n<td align="center">*</td>\n<td align="right">under review</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">GridListImageItem</code></td>\n<td align="center"><code class="language-text">GridListImageItem</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/VirtualList</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Header</code></td>\n<td align="center"><code class="language-text">Header</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/Panels</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">HighlightText</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">History</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Cancelable</code>\n HOC for history-type activities</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">HistorySupport</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Cancelable</code>\n HOC for history-type activities</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Icon</code></td>\n<td align="center"><code class="language-text">Icon</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">IconButton</code></td>\n<td align="center"><code class="language-text">IconButton</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Image</code></td>\n<td align="center"><code class="language-text">Image</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ImageItem</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Input</code></td>\n<td align="center"><code class="language-text">Input</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">InputDecorator</code></td>\n<td align="center"></td>\n<td align="right">deprecated; decorator functionality is now part of \n<code class="language-text">@enact/moonstone/Input</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">IntegerPicker</code></td>\n<td align="center"><code class="language-text">RangePicker</code>\n with \n<code class="language-text">orientation: vertical</code>\n and \n<code class="language-text">vertical: true</code></td>\n<td align="right">internal usage\n<sup>\n2\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Item</code></td>\n<td align="center"><code class="language-text">Item</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ItemOverlay</code></td>\n<td align="center"><code class="language-text">ItemOverlay</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/Item</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">LabeledTextItem</code></td>\n<td align="center"><code class="language-text">LabeledItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">LightPanels</code></td>\n<td align="center"><code class="language-text">ViewManager</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ListActions</code></td>\n<td align="center">use \n<code class="language-text">@enact/moonstone/IconButton</code>\n and \n<code class="language-text">@enact/moonstone/ContextualPopupDecorator</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Marquee</code></td>\n<td align="center"><code class="language-text">Marquee</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">MoonAnimator</code></td>\n<td align="center"></td>\n<td align="right">unwanted\n<sup>\n3\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">MoonArranger</code></td>\n<td align="center"></td>\n<td align="right">unwanted\n<sup>\n3\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">NewPagingControl</code></td>\n<td align="center"></td>\n<td align="right">see \n<code class="language-text">PagingControl</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Notification</code></td>\n<td align="center"><code class="language-text">Notification</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ObjectActionDecorator</code></td>\n<td align="center"></td>\n<td align="right">unwanted\n<sup>\n3\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Overlay</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Layerable</code>\n HOC</td>\n<td align="right">under review</td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">PagingControl</code></td>\n<td align="center">use \n<code class="language-text">@enact/moonstone/IconButton</code>\n and custom handlers</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Panel</code></td>\n<td align="center"><code class="language-text">Panel</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/Panels</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Panels</code></td>\n<td align="center"><code class="language-text">Panels</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">PlaylistSupport</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Popup</code></td>\n<td align="center"><code class="language-text">Popup</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ProgressBar</code></td>\n<td align="center"><code class="language-text">ProgressBar</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ProgressButton</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">RadioItem</code></td>\n<td align="center"><code class="language-text">RadioItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">RadioItemGroup</code></td>\n<td align="center">use \n<code class="language-text">@enact/ui/Group</code>\n HOC with \n<code class="language-text">@enact/moonstone/RadioItem</code>\ns</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">RichText</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Scrim</code></td>\n<td align="center"><code class="language-text">Scrim</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/ui/FloatingLayer</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Scrollable</code></td>\n<td align="center"><code class="language-text">Scrollable</code></td>\n<td align="right">HOC provided in \n<code class="language-text">@enact/moonstone/Scroller</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ScrollControls</code></td>\n<td align="center">use \n<code class="language-text">Scrollable</code>\n HOC</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Scroller</code></td>\n<td align="center"><code class="language-text">Scroller</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ScrollStrategy</code></td>\n<td align="center">use \n<code class="language-text">Scrollable</code>\n HOC</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ScrollThumb</code></td>\n<td align="center"></td>\n<td align="right">internal usage\n<sup>\n2\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">SelectableItem</code></td>\n<td align="center"><code class="language-text">SelectableItem</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">SimpleIntegerPicker</code></td>\n<td align="center"><code class="language-text">EditableIntegerPicker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">SimplePicker</code></td>\n<td align="center"><code class="language-text">Picker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Slider</code></td>\n<td align="center"><code class="language-text">Slider</code>\n (and \n<code class="language-text">IncrementSlider</code>\n for jump buttons)</td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Spinner</code></td>\n<td align="center"><code class="language-text">Spinner</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">StyleAnimator</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Table</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">TextArea</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">TimePicker</code></td>\n<td align="center"><code class="language-text">TimePicker</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ToggleButton</code></td>\n<td align="center"><code class="language-text">ToggleButton</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ToggleItem</code></td>\n<td align="center"><code class="language-text">SwitchItem</code>\n or \n<code class="language-text">ToggleItem</code></td>\n<td align="right"><code class="language-text">@enact/moonstone/SwitchItem</code>\n is a specific extension of \n<code class="language-text">@enact/moonstone/ToggleItem</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ToggleSwitch</code></td>\n<td align="center"><code class="language-text">Switch</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">ToggleText</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">Tooltip</code></td>\n<td align="center"><code class="language-text">Tooltip</code></td>\n<td align="right">provided in \n<code class="language-text">@enact/moonstone/TooltipDecorator</code>\n; wraps \n<code class="language-text">@enact/moonstone/Button</code>\n and \n<code class="language-text">@enact/moonstone/IconButton</code></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">TooltipDecorator</code></td>\n<td align="center"><code class="language-text">TooltipDecorator</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoFeedback</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoFullscreenToggleButton</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoInfoBackground</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoInfoHeader</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoPlayer</code></td>\n<td align="center"><code class="language-text">VideoPlayer</code></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td align="center"><code class="language-text">VideoTransportSlider</code></td>\n<td align="center"></td>\n<td align="right">unused\n<sup>\n1\n</sup></td>\n</tr>\n</tbody>\n</table>\n<p><sup>1</sup>- Internal review of Moonstone applications revealed no usage of the\ncomponent.</p>\n<p><sup>2</sup>- The component is generally only used internally by the framework.</p>\n<p><sup>3</sup>- Internal review found dissatisfaction with the component.</p>',frontmatter:{title:"Enyo to Enact Component Map",github:"https://github.com/enactjs/enact/blob/develop/docs/migration/enyo/enyo-enact-component-map.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrating-enyo-apps/"},frontmatter:{title:"Enyo Application Migration Guide"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/enyo-enact-component-map/"},frontmatter:{title:"Enyo to Enact Component Map"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-fittables/"},frontmatter:{title:"Migrating Enyo Fittables"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/"},frontmatter:{title:"Migrating from Enyo"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-i18n/"},frontmatter:{title:"Migrating i18n"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/developer-guide/migration/enyo/enyo-enact-component-map/",title:"Enyo to Enact Component Map",parentRegex:"/\\/docs\\/developer-guide\\/migration\\/enyo(\\/[^/]*)?\\/$/"}}}});