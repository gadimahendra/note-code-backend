const express = require('express')
const cors = require('cors')
const connectDb = require('./src/config/db_config')
const note = require('./src/routes/note.routes')

const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 5000;

connectDb()


app.use('/api/snippets', note)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});