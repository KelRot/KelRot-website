const express = require("express")
const app = express()
const http = require("http").createServer(app)

const compressImages = require("compress-images")
const formidable = require("express-formidable")
app.use(formidable())

const fileSystem = require("fs")
app.set("view engine", "ejs")

const port = 3005


http.listen(port, function () {
	console.log("Server started running at port: " + port)

	app.post("/", function (request, result) {
        fileSystem.readdir(__dirname + '/uploads', async function (error, data) {
            if (error) 
                throw error
            data.forEach(img => {
                fileSystem.readFile(__dirname + "/uploads/" + img, async function (error, data) {
                    if (error) throw error
     
                    const filePath = __dirname + "/temp-uploads/" + (new Date().getTime()) + "-" + img
                    const compressedFilePath = __dirname + "/uploads/"
                    const compression = 15
                     
                    fileSystem.writeFile(filePath, data, function (error) {
                        if (error) throw error
                         
                        compressImages(filePath, compressedFilePath, { compress_force: false, statistic: true, autoupdate: true }, false,
                            { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
                            { png: { engine: "pngquant", command: ["--quality=" + compression + "-" + compression, "-o"] } },
                            { svg: { engine: "svgo", command: "--multipass" } },
                            { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
                            async function (error, completed, statistic) {
                                console.log("-------------")
                                console.log(error)
                                console.log(completed)
                                console.log(statistic)
                                console.log("-------------")
     
                                fileSystem.unlink(filePath, function (error) {
                                    if (error) throw error
                                })
                            }
                        )
     
                    })
     
                    fileSystem.unlink(__dirname + "/uploads/" + img, function (error) {
                        if (error) throw error
                    })
                })
            });
        })
        result.send("Completed or wrong data type");
	})

	app.get("/", function (request, result) {
		result.render("index")
	})
})