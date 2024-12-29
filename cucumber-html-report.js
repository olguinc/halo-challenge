const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "jsonlogs", // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "131",
        },
        device: "Local test machine",
        platform: {
            name: "Mac",
            version: "Sonoma",
        },
    },
});