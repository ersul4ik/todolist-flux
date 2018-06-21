const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_TASKS_QUERY = 'select * from task';
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '*********',
    database: '*********'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});


app.use(cors());


app.post('/todos', function (req, res) {
    connection.query('INSERT INTO task SET ?', req.query, function (error, results, fields) {
        if (error) {
            return res.send(error);
        }
        else {
            console.log("OK!");
            return res.json({
                data: results
            })
        }

    })
        });

app.post('/pop', (req, res) => {
    console.log(req.query.id);
   connection.query('DELETE FROM `task` WHERE `task_id`=?', [req.query.id], function (error, results, fields) {
        if (error) {
            return res.send(error);
        }
        else {
            return res.json({
                data: results
            })
        }

    })
});


app.get('/', (req, res) => {
    console.log("in DB");
    connection.query(SELECT_ALL_TASKS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send(JSON.stringify({data: results}));

        }

    })
});


app.listen(4000, () => {
    console.log('Application listen on 4000 port')
});
