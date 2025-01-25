const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Sarthak Zurale')
     res.json({
        id: "1",
	    name: "Ava",
        city: "Shrirampur"

     })
    //  res.sendStatus(200)
})
app.get('/a1',(req,res)=>{
    res.send('Hi')
})
app.get('/download',(req,res)=>{
    res.download('index.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})