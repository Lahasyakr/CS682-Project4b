var EncryptionUtil = require("../../../atsign/src/util/EncryptionUtil");
var expect = require("chai").expect;
const fs = require("fs");
const {
  generateRSAKeyPair,
} = require("../../../atsign/src/util/EncryptionUtil");

describe("Base64 Encode and Decode Testing", function () {
  describe("Testing Base64 Encoding", function () {
    it("Returns an Encoded String", function () {
      //Ecoding the plain text
      encodeData = EncryptionUtil.base64Encode("Testing Base64 Encoded Data");

      expect(encodeData).to.equal("VGVzdGluZyBCYXNlNjQgRW5jb2RlZCBEYXRh");
    });
  });

  describe("Testing Base64 Decoding", function () {
    it("Returns a Decoded String", function () {
      //This text will be encoded first and then encoded data will be decoded to see if decoded text matches the original text.
      let EncodingText = "Testing Base64 Decoding Function";
      //Encoding 
      encodeData = EncryptionUtil.base64Encode(
        EncodingText
      );
      //decoding the encoded data
      result = EncryptionUtil.base64Decode(encodeData);
      //seeing if decoded data matches the original text
      expect(result).to.equal(EncodingText);
    });
  });
});

describe("AES Encryption and Decryption testing", function () {
  describe("AES Encryption testing", function () {
    it("Returns an Encrypted string", function () {
      // We already have a clear text and the key and the initialisation vector
      encodeData = EncryptionUtil.aesEncryptToBase64(
        "Testing AES Encoded Data",
        "7KgXQdb4xGSRG5serDpQt7nh2yxukGpNwa+ZMJsO31Y="
      );

      // Checking against the expected string
      expect(encodeData).to.equal(
        "aTXCi8Kuwo8aOR0NAnXDlF7CvsKVDVwswrvDnmkfw4fDjg=="
      );
    });
  });

  describe("AES Decryption testing", function () {
    it("Returns a decrypted text", function () {
      let key = EncryptionUtil.generateAESKeyBase64();
      let text = "Testing AES Encryption and Decryption of Data";
      //Encrypting text
      encryptedData = EncryptionUtil.aesEncryptToBase64(text, key);
      // testing the AES Decryption -> Decrypting the encryptedData
      decryptedData = EncryptionUtil.aesDecryptFromBase64(encryptedData, key);
      // checking if decrypted data matches the original text
      expect(decryptedData).to.equal(text);
    });
  });

  describe("AES decryption testing - for string with special characters", function () {
    it("Returns an decrypted text", function () {
      let key = EncryptionUtil.generateAESKeyBase64();
      let text = "Hello! ... CS682 Project-4b =>Testing Data";
      //Encrypting text
      encryptedData = EncryptionUtil.aesEncryptToBase64(text, key);
      // testing the AES Decryption -> Decrypting the encryptedData
      decryptedData = EncryptionUtil.aesDecryptFromBase64(encryptedData, key);

      expect(decryptedData).to.equal(text);
    });
  });
});

describe("RSA Encryption and Decryption with Signing and Verification testing", function () {
  //RSA KeyPair Generation Testing
  describe("RSA KeyPair Generation Testing", function () {
    it("Returns true if key has both public and private key", function () {
      let key = EncryptionUtil.generateRSAKeyPair();
      expect(key.hasOwnProperty("publicKey")).to.equal(true);
      expect(key.hasOwnProperty("privateKey")).to.equal(true);
    });
  });

  //RSA Encryption and Decryption Testing
  describe("RSA Encryption and Decryption testing", function () {
    it("Encrypt the text and then return a decrypted text", function () {
      let key = EncryptionUtil.generateRSAKeyPair();
      let publicKey = key.publicKey;
      let privateKey = key.privateKey;
      let text = "Testing RSA Encryption and Decryption of Data";
      //Encrypting text using RSA
      encryptedData = EncryptionUtil.rsaEncryptToBase64(text, publicKey);
      //Decrypting encrypted text using RSA
      decryptedData = EncryptionUtil.rsaDecryptFromBase64(encryptedData,privateKey);
      expect(decryptedData).to.equal(text);
    });
  });

  //Positive Test Case for verification
  describe("RSA Signing and Verification(Positive Test Case)", function () {
    it("Create a signature and return true if signature is verified", function () {
      let key = EncryptionUtil.generateRSAKeyPair();
      let publicKey = key.publicKey;
      let privateKey = key.privateKey;
      let text = "Testing RSA Verification";
      //Signature Method is called to create signature
      signature = EncryptionUtil._signSHA256RSA(text, privateKey);
      //Verification Method is called to verify the signature
      verification = EncryptionUtil.verifying(text, publicKey, signature);
      expect(verification).to.equal(true);
    });
  });

  //Negative Test Case for verification
  describe("RSA Signing and Verification(Negative Test Case)", function () {
    it("Create signature and return false if signature is not verified", function () {
      let key = EncryptionUtil.generateRSAKeyPair();
      let publicKey = EncryptionUtil.generateRSAKeyPair().publicKey;
      let privateKey = key.privateKey;
      let text = "Testing RSA Verification";
      //Signature Method is called to create signature
      signature = EncryptionUtil._signSHA256RSA(text, privateKey);
      //Verification Method is called to verify the signature
      verification = EncryptionUtil.verifying(text, publicKey, signature);
      expect(verification).to.equal(false);
    });
  });
});
