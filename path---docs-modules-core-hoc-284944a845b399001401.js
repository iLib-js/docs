webpackJsonp([65034138862461],{988:function(e,o){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/core/hoc/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Provides the "},{"type":"link","url":"core/hoc.hoc","title":null,"jsdoc":true,"children":[{"type":"text","value":"core/hoc.hoc"}]},{"type":"text","value":" method to create higher-order components (HOCs)."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"core/hoc"},{"title":"exports","description":"hoc"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"core/hoc","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Constructs a higher-order component (HOC) using an optional set of default configuration parameters and\\na factory method that accepts instance configuration parameters and a component to wrap. The\\nreturned function can accept:"}]},{"type":"list","ordered":false,"start":null,"children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"text","value":"an instance config and a component constructor to wrap and return a renderable component, or"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"text","value":"an instance config only and return a decorator function expecting a component constructor\\n(like the next bullet), or"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"text","value":"a component constructor and return a renderable component"}]}]}]},{"type":"paragraph","children":[{"type":"text","value":"Example:"}]},{"type":"code","lang":null,"value":"const Countable = hoc({prop: \'data-count\'}, (config, Wrapped) => {\\n\\treturn class extends React.Component {\\n\\t\\tconstructor (props) {\\n\\t\\t\\tsuper(props);\\n\\t\\t\\tthis.state = {\\n\\t\\t\\t\\tcount: 0\\n\\t\\t\\t};\\n\\t\\t},\\n\\t\\tinc = () => this.setState({count: this.state.count + 1}),\\n\\t\\trender () {\\n\\t\\t\\tconst props = Object.assign({}, this.props, {\\n\\t\\t\\t\\t[config.prop]: this.state.count,\\n\\t\\t\\t\\tonClick: this.inc\\n\\t\\t\\t});\\n\\t\\t\\treturn <Wrapped {...props} />\\n\\t\\t}\\n\\t}\\n});\\n\\nconst CountableAsDataNumber({prop: \'data-number\'});\\nconst CountableDiv(\'div\');\\nconst CountableDivAsDataNumber = CountableAsDataNumber(\'div\');"}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"Set of default configuration parameters","type":{"type":"NameExpression","name":"Object"},"name":"defaultConfig"},{"title":"param","description":"Higher-order component","type":{"type":"NameExpression","name":"Function"},"name":"hawk"},{"title":"returns","description":"HOC Decorator","type":{"type":"NameExpression","name":"Function"}},{"title":"memberof","description":"core/hoc"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"defaultConfig","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Set of default configuration parameters"}]}]},"type":{"type":"NameExpression","name":"Object"}},{"title":"param","name":"hawk","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Higher-order component"}]}]},"type":{"type":"NameExpression","name":"Function"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"HOC Decorator"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Function"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"core/hoc","access":"public","name":"hoc","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"core/hochoc"}]},"namespace":"core/hoc"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/core/hoc/",title:"core/hoc"}}}});