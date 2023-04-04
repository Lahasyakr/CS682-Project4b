const crypto = require("crypto");

module.exports = {
  base64Encode: base64Encode,
  base64Decode: base64Decode,
  generateRSAKeyPair: generateRSAKeyPair,
  rsaEncryptToBase64: rsaEncryptToBase64,
  _signSHA256RSA: _signSHA256RSA,
  verifying: verifying,
  generateAESKeyBase64: generateAESKeyBase64,
  aesEncryptToBase64: aesEncryptToBase64,
  aesDecryptFromBase64: aesDecryptFromBase64,
  rsaDecryptToBase64: rsaDecryptToBase64,
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
function generateRSAKeyPair() {
//Generating Key Pair for RSA
//with standard modulusLength of 2048
  return ({ publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    //Encoding publickey
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    //encoding privatekey
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  }));
}

//RSA Encryption
function rsaEncryptToBase64(dataToBeEncrypted, publicKey) {
    //public key and padding is passed
    //encrypts the data using publicEncrypt function
    let encryptedText = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      // Converting dataToBeEncrypted string to a buffer
      Buffer.from(dataToBeEncrypted)
    );
    return encryptedText;
  }

//RSA Decryption
function rsaDecryptToBase64(encryptedData, privateKey) {
  
    //private key and padding is passed
    //decrypts the encrypted Data using privateDecrypt function
    let decryptedText = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      encryptedData
    );

    //Decrypted message is in form of buffer
    //Converted to string to get original data
    let base64Encode_RSA = decryptedText.toString();
    return base64Encode_RSA;
  }

//Signing
function _signSHA256RSA(value, privateKey) {
// Converting value string to a buffer then
//using sha256 - converting to hexa decimal encoded string
  const signature = crypto.sign("sha256", Buffer.from(value), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  });

  //Signature is created using sign function of crypto
  return signature;
}

//Verifying the signature
function verifying(value, publicKey, signature) {

    //isVerified returns true if the private key used to create signature
    //and the public key used to verify are part of same keypair of RSA
  const isVerified = crypto.verify(
    // Converting value string to a buffer thenthen 
    //using sha256 - converting to hexa decimal encoded string
    "sha256",
    Buffer.from(value),
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    signature
  );
  //passed signature is verified using verifying of crypto
  // returns boolean
  return isVerified;
}

function generateAESKeyBase64() {
  // Generate random bytes to get the key and the initialisation vector
  return [
    base64Encode(crypto.randomBytes(32)),
    base64Encode(crypto.randomBytes(16)),
  ];
}

// aes encryption
function aesEncryptToBase64(clearText, keyBase64, iv) {
  // parse key into buffer
  const key = Buffer.from(keyBase64, "base64");

  // parse initialization vector
  const initializationVector = Buffer.from(iv, "base64");

  // create the AES cipher using the key and the initialization vector
  const cipher = crypto.createCipheriv(
    "aes-256-ctr",
    key,
    initializationVector
  );

  // encrypt the clearText data using the cipher created above
  let encrypted = cipher.update(clearText, "utf8", "binary");

  // convert the encrypted result into a binary
  encrypted += cipher.final("binary");

  // pack it as base64 and return
  return base64Encode(encrypted);
}

//  aes decryption
function aesDecryptFromBase64(cipherTextBase64, keyBase64, iv) {
  const key = Buffer.from(keyBase64, "base64");
  const initializationVector = Buffer.from(iv, "base64");
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    key,
    initializationVector
  );
  const clearText = base64Decode(cipherTextBase64);
  let decryptedData = decipher.update(clearText, "binary") + decipher.final();
  return decryptedData;
}
