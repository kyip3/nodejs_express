const fs = require('fs'); //file system

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        //send back a input and a button
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head>Enter message</head>');
        res.write('<body><form action="/message" method="POST" ><input name="myInputMessage" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();//node js will send back to the client once end
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chuckOfDta)=>{
            console.log(chuckOfDta);
            body.push(chuckOfDta);
        }); //1. listen to event, e.g data event, send pieces of data in

        //this return will block the code from executing down
        return req.on('end',()=>{ //2. when is done, buffer them // this called in future
            const parsedBody = Buffer.concat(body).toString(); //to concat into 1 piece of info
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err)=>{ //if no err,then it will be null
                //shift to here because we want to redirect
                //only when we done writing the file
                res.statusCode = 302; //302 means redirection.
                res.setHeader('Location','/'); //redirect to localhost/
                return res.end();
            }); //write to text file
        });

        //comment and move on top
        // res.statusCode = 302; //302 means redirection.
        // res.setHeader('Location','/'); //redirect to localhost/
        // return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>Hello from my nodejs server</head>');
    res.write('</html>');
    res.end();//node js will send back to the client once end

};

//save requestHandler into module.exports list
module.exports = requestHandler;  //keyword via nodejs