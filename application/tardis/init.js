var Ambidex     = require("ambidex");

var bikeIndexExample = require("../init.js");

module.exports = new Ambidex.addons.TardisGallery(
  {
    "ambidexPromises":  [
                          bikeIndexExample
                        ],

    "settings":         {
                          "HOST":   "127.0.0.1",
                          "NAME":   "Bike Index TARDIS",

                          "URLS":   [
                                      "/",
                                      "/bikes/1035/",
                                      "/bikes/1041/",
                                    ]
                        }
  }
);
