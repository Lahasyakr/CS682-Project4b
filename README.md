# CS682-Project4b

<h3>Encryption and DeCryption - RSA, AES, and Base64 encode and decode</h3>

Welcome to the CS682-Project4b repository! This repository contains the code and resources for Project 4b of the CS682 course. In this project, we have implemented module for encryption and decryption using RSA, AES, and Base64 encoding/decoding.

## Table of Contents
- [Description](#description)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Description

In this project, we delve into the fascinating field of cryptography. We aim to build a module that can perform encryption and decryption of a string using different crypto algorithms.

## Setup

To run the code in this repository, please follow these steps:

1. Clone the repository:
      ```bash
   git clone https://github.com/Lahasyakr/CS682-Project4b.git
  
2. Navigate to the project directory:
      ```bash
    cd CS682-Project4b
    
3. Install the required dependencies:
     ```bash
     npm install
     
4. To run the test case:
     ```bash
     npm test
   


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
         
## License

This project is licensed under the [MIT License](LICENSE). Feel free to use the code for academic or personal purposes.

---

Thank you for visiting the CS682-Project4b repository! If you have any questions or need further assistance, please don't hesitate to open an issue or contact the repository owner. Enjoy exploring the world of cryptography!
         
   
         
