# <a href="https://lahasyakr.github.io/CS682-Project4b/documentation/index.html">CryptoLib</a>




## Encryption and Decryption - RSA, AES, and Base64 encode and decode using Javascript

### CS682-Project4b 

Welcome to the CS682-Project4b repository! This repository contains the code and resources for Project 4b of the CS682 course. In this project, we have implemented module for encryption and decryption using RSA, AES, and Base64 encoding/decoding. The project can be used as a library in the javascript sdk by the Atsign company.

## Table of Contents
- [Description](#description)
- [Prerequisite](#prerequisite)
- [Setup](#setup)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Description

In this project, we delve into the fascinating field of cryptography. We aim to build a module that can perform encryption and decryption of a string using different crypto algorithms namely: 

* RSA 2048 Encryption and Decryption
* AES CTR 256 Encrypt/Decrypt
* Base Encode and Decode

About The Project:
* Language Used : Javascript
* Built and tested using : <a href="https://nodejs.dev/en/">Nodejs</a> v18.14.0</li>
* Framework used for testing: <a href ="https://mochajs.org/">Mocha and Chai</a> JavaScript test framework

## To learn more about the project click on the documentation link below:
## <a href="https://lahasyakr.github.io/CS682-Project4b/documentation/index.html">Documentation Web Page</a>

### To get the Github link to the repository click the link below:
<p> <a href="https://github.com/Lahasyakr/CS682-Project4b"> Github Repository</a></p>

## Prerequisite

* Download and Install NodeJS
  * Download NodeJS Installer from the official website:   <a href="https://nodejs.org/en/download"> Node.js Website</a>
  * Run the installer
  * Test NodeJS by printing the version:
      
        node -v
    
   * Test npm by printing the version:
          
          npm -v
   

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
      3. Signing and Verification process in RSA.
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
         

## Affiliations 
<p align="left">
  <img src="documentation/logos/atsign.png">
  <img align ="right" src="documentation/logos/umass.png">
</p>

## License
This project is licensed under the [MIT License](LICENSE). 


---

Thank you for visiting the CS682-Project4b repository! If you have any questions or need further assistance, please don't hesitate to open an issue or contact the repository owner. Enjoy exploring the world of cryptography!
         
   
         
