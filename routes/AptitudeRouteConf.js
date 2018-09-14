function AptitudeRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
AptitudeRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}
////////////////////////////////////////////////////////////////////////////////////
AptitudeRouteConfigration.prototype.processRoutes = function () {


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

AptitudeRouteConfigration.prototype.addRoutes = function () {
    
    var self = this;
    var crud = require('./crud.js');
    
    /////////////////////////////////////////////aptitude Route//////////////////////////////////////////////////////////
    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude',
        callbackFunction: function (request, response) {


            response.render('aptitude/aptitude', { title: "Aptitude", year: new Date().getFullYear() });
        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/numbers',
        callbackFunction: function (request, response) {

                 
            response.render('questions', {
                title: "Aptitude", direction: "d", year: new Date().getFullYear() });       
            
        }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/questions',
        callbackFunction: function (request, response) {

            console.log("yha aagya mai");
            direction="Solve the Following Questions on Numbers"
            query_name = "SELECT * FROM numbers ORDER BY questionid DESC";
            link = "/aptitude/numbers";
            title = "Problems on Numbers";
            crud.questiondata(query_name, request, response, link, title, direction);


        }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/hcf_lcm',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on HCF & LCM"
                query_name = "SELECT * FROM hcf_lcm ORDER BY questionid DESC";
                link = "/aptitude/hcf_lcm";
                title = "Problems on HCF_LCM";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/decimal_fractions',
        callbackFunction: function (request, response) {

                direction = "Solve the Following Questions on Decimal Fractions"
                query_name = "SELECT * FROM decimal_fractions ORDER BY questionid DESC";
                link = "/aptitude/decimal_fractions";
                title = "Problems on Decimal Fractions";
                crud.questiondata(query_name, request, response, link, title);

            }
        
    })
    
    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/simplifactions',
        callbackFunction: function (request, response) {

                direction = "Solve the Following Questions on Simplifications"
                query_name = "SELECT * FROM simplifactions ORDER BY questionid DESC";
                link = "/aptitude/simplifactions";
                title = "Problems on Simplifications";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/square_cube_root',
        callbackFunction: function (request, response) {

                direction = "Solve the Following Questions on Square and Cube Root"
                query_name = "SELECT * FROM square_cube_root ORDER BY questionid DESC";
                link = "/aptitude/square_cube_root";
                title = "Problems on Squareroot & Cuberoot";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/average',
        callbackFunction: function (request, response) {
            
                direction = "Solve the Following Questions on Averages"
                query_name = "SELECT * FROM average ORDER BY questionid DESC";
                link = "/aptitude/average";
                title = "Problems on Average";
                crud.questiondata(query_name, request, response, link, title);

            }
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/ages',
        callbackFunction: function (request, response) {

                direction = "Solve the Following Questions on Ages"
                query_name = "SELECT * FROM ages ORDER BY questionid DESC";
                link = "/aptitude/ages";
                title = "Problems on Ages";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/percentage',
        callbackFunction: function (request, response) {

                direction = "Solve the Following Questions on Percentages"
                query_name = "SELECT * FROM percentage ORDER BY questionid DESC";
                link = "/aptitude/percentage";
                title = "Problems on Percentage";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/profit_loss',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Profit and Loss"
                query_name = "SELECT * FROM profit_loss ORDER BY questionid DESC";
                link = "/aptitude/profit_loss";
                title = "Problems on Profit & Loss";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/ratio_proportion',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Ratio and Proportion"
                query_name = "SELECT * FROM ratio_proportion ORDER BY questionid DESC";
                link = "/aptitude/ratio_proportion";
                title = "Problems on Ratio & Proportion";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/time_work',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Time and Work"
                query_name = "SELECT * FROM time_work ORDER BY questionid DESC";
                link = "/aptitude/time_work";
                title = "Problems on Time & Work";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/pipes_cistern',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Pipes and Cistern"
                query_name = "SELECT * FROM pipes_cistern ORDER BY questionid DESC";
                link = "/aptitude/pipes_cistern";
                title = "Problems on Pipes & Cistern";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/time_distance',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Time and Distance"
                query_name = "SELECT * FROM time_distance ORDER BY questionid DESC";
                link = "/aptitude/time_distance";
                title = "Problems on Time & Distance";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/trains',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Trains"
                query_name = "SELECT * FROM trains ORDER BY questionid DESC";
                link = "/aptitude/trains";
                title = "Problems on Trains";
                crud.questiondata(query_name, request, response, link, title);
            }
        
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/boats_streams',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Boats and Streams"
                query_name = "SELECT * FROM boats_streams ORDER BY questionid DESC";
                link = "/aptitude/boats_streams";
                title = "Problems on Boats & Streams";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/aligation_mixture',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Aligation and Mixture"
                query_name = "SELECT * FROM aligation_mixture ORDER BY questionid DESC";
                link = "/aptitude/aligation_mixture";
                title = "Problems on Aligation & Mixture";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/simple_interest',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Simple Interest"
              query_name = "SELECT * FROM simple_interest ORDER BY questionid DESC";
                link = "/aptitude/simple_interest";
                title = "Problems on Simple Interest";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/compound_interest',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Compound Interest"
                query_name = "SELECT * FROM compound_interest ORDER BY questionid DESC";
                link = "/aptitude/compound_interest";
                title = "Problems on Compound Interest";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/logarithms',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Logarithms"
                query_name = "SELECT * FROM logarithms ORDER BY questionid DESC";
                link = "/aptitude/logarithms";
                title = "Problems on Logarithms";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/area',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Area of Figures"
                query_name = "SELECT * FROM area ORDER BY questionid DESC";
                link = "/aptitude/area";
                title = "Problems on Area";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/volume_surface_area',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Volume and Surface Areas"
                query_name = "SELECT * FROM volume_surface_area ORDER BY questionid DESC";
                link = "/aptitude/volume_surface_area";
                title = "Problems on Volume & Surface Area";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/races_game_skills',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Races and Games of Skill"
                query_name = "SELECT * FROM races_game_skills ORDER BY questionid DESC";
                link = "/aptitude/races_game_skills";
                title = "Problems on Race & Game";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/calender',
        callbackFunction: function (request, response) {

                
            direction = "Solve the Following Questions on Calender"
                query_name = "SELECT * FROM calender ORDER BY questionid DESC";
                link = "/aptitude/calender";
                title = "Problems on Calender";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/clocks',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Clocks"
                query_name = "SELECT * FROM clocks ORDER BY questionid DESC";
                link = "/aptitude/clocks";
                title = "Problems on Clocks";
                crud.questiondata(query_name, request, response, link, title);

            }
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/stocks_shares',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Stocks and Shares"
                query_name = "SELECT * FROM stocks_shares ORDER BY questionid DESC";
                link = "/aptitude/stocks_shares";
                title = "Problems on Stocks & Shares";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/permutation_combination',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Permutation and Combination"
                query_name = "SELECT * FROM permutation_combination ORDER BY questionid DESC";
                link = "/aptitude/permutation_combination";
                title = "Problems on Permutation & Combination";
                crud.questiondata(query_name, request, response, link, title);

            }
        
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/probability',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Probability"
                query_name = "SELECT * FROM probability ORDER BY questionid DESC";
                link = "/aptitude/probability";
                title = "Problems on Probability";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/oddman_out_series',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on ODD Man Out and Series"
                query_name = "SELECT * FROM oddman_out_series ORDER BY questionid DESC";
                link = "/aptitude/oddman_out_series";
                title = "Problems on oddman_out_series";
                crud.questiondata(query_name, request, response, link, title);


            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/surds_indices',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Surds and Indices"
                query_name = "SELECT * FROM surds_indices ORDER BY questionid DESC";
                link = "/aptitude/surds_indices";
                title = "Problems on Surds & Indices";
                crud.questiondata(query_name, request, response, link, title);
            }
        
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/partnership',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Partnership"
                query_name = "SELECT * FROM partnership ORDER BY questionid DESC";
                link = "/aptitude/partnership";
                title = "Problems on Partnership";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/chain_rule',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Chain Rule"
                query_name = "SELECT * FROM chain_rule ORDER BY questionid DESC";
                link = "/aptitude/chain_rule";
                title = "Problems on chain_rule";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/heights_distances',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Height and Distances"
            query_name = "SELECT * FROM heights_distances ORDER BY questionid DESC";
                link = "/aptitude/heights_distances";
                title = "Problems on heights_distances";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/true_discount',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on True Discount"
                query_name = "SELECT * FROM true_discount ORDER BY questionid DESC";
                link = "/aptitude/true_discount";
                title = "Problems on true_discount";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/aptitude/banker_discount',
        callbackFunction: function (request, response) {

            direction = "Solve the Following Questions on Banker Discount"
                query_name = "SELECT * FROM banker_discount ORDER BY questionid DESC";
                link = "/aptitude/banker_discount";
                title = "Problems on banker_discount";
                crud.questiondata(query_name, request, response, link, title);

            }
    })
}
module.exports = AptitudeRouteConfigration;
