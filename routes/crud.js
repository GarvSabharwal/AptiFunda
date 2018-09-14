var dao = require("../server/dao/aptitudequesDao.js");

exports.deletequestiondata=function (query, req, res) {

    dao.getAllMcqs(query, function (data) {

        dtotalStudents = data.length,
            dstudents = data;

        res.render('deleteQuestion', {
            students: dstudents,
            totalStudents: dtotalStudents,
            year: new Date().getFullYear(),

        });

    });

}



exports.questiondata=function (query, req, res, l, t,d) {

    console.log("question data mai aagya mai");
    dao.getAllMcqs(query, function (data) {


        console.log(data);
        if (data) {




            for (var i = 0; i < data.length; i++) {


            }

            console.log("if mai aagya mai");
            if (data.length == 0)
            { res.render('uploaded-soon.ejs', { title: "Work In Progress", year: new Date().getFullYear(), message: "" }); }

            else {


                console.log("else mai aagya mai");
                var totalStudents = data.length,
                    pageSize = 5,
                    pageCount = totalStudents / pageSize,
                    currentPage = 1,
                    students = [],
                    studentsArrays = [],
                    studentsList = [],
                    direction = "",
                    pageCount = Math.ceil(pageCount)



                students = data;


                console.log(students.length);
                while (students.length > 0) {

                    studentsArrays.push(students.splice(0, pageSize));

                }

                if (typeof req.query.page !== 'undefined') {
                    currentPage = +req.query.page;
                }

                studentsList = studentsArrays[+currentPage - 1];
                console.log(studentsList)

              res.render('questions', {
                    students: studentsList,
                    pageSize: pageSize,
                    totalStudents: totalStudents,
                    pageCount: pageCount,
                    currentPage: currentPage,
                    link: l,
                    title: t,
                    direction:d,
                    year: new Date().getFullYear(),

                });
                
            }
        }
        
        else {
            res.render('uploaded-soon.ejs', { title: "Work In Progress", year: new Date().getFullYear(), message: "" });
        }

    });

}