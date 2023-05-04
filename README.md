# CS682-Project4b
Encryption and DeCryption - RSA, AES, and  BASE64 encode and decode

# <h3>How to clone and use</h3>
   * Clone the repo and run following commands
      * npm install
      * to run the test cases - npm test

# Functions avaialble in EncryptionUtil Module.
    

      base64Encode - returns base64 encoded data (string -> base64),
      base64Decode - returns base64 decoded data (base64 -> string),
      generateRSAKeyPair - generates RSA public and private key,
      rsaEncryptToBase64 - RSA Encryption (string to RSA encrypted data),,
      _signSHA256RSA -  adds signature,
      verifying  - verify the signature,
      generateAESKeyBase64: generate AES key,
      aesEncryptToBase64: AES Encryption (string to AES encrypted data),
      aesDecryptFromBase64: AES Decryption,
      rsaDecryptFromBase64: RSA Decryption,
      
 # How to use?
  * Import EncryptionUtil Module 
  
        var EncryptionUtil = require("../../../atsign/src/util/EncryptionUtil");
        
  * way to access the functions
         
         let encodeData = EncryptionUtil.base64Encode("Testing Base64 Encoded Data");
         
         let key = EncryptionUtil.generateAESKeyBase64();
         
         ............similarly all the functions can be accessed....................
         
   
         
