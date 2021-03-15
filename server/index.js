const express=require('express');
const ejs=require ('ejs');
const { dirname } = require('node:path');
const path=require('path');
const bodyParser=require('body-parser');
const { stringify } = require('qs');

const clientPath=path.join(dirname,'../client/')
const staticPath=path.join(clientPath,'/static/');
const viewsPath=path.join(clientPath,'/views/')


const app=express();
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
name:'game'
secret:'secretkeyofsuccess'
saveUnintialized:true,
resave:true,
cookie:{
    maxAge:1000*60*60*24*3
}
}));
app.listen(2000);

app.set('view engine', 'ejs');
app.set('views',viewsPath);

});

var x=0;

const counter=function(req,res,next) {
    x++;
    console.log(x);
    next();
}
var userName='';
app.get('/',function(req,res) {
    console.log(req.session);
    res.render('index',{nomen:req. session.username});
});
    res.render('index'{nomen:userName});
});

app.get('/famous',counter,function(req,res) {
    res.render('famous',{count;x});
});

app.post('/welcome',(req,res)=>{
console.log(req.body);
res.redirect('/')
});