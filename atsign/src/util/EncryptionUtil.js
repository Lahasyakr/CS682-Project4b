

module.exports = {
    base64Encode: base64Encode,
    base64Decode: base64Decode,
    generateRSAKeyPair:generateRSAKeyPair,
    rsaEncryptToBase64: rsaEncryptToBase64,
    _signSHA256RSA:_signSHA256RSA,
    verifying:verifying
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

//RSA KeyPair Generation
const crypto = require("crypto");
function generateRSAKeyPair() {
    return { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem'
        }
    });
}

//RSA Encryption
function rsaEncryptToBase64(dataToBeEncrypted,publicKey) {
    let encryptedText = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(dataToBeEncrypted)
    );
    let base64Encode_RSA = encryptedText.toString("base64")
    return base64Encode_RSA
}

//Signing
function _signSHA256RSA(value,privateKey){
    const signature = crypto.sign("sha256", Buffer.from(value), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    })
    return signature.toString("base64")
}

//Verifying the signature
function verifying(value,publicKey,signature){
    const isVerified = crypto.verify(
        "sha256",
        Buffer.from(value),
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        },
        signature
    )
    return isVerified
 }