---
title: "loctool for Markdown devs"
metaTitle: "loctool Markdown"
metaDescription: "loctool Markdown"
---

loctool have a `ilib-loctool-ghfm` plugin for github-flavored markdown file localization.
loctool reads the markdown file, extracts the translatable parts into a file, and creates a file to pass to the translator.
Then use the xliff file with the translations to generate a localized md file.

1) Extract localizable Strings  
====
| Input file type | Output file type |
|:---------------:|------------------|
|        md       |        md        |
Normal Markdown is broken into paragraphs and phrases using the [remark](https://www.npmjs.com/package/remark) family of parsers.  



Things to know
==

* Whenever there is syntax in the markdown that translators should not touch, this plugin converts them into xml-like components.  

    `This is _bold_ and *italic* text.`  ⟶   
    `This is <c0>bold</c0> and <c1>italic</c1> text.`   


* Snippets of code are not processed.   
    ``There are many instances of `numcount` used in the code.``  ⟶   
    `There are many instances of <c0/> used in the code.`


* Embed HTML in the markdown and it will be processed as above using the XML-like components.   

    `This text is <b>bold</b> and contains a <span font="foo">different font</span>.`  
    ⟶   
    `This text is <c0>bold</c0> and contains a <c1>different font</c1>.`


2) Write config file for loctool
====
Make sure `plugin` are written correctly in config file.  

i.e) project.json

```json
...
"plugins": [
    "ilib-loctool-ghfm
],
"settings": {
    ....
    "markdown": {
        "mappings": {
            "**/en-US/*.md": {
                "template": "locale/[locale]/[filename]",
                "frontmatter": ["Title", "Description"]
            }
        }
    }
}
```
This plugin now supports **mappings**:  
> The mappings allow you to match a particular path name and apply particular settings to that path, 
such as an output path name template.  
The template follows the syntax for path name templates defined in the the loctool itself.

> The frontmatter setting specifies an array of strings that represent the names of the fields 
 in the frontmatter that should be localized.  
 The frontmatter is parsed as a yaml file using the ilib-loctool-yaml plugin.

> Any fields not listed in the frontmatter list will be preserved but not be localized.  
If frontmatter is set to "true" instead of an array, all fields will be localized. 
If frontmatter is set to "false", or if it is not given, then no fields will be localized.  


3) Run the loctool - Generate localization data 
====
There is a sample application to see md file localization. Visit here. ➡ [link](https://github.com/iLib-js/ilib-loctool-samples/tree/main/markdown)  
 If you run loctool according to the configuration above, the output will be generated under the `locale` directory.  