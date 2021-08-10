---
title: "loctool for JavaScript devs"
metaTitle: "loctool JavaScript"
metaDescription: "loctool JavaScript"
---

loctool have plugin for web app's localization. `ilib-loctool-javascript` and `ilib-loctool-javascript-resource`

1) Write code - Extract localizable Strings
====
`ilib-loctool-javascript` plugin takes `js`, `jsx`, `html.haml`, `.tmpl.html` type files and extract localizable strings.  

```
RB.getString("This is a test");
RB.getString("This is a test with a unique id", "id1");
RB.getStringJS('Smart Watches');
```

2) Write config file for loctool
====
i.e)
```
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
```
ilib.data.strings_ko_KR = {
    "Hello": "안녕",
    "Thank you": "고마워"
};
```