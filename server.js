express = require("express");
multer = require("multer");
path = require("path");

var app = express();
var upload = multer();
var uploadType =upload.single('fileupload') // the name parameter must be the same as the name in the upload form

app.use(express.static(path.join(__dirname, "public")));

app.post('/uploaded', uploadType, function(req, res, next){
	console.log(req)
	console.log(req.file)
	console.log(req.body)
	var resObj = {"file size": req.file.size};
	res.send(resObj);
})


PORT = process.env.PORT || 3000
var server = app.listen(PORT, function(){
  console.log("Listening on port __", PORT);
})