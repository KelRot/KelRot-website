const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'kelrot_blog',
    user     : 'root',
    password : '1234',
});

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}


const app = express();
app.use(cors(corsOptions));
app.use(express.json());


connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});


app.post("/", (req, res) => {
    let page = connection.escape(req.body.pageName);

    var sql = 'SELECT * FROM blogTable \
    WHERE blogTable.pageName=' + page;

    connection.query(sql, function (error, results, fields) {
        if (error)
            throw error;
        
        if(results.length < 1){
            res.send({result: false, message: "Invalid page"});
            return;
        }
        console.log(results);

        res.send({result: true, message: results[0]['pageString']});
       
    });

    console.log(page);
    //res.send("Seems fine to me lol " + req.body.pageName);
    
});


app.post("/changePage", (req, res) => {

    if(req.body.pass != '123'){
        res.send({result: false});
        return;
    }

    let page = connection.escape(req.body.page);
    let pageString = connection.escape(req.body.pageString);



    var sql = 'SELECT * FROM blogTable \
        WHERE blogTable.pageName=' + page + '';

    connection.query(sql, function (error, results, fields) {
        if (error)
            throw error;
        
        var sql;

        console.log(results);

        if(results.length < 1){
            sql = 'INSERT INTO blogTable (pageName, pageString) VALUES (' + page + ', ' + pageString + ')';
        }
        else{
            sql = 'UPDATE blogTable SET pageString=' + pageString + ' WHERE blogTable.pageName=' + page;
        }

        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            
            res.send({result: true, message: "Succesfully changed the page..."});
        }); 
    });
    
});


app.listen(3001, () => {
    console.log("Running on port 3001...");
});