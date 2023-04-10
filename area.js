const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    console.log(q.t2);
    console.log(q.t3);
    var a = Number(q.t1);
    var b = Number(q.t2);
    var c = Number(q.t3);
    var area = (3.14)*a*a;
    var areae = b*c;
    res.write("Area of the circle is "+area);
    res.write("\n");
    res.write("Area of the rectangle is "+areae);
    res.end();
}).listen(8080);