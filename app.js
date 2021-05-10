const mysql = require('mysql');
const express = require('express');
const path = require('path');
const logger = require('./malware/logger');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'conneck'
});

// Malware
app.use(logger);
app.use(express.static(path.join(__dirname, 'client', 'static')));

// Dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.post('/dashboard', (req, res) => {
    // Save password in database
    //let sql = "INSERT INTO passwords ?";
    //let data = req.body;
    //db.query(sql, data, (err, data) => {
    //    if(err) throw err;
    //    res.send("Success");
    //});
    console.log(req.params);
});

// Account page
app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'account.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Liseting on port ${port}...`));