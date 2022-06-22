if (typeof (document) !== "undefined") {
    //script

//     console.log(Hello);
var alrt = document.getElementById('alertBox').innerHTML = `<strong>Holy guacamole!</strong> You should check in on some of those fields below.
 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

module.exports = alrt;
}


// app.post('/signup', async (req, res) => {

//     const mail = req.body.email;
//     data = await Login.find({ email: mail });
//     if (data == 0) {
//         // count= count + 1;
//         // alert("the email is already registered")
//         // break;
//         var myData = new Login(req.body);
//         myData.save().then(async () => {
//             // res.render('complaintPage2.hbs',{data:data})

//             //   res.redirect('/Ideas/Views',{data})
//             res.render('login.hbs')
//         }).catch(() => {
//             res.status(400).send("The item was not saved to the database");
//         });
//     }
//     else {
//     //   res.status(200).send("The email is already registered")
//     res.render('signup.hbs');
//     // import Signupalert;
//     // console.log(Signupalert);
//     // console.log('signup')
       
//     }
//     // res.status(200).render('complaint.hbs');
// });
