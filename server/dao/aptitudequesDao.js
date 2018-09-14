

var connectionProvider = require("../mysqlConnectionStringProvider.js");
var domain = require('domain');
var d = domain.create();
d.on('error', function (err) {
    console.error(err);
});

exports.createProductCategory = function (mcq,query_name, OnSuccessfulCallback) {


    var insertStatement = query_name+ " set ? ";
    console.log(insertStatement)
        var category = {

            Question: mcq.question,
            option1: mcq.optiona,
            option2: mcq.optionb,
            option3: mcq.optionc,
            option4: mcq.optiond,
            answer: mcq.answer,
            technique: mcq.technique
        };

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {
            console.log("if k andar aagya mai")
            var status = "Data Submitted Successfully"
            d.run(function () {
                connection.query(insertStatement, category, function (err, result) {

                    if (err) { throw err, status = "Data Submission Error", console.log(err) }

                    OnSuccessfulCallback(status);
                    console.log(result);

                });
            });
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }


}


exports.exceldata = function (tabelname, array, OnSuccessfulCallback) {
    console.log(tabelname);
    var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
    

    if (connection) {
        console.log("if k andar aagya mai")
        var first = array[0].join()
        var headers = first.split(',');
        for (var i = 1, length = array.length; i < length; i++) {
            var myRow = array[i].join();
            var row = myRow.split(',');

            var data = {};
            for (var x = 0; x < row.length; x++) {
                data[headers[x]] = row[x];

            }
      
            d.run(function () {
                connection.query("INSERT INTO spelling set ?",data, function (err, result) {

                    if (err) { throw err, status = "Data Submission Error", console.log(err) }
                    OnSuccessfulCallback();
                    console.log(result);

                });
            });   

        }

    
        
        connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
    }


}

exports.deleteQuestion = function (questionid, query, OnSuccessfulCallback) {

    querystatement = query + " where questionid =" + questionid;

    console.log(querystatement)

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

    if (connection) {
        console.log("if k andar aagya mai")
        d.run(function () {
        connection.query(querystatement, function (err, result) {

            if (err) { throw err, console.log(err) }
            OnSuccessfulCallback();
            console.log(result);

            });
        });
        connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
    }


}


exports.correctSequence = function (table_name, OnSuccessfulCallback) {

    querystatement = 'ALTER TABLE ' + table_name + '  DROP COLUMN questionid';

    
    var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

    if (connection) {
        console.log("if k andar aagya mai")
        var status = "Droped Successfully"
        d.run(function () {
        connection.query(querystatement, function (err, result) {

            if (err) { throw err, status = "error in Drop", console.log(err) }
            OnSuccessfulCallback();
            console.log(status);

            });
        });
        connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
    }


}

exports.sequenceCorrected = function (table_name, OnSuccessfulCallback) {


    querystatement = 'ALTER TABLE ' + table_name + ' ADD questionid INT PRIMARY KEY AUTO_INCREMENT;';

    var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();


    if (connection) {
        console.log("sequence if")
        var status = "Sequence Corrected Successfully"
        d.run(function () {
        connection.query(querystatement,function(err, result) {

            if (err) { throw err, status = "error in ADD", console.log(err) }
            OnSuccessfulCallback();
            console.log(status);

            });
        });

        connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
    }


}


exports.getAllMcqs=function(query_name, callback) {


    var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
    var querystatement = query_name;
    if (connection) {

        d.run(function () {
        connection.query(querystatement, function (err, rows) {

            if (err) { throw err, callback() }
            
            console.log(rows);
            callback(rows);
            rows = "";

            });
        });
        connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);



    }

}