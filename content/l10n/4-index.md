---
title: "loctool plugins"
metaTitle: "loctool plugin"
metaDescription: "loctool plugin"
---

Plugins
====

The loctool is driven by plugins that know how to parse various types of files, and write out the appropriate localized output.

Plugins can be loaded dynamically using the `custom` type of project and listing out the required plugins in the *plugins* section of the project.json config file. Plugins are implemented as separate node modules similar to the way Babel or Webpack plugins are implemented.

If you would like to write new one,  
read the [How to Write a loctool Plugin](https://github.com/iLib-js/loctool/blob/development/docs/Plugins.md) documentation for all the details.

Plugin List
=====

| Name  | Description  |
|---|---|
| [ilib-loctool-android-layout](https://github.com/iLib-js/ilib-loctool-android-layout) |extract strings from Android layout.xml files and produce translated strings.xml files |
| [ilib-loctool-android-resource](https://github.com/iLib-js/ilib-loctool-android-resource) | extract strings from Android strings.xml files and produce translated strings.xml files |
| [ilib-loctool-csv](https://github.com/iLib-js/ilib-loctool-csv)  | extract strings from comma-separated values (CSV) format files and produce translated CSV files |
| [ilib-loctool-ghfm](https://github.com/iLib-js/ilib-loctool-ghfm) | extract strings from Github-Flavored Markdown (MD) format files and produce translated MD files |
| [ilib-loctool-ghfm-readmeio](https://github.com/iLib-js/ilib-loctool-ghfm-readmeio) | extract strings from Github-Flavored Markdown (MD) format files with Readme.io extensions and produce translated MD files |
| [ilib-loctool-haml](https://github.com/iLib-js/ilib-loctool-haml) | extract strings from HAML format files and produce translated HAML files |
| [ilib-loctool-html](https://github.com/iLib-js/ilib-loctool-html) | extract strings from static HTML files and produce translated HTML files |
| [ilib-loctool-jst](https://github.com/iLib-js/ilib-loctool-jst) | extract strings from Javascript Template (JST) code files and produce translated JST files |
| [ilib-loctool-strings](https://github.com/iLib-js/ilib-loctool-strings) | extract strings from iOS .strings format resource files and produce other .strings files |
| [ilib-loctool-java](https://github.com/iLib-js/ilib-loctool-java) | extract strings from Java code that uses the ilib ResBundle class to do its translations and produce properties resource files |
| [ilib-loctool-javascript](https://github.com/iLib-js/ilib-loctool-javascript) | extract strings from Javascript code that uses ilib to do its translations and produce JS resource files |
| [ilib-loctool-javascript-resource](https://github.com/iLib-js/ilib-loctool-javascript-resource) | extract strings from ilib Javascript resource files and produce JS resource files |
| [ilib-loctool-jsx](https://github.com/iLib-js/ilib-loctool-jsx) | extract strings from JSX format code that uses ilib and react-ilib to do its translations |
| [ilib-loctool-jst](https://github.com/iLib-js/ilib-loctool-jst) | extract strings from JavaScript Template (JST) format files |
| [ilib-loctool-objectivec](https://github.com/iLib-js/ilib-loctool-objectivec) | extract strings from Objective-C code for iOS and produce .strings files |
| [ilib-loctool-swift](https://github.com/iLib-js/ilib-loctool-swift) | extract strings from Swift code for iOS and produce .strings files |
| [ilib-loctool-yaml](https://github.com/iLib-js/ilib-loctool-yaml) | extract strings from YAML format files and produce translated YAML files |
| [ilib-loctool-xliff](https://github.com/iLib-js/ilib-loctool-xliff) | extract strings from XLIFF format files and produce translated XLIFF files |
| [ilib-loctool-webos-appinfo-json](https://github.com/iLib-js/ilib-loctool-webos-appinfo-json) | extract strings webOS appinfo.json files and produce translated appinfo.json files for webOS |
| [ilib-loctool-webos-c](https://github.com/iLib-js/ilib-loctool-webos-c) | extract strings from C language files for webOS |
| [ilib-loctool-webos-cpp](https://github.com/iLib-js/ilib-loctool-webos-cpp) | extract strings from C++ language files for webOS |
| [ilib-loctool-webos-javascript](https://github.com/iLib-js/ilib-loctool-webos-javascript) | extract strings from Javascript language files for webOS |
| [ilib-loctool-webos-json-resource](https://github.com/iLib-js/ilib-loctool-webos-json-resource) | extract strings from javascript, C/C++ files and produce translated json files for webOS |
| [ilib-loctool-webos-qml](https://github.com/iLib-js/ilib-loctool-webos-qml) |extract strings from QML language files for webOS |
| [ilib-loctool-webos-ts-resource](https://github.com/iLib-js/ilib-loctool-webos-ts-resource) | extract strings from webOS QML files and produce translated QT's TS format files for webOS |
| [ilib-loctool-salesforce-metaxml](https://github.com/iLib-js/ilib-loctool-salesforce-metaxml) | extract strings from -meta.xml files and produced translated meta.xml files for Salesforce |
| [ilib-loctool-json](https://github.com/iLib-js/ilib-loctool-json) | extract strings json files and produce translated json files |
| [ilib-loctool-po](https://github.com/iLib-js/ilib-loctool-po) | extract strings from po files and produce translated po files |
