// import encryption from "./module/encryption";
// import crypto from "./node_modules/";

const crypto = require("crypto");

const encryptButton = document.getElementById('encrypt-button');
// const fileImage = document.getElementById('imageEn');

function encryption(plain, key) {
        const algorithm = "aes-256-cbc"; 
    
        // generate 16 bytes of random data
        const initVector = crypto.randomBytes(16);
    
        // protected data
        const message = plain;
    
        // secret key generate 32 bytes of random data
        const Securitykey = crypto.randomBytes(32);
    
        // the cipher function
        const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    
        let encryptedData = cipher.update(data, "utf-8", "hex");
    
        encryptedData += cipher.final("hex");
    
        return encryptedData;
    }
    
// fileImage.onchange = getImage(event);
    
// encryptButton.addEventListener("click", (event)=>{
//     // console.log(typeof(IMAGE_FOR_EN.result));

//     // let res = encryption(IMAGE_FOR_EN.result,"Hello");

//     // console.log(res);


//     console.log("hello");


// });


console.log(encryption("assssss","hello"));





