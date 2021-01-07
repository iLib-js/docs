webpackJsonp([0xc863c6bd162c],{1049:function(e,s){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/webos/LS2Request/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Provides a class for making LS2 service requests on webOS platforms."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"webos/LS2Request"},{"title":"exports","description":"LS2Request"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"webos/LS2Request","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A class for managing LS2 Requests."}]}]},"tags":[{"title":"memberof","description":"webos/LS2Request"},{"title":"class","description":null,"name":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"webos/LS2Request","kind":"class","constructorComment":{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Create a new LS2 request"}]}]},"tags":[{"title":"memberof","description":"webos/LS2Request.LS2Request"},{"title":"constructor","description":null,"name":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"webos/LS2Request.LS2Request","kind":"class"},"name":"LS2Request","members":{"global":[],"inner":[],"instance":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Send a request to an LS2 service method."}]}]},"tags":[{"title":"method","description":null,"name":null},{"title":"memberof","description":"webos/LS2Request.LS2Request.prototype"},{"title":"param","description":"Options for the LS2 Request call","type":{"type":"NameExpression","name":"Object"},"name":"options"},{"title":"param","description":"The name of the LS2 service.","type":{"type":"NameExpression","name":"String"},"name":"options.service"},{"title":"param","description":"The name of the method.","type":{"type":"NameExpression","name":"String"},"name":"options.method"},{"title":"param","description":"Any parameters required by the service method.","type":{"type":"NameExpression","name":"Object"},"name":"options.parameters"},{"title":"param","description":"The success handler for the request.","type":{"type":"NameExpression","name":"Function"},"name":"options.onSuccess"},{"title":"param","description":"The failure handler for the request.","type":{"type":"NameExpression","name":"Function"},"name":"options.onFailure"},{"title":"param","description":"The handler to run when the request\\nis completed, regardless of return status.","type":{"type":"NameExpression","name":"Function"},"name":"options.onComplete"},{"title":"param","description":"The handler to run when the request\\ntimes out.  Used in conjunction with `timeout`.","type":{"type":"NameExpression","name":"Function"},"name":"options.onTimeout"},{"title":"param","description":"Subscribe to service methods that support subscription.","type":{"type":"NameExpression","name":"Boolean"},"name":"options.subscribe"},{"title":"param","description":"The delay in milliseconds to wait for the request to return.","type":{"type":"NameExpression","name":"Number"},"name":"options.timeout"},{"title":"returns","description":null,"type":{"type":"NameExpression","name":"webos/LS2Request"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"options","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Options for the LS2 Request call"}]}]},"type":{"type":"NameExpression","name":"Object"},"properties":[{"title":"param","name":"options.service","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The name of the LS2 service."}]}]},"type":{"type":"NameExpression","name":"String"},"default":"\'\'"},{"title":"param","name":"options.method","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The name of the method."}]}]},"type":{"type":"NameExpression","name":"String"},"default":"\'\'"},{"title":"param","name":"options.parameters","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Any parameters required by the service method."}]}]},"type":{"type":"NameExpression","name":"Object"},"default":"{}"},{"title":"param","name":"options.onSuccess","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The success handler for the request."}]}]},"type":{"type":"NameExpression","name":"Function"},"default":"null"},{"title":"param","name":"options.onFailure","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The failure handler for the request."}]}]},"type":{"type":"NameExpression","name":"Function"},"default":"null"},{"title":"param","name":"options.onComplete","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The handler to run when the request\\nis completed, regardless of return status."}]}]},"type":{"type":"NameExpression","name":"Function"},"default":"null"},{"title":"param","name":"options.onTimeout","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The handler to run when the request\\ntimes out.  Used in conjunction with "},{"type":"inlineCode","value":"timeout"},{"type":"text","value":"."}]}]},"type":{"type":"NameExpression","name":"Function"},"default":"timeoutHandler"},{"title":"param","name":"options.subscribe","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Subscribe to service methods that support subscription."}]}]},"type":{"type":"NameExpression","name":"Boolean"},"default":"false"},{"title":"param","name":"options.timeout","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The delay in milliseconds to wait for the request to return."}]}]},"type":{"type":"NameExpression","name":"Number"},"default":"0"}]}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"NameExpression","name":"webos/LS2Request"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/LS2Request.LS2Request","access":"public","name":"send","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/LS2RequestLS2Request#send"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Cancel the current LS2 request."}]}]},"tags":[{"title":"method","description":null,"name":null},{"title":"memberof","description":"webos/LS2Request.LS2Request.prototype"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"webos/LS2Request.LS2Request","access":"public","name":"cancel","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"webos/LS2RequestLS2Request#cancel"}],"events":[],"static":[]},"namespace":"webos/LS2RequestLS2Request"}]},"namespace":"webos/LS2Request"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/webos/LS2Request/",title:"webos/LS2Request"}}}});