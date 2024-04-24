import express from 'express'

const app =express();
app.use(express.json());

app.get('/', function(req,res) {
    res.json({
        msg : "helloworld"
    })
})

app.post('/', function(req,res) {
    const {username, password} = req.body;

    res.json({
        username,
        password
    })

})
  console.log('port is running on 3000')
app.listen(3000);
