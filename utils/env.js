const env = process.env.TEST_ENV || 'DEV';

const urls = {
    QA: process.env.QAURL,
    DEV: process.env.DEVURL,
    PROD: process.env.PRODURL
};

export default urls[env];