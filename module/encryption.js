const crypto = require("crypto");

function encryption(plain, key) {
    const algorithm = "aes-256-cbc"; 

    const initVector = crypto.randomBytes(16);
    
    const message = plain;
    
    key = crypto.scryptSync(key, 'salt', 24);
    
    const cipher = crypto.createCipheriv(algorithm, key, initVector);
    
    let encryptedData = cipher.update(message, "utf-8", "hex");
    
    encryptedData += cipher.final("hex");
}

console.log(encryption("hello","Password"));