const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));