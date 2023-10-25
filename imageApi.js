const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: "/var/www/storage/images",
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
})

const uploadSingle = upload.single('image')
app.post('/upload', uploadSingle, (req, res) => {
    res.send(`${req.file.filename}`)
})


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });