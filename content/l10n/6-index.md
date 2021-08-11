---
title: "loctool for QML devs"
metaTitle: "loctool QML"
metaDescription: "loctool QML"
---

loctool have plugin for QML app's localization. `ilib-loctool-webos-qml` and `iilb-loctool-webos-ts-resource`
It's implemented for webOS QML application, but it could be used for general QML application too.

1) Extract localizable Strings
====
| Input file type | Output file type | Sample |
|:---------------:|------------------|--------|
|     qml, js     |        js        |  [here](https://github.com/iLib-js/ilib-loctool-samples)  |

`ilib-loctool-webos-qml` plugin takes `qml` and `js` type files and extract localizable strings.  
If you use the following methods and macros, the text inside it will be extracted as a localizable string.


```
Text { text: qsTr("hello") }
Text { text: qsTranslate("CustomContext", "hello") }

Item {
    property string greeting: QT_TR_NOOP("hello")

    Text { text: qsTr(greeting) }
}
```
Qt QML Type - Methods
---
| Method  | Description  |
|---|---|
| [qsTr](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTr-method) |Returns a translated string identified by id. If no matching string is found, the id itself is returned.|
| [qsTrIdNoOp](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTrIdNoOp-method) |Marks sourceText for dynamic translation; |
| [qsTranslate](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTranslate-method) |Returns a translated version of sourceText within the given context |
| [qsTranslateNoOp](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTranslateNoOp-method) |Marks sourceText for dynamic translation in the given context |


Global Qt Declarations - Macros
---

| Method  | Description  |
|---|---|
| [QT_TR_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TR_NOOP) |Marks the UTF-8 encoded string literal sourceText for delayed translation in the current context.|
| [QT_TR_N_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TR_N_NOOP) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the current context.|
| [QT_TRANSLATE_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_NOOP) |Marks the UTF-8 encoded string literal sourceText for delayed translation in the given context. |
| [QT_TRANSLATE_N_NOOP3](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_N_NOOP3) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the given context with the given comment.|
| [QT_TRANSLATE_N_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_N_NOOP) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the given context. |


2) Write config file for loctool
====
Make sure `resourceDirs`, `resourceFileType` and `plugin` are written correctly in `project.json` file.

i.e) project.json

```json
...
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
...
```

3) Run the loctool - Generate localization data (*.ts file)
====
`ilib-loctool-webos-ts` plugin localization data as [TS file format](https://doc.qt.io/qt-5/linguist-ts-file-format.html).
TS file format used by QT Linguist.  
Here's simple ts file form.
```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko-KR" sourcelanguage="en-KR">
  <context>
    <name>LocalizationToolTest</name>
    <message>
      <location filename="LocalizationToolTest.qml"></location>
      <source>Hello</source>
      <translation>안녕하세요</translation>
    </message>
  </context>
</TS>
```


4) Generate QML file format (*.qm file)
====
With ts files from loctool running, Developer need to run [lrelease](https://doc.qt.io/qt-5/linguist-manager.html#using-lrelease) to get QML file format. It's compact binary format that is used by the localized application.
The lrelease command line tool produces QM files out of TS files. The QM file format is a compact binary format that is used by the localized application. It provides extremely fast lookups for translations. The TS files lrelease processes can be specified at the command line, or given indirectly by a Qt .pro project file.

lrelease can be also be run without specifying a .pro file:
```
lrelease.exe main_en.ts languages\main_fr.ts
```

Reference
====
* https://doc.qt.io/qt-6/qml-qtqml-qt.html
* https://doc.qt.io/qt-6/qtglobal.html
* https://doc.qt.io/qt-5/linguist-manager.html

