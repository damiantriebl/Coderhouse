import multer from 'multer';
import path from 'path';
import {
    fileURLToPath
} from 'url';


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
    dest: path.join(__dirname, "../public/img/uploads")
});

export default upload;