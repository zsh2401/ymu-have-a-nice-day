#!/usr/bin/env node
const ghpages = require("gh-pages")
ghpages.publish("dist", {
    branch: "master",
    repo: "https://e.coding.net/studio2401/toys/niceday.zsh2401.top.git"
},
    (err) => {
        if (err)
            console.log(err)
    })
