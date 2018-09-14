

var mysqlConnectionString = {


    connection: {

        dev:
        {
            host: "localhost",
            user: "root",
            password: "admin",
            database: "organization_management"


    }
        ,
        qa: {

            host: "sql6.freemysqlhosting.net",
            user: "sql6140381",
            password: "nsp78agJNK",
            database: "sql6140381"


        }


    }



};


module.exports.mysqlConnectionString = mysqlConnectionString;