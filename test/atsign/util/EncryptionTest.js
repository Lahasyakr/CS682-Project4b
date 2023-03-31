var EncryptionUtil = require("../../../atsign/src/util/EncryptionUtil");
var expect = require("chai").expect;

describe("Base64EncodeDecode Testing", function () {
  describe("Testing Base64 Encoding", function () {
    it("Returns an Encoding String", function () {
      encodeData = EncryptionUtil.base64Encode("Testing Base64 Encoded Data");

      expect(encodeData).to.equal("VGVzdGluZyBCYXNlNjQgRW5jb2RlZCBEYXRh");
    });
  });

  describe("Testing Base64 Decoding", function () {
    it("Returns a Decoded String", function () {
      encodeData = EncryptionUtil.base64Encode(
        "Testing Base64 Decoding Function"
      );
      result = EncryptionUtil.base64Decode(encodeData);
      expect(result).to.equal("Testing Base64 Decoding Function");
    });
  });
});

describe("AES Encrypt Decrypt testing", function () {
  describe("AES Encryption testing", function () {
    it("Returns an Encrypted string", function () {
      encodeData = EncryptionUtil.aesEncryptToBase64(
        "Testing AES Encoded Data",
        "7KgXQdb4xGSRG5serDpQt7nh2yxukGpNwa+ZMJsO31Y=",
        "U+IpZE3OmfSUvSEvf1JLzg=="
      );

      expect(encodeData).to.equal(
        "UwnDu8KURMOYw4YCw7obw7nDgxU+w6Qrw6MRfjLCkDJ3SQ=="
      );
    });
  });

  describe("AES Decryption testing", function () {
    it("Returns an decrypted text", function () {
      let reqData = EncryptionUtil.generateAESKeyBase64();
      let key = reqData[0]
      let text = "Testing AES Encryption and Decryption of Data";
      let iv = reqData[1]
      //Encrypting text
      encryptedData = EncryptionUtil.aesEncryptToBase64(
        text,
        key,
        iv
      );
      // testing the AES Decryption -> Decrypting the encryptedData
      decryptedData = EncryptionUtil.aesDecryptFromBase64(
        encryptedData, key, iv
      );

      expect(decryptedData).to.equal(
        text
      );
    });
  });

  describe("AES decryption testing - for string with special characters", function () {
    it("Returns an decrypted text", function () {
      let reqData = EncryptionUtil.generateAESKeyBase64();
      let key = reqData[0]
      let text = "Hello! ... CS682 Project-4b =>Testing Data";
      let iv = reqData[1]
      //Encrypting text
      encryptedData = EncryptionUtil.aesEncryptToBase64(
        text,
        key,
        iv
      );
      // testing the AES Decryption -> Decrypting the encryptedData
      decryptedData = EncryptionUtil.aesDecryptFromBase64(
        encryptedData, key, iv
      );

      expect(decryptedData).to.equal(
        text
      );
    });
  });
});
