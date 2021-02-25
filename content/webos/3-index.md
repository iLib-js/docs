---
title: "webOS Localization Setup"
metaTitle: "webOS Localization Setup"
metaDescription: "webOS Localization Setup page"
---

Choose proper loctool plugins per type
=============

The loctool provides a good number of plugins for a wide variety of file types and programming languages. The following table summarizes the plugins applicable for webOS development.

|type|plugins|projectType|
|------|---|---|
|javascript|[ilib-loctool-webos-javascript](https://github.com/iLib-js/ilib-loctool-webos-javascript), [ilib-loctool-webos-json-resource](https://github.com/iLib-js/ilib-loctool-webos-json-resource)|webos-web|
|qml|[ilib-loctool-webos-qml](https://github.com/iLib-js/ilib-loctool-webos-qml), [ilib-loctool-webos-ts-resource](https://github.com/iLib-js/ilib-loctool-webos-ts-resource)|webos-qml|
|c|[ilib-loctool-webos-c](https://github.com/iLib-js/ilib-loctool-webos-c), [ilib-loctool-webos-json-resource](https://github.com/iLib-js/ilib-loctool-webos-json-resource)|webos-c|
|cpp|[ilib-loctool-webos-cpp](https://github.com/iLib-js/ilib-loctool-webos-cpp), [ilib-loctool-webos-json-resource](https://github.com/iLib-js/ilib-loctool-webos-json-resource)|webos-cpp|
|appinfo.json|[ilib-loctool-webos-appinfo-json](https://github.com/iLib-js/ilib-loctool-webos-appinfo-json)|-|


Write a config file
=============

In order to use __loctool__, it needs configuration file called `project.json`. and Place it to the project root.
Here's example for webOS Enact application. Depends on the project type, some values need to write properly. (projectType, resourceDirs, resouceFileType, plugins)

### Example

1) Enact application
```json
{
    "name": "com.webos.app.home",
    "id": "home",
    "projectType": "webos-web",
    "sourceLocale": "en-KR",
    "pseudoLocale": ["zxx-XX", "zxx-Cyrl-XX", "zxx-Hans-XX", "zxx-Hebr-XX"],
    "resourceDirs": {
         "json":"resources"
     },
     "resourceFileTypes": {
         "json":"ilib-loctool-webos-json-resource"
     },
    "plugins": [
         "ilib-loctool-webos-javascript",
         "ilib-loctool-webos-appinfo-json"
     ],
     "excludes": [
         "*"
     ],
     "includes": [
         "src"
     ]
}
```

2) QML application
```json
{
    "name": "ime-manager",
    "id": "imemanager",
    "projectType": "webos-qml",
    "sourceLocale": "en-KR",
    "pseudoLocale": ["zxx-XX", "zxx-Cyrl-XX", "zxx-Hans-XX", "zxx-Hebr-XX"],
    "resourceDirs": {
         "ts":"resources"
     },
     "resourceFileTypes": {
         "ts":"ilib-loctool-webos-ts-resource"
     },
    "plugins": [
         "ilib-loctool-webos-qml",
         "ilib-loctool-webos-appinfo-json"
     ],
     "excludes": [
         "*"
     ],
     "includes": [
         "src"
     ]
}
```

Enable localization in build
=============

In order to enable the localization task during the build, recipes need to be updated properly.
You can refer to the following link. [here](https://www.webosose.org/docs/guides/development/localization/applying-localization/)

Things you need to do is inherit the `webos_localizable` bbclass in your recipe.

### webOS General


```
inherit webos_localizable
```

In the special case below, You have to inherit differently.

#### Enact application
Enact framework inherits localizable bbclass already. so application recipe doesn't need to inherit webos_localizable class.

#### C/C++
the i18nlibrary (libwebosi18n) needs to build first, so Add depends it in recipe.

```
...
DEPENDS="libwebosi18n"
...
inherit webos_localizable
```
#### QML
For Qt/QML apps, the recipe must inherit webos_qt_localization instead of webos_localizable. The webos_qt_localization bbclass includes an additional process to convert a .ts file into a .qm file.

```
inherit webos_qt_localization
```