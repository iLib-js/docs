webpackJsonp([0xe7a15b6a4322],{997:function(e,t){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/i18n/util/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A collection of locale-aware text utility function."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"i18n/util"},{"title":"exports","description":"isRtlText"},{"title":"exports","description":"toCapitalized"},{"title":"exports","description":"toLowerCase"},{"title":"exports","description":"toUpperCase"},{"title":"exports","description":"toWordCase"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"i18n/util","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Takes content "},{"type":"inlineCode","value":"str"},{"type":"text","value":" and determines whether or not it is "},{"type":"linkReference","identifier":"rtl","referenceType":"shortcut","children":[{"type":"text","value":"RTL"}]},{"type":"link","url":"/docs/developer-guide/glossary/#rtl","title":null,"jsdoc":true,"children":[{"type":"text","value":"/docs/developer-guide/glossary/#rtl"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"i18n/util"},{"title":"param","description":"A string to check the [RTL]{@link /docs/developer-guide/glossary/#rtl}-ness of.","type":{"type":"NameExpression","name":"String"},"name":"str"},{"title":"returns","description":"`true` if `str` should be RTL; `false` if not.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"str","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A string to check the "},{"type":"linkReference","identifier":"rtl","referenceType":"shortcut","children":[{"type":"text","value":"RTL"}]},{"type":"link","url":"/docs/developer-guide/glossary/#rtl","title":null,"jsdoc":true,"children":[{"type":"text","value":"/docs/developer-guide/glossary/#rtl"}]},{"type":"text","value":"-ness of."}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if "},{"type":"inlineCode","value":"str"},{"type":"text","value":" should be RTL; "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if not."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"i18n/util","access":"public","name":"isRtlText","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/utilisRtlText"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Capitalizes the first letter of a given string (locale aware)."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"i18n/util"},{"title":"param","description":"The string to capitalize.","type":{"type":"NameExpression","name":"String"},"name":"str"},{"title":"returns","description":"The capitalized string.","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"str","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The string to capitalize."}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The capitalized string."}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"i18n/util","access":"public","name":"toCapitalized","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/utiltoCapitalized"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Capitalizes every word in a string. Words are separated by spaces, not necessarily\\nword-breaks (locale aware)."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"i18n/util"},{"title":"param","description":"The string to capitalize.","type":{"type":"NameExpression","name":"String"},"name":"str"},{"title":"returns","description":"The word-cased string.","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"str","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The string to capitalize."}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The word-cased string."}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"i18n/util","access":"public","name":"toWordCase","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/utiltoWordCase"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Locale-safely convert a string to lower case."}]}]},"tags":[{"title":"name","description":null,"name":"toLowerCase"},{"title":"function","description":null,"name":null},{"title":"memberof","description":"i18n/util"},{"title":"param","description":"String to convert to lower case","type":{"type":"NameExpression","name":"String"},"name":"inString"},{"title":"returns","description":"Lower-cased string","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"inString","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"String to convert to lower case"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Lower-cased string"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"name":"toLowerCase","kind":"function","memberof":"i18n/util","access":"public","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/utiltoLowerCase"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Locale-safely convert a string to upper case."}]}]},"tags":[{"title":"name","description":null,"name":"toUpperCase"},{"title":"function","description":null,"name":null},{"title":"memberof","description":"i18n/util"},{"title":"param","description":"String to convert to upper case","type":{"type":"NameExpression","name":"String"},"name":"inString"},{"title":"returns","description":"Upper-cased string","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"inString","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"String to convert to upper case"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Upper-cased string"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"name":"toUpperCase","kind":"function","memberof":"i18n/util","access":"public","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"i18n/utiltoUpperCase"}]},"namespace":"i18n/util"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"Enact"}},docsPages:{edges:[{node:{path:"/docs/developer-guide/",context:{title:null}}},{node:{path:"/docs/developer-tools/",context:{title:null}}},{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/developer-guide/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-guide/index.js",frontmatter:{title:"Developer Guide"}}},{node:{fields:{slug:"/docs/developer-tools/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/developer-tools/index.js",frontmatter:{title:"Developer Tools"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/modules/index.js",frontmatter:{title:"API Libraries"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/enact-docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Tutorials"}}}]}},pathContext:{slug:"/docs/modules/i18n/util/",title:"i18n/util"}}}});