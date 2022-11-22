import multer from 'multer'


const storage = multer.diskStorage({
    destination: (req, _file, cb) => {
        cb(null, 'server/public')
    },
    filename: (req, file, cb) => {
        // console.dir(cb)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

export default storage;