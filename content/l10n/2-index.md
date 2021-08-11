---
title: "Xliff"
metaTitle: "loctool xliff"
metaDescription: "loctool xliff"
---

Xliff
====

**[XLIFF](https://en.wikipedia.org/wiki/XLIFF)** (XML Localization Interchange File Format) is an XML-based bitext format created to standardize the way localizable data are passed between and among tools during a localization process and a common format for CAT tool exchange. 
the first fully ratified version of XLIFF appeared as XLIFF Version 1.2 in _February 2008_. Its current specification is v2.1 released on _2018-02-13_, which is backward compatible with v2.0 released on _2014-08-05_.

The specification is aimed at the localization industry. It specifies elements and attributes to store content extracted from various original file formats and its corresponding translation. The goal was to abstract the localization skills from the engineering skills related to specific formats such as HTML.

XLIFF is part of the Open Architecture for XML Authoring and Localization ([OAXAL](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=oaxal)) reference architecture.


Xliff 1.2 vs 2.0
====
XLIFF (XLIFF 1.2) is the most-widely used file format in the translation industry. It can be seen as the mirror of the source file that breaks down source content into various segments stored in tags 
(e.g. `<trans-unit>`, `<seg-source>)`. 

XLIFF 2.0 is an update on the more commonly used XLIFF 1.2. Similar to its predecessor, 
it is an XML-based variation that uses tags such as `<source>`, `<target>` to store original and translated texts for a given source file.  
In addition, it also extracts non-translatable data including variables, codes, and comments and saves them in its customized elements.  

Compared with XLIFF 1.2, XLIFF 2.0 has the advantage of simplicity, which comes from its better organized DOM structure and application of modularity.  

Note: XLIFF 2.0 has a different DOM structure than XLIFF 1.2. Therefore, the two formats are most times _incompatible_. 


Xliff for loctool
====
loctool supports both versions. The default value is XLIFF 1.2
In order to read/write XLIFF 2.0 format, Add option `-2` to specify the version while running loctool


Reference
====
* [XLIFF 2.0 Specification](http://docs.oasis-open.org/xliff/xliff-core/v2.0/xliff-core-v2.0.html)
* [XLIFF 1.2 Specification](http://docs.oasis-open.org/xliff/xliff-core/xliff-core.html)