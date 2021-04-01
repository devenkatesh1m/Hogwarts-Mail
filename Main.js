const nodemailer=require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

// let names=['Mr.Venkatesh','Mr.Prem Krishna','Mrs.Pavani','Ms.Tejaswini']
let namesWithEmail={
    'Mr.Venkatesh':'pvenkatesh483@gmail.com',
    'Mr.Developer Venky':'devenkatesh1m@gmail.com',
    'Mr.Prem Krishna':'premkrishnakurakula@gmail.com ',
    'Mrs.Pavani':'pavaniparu23111998@gmail.com ',
    'Ms.Tejaswini':'tejaswini.a98@gmail.com ',
    'Mr.Rohith':'jayarohithvemula@gmail.com ',
    'Mr.Kalyan':'saikalyanalapati@gmail.com '
}


// var mailOptions={
//     from:'no.reply.depv@gmail.com',
//     to:'pvenkatesh483@gmail.com,devenkatesh1m@gmail.com',
//     subject:'nodemailer test - 6',
//     html:'<div style="font-family:\'Brush Script MT\', cursive; font-size: 22px;margin-bottom:20px" >'+
//     '<p>Congratulations Mr.Venkatesh,</p>'+
//     '<p style="text-indent: 60px;">You have been accepted at the <b><u>hogwarts school of witch craft and wizardry</u></b>.Please accept to be a part of the greatest magical school ever.</p>'
// +'</div>'
// +'<a href="https://devenkatesh1m.github.io/hogwarts-letter.github.io/" style="background-color: #44CC44; color: #FFF; border: none; padding: 15px 20px;  box-shadow: 0 4px 0 0 #2EA62E; margin:20px;text-decoration:none">Accept</a>'+
//  '<a href="https://devenkatesh1m.github.io/hogwarts-letter.github.io/" style="background-color: tomato; color: #FFF;border: none; padding: 15px 20px;  box-shadow: 0 4px 0 0 #CB4949; margin:20px;text-decoration:none">Be a Muggle</a>'
// };
// transporter.sendMail(mailOptions,function(err,info){
//     if(err){
//         console.log('error',err);
//     }
//     else{
//         console.log('info',info);
//     }
// });

function sendMail(name,email){
    var mailOptions={
        from:'no.reply.depv@gmail.com',
        to:email,
        subject:'Hogwarts Letter',
        html:'<div style="font-family:\'Brush Script MT\', cursive; font-size: 22px;margin-bottom:20px" >'+
        '<p>Dear '+name+',</p>'+
        '<p style="text-indent: 60px;">We are Pleased to Inform you that you have been accepted at the <b><u>Hogwarts School of Witch craft and wizardry</u></b>.Students will be required to accept the invitation.Click on accept to be a part of the greatest magical school.</p>'
    +'</div>'
    +'<img src=\'https://wallpapercave.com/wp/wp3002556.jpg\'\\>'
    +'<a href="https://devenkatesh1m.github.io/hogwarts-letter.github.io/" style="background-color: #44CC44; color: #FFF; border: none; padding: 15px 20px;  box-shadow: 0 4px 0 0 #2EA62E; margin:20px;text-decoration:none">Accept</a>'+
     '<a href="https://devenkatesh1m.github.io/hogwarts-letter.github.io/" style="background-color: tomato; color: #FFF;border: none; padding: 15px 20px;  box-shadow: 0 4px 0 0 #CB4949; margin:20px;text-decoration:none">Be a Muggle</a>'
    };
    let transporter=nodemailer.createTransport(new SMTPTransport({
        service:'gmail',
        auth:{
            user:'no.reply.depv@gmail.com',
            pass:'HogWarts909'
        }
    }));
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log('error in sending mail to '+email,err);
        }
        else{
            console.log('Mail sent to:'+email,info);
        }
    });
}
Object.keys(namesWithEmail).forEach(key=>{
    sendMail(key,namesWithEmail[key]);
});