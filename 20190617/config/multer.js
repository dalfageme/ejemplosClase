// multer.js
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); // relativo al archivo principal del repo
    },
    filename: (req, file, callback) => {
        callback(null, parseInt(Math.random()*100) + file.originalname);
    }
});
const upload = multer({storage});

module.exports = upload;