const multer =require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the destination folder where the uploaded files will be stored
      cb(null, 'public/images/products');
    },
    filename: function (req, file, cb) {
      // Specify a unique filename for the uploaded file
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  module.exports =upload