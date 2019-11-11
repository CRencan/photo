var express = require("express")
var app = express()
var router = require("./controller/router.js")
    //设置模板引擎
app.set("view engine", "ejs")
    // 路由中间件静态页面
app.use(express.static("./public"))
app.use(express.static("./uploads"))
    // 首页
app.get("/", router.showIndex)
    // 相册页
app.get("/:albumName", router.showAlbum)
    // 上传
app.get("/:up", router.showUp)
app.post("/up", router.doPost)

// 404
app.use(function(req, res) {
    res.render("err", {
        "baseurl": req.pathname
    })
}) 8
app.listen(3000)