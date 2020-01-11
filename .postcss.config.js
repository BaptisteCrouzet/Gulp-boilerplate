module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-import': {
            skipDuplicates: true
        },
        'postcss-preset-env': {
            /* use stage 3 features + css nesting rules */
            stage: 3,
            features: {
                'nesting-rules': true
            }
        },
        'cssnano': {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }
    }
}