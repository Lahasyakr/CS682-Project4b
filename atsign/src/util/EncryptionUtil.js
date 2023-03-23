

module.exports = {
    base64Encode: base64Encode,
    base64Decode: base64Decode
};
function base64Encode(data) {
    let bufferObj = Buffer.from(data, "utf8");

    // Encoding into base64
    let base64String = bufferObj.toString("base64");
    return base64String;
}

function base64Decode(data) {
    let bufferObj = Buffer.from(data, "base64");
    let string = bufferObj.toString("utf8");
    return string;
}


