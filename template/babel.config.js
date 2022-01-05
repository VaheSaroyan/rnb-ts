module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '~': './src',
                },
            },
        ],
        [
            'babel-plugin-inline-import',
            {
                extensions: ['.svg'],
            },
        ],
    ],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
};
