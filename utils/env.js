import dotenv from 'dotenv';

dotenv.config();

const env = process.env.TEST_ENV || 'STAGE';

const urls = {
    STAGE: process.env.STAGEURL,
    UAT: process.env.UATURL,
    PROD: process.env.PRODURL
};

console.log("TEST_ENV =", env);
console.log("STAGEURL =", process.env.STAGEURL);
console.log("UATURL =", process.env.UATURL);
console.log("PRODURL =", process.env.PRODURL);
console.log("Selected URL =", urls[env]);

export default urls[env];