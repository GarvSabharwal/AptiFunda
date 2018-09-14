function LogicalReasoningRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
LogicalReasoningRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}
////////////////////////////////////////////////////////////////////////////////////
LogicalReasoningRouteConfigration.prototype.processRoutes = function () {


    var self = this;
    self.routeTable.forEach(function (route) {

        if (route.requestType == 'get') {

            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {

            self.app.post(route.requestUrl, route.callbackFunction);
        }

    });
}

/////////////////////////////////////VARIABLES DECLARATION START////////////////////////////////////////////////////

LogicalReasoningRouteConfigration.prototype.addRoutes = function () {
    
    
    var self = this;
    var crud = require('./crud.js');
    
    //////////////////////////////////////////////////////////Logical Reasoning Start////////////////////////////////////////////////////////////////////////////

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning',
        callbackFunction: function (request, response) {


            response.render('logical reasoning/logical_reasoning', { title: "Logical Reasoning", year: new Date().getFullYear() });
        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/number_series',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM number_series ORDER BY questionid DESC";
                link = "/logical_reasoning/number_series";
                title = "Problems on Number Series";
                crud.questiondata(query_name, request, response, link, title);
                
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/verbal_classification',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM verbal_classification ORDER BY questionid DESC";
                link = "/logical_reasoning/verbal_classification";
                title = "Problems on Verbal Classification";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/analogies',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM analogies ORDER BY questionid DESC";
                link = "/logical_reasoning/analogies";
                title = "Problems on Analogies";
                crud.questiondata(query_name, request, response, link, title);

            }
        
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/matching_classification',
        callbackFunction: function (request, response) {

            
                query_name = "SELECT * FROM matching_classification ORDER BY questionid DESC";
                link = "/logical_reasoning/matching_classification";
                title = "Problems on Matching Classification";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/logical_games',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM logical_games ORDER BY questionid DESC";
                link = "/logical_reasoning/logical_games";
                title = "Problems on Logical Games";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/statement_and_assumtion',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM statement_and_assumtion ORDER BY questionid DESC";
                link = "/logical_reasoning/statement_and_assumtion";
                title = "Problems on Statement and Assumtion";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/statement_and_conclusion',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM statement_and_conclusion ORDER BY questionid DESC";
                link = "/logical_reasoning/statement_and_conclusion";
                title = "Problems on Statement and Conclusion";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/cause_and_effect',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM cause_and_effect ORDER BY questionid DESC";
                link = "/logical_reasoning/cause_and_effect";
                title = "Problems on Cause and Effect";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/logical_deduction',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM logical_deduction ORDER BY questionid DESC";
                link = "/logical_reasoning/logical_deduction";
                title = "Problems on Logical Deduction";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/letter_and_symbol_series',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM letter_and_symbol_series ORDER BY questionid DESC";
                link = "/logical_reasoning/letter_and_symbol_series";
                title = "Problems on Letter and Symbol Series";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/essential_part',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM essential_part ORDER BY questionid DESC";
                link = "/logical_reasoning/essential_part";
                title = "Problems on Essential Part";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/artificial_language',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM artificial_language ORDER BY questionid DESC";
                link = "/logical_reasoning/artificial_language";
                title = "Problems on Artificial Language";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/making_judgments',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM making_judgments ORDER BY questionid DESC";
                link = "/logical_reasoning/making_judgments";
                title = "Problems on Making Judgments";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/logical_problems',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM logical_problems ORDER BY questionid DESC";
                link = "/logical_reasoning/logical_problems";
                title = "Problems on Logical Problems";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/analyzing_arguments',
        callbackFunction: function (request, response) {

            
                query_name = "SELECT * FROM analyzing_arguments ORDER BY questionid DESC";
                link = "/logical_reasoning/analyzing_arguments";
                title = "Problems on Analyzing Arguments";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/course_of_action',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM course_of_action ORDER BY questionid DESC";
                link = "/logical_reasoning/course_of_action";
                title = "Problems on Course Of Action";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/theme_detection',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM course_of_action ORDER BY questionid DESC";
                link = "/logical_reasoning/theme_detection";
                title = "Problems on Theme Detection";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/logical_reasoning/statement_and_argument',
        callbackFunction: function (request, response) {
            
                query_name = "SELECT * FROM statement_and_argument ORDER BY questionid DESC";
                link = "/logical_reasoning/statement_and_argument";
                title = "Problems on Statement and Argument";
                crud.questiondata(query_name, request, response, link, title);

            }
    })
}
module.exports = LogicalReasoningRouteConfigration;
