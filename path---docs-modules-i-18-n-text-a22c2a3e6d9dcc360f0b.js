webpackJsonp([0xe78a073e6884],{996:function(e,t){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/i18n/Text/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"An unstyled text translation component."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"i18n/Text"},{"title":"exports","description":"Text"},{"title":"exports","description":"TextDecorator"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"i18n/Text","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that is used to translate text and provide the translations via props."}]},{"type":"paragraph","children":[{"type":"inlineCode","value":"TextDecorator"},{"type":"text","value":" accepts an optional "},{"type":"inlineCode","value":"mapPropsToText"},{"type":"text","value":" config prop which defines the props it will\\npopulate and the text to translate and provide in that prop. "},{"type":"inlineCode","value":"defaultText"},{"type":"text","value":" can also be provided\\nwhen appropriate."}]},{"type":"paragraph","children":[{"type":"text","value":"If translations are not available yet and all props do not include a default value,\\n"},{"type":"inlineCode","value":"TextDecorator"},{"type":"text","value":" will render nothing. Once translations are avaiable, the component will update\\nwith the translated strings."}]},{"type":"code","lang":null,"value":"TextDecorator({\\n  mapPropsToText: {\\n    // Always translate \\"Go\\" and pass it in the `children` prop\\n    children: \'Go\',\\n    // Translate \\"Go to next page\\" but pass \\"\\" (value always untranslated) while\\n    // waiting for the translated strings to be fetched.\\n    \'aria-label\': {\\n      text: \'Go to next page\',\\n      defaultText: \'\'\\n    }\\n  }\\n})"}]},"tags":[{"title":"class","description":null,"type":null,"name":"TextDecorator"},{"title":"memberof","description":"i18n/Text"},{"title":"hoc","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"TextDecorator","memberof":"i18n/Text","access":"public","members":{"global":[],"inner":[],"instance":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Passed to the wrapped component."}]},{"type":"paragraph","children":[{"type":"text","value":"If "},{"type":"inlineCode","value":"mapPropsToText"},{"type":"text","value":" is "},{"type":"inlineCode","value":"null"},{"type":"text","value":" and "},{"type":"inlineCode","value":"children"},{"type":"text","value":" is a string, the string will be\\ntranslated before being passed to the wrapped component."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"AllLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"AllLiteral"},"access":"public","name":"children","memberof":"i18n/Text.TextDecorator","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/TextTextDecorator#children"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The locale for translation."}]},{"type":"paragraph","children":[{"type":"text","value":"If not supplied, the current locale is used."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"access":"public","name":"locale","memberof":"i18n/Text.TextDecorator","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/TextTextDecorator#locale"}],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default config for "},{"type":"link","url":"i18n/Text.TextDecorator","title":null,"jsdoc":true,"children":[{"type":"text","value":"i18n/Text.TextDecorator"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"memberof","description":"i18n/Text.TextDecorator"},{"title":"hocconfig","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"i18n/Text.TextDecorator","name":"defaultConfig","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configures the translated text passed to the wrapped component."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Object"},"applications":[{"type":"NameExpression","name":"String"},{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]}]}},{"title":"default","description":"null"},{"title":"public","description":null,"type":null},{"title":"memberof","description":"i18n/Text.TextDecorator.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Object"},"applications":[{"type":"NameExpression","name":"String"},{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]}]},"access":"public","memberof":"i18n/Text.TextDecorator.defaultConfig","name":"mapPropsToText","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/TextTextDecoratordefaultConfigmapPropsToText"}]},"namespace":"i18n/TextTextDecoratordefaultConfig"}]},"namespace":"i18n/TextTextDecorator"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Translates its child string value in the current locale."}]},{"type":"paragraph","children":[{"type":"text","value":"If translations are not available yet, "},{"type":"inlineCode","value":"Text"},{"type":"text","value":" will render nothing. Once translations are\\navaiable, the component will update with the translated string."}]},{"type":"code","lang":null,"value":"<Text>Go</Text>"}]},"tags":[{"title":"class","description":null,"type":null,"name":"Text"},{"title":"memberof","description":"i18n/Text"},{"title":"mixes","description":null,"name":"i18n/Text.TextDecorator"},{"title":"ui","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"Text","memberof":"i18n/Text","access":"public","members":{"global":[],"inner":[],"instance":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The string to be translated."}]}]},"tags":[{"title":"name","description":null,"name":"children"},{"title":"memberof","description":"i18n/Text.Text.prototype"},{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"name":"children","memberof":"i18n/Text.Text","type":{"type":"NameExpression","name":"String"},"access":"public","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/TextText#children"}],"events":[],"static":[]},"namespace":"i18n/TextText"}]},"namespace":"i18n/Text"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/i18n/Text/",title:"i18n/Text"}}}});