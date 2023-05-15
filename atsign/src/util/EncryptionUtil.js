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
  rsaDecryptFromBase64: rsaDecryptFromBase64,
};




//Base64 encode
/**
 * Base64 encode
 *
 * @param {String} data
 * @returns {String}
 */
function base64Encode(data) {
  //creates new buffer - Buffer.from(obj, encoding); - here encoding is 'utf8'
  let bufferObj = Buffer.from(data, "utf8");

  // Encoding into base64 - here we get the string representation of the buffer where each byte is encoded as base64
  let base64String = bufferObj.toString("base64");

  // return the encoded string
  return base64String;
}





//Base64 decode
/**
 * 
 * @param {String} data 
 * @returns {String}
 */
function base64Decode(data) {
  //creates buffer - Buffer.from(obj, encoding); - here encoding is 'utf8'
  let bufferObj = Buffer.from(data, "base64");

  //decoding - here we get the string representation of the buffer where each byte is encoded as 'utf8'
  let string = bufferObj.toString("utf8");

  // return encoded string
  return string;
}






//RSA KeyPair Generation
/**
 * 
 * @returns {Object}
 */
function generateRSAKeyPair() {
  //Generating Key Pair for RSA
  //with standard modulus Length of 2048
  return ({ publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    //Encoding publickey
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    //Encoding privatekey
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  }));
}





//RSA Encryption
/**
 * 
 * @param {String} dataToBeEncrypted 
 * @param {*} publicKey 
 * @returns {String}
 */
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

  let base64Encode_RSA = encryptedText.toString("base64");
  return base64Encode_RSA;
}






//RSA Decryption
/**
 * 
 * @param {Base64 encoded encryptedData : String} encryptedData 
 * @param {*} privateKey 
 * @returns {String}
 */
function rsaDecryptFromBase64(encryptedData, privateKey) {
  //private key and padding is passed
  //decrypts the encrypted Data using privateDecrypt function
  let decryptedText = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(encryptedData, "base64")
  );

  //Decrypted message is in form of buffer
  //Converted to string to get original data
  let base64Decode_RSA = decryptedText.toString();
  return base64Decode_RSA;
}





//Signing
/**
 * 
 * @param {*} value 
 * @param {*} privateKey 
 * @returns {Buffer}
 */
function _signSHA256RSA(value, privateKey) {
  //By passing a string and privateKey in sign() function  of the crypto 
  //a signature of the sender is created for the encrypted data to be sent.
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
/**
 * 
 * @param {*} value 
 * @param {*} publicKey 
 * @param {*} signature 
 * @returns {boolean}
 */
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




/**
 * 
 * @returns {String}
 */
function generateAESKeyBase64() {
  // Generate random bytes to get the key and the initialisation vector
  return base64Encode(crypto.randomBytes(32));
}




// aes encryption
/**
 * 
 * @param {String} clearText 
 * @param {*} keyBase64 
 * @returns String
 */
function aesEncryptToBase64(clearText, keyBase64) {
  // parse key into buffer
  const key = Buffer.from(keyBase64, "base64");

  // For this project we have set the initialization vector to 16 bytes of zeroes for encryption and decryption   
  const iv = Buffer.alloc(16, 0);

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
/**
 * 
 * @param {String} cipherTextBase64 
 * @param {*} keyBase64 
 * @returns {String}
 */
function aesDecryptFromBase64(cipherTextBase64, keyBase64) {
  //parse key
  const key = Buffer.from(keyBase64, "base64");
  //initialization vector
  const iv = Buffer.alloc(16, 0);

   // parse initialization vector into buffer
  const initializationVector = Buffer.from(iv, "base64");

  // create the AES decipher using the key and the initialization vector
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    key,
    initializationVector
  );

  //Base64 decoding of the text that is need to be decrypted-(as encrpted message is base64 encoded before sending in AES Encryption)
  const clearText = base64Decode(cipherTextBase64);

  // Decrypt the text using AES decipher created above
  let decryptedData = decipher.update(clearText, "binary") + decipher.final();

  //return decrypted text
  return decryptedData;
}
