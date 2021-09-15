---
title: "loctool for PO devs"
metaTitle: "loctool PO"
metaDescription: "loctool PO"
---


An **[ilib loctool plugin](https://github.com/iLib-js/ilib-loctool-po)** to parse and localize GNU gettext po files.
This plugin can parse and localize po or pot files written by tools such as easy gettext.

| Input file type | Output file type | Sample |
|:---------------:|------------------|--------|
|        po       |        po        |  [here](https://github.com/iLib-js/ilib-loctool-samples)  |

1) Extract localizable Strings  
====

A **.PO** file is a portable object file, which is text-based. These types of files are used in commonly in software development. The .PO file may be referenced by Java programs, GNU gettext, or other software programs as a properties file. These files are saved in a human-readable format so that they can be viewed in a text editor by engineers and translators.  
The format is specified on the [gnu website](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html)  

i.e)
```
#: lib/error.c:116
msgid "Hello"
msgid "Good bye"

// a plural string
msgid "There is {n} object."
msgstr_plural "There are {n} objects."
```

2) Prepre XLIFF files
====
Prepare multi-language XLIFF files with translation.   
With loctool parameter or through a config file, It can set xliff files location.

```javascript

// a) loctool option
 -x or --xliffs
  Specify the dir where the xliffs files live. Default: "."

// b) set in project.json config file
...
"settings": {
    "xliffsDir": "./xliffs",
...
```

3) Write config file for loctool
====

Make sure `plugin` and `po` property are written correctly in config file.  
Here's detail information of configuration. [here](https://github.com/iLib-js/ilib-loctool-po#configuring-the-plugin)
i.e) project.json

```json
"plugins": [
        "ilib-loctool-po"
],
"settings": {
 ...
    "po": {
        "mappings": {
            "**/*.po": {
                "template": "resource/[locale].po"
            }
        }
    }
}
```    

4) Run the loctool - Generate localization data 
====
loctool creates a new folder under `resource` with name of `[locale].po` 

i.e)
Korean strings resource-es/ko-KR.po:
```
#: a/b/c.js:32
msgid "Hello"
msgstr "안녕하세요"
```

Appendix
====
* [What are .PO files?](https://www.simultrans.com/blog/what-are-.po-files#:~:text=PO%20file%20is%20a%20portable,in%20commonly%20in%20software%20development.&text=These%20files%20are%20saved%20in,editor%20by%20engineers%20and%20translators.)
 