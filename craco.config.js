const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Pages': path.resolve(__dirname, 'src', 'Pages/'),
            '@Route': path.resolve(__dirname, 'src', 'Routes/'),
            '@Components': path.resolve(__dirname, 'src', 'Components/'),
            '@Layouts': path.resolve(__dirname, 'src', 'Layouts/'),
            '@Services': path.resolve(__dirname, 'src', 'Services/')
        }
    }
};