# CS682-Project4b

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
   

## Features
      Base64 encode and decode data.
      Generate RSA key pairs for encryption and decryption.
       Create and verify SHA256 RSA signatures.
      Encrypt and decrypt data using RSA encryption.
      Generate AES keys for encryption and decryption.
      Encrypt and decrypt data using AES encryption.
     
      
 ## Usage
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
         
   
         
