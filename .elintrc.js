module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent" : "off",
        "no-mixed-spaces-and-tabs" : 0,
        "no-irregular-whitespace": 0,
        "react/jsx-indent": "off",
        "react/jsx-indent-props":"off",
        "semi": [
            "error",
            "always"
        ]
    },
    
};