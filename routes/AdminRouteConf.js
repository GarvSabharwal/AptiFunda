function AdminRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
AdminRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}
////////////////////////////////////////////////////////////////////////////////////
AdminRouteConfigration.prototype.processRoutes = function () {
    
    
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

AdminRouteConfigration.prototype.addRoutes = function () {

    var table_name;
    var delete_query_name;
    var query_inital;
    var self = this;
    var crud = require('./crud.js');
    
    /////////////////////////////////////VARIABLES DECLARATION END/////////////////////////////////////////////////////////////
   
    
    ////////////////////////////////////////ADD QUESTION ROUTE///////////////////////////////////////////////////
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/add_aptitude_ques',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                query_inital = "INSERT INTO"
                response.render('aptitude/selectaptitudechaptername', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }
        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/exceldata',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                query_inital = "INSERT INTO"
                response.render('aptitude/selectaptitudechaptername', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }
        }
    })
    
    ////////////////////////////////////////ADD QUESTION ROUTE END///////////////////////////////////////////////
    
    
    
    
    
    ///////////////////////////////////////DElETE QUestion Route//////////////////////////////////////////////////////
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/delete_aptitude_ques',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                query_inital = "DELETE FROM"
                response.render('aptitude/selectaptitudechaptername', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/add_verbal_ability_ques',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                query_inital = "INSERT INTO"
                console.log('add_verbal_ability_ques');
                response.render('verbal/selectverbalabilitychaptername', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/delete_verbal_ability_ques',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                query_inital = "DELETE FROM"
                response.render('verbal/selectverbalabilitychaptername', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }

        }
    })
    

    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/upload-images',
        callbackFunction: function (request, response) {
            
            
            
            if (request.isAuthenticated()) {
                response.render('upload-images', { title: "Upload Images Here", year: new Date().getFullYear(), message: "" });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }

        }
    })
    ///////////////////////////////////////DELETE QUESTION Route END///////////////////////////////////////////////////////////////////////
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/anumbers',
        callbackFunction: function (request, response) {
            
            
            
            if (request.isAuthenticated()) {
                
                table_name = "numbers";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM numbers ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    

    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/ahcf_lcm',
        callbackFunction: function (request, response) {
            
            
            
            if (request.isAuthenticated()) {
                
                table_name = "hcf_lcm";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM hcf_lcm ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/adecimal_fractions',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "decimal_fractions";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM decimal_fractions ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/asimplifactions',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "simplifactions";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM simplifactions ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/asquare_cube_root',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "square_cube_root";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM square_cube_root ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aaverage',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "average";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM average ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aages',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "ages";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM ages ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/apercentage',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "percentage";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM percentage ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aprofit_loss',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "profit_loss";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM profit_loss ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aratio_proportion',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "ratio_proportion";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM ratio_proportion ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/atime_work',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "time_work";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM time_work ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/apipes_cistern',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "pipes_cistern";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM pipes_cistern ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/atime_distance',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "time_distance";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM time_distance ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/atrains',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "trains";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM trains ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aboats_streams',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "boats_streams";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM boats_streams ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aaligation_mixture',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "aligation_mixture";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM aligation_mixture ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/asimple_interest',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "simple_interest";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM simple_interest ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/acompound_interest',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "compound_interest";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM compound_interest ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/alogarithms',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "logarithms";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM logarithms ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aarea',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "area";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM area ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/avolume_surface_area',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "volume_surface_area";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM volume_surface_area ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/araces_game_skills',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "races_game_skills";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM races_game_skills ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/acalender',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "calender";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM calender ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aclocks',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "clocks";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM clocks ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/astocks_shares',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "stocks_shares";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM stocks_shares ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/apermutation_combination',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "permutation_combination";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM permutation_combination ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aprobability',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "probability";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM probability ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aoddman_out_series',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "oddman_out_series";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM oddman_out_series ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/asurds_indices',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "surds_indices";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM surds_indices ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/apartnership',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "partnership";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM partnership ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/achain_rule',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "chain_rule";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM chain_rule ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/aheights_distances',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "heights_distances";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM heights_distances ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/atrue_discount',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "true_discount";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM true_discount ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/aptitude/abanker_discount',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "banker_discount";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM banker_discount ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    
    
    
    
/////////////////////////VERBAL ABILITY START//////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aantonyms',
        callbackFunction: function (request, response) {
            
            
            
            if (request.isAuthenticated()) {
                
                table_name = "antonyms";
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM antonyms ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/achange_of_voice',
        callbackFunction: function (request, response) {
            
            
            
            if (request.isAuthenticated()) {
                
                table_name = "change_of_voice";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM change_of_voice ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/achange_of_speech',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "change_of_speech";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM change_of_speech ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    
   /* self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/acloset_test',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "closet_test";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM closet_test ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    */
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/acompleteing_statements',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "completeing_statements";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM completeing_statements ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/acomprehension',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "comprehension";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Welcome Admin", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM comprehension ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aidoms_phrases',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "idoms_phrases";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Idoms Phrases", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM idoms_phrases ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aordering_of_sentence',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                
                table_name = "ordering_of_sentence";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Ordering of Sentence", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM ordering_of_sentence ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aone_word_substitute',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "one_word_substitute";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in One Word Substitute", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM one_word_substitute ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aordering_of_words',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "ordering_of_words";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Ordering of Words", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM ordering_of_words ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aparagraph_formation',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "paragraph_formation";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Paragraph Formation", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM paragraph_formation ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/asynonyms',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "synonyms";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Synonyms", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM synonyms ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aspotting_errors',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "spotting_errors";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Spotting Errors", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM spotting_errors ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aspelling',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "spelling";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Spelling", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM spelling ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }



        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/aselecting_words',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "selecting_words";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Selecting Words", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM selecting_words ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/asentence_formation',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "sentence_formation";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Sentence Formation", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM sentence_formation ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/asentence_correction',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "sentence_correction";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Sentence Correction", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM sentence_correction ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/asentence_improvement',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "sentence_improvement";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Sentence Improvement", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM sentence_improvement ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/Verbal_Ability/averbal_analogies',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "verbal_analogies";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Verbal Analogies", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM verbal_analogies ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }



        }
    })
    
    
    
    
    ////////////////////////////////////////////////////////////VERBAL ABILITY ROUTE END//////////////////////////////////////////////////////////////////////////
    
    
    
    //////////////////////////////////////////////////////////Logical Reasoning Start////////////////////////////////////////////////////////////////////////////
    
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/anumber_series',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "number_series";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Number Series", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM number_series ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/averbal_classification',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "verbal_classification";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Verbal Classification", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM verbal_classification ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/aanalogies',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "analogies";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Analogies", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM analogies ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/amatching_classification',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "matching_classification";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Matching Classification", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM matching_classification ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/alogical_games',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "logical_games";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Logical Games", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM logical_games ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/astatement_and_assumtion',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "statement_and_assumtion";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Statement and Assumption", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM statement_and_assumtion ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }
        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/astatement_and_conclusion',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "statement_and_conclusion";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Statement and Conclusion", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM statement_and_conclusion ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/acause_and_effect',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "cause_and_effect";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Cause and Effect", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM cause_and_effect ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/alogical_deduction',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "logical_deduction";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Logical Deduction", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM logical_deduction ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/aletter_and_symbol_series',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "letter_and_symbol_series";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Letter and Symbol Series", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM letter_and_symbol_series ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/aessential_part',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "essential_part";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Essesntial Part", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM essential_part ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/aartificial_language',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "artificial_language";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Artifical Language", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM artificial_language ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/amaking_judgments',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "making_judgments";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Making Judgements", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM making_judgments ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/alogical_problems',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "logical_problems";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Logical Problems", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM logical_problems ORDER BY questionid DESC";
                     crud.deletequestiondata(delete_query_name, request, response);
                }
            }


        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/aanalyzing_arguments',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "analyzing_arguments";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Analyzing Arguments", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM analyzing_arguments ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/acourse_of_action',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "course_of_action";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Course of Action", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM course_of_action ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/atheme_detection',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "theme_detection";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Theme Detection", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM theme_detection ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/logical_reasoning/astatement_and_argument',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                
                table_name = "statement_and_argument";
                
                if (query_inital == "INSERT INTO") {
                    response.render('aptitudeques', { title: "Add in Statement and Argument", status: "", submission: "", year: new Date().getFullYear() });
                }

                else if (query_inital == "DELETE FROM") {
                    
                    delete_query_name = "SELECT * FROM statement_and_argument ORDER BY questionid DESC";
                    crud.deletequestiondata(delete_query_name, request, response);
                }
            }

        }
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    self.routeTable.push({
        
        requestType: 'post',
        requestUrl: '/aptitudeques',
        callbackFunction: function (request, response) {
            
            if (request.isAuthenticated()) {
                var data = JSON.parse(JSON.stringify(request.body));
                
                console.log(data);
                var dao = require("../server/dao/aptitudequesDao.js");
                console.log(table_name);
                query_name = query_inital + " " + table_name;
                console.log(query_name);
                dao.createProductCategory(data, query_name, function (status) {
               
                    response.render('aptitudeques', { title: "Add Questions", status: status.toString().trim(), year: new Date().getFullYear() });


                });
            }
            else {
                
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }
        }
    })
    
    
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/dQuestion/',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                id = request.query.id;
                
                console.log(id);
                var dao = require("../server/dao/aptitudequesDao.js");
                query_name = query_inital + " " + table_name;
                console.log(query_name);
                dao.deleteQuestion(id, query_name, function () {
                    
                    crud.deletequestiondata(delete_query_name, request, response);
                 });
            }
            else {
                
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }
        }
    })
   
    ///////////////////////////////////////Correct Sequence Route//////////////////////////////////////////////////////
    self.routeTable.push({
        
        requestType: 'get',
        requestUrl: '/correctSequence',
        callbackFunction: function (request, response) {
            
            
            if (request.isAuthenticated()) {
                id = request.query.id;
                
                console.log(id);
                var dao = require("../server/dao/aptitudequesDao.js");
               
                dao.correctSequence(table_name, function () {
                    
                    dao.sequenceCorrected(table_name, function () {
                        
                        crud.deletequestiondata(delete_query_name, request, response);
                    });

                });
            }
            else {
                
                response.render('iamaptifundaadmin', { title: "ADMIN LOGIN", year: new Date().getFullYear(), message: "" });
            }

        }
    })
    
    ///////////////////////////////////////Correct Sequence Route END///////////////////////////////////////////////////////////////////////
    
 }
module.exports = AdminRouteConfigration;
