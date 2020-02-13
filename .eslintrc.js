module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react", "prettier"],
  env: {
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
}
