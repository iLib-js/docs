webpackJsonp([0xa78f6baa41e4],{1018:function(e,s){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/ui/ImageItem/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Unstyled image item components and behaviors to be customized by a theme or application."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"ui/ImageItem"},{"title":"exports","description":"ImageItem"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"ui/ImageItem","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A basic image item without any behavior."}]}]},"tags":[{"title":"class","description":null,"type":null,"name":"ImageItem"},{"title":"memberof","description":"ui/ImageItem"},{"title":"ui","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"ImageItem","memberof":"ui/ImageItem","access":"public","members":{"global":[],"inner":[],"instance":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The caption displayed with the image."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Node"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Node"},"access":"public","name":"children","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#children"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Customizes the component by mapping the supplied collection of CSS class names to the\\ncorresponding internal elements and states of this component."}]},{"type":"paragraph","children":[{"type":"text","value":"The following classes are supported:"}]},{"type":"list","ordered":false,"start":null,"children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"imageItem"},{"type":"text","value":" - The root component class"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"caption"},{"type":"text","value":" - The caption component class"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"horizontal"},{"type":"text","value":" - Applied when `orientation=\\"horizontal\\""}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"image"},{"type":"text","value":" - The image component class"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"selected"},{"type":"text","value":" - Applied when "},{"type":"inlineCode","value":"selected"},{"type":"text","value":" prop is "},{"type":"inlineCode","value":"true"}]}]},{"type":"listItem","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"vertical"},{"type":"text","value":" - Applied when `orientation=\\"vertical\\""}]}]}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Object"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Object"},"access":"public","name":"css","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#css"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The component used to render the image component."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"Component"},{"type":"NameExpression","name":"Element"}]}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"Component"},{"type":"NameExpression","name":"Element"}]},"access":"public","name":"imageComponent","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#imageComponent"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The layout orientation of the component."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"UnionType","elements":[{"type":"StringLiteralType","value":"horizontal"},{"type":"StringLiteralType","value":"vertical"}]}},{"title":"default","description":"\'vertical\'"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"UnionType","elements":[{"type":"StringLiteralType","value":"horizontal"},{"type":"StringLiteralType","value":"vertical"}]},"access":"public","name":"orientation","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#orientation"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A placeholder image to be displayed before the image is loaded."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"access":"public","name":"placeholder","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#placeholder"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Applies a selected visual effect to the image."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Boolean"}},{"title":"default","description":"false"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Boolean"},"access":"public","name":"selected","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#selected"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"String value or Object of values used to determine which image will appear on a specific\\nscreenSize."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]},"access":"public","name":"src","memberof":"ui/ImageItem.ImageItem","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem#src"}],"events":[],"static":[]},"namespace":"ui/ImageItemImageItem"}]},"namespace":"ui/ImageItem"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/ui/ImageItem/",title:"ui/ImageItem"}}}});