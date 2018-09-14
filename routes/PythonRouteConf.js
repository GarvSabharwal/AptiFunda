function PythonRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
PythonRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}

PythonRouteConfigration.prototype.processRoutes = function () {


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


PythonRouteConfigration.prototype.addRoutes = function () {

    var self = this;

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python',
        callbackFunction: function (request, response) {


            response.render('python/python', { title: "Python", status: "", submission: "", year: new Date().getFullYear() });
            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/introduction',
        callbackFunction: function (request, response) {

            response.render('python/introductiontopython', { title: "Introduction to Python", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/first_program_in_python',
        callbackFunction: function (request, response) {

            response.render('python/first_program_in_python', { title: "First Program In Python", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_1',
        callbackFunction: function (request, response) {

            response.render('python/pp_1', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })
    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/input_operations',
        callbackFunction: function (request, response) {

            response.render('python/input_operations', { title: "Input Operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/output_operations',
        callbackFunction: function (request, response) {

            response.render('python/output_operations', { title: "Output operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_2',
        callbackFunction: function (request, response) {

            response.render('python/pp_2', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/data_types',
        callbackFunction: function (request, response) {

            response.render('python/data_types', { title: "Data Types", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/variables_literals',
        callbackFunction: function (request, response) {

            response.render('python/variables_literals', { title: "Variables and literals", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/more_on_strings',
        callbackFunction: function (request, response) {

            response.render('python/more_on_strings', { title: "More on Strings", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/type_conversion',
        callbackFunction: function (request, response) {

            response.render('python/type_conversion', { title: "Type Conversion", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_3',
        callbackFunction: function (request, response) {

            response.render('python/pp_3', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/basic_operators',
        callbackFunction: function (request, response) {

            response.render('python/basic_operators', { title: "Basic Operators", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/operator_precedence',
        callbackFunction: function (request, response) {

            response.render('python/operator_precedence', { title: "Operator Precedence", status: "", submission: "", year: new Date().getFullYear() });

        }
    })
    
    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_4',
        callbackFunction: function (request, response) {

            response.render('python/pp_4', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/decision_making_structures',
        callbackFunction: function (request, response) {

            response.render('python/decision_making_structures', { title: "Decision Making Structures", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_5',
        callbackFunction: function (request, response) {

            response.render('python/pp_5', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/loop_statement',
        callbackFunction: function (request, response) {

            response.render('python/loop_statement', { title: "Loop Statements", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/loop_control_statements',
        callbackFunction: function (request, response) {

            response.render('python/loop_control_statements', { title: "Loop Control Statements", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_1',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_1', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_6',
        callbackFunction: function (request, response) {

            response.render('python/pp_6', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/inbuilt_string_methods',
        callbackFunction: function (request, response) {

            response.render('python/inbuilt_string_methods', { title: "Inbuilt String Methods", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/string_formatting_operations',
        callbackFunction: function (request, response) {

            response.render('python/string_formatting_operations', { title: "String Formatting Operations", status: "", submission: "", year: new Date().getFullYear() });

        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_2',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_2', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_7',
        callbackFunction: function (request, response) {

            response.render('python/pp_7', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/lists',
        callbackFunction: function (request, response) {

            response.render('python/lists', { title: "Lists", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/tuples',
        callbackFunction: function (request, response) {

            response.render('python/tuples', { title: "Tuples", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/diff_list_and_tuple',
        callbackFunction: function (request, response) {

            response.render('python/diff_list_and_tuple', { title: "Difference Between Lists and Tuples", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/dictionaries',
        callbackFunction: function (request, response) {

            response.render('python/dictionaries', { title: "Dictionaries", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/sets',
        callbackFunction: function (request, response) {

            response.render('python/sets', { title: "Sets", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_3',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_3', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_8',
        callbackFunction: function (request, response) {

            response.render('python/pp_8', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/functions_in_python',
        callbackFunction: function (request, response) {

            response.render('python/functions_in_python', { title: "Functions In Python", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pass_by_refrence',
        callbackFunction: function (request, response) {

            response.render('python/pass_by_refrence', { title: "Pass By Refrence", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/function_arguments',
        callbackFunction: function (request, response) {

            response.render('python/function_arguments', { title: "Function Arguments", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/return_statement_scope_variables',
        callbackFunction: function (request, response) {

            response.render('python/return_statement_scope_variables', { title: "Return Statement and Scope Variables", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_4',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_4', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_9',
        callbackFunction: function (request, response) {

            response.render('python/pp_9', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/import_statement',
        callbackFunction: function (request, response) {

            response.render('python/import_statement', { title: "Import Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_5',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_5', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_10',
        callbackFunction: function (request, response) {

            response.render('python/pp_10', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/opening_closing_files',
        callbackFunction: function (request, response) {

            response.render('python/opening_closing_files', { title: "Opening and Closing Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/reading_writing_files',
        callbackFunction: function (request, response) {

            response.render('python/reading_writing_files', { title: "Reading and Writing Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/renaming_deleting_files',
        callbackFunction: function (request, response) {

            response.render('python/renaming_deleting_files', { title: "Renaming and Deleting Files", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/directories_in_python',
        callbackFunction: function (request, response) {

            response.render('python/directories_in_python', { title: "Directories in Python", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_6',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_6', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_11',
        callbackFunction: function (request, response) {

            response.render('python/pp_11', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/exception',
        callbackFunction: function (request, response) {

            response.render('python/exception', { title: "Exception", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/raising_expections_and_userdefined',
        callbackFunction: function (request, response) {

            response.render('python/raising_expections_and_userdefined', { title: "Raising Exceptions and UserDefined Exceptions", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_7',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_7', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_12',
        callbackFunction: function (request, response) {

            response.render('python/pp_12', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/classes_and_objects',
        callbackFunction: function (request, response) {

            response.render('python/classes_and_objects', { title: "Classes and Objects", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/methods',
        callbackFunction: function (request, response) {

            response.render('python/methods', { title: "Methods", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/python_memory_management',
        callbackFunction: function (request, response) {

            response.render('python/python_memory_management', { title: "Python Memory Management", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/principles_of_object_orientation',
        callbackFunction: function (request, response) {

            response.render('python/principles_of_object_orientation', { title: "Principles of Object Orientation", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/problem_statement_8',
        callbackFunction: function (request, response) {

            response.render('python/problem_statement_8', { title: "Problem Statement", status: "", submission: "", year: new Date().getFullYear() });

        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/python/pp_13',
        callbackFunction: function (request, response) {

            response.render('python/pp_13', { title: "Practice Problems", status: "", submission: "", year: new Date().getFullYear() });

        }
    })



}
module.exports = PythonRouteConfigration;