function JavaRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
JavaRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}

JavaRouteConfigration.prototype.processRoutes = function () {


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


JavaRouteConfigration.prototype.addRoutes = function () {

    var self = this;

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/javaprogramming',
        callbackFunction: function (request, response) {


            response.render('java/javaprogramming', { title: "Aptitude", year: new Date().getFullYear() });
        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/what-is-java',
        callbackFunction: function (request, response) {

            response.render('java/what-is-java', { title: "Introduction to java", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/first_program_in_java',
        callbackFunction: function (request, response) {

            response.render('java/first_program_in_java', { title: "First Program In java", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_1',
        callbackFunction: function (request, response) {

            response.render('java/pp_1', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })
    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/input_operations',
        callbackFunction: function (request, response) {

            response.render('java/input_operations', { title: "Input Operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/output_operations',
        callbackFunction: function (request, response) {

            response.render('java/output_operations', { title: "Output operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_2',
        callbackFunction: function (request, response) {

            response.render('java/pp_2', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/data_types',
        callbackFunction: function (request, response) {

            response.render('java/data_types', { title: "Data Types", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/variables_literals',
        callbackFunction: function (request, response) {

            response.render('java/variables_literals', { title: "Variables and literals", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/more_on_strings',
        callbackFunction: function (request, response) {

            response.render('java/more_on_strings', { title: "More on Strings", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/type_conversion',
        callbackFunction: function (request, response) {

            response.render('java/type_conversion', { title: "Type Conversion", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_3',
        callbackFunction: function (request, response) {

            response.render('java/pp_3', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/basic_operators',
        callbackFunction: function (request, response) {

            response.render('java/basic_operators', { title: "Basic Operators", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/operator_precedence',
        callbackFunction: function (request, response) {

            response.render('java/operator_precedence', { title: "Operator Precedence", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_4',
        callbackFunction: function (request, response) {

            response.render('java/pp_4', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/decision_making_structures',
        callbackFunction: function (request, response) {

            response.render('java/decision_making_structures', { title: "Decision Making Structures", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_5',
        callbackFunction: function (request, response) {

            response.render('java/pp_5', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/loop_statement',
        callbackFunction: function (request, response) {

            response.render('java/loop_statement', { title: "Loop Statements", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/loop_control_statements',
        callbackFunction: function (request, response) {

            response.render('java/loop_control_statements', { title: "Loop Control Statements", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_1',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_1', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_6',
        callbackFunction: function (request, response) {

            response.render('java/pp_6', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/inbuilt_string_methods',
        callbackFunction: function (request, response) {

            response.render('java/inbuilt_string_methods', { title: "Inbuilt String Methods", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/string_formatting_operations',
        callbackFunction: function (request, response) {

            response.render('java/string_formatting_operations', { title: "String Formatting Operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_2',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_2', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_7',
        callbackFunction: function (request, response) {

            response.render('java/pp_7', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/lists',
        callbackFunction: function (request, response) {

            response.render('java/lists', { title: "Lists", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/tuples',
        callbackFunction: function (request, response) {

            response.render('java/tuples', { title: "Tuples", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/diff_list_and_tuple',
        callbackFunction: function (request, response) {

            response.render('java/diff_list_and_tuple', { title: "Difference Between Lists and Tuples", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/dictionaries',
        callbackFunction: function (request, response) {

            response.render('java/dictionaries', { title: "Dictionaries", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/sets',
        callbackFunction: function (request, response) {

            response.render('java/sets', { title: "Sets", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_3',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_3', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_8',
        callbackFunction: function (request, response) {

            response.render('java/pp_8', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/functions_in_java',
        callbackFunction: function (request, response) {

            response.render('java/functions_in_java', { title: "Functions In java", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pass_by_refrence',
        callbackFunction: function (request, response) {

            response.render('java/pass_by_refrence', { title: "Pass By Refrence", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/function_arguments',
        callbackFunction: function (request, response) {

            response.render('java/function_arguments', { title: "Function Arguments", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/return_statement_scope_variables',
        callbackFunction: function (request, response) {

            response.render('java/return_statement_scope_variables', { title: "Return Statement and Scope Variables", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_4',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_4', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_9',
        callbackFunction: function (request, response) {

            response.render('java/pp_9', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/import_statement',
        callbackFunction: function (request, response) {

            response.render('java/import_statement', { title: "Import Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_5',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_5', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_10',
        callbackFunction: function (request, response) {

            response.render('java/pp_10', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/opening_closing_files',
        callbackFunction: function (request, response) {

            response.render('java/opening_closing_files', { title: "Opening and Closing Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/reading_writing_files',
        callbackFunction: function (request, response) {

            response.render('java/reading_writing_files', { title: "Reading and Writing Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/renaming_deleting_files',
        callbackFunction: function (request, response) {

            response.render('java/renaming_deleting_files', { title: "Renaming and Deleting Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/directories_in_java',
        callbackFunction: function (request, response) {

            response.render('java/directories_in_java', { title: "Directories in java", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_6',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_6', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_11',
        callbackFunction: function (request, response) {

            response.render('java/pp_11', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/exception',
        callbackFunction: function (request, response) {

            response.render('java/exception', { title: "Exception", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/raising_expections_and_userdefined',
        callbackFunction: function (request, response) {

            response.render('java/raising_expections_and_userdefined', { title: "Raising Exceptions and UserDefined Exceptions", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_7',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_7', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_12',
        callbackFunction: function (request, response) {

            response.render('java/pp_12', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/classes_and_objects',
        callbackFunction: function (request, response) {

            response.render('java/classes_and_objects', { title: "Classes and Objects", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/methods',
        callbackFunction: function (request, response) {

            response.render('java/methods', { title: "Methods", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/java_memory_management',
        callbackFunction: function (request, response) {

            response.render('java/java_memory_management', { title: "java Memory Management", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/principles_of_object_orientation',
        callbackFunction: function (request, response) {

            response.render('java/principles_of_object_orientation', { title: "Principles of Object Orientation", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/problem_statement_8',
        callbackFunction: function (request, response) {

            response.render('java/problem_statement_8', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/java/pp_13',
        callbackFunction: function (request, response) {

            response.render('java/pp_13', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })



}
module.exports = JavaRouteConfigration;