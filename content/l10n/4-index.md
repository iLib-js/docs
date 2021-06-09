---
title: "loctool for QML devs"
metaTitle: "Process page"
metaDescription: "Process page"
---

loctool have plugin for QML app's localization. `ilib-loctool-webos-qml` and `iilb-loctool-webos-ts-resource`
It's implemented for webOS QML application, but it could be used for general QML application too.

Extract localizable
====
`ilib-loctool-webos-qml` plugin takes `qml` and `js` type files and extract localizable strings.
Here's Method list

Qt QML Type - Methods
-----

| Method  | Description  |
|---|---|
| [qsTr](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTr-method) |Returns a translated string identified by id. If no matching string is found, the id itself is returned.|
| [qsTrIdNoOp](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTrIdNoOp-method) |Marks sourceText for dynamic translation; |
| [qsTranslate](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTranslate-method) |Returns a translated version of sourceText within the given context |
| [qsTranslateNoOp](https://doc.qt.io/qt-6/qml-qtqml-qt.html#qsTranslateNoOp-method) |Marks sourceText for dynamic translation in the given context |


Global Qt Declarations - Macros
-----

| Method  | Description  |
|---|---|
| [QT_TR_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TR_NOOP) |Marks the UTF-8 encoded string literal sourceText for delayed translation in the current context (class).|
| [QT_TR_N_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TR_N_NOOP) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the current context (class).|
| [QT_TRANSLATE_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_NOOP) |Marks the UTF-8 encoded string literal sourceText for delayed translation in the given context. |
| [QT_TRANSLATE_N_NOOP3](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_N_NOOP3) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the given context with the given comment.|
| [QT_TRANSLATE_N_NOOP](https://doc.qt.io/qt-6/qtglobal.html#QT_TRANSLATE_N_NOOP) |Marks the UTF-8 encoded string literal sourceText for numerator dependent delayed translation in the given context. |


Generate localization data
====
`ilib-loctool-webos-ts` plugin localization data as [TS file format](https://doc.qt.io/qt-5/linguist-ts-file-format.html).
TS file format used by QT Linguist


Generate QML file format
====
With ts files from loctool running, Developer need to run [lrelease](https://doc.qt.io/qt-5/linguist-manager.html#using-lrelease) to get QML file format. It's compact binary format that is used by the localized application.
The lrelease command line tool produces QM files out of TS files. The QM file format is a compact binary format that is used by the localized application. It provides extremely fast lookups for translations. The TS files lrelease processes can be specified at the command line, or given indirectly by a Qt .pro project file.

Reference
====
* https://doc.qt.io/qt-6/qml-qtqml-qt.html
* https://doc.qt.io/qt-6/qtglobal.html