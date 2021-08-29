/*const http = require("http");
const fs = require("fs"); //fs = file system
const sendResponse = (filename, statusCode,response) => {
    fs.readFile((filename),(error, data) =>{
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type","text/plain");
            response.end("error1");
        }else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type","text/html");
            response.end(data);
        }
    }); //get html file name
} 

const server = http.createServer((request, response) =>{
    const method = request.method;
    const url = request.url;

    if(method === "GET"){
        if (url === "/"){
            sendResponse("index.html",200,response);
        }else if (url === "/index.js"){
            sendResponse("index.js",200,response);
        }
        else if (url === "/vote.html"){
            sendResponse("vote.html",200,response);
        }
        else if (url === "/create.html"){
            sendResponse("create.html",200,response);
        }
        else {
            sendResponse("error.html",404,response);
        }
    }
});

const port = 3000;
const ip ="127.0.0.1";

server.listen(port, ip, () => {
    console.log('server is running at http://'+ip+":"+port);
});*/

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

