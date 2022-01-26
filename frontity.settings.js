const settings = {
  "name": "wp",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "789BET",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            // [
            //   "Nature",
            //   "/category/nature/"
            // ],
            // [
            //   "Travel",
            //   "/category/travel/"
            // ],
            // [
            //   "Japan",
            //   "/tag/japan/"
            // ],
            // [
            //   "About Us",
            //   "/about-us/"
            // ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/react-wp"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
