const env = process.env.TEST_ENV || 'STAGE';

const urls = {
    STAGE: process.env.STAGEURL,
    UAT: process.env.UATURL,
    PROD: process.env.PRODURL
};

export default urls[env];