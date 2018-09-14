function VerbalAbilityRouteConfigration(app) {
    this.app = app;
    this.routeTable = [];
    this.init();


}
///////////////////////////////////////////////////////////////////////////////////
VerbalAbilityRouteConfigration.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();

}
////////////////////////////////////////////////////////////////////////////////////
VerbalAbilityRouteConfigration.prototype.processRoutes = function () {


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

VerbalAbilityRouteConfigration.prototype.addRoutes = function () {
    
    var self = this;
    var crud = require('./crud.js');
    ///////////////////VERBAL ABILITY START////////////////////////////////////////////////////////////////////////////////


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability',
        callbackFunction: function (request, response) {


            response.render('verbal/verbalability', { title: "Verbal Ability", year: new Date().getFullYear() });

        }
    })

    

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/antonyms',
        callbackFunction: function (request, response) {

                direction = "In the following questions choose the word which is the exact OPPOSITE of the given words.";
                query_name = "SELECT * FROM antonyms ORDER BY questionid DESC";
                link = "/Verbal_Ability/antonyms";
                title = "Problems on Antonyms";
                crud.questiondata(query_name, request, response, link, title, direction);
            }})



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/change_of_voice',
        callbackFunction: function (request, response) {

            direction = "In the questions below the sentences have been given in Active/Passive voice. From the given alternatives, choose the one which best expresses the given sentence in Passive/Active voice.";
                query_name = "SELECT * FROM change_of_voice ORDER BY questionid DESC";
                link = "/aptitude/change_of_voice";
                title = "Problems on Change_of_Voice";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/change_of_speech',
        callbackFunction: function (request, response) {

            direction = "In the questions below the sentences have been given in Direct/Indirect speech. From the given alternatives, choose the one which best expresses the given sentence in Indirect/Direct speech.";
                query_name = "SELECT * FROM change_of_speech ORDER BY questionid DESC";
                link = "/Verbal_Ability/change_of_speech";
                title = "Problems on Change_of_Speech";
                crud.questiondata(query_name, request, response, link, title);

            }
    })





    //self.routeTable.push({

      //  requestType: 'get',
        //requestUrl: '/Verbal_Ability/closet_test',
        //callbackFunction: function (request, response) {
            
          //      query_name = "SELECT * FROM closet_test ORDER BY questionid DESC";
            //    link = "/Verbal_Ability/closet_test";
              //  title = "Problems on Closet_Test";
                //crud.questiondata(query_name, request, response, link, title);

//            }
  //  })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/completeing_statements',
        callbackFunction: function (request, response) {

            direction = "In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.";
                query_name = "SELECT * FROM completeing_statements ORDER BY questionid DESC";
                link = "/Verbal_Ability/completeing_statements";
                title = "Problems on Completeing_Statements";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    /*self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/comprehension',
        callbackFunction: function (request, response) {



                query_name = "SELECT * FROM comprehension ORDER BY questionid DESC";
                link = "/Verbal_Ability/comprehension";
                title = "Problems on Comprehension";
                crud.questiondata(query_name, request, response, link, title);

            }
    })*/



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/idoms_phrases',
        callbackFunction: function (request, response) {

            direction = "Some proverbs/idioms are given below together with their meanings. Choose the correct meaning of proverb/idiom, If there is no correct meaning given,'None of these' will be the answer.";    
                query_name = "SELECT * FROM idoms_phrases ORDER BY questionid DESC";
                link = "/Verbal_Ability/idoms_phrases";
                title = "Problems on Idoms_Phrases";
                crud.questiondata(query_name, request, response, link, title);

            }
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/ordering_of_sentence',
        callbackFunction: function (request, response) {

            direction = "In questions below, each passage consist of six sentences. The first and sixth sentence are given in the begining. The middle four sentences in each have been removed and jumbled up.  Find out the proper order for the four sentences.";
                query_name = "SELECT * FROM ordering_of_sentence ORDER BY questionid DESC";
                link = "/Verbal_Ability/ordering_of_sentence";
                title = "Problems on Ordering_of_Sentence";
                crud.questiondata(query_name, request, response, link, title);

            }
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/one_word_substitute',
        callbackFunction: function (request, response) {

            direction = "In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.";        
                query_name = "SELECT * FROM one_word_substitute ORDER BY questionid DESC";
                link = "/Verbal_Ability/one_word_substitute";
                title = "Problems on One_Word_Substitute";
                crud.questiondata(query_name, request, response, link, title);
            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/ordering_of_words',
        callbackFunction: function (request, response) {

                direction = "In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled below to produce the correct sentence. Choose the proper sequence.";
                query_name = "SELECT * FROM ordering_of_words ORDER BY questionid DESC";
                link = "/Verbal_Ability/ordering_of_words";
                title = "Problems on Ordering_of_Words";
                crud.questiondata(query_name, request, response, link, title);

            }
    })

    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/paragraph_formation',
        callbackFunction: function (request, response) {

            direction = "Rearrange the following five in proper sequence so as to for a meaningful paragraph, then answer the questions given below them.";
                query_name = "SELECT * FROM paragraph_formation ORDER BY questionid DESC";
                link = "/Verbal_Ability/paragraph_formation";
                title = "Problems on Paragraph_Formation";
                crud.questiondata(query_name, request, response, link, title);

            }
    })




    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/synonyms',
        callbackFunction: function (request, response) {

            direction = "In the following the questions choose the word which best expresses the meaning of the given word.";
                query_name = "SELECT * FROM synonyms ORDER BY questionid DESC";
                link = "/Verbal_Ability/synonyms";
                title = "Problems on Synonyms";
                crud.questiondata(query_name, request, response, link, title);

            }
        
    })




    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/spotting_errors',
        callbackFunction: function (request, response) {


            direction = "Read the each sentence to find out whether there is any grammatical error in it.The error, if any will be in one part of the sentence.The letter of that part is the answer.If there is no error, then Select No Error.";
                query_name = "SELECT * FROM spotting_errors ORDER BY questionid DESC";
                link = "/Verbal_Ability/spotting_errors";
                title = "Problems on Spotting_Errors";
                crud.questiondata(query_name, request, response, link, title);

            }
    })




    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/spelling',
        callbackFunction: function (request, response) {

            direction = "Find the correctly spelt words.";
                query_name = "SELECT * FROM spelling ORDER BY questionid DESC";
                link = "/Verbal_Ability/spelling";
                title = "Problems on Spelling";
                crud.questiondata(query_name, request, response, link, title);
            }
        
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/selecting_words',
        callbackFunction: function (request, response) {

            direction = "Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.";
                query_name = "SELECT * FROM selecting_words ORDER BY questionid DESC";
                link = "/Verbal_Ability/selecting_words";
                title = "Problems on Selecting_Words";
                crud.questiondata(query_name, request, response, link, title);

            }
    })





    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/sentence_formation',
        callbackFunction: function (request, response) {

            direction = "In each question below a sentence broken into five or six parts. Join these parts to make a meaningful sentence. The correct order of parts is the answer.";
                query_name = "SELECT * FROM sentence_formation ORDER BY questionid DESC";
                link = "/Verbal_Ability/sentence_formation";
                title = "Problems on Sentence_Formation";
                crud.questiondata(query_name, request, response, link, title);

            }
    })



    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/sentence_correction',
        callbackFunction: function (request, response) {

            direction = "Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.";
                query_name = "SELECT * FROM sentence_correction ORDER BY questionid DESC";
                link = "/Verbal_Ability/sentence_correction";
                title = "Problems on Sentence_Correction";
                crud.questiondata(query_name, request, response, link, title);
            }
        
    })




    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/sentence_improvement',
        callbackFunction: function (request, response) {

            direction = "In questions given below, Read question carefully and Correct the sentence according to option. Below are given alternatives to the incorrect part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, select no Improvement";
            query_name = "SELECT * FROM sentence_improvement ORDER BY questionid DESC";
                link = "/Verbal_Ability/sentence_improvement";
                title = "Problems on Sentence_Improvement";
                crud.questiondata(query_name, request, response, link, title);

            }
    })


    self.routeTable.push({

        requestType: 'get',
        requestUrl: '/Verbal_Ability/verbal_analogies',
        callbackFunction: function (request, response) {

            direction = "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship.";
                query_name = "SELECT * FROM verbal_analogies ORDER BY questionid DESC";
                link = "/Verbal_Ability/verbal_analogies";
                title = "Problems on Verbal_Analogies";
                crud.questiondata(query_name, request, response, link, title);

            }
    })




    ////////////////////////////////////////////////////////////VERBAL ABILITY ROUTE END//////////////////////////////////////////////////////////////////////////
    



    

}
module.exports = VerbalAbilityRouteConfigration;
