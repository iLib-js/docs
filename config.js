const config = {
    "gatsby": {
        "pathPrefix": "/docs",
        "siteUrl": "https://github.com/iLib-js",
        "gaTrackingId": "docs",
        "trailingSlash": false
    },
    "header": {
        "logo": "",
        "logoLink": "https://ilib-js.github.io/docs/",
        "title": "SW Internationalization  &amp; Localization",
        "githubUrl": "https://github.com/iLib-js/iLib",
        "helpUrl": "",
        "tweetText": "",
        "links": [
            { "text": "", "link": ""}
        ],
        "search": {
            "enabled": false,
            "indexName": "",
            "algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
            "algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
            "algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
        }
    },
    "sidebar": {
        "forcedNavOrder": [
            '/introduction', // add trailing slash if enabled above
            '/i18n',
            '/l10n',
            '/integration',
            '/knowledge',
            '/aboutus',
        ],
        "collapsedNav": [
            '/integration',
            '/knowledge', // add trailing slash if enabled above
        ],
        "links": [
            { "text": "iLib", "link": "https://ilib-js.github.io/iLib/docs/"},
            { "text": "loctool", "link": "https://ilib-js.github.io/loctool/"},
            { "text": "loctool samples", "link": "https://github.com/iLib-js/ilib-loctool-samples/"},
        ],
        "frontline": false,
        "ignoreIndex": true,
    },
    "siteMetadata": {
        "title": "",
        "description": "Documentation built with mdx.",
        "ogImage": null,
        "docsLocation": "https://github.com/iLib-js/docs/tree/master/content",
        "favicon": ""
    },
    "footer": {
        "copyright": 'Copyright © 2021,&nbsp;&nbsp;&nbsp; JEDLSoft'
    },
    "pwa": {
        "enabled": false, // disabling this will also remove the existing service worker.
        "manifest": {
            "name": "Gatsby Gitbook Starter",
            "short_name": "GitbookStarter",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "standalone",
            "crossOrigin": "use-credentials",
            icons: [
                {
                    src: "src/pwa-512.png",
                    sizes: `512x512`,
                    type: `image/png`,
                },
            ],
        },
    }
};

module.exports = config;
