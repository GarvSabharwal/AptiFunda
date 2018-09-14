// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var routes = require('./routes');
var app = express();
var port = process.env.PORT || 80;

var passport = require('passport');
var flash = require('connect-flash');

// configuration ===============================================================
// connect to our database

// pass passport for configuration



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session






app.post('/upload', function (req, res) {

    var formidable = require('formidable');
    var fs = require('fs');
    var s = "";
    var tablename = "";
    var dao = require('./server/dao/aptitudequesDao.js');
    var sreverse = "";

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/public');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name

    var xlsx = require('excel');

    //xls('Sheet.xlsx', function(err, data) {
    //if(err) throw err;
    // data is an array of arrays
    //});


    form.on('file', function (field, file) {
        s = file.name;
        tablename = s.substring(0, s.length - 5);

        fs.rename(file.path, path.join(form.uploadDir, s));
        console.log(file.path, path.join(form.uploadDir, s));



        sreverse = s.split("").reverse().join("");
        console.log(sreverse.substring(0, 4));
        if (sreverse.substring(0, 4) == "xslx") {
            xlsx('public/' + tablename + '.xlsx', function (err, data) {
                if (err) throw err;
                dao.exceldata(tablename, data, function () {


                    console.log('data submitted');

                });
            });

        }




    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function (file) {

        if (sreverse.substring(0, 4) == "xslx") {
            fs.unlink('public/' + tablename + '.xlsx', function () {
                console.log('file deleted');
                res.render('selecttopic.ejs');
            });
        }
        else {
            res.render('selecttopic.ejs');
        }

    });

    // parse the incoming request containing the form data
    form.parse(req);

});



// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.get('/', routes.index);


var VerbalAbilityRouteConf = require('./routes/VerbalAbilityRouteConf.js');
new VerbalAbilityRouteConf(app);

var LogicalReasoningRouteConf = require('./routes/LogicalReasoningRouteConf.js');
new LogicalReasoningRouteConf(app);

var AdminRouteConf = require('./routes/AdminRouteConf.js');
new AdminRouteConf(app);

var AptitudeRouteConf = require('./routes/AptitudeRouteConf.js');
new AptitudeRouteConf(app);

var PythonRouteConf = require('./routes/PythonRouteConf.js');
new PythonRouteConf(app);

var JavaRouteConf = require('./routes/JavaRouteConf.js');
new JavaRouteConf(app);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
