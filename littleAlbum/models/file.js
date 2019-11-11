var fs = require("fs")
exports.getAllAlbums = function(callback) {
    fs.readdir("./uploads", function(err, files) {
        if (err) {
            callback("没有找到uploads文件夹", null)
        }
        var allAlbums = [];
        // console.log(files)
        (function iterator(i) {
            if (i == files.length) {
                //遍历结束
                // console.log(allAlbums)
                callback(null, allAlbums)
                return
            }
            fs.stat("./uploads/" + files[i], (err, stats) => {
                if (err) {
                    callback("找不到文件" + files[i], null)
                }
                if (stats.isDirectory()) {
                    allAlbums.push(files[i])
                }
                iterator(i + 1)
            })
        })(0)

    })

}


// 通过文件名得到所有图片
exports.getAllImagesByAlbumName = function(albumName, callback) {
    fs.readdir("./uploads/" + albumName, function(err, files) {
        if (err) {
            callback("没有找到uploads文件", null)
            return

        }
        var allImages = [];
        // console.log(files)
        (function iterator(i) {
            if (i == files.length) {
                //遍历结束
                // console.log(allImages)
                callback(null, allImages)
                return
            }
            fs.stat("./uploads/" + albumName + "/" + files[i], (err, stats) => {
                if (err) {
                    callback("找不到文件" + files[i], null)
                }
                if (stats.isFile()) {
                    allImages.push(files[i])
                }
                iterator(i + 1)
            })
        })(0)
    })
}