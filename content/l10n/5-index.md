---
title: "loctool for JavaScript devs"
metaTitle: "loctool JavaScript"
metaDescription: "loctool JavaScript"
---

**[ilib-loctool-javascript](https://github.com/iLib-js/ilib-loctool-javascript)** and **[ilib-loctool-javascript-resource](https://github.com/iLib-js/ilib-loctool-javascript-resource)**  are a plugin for the loctool that allows it to read and localize javascript files.  

|        Input file type        | Output file type | Sample |
|:-----------------------------:|------------------|--------|
| js, jsx, html.haml, tmpl.html |        js        |  [here](https://github.com/iLib-js/ilib-loctool-samples)  |


1) Extract localizable Strings
====
* `ilib-loctool-javascript` plugin takes specific type files  and extract localizable strings by the syntax below.  
* `ilib-loctool-javascript-resource` plugin generate localization data.

```javascript
RB.getString("This is a test");
RB.getString("This is a test with a unique id", "id1");
RB.getStringJS('Smart Watches');
```

2) Write config file for loctool
====
i.e) project.json

```json
...
"resourceDirs": {
    "javascript": "resources"
},
"resourceFileTypes": {
    "javascript":"ilib-loctool-javascript-resource"
},
"plugins": [
    "ilib-loctool-javascript"
],
...
```

3) Run the loctool - Generate localization data 
====

loctool creates a new folder under `resources` with name of `[locale].js` 

i.e) ko-KR.js 
```javascript
ilib.data.strings_ko_KR = {
    "Hello": "안녕",
    "Thank you": "고마워"
};
```