const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/fpmb.html');
});

 
app.listen(port, () => {
    console.log(`服务器已启动: http://localhost:${port}`);
})
