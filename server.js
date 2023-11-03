const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.method);
    const { headers, url, method } = req;
    console.log(headers);
    console.log(url);
    console.log(method);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 200, message: "My First APi" }));
});
const PORT = 5000;
server.listen(PORT, () => console.log('server running on', server.address().port));