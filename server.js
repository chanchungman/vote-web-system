

const Koa = require("koa");
const fs = require("fs");

const app = new Koa();

app
  .use(ctx => {
    if (ctx.request.path === '/') {
    ctx.type = "html";
    ctx.body = fs.readFileSync("index.html");
    }
    else if (ctx.request.path === '/index.js') {
    ctx.type = "js";
    ctx.body = fs.readFileSync("index.js");
    }
    else if (ctx.request.path === '/index.css') {
    ctx.type = "css";
    ctx.body = fs.readFileSync("index.css");
    }

    else if (ctx.request.path === '/search.html') {
        ctx.type = "html";
        ctx.body = fs.readFileSync("search.html");
        }
    else if (ctx.request.path === '/search.js') {
        ctx.type = "js";
        ctx.body = fs.readFileSync("search.js");
    }
    
    else if (ctx.request.path === '/vote.html') {
    ctx.type = "html";
    ctx.body = fs.readFileSync("vote.html");
    }
    else if (ctx.request.path === '/vote.js') {
    ctx.type = "js";
    ctx.body = fs.readFileSync("vote.js");
    }
    else if (ctx.request.path === '/vote.css') {
    ctx.type = "css";
    ctx.body = fs.readFileSync("vote.css");
    }
    
    else if (ctx.request.path === '/hotvote.html') {
    ctx.type = "html";
    ctx.body = fs.readFileSync("hotvote.html");
    }
    else if (ctx.request.path === '/hotvote.js') {
    ctx.type = "js";
    ctx.body = fs.readFileSync("hotvote.js");
    }

    else if (ctx.request.path === '/createvote.html') {
    ctx.type = "html";
    ctx.body = fs.readFileSync("createvote.html");
    }
    else if (ctx.request.path === '/createvote.js') {
    ctx.type = "js";
    ctx.body = fs.readFileSync("createvote.js");
    }
    else if (ctx.request.path === '/createvote.css') {
    ctx.type = "css";
    ctx.body = fs.readFileSync("createvote.css");
    }
    else if (ctx.request.path === '/recentend.html') {
        ctx.type = "html";
        ctx.body = fs.readFileSync("recentend.html");
    }
    else if (ctx.request.path === '/recentend.js') {
        ctx.type = "js";
        ctx.body = fs.readFileSync("recentend.js");
    }
    else if (ctx.request.path === '/firebase_config.js') {
        ctx.type = "js";
        ctx.body = fs.readFileSync("firebase_config.js");
    }
    
    else if (ctx.request.path === '/error.css') {
        ctx.type = "css";
        ctx.body = fs.readFileSync("error.css");
    }
    else if (ctx.request.path === '/error.js') {
        ctx.type = "js";
        ctx.body = fs.readFileSync("error.js");
    }
    else {
    ctx.type = "html";
    ctx.body = fs.readFileSync("error.html");
        }
    }

)
  .listen(3000);

