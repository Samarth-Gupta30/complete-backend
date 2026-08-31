const {ImageKit} = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    // src/services/storage.service.js
privateKey: process.env.IMAGE_PRIVATE_KEY,
})

async function uploadFile(buffer){

    const result = await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result; 
}

module.exports = uploadFile;