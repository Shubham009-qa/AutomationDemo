const env = process.env.TEST_ENV || 'DEV';

const urls = {
    STAGE: process.env.STAGEURL,
    UAT: process.env.UATURL,
    PROD: process.env.PRODURL
};

export default urls[env];