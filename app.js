const http = require("http");

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
    res.end("Hello from TSD Buildpack test2!");
}).listen(PORT, () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
