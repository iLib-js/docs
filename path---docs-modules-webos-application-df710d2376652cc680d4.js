webpackJsonp([0xdd562deb0d7f],{1046:function(e,o){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/webos/application/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Provides a collection of functions for fetching application metadata."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"webos/application"},{"title":"exports","description":"fetchAppId,"},{"title":"exports","description":"fetchAppInfo,"},{"title":"exports","description":"fetchAppRootPath,"},{"title":"exports","description":"platformBack"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"webos/application","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Fetches the appID of the caller app."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":"AppID of the app","type":{"type":"NameExpression","name":"String"}},{"title":"memberof","description":"webos/application"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"AppID of the app"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/application","access":"public","name":"fetchAppId","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/applicationfetchAppId"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The callback signature for "},{"type":"inlineCode","value":"fetchAppInfo"}]}]},"tags":[{"title":"callback","description":"appInfoCallback"},{"title":"param","description":"JSON data object read from the app\'s *appinfo.json* file. `undefined` if not found.","type":{"type":"NullableType","expression":{"type":"NameExpression","name":"object"},"prefix":true},"name":"info"},{"title":"memberof","description":"webos/application"}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"info","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"JSON data object read from the app\'s "},{"type":"emphasis","children":[{"type":"text","value":"appinfo.json"}]},{"type":"text","value":" file. "},{"type":"inlineCode","value":"undefined"},{"type":"text","value":" if not found."}]}]},"type":{"type":"NullableType","expression":{"type":"NameExpression","name":"object"},"prefix":true}}],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"typedef","name":"appInfoCallback","type":{"type":"NameExpression","name":"Function"},"memberof":"webos/application","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/applicationappInfoCallback"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Fetches the "},{"type":"emphasis","children":[{"type":"text","value":"appinfo.json"}]},{"type":"text","value":" data of the caller app."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"Called upon completion","type":{"type":"NameExpression","name":"webos/application~appInfoCallback"},"name":"callback"},{"title":"param","description":"Optional relative filepath to a specific *appinfo.json* to read","type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}},"name":"path"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"memberof","description":"webos/application"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"callback","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Called upon completion"}]}]},"type":{"type":"NameExpression","name":"webos/application~appInfoCallback"}},{"title":"param","name":"path","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Optional relative filepath to a specific "},{"type":"emphasis","children":[{"type":"text","value":"appinfo.json"}]},{"type":"text","value":" to read"}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/application","access":"public","name":"fetchAppInfo","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/applicationfetchAppInfo"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Fetches the full root URI (path) of the caller app."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":"App\'s URI (application install path)","type":{"type":"NameExpression","name":"String"}},{"title":"memberof","description":"webos/application"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"App\'s URI (application install path)"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/application","access":"public","name":"fetchAppRootPath","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/applicationfetchAppRootPath"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Emulate the remote "},{"type":"emphasis","children":[{"type":"text","value":"back"}]},{"type":"text","value":" key."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"memberof","description":"webos/application"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/application","access":"public","name":"platformBack","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/applicationplatformBack"}]},"namespace":"webos/application"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/webos/application/",title:"webos/application"}}}});