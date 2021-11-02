#!/usr/bin/env node
const ghpages = require("gh-pages")
ghpages.publish("dist", {
    branch: "master",
    repo: "https://e.coding.net/studio2401/toys/ymu-have-a-nice-day.git"
},
    (err) => {
        console.log(err)
    })
