const production = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [
        require("tailwindcss"),
        require("postcss-import"),
        ...(production ? [require("autoprefixer"), require("cssnano")({ preset: "default" })] : []),
    ],
};
