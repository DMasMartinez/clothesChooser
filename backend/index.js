const server = require("./src/server")
const {database} = require("./src/db")
PORT = 3001
database.sync({force:true}).then(async()=>{
    await server.listen(PORT, ()=>{
        console.log(`abriendo servidor en el port ${PORT}`)
    })
}).catch((err)=>console.log(err))
