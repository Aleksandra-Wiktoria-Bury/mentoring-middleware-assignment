const express = require('express');
const app = express();
const UserRoutes = require('./Routes/userRoutes')


app.use(express.json());
app.use('/user', UserRoutes)



app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})