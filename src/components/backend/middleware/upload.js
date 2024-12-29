import multer from "multer";

// Set up storage configuration
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // Keep original file name
  }
});

// Create multer upload instance with the storage configuration
const upload = multer({ storage });

export default upload;
