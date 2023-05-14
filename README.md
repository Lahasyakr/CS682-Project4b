# CS682-Project4b

<p align="left">
  <img src="documentation/logos/atsign.png">
</p>

<h3>Encryption and DeCryption - RSA, AES, and Base64 encode and decode</h3>

Welcome to the CS682-Project4b repository! This repository contains the code and resources for Project 4b of the CS682 course. In this project, we have implemented module for encryption and decryption using RSA, AES, and Base64 encoding/decoding.

## Table of Contents
- [Description](#description)
- [Setup](#setup)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Description

In this project, we delve into the fascinating field of cryptography. We aim to build a module that can perform encryption and decryption of a string using different crypto algorithms.

<p><a href="https://lahasyakr.github.io/CS682-Project4b/documentation/index.html">click here to go to the code documents web page</a></p>


Our module is built and tested using <a href="https://nodejs.dev/en/">Nodejs</a> v18.14.0 .

## Setup

To run the code in this repository, please follow these steps:

1. Clone the repository:
      
        git clone https://github.com/Lahasyakr/CS682-Project4b.git
  
2. Navigate to the project directory:
      
        cd CS682-Project4b
    
3. Install the required dependencies:
          
          npm install
     
4. To run the test case:
         
         npm test
   

## Features
      1. Base64 encode and decode data.
      2. Generate RSA key pairs for encryption and decryption.
      3. Create and verify SHA256 RSA signatures.
      4. Encrypt and decrypt data using RSA encryption.
      5. Generate AES keys for encryption and decryption.
      6. Encrypt and decrypt data using AES encryption.
     
      
 ## Usage
  * Import EncryptionUtil Module 
  
        var EncryptionUtil = require("../../../atsign/src/util/EncryptionUtil");
        
  * way to access the functions
         
         let encodeData = EncryptionUtil.base64Encode("Testing Base64 Encoded Data");
         
         let key = EncryptionUtil.generateAESKeyBase64();
         
         ............similarly all the functions can be accessed....................
         
## License

This project is licensed under the [MIT License](LICENSE). 

---

Thank you for visiting the CS682-Project4b repository! If you have any questions or need further assistance, please don't hesitate to open an issue or contact the repository owner. Enjoy exploring the world of cryptography!
         
   
         
