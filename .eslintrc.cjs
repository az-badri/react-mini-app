module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2023: true,
    },

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
    },

    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "jsx-a11y",
        "testing-library",
        "vitest",
    ],

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:testing-library/react",
        "plugin:vitest/recommended",
        "prettier",
    ],

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",

        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-explicit-any": "warn",

        "testing-library/no-debugging-utils": "warn",
        "testing-library/no-node-access": "error",
        "testing-library/prefer-screen-queries": "error",

        "vitest/expect-expect": "error",
    },
};
