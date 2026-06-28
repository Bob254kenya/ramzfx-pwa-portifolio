module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
    plugins: [
        'syntax-dynamic-import',
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        [
            '@babel/plugin-transform-class-properties',
            {
                loose: true,
            },
        ],
        [
            '@babel/plugin-transform-private-methods',
            {
                loose: true,
            },
        ],
        [
            '@babel/plugin-transform-private-property-in-object',
            {
                loose: true,
            },
        ],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-transform-object-rest-spread',
        '@babel/plugin-transform-export-namespace-from',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-optional-chaining',
        '@babel/plugin-transform-nullish-coalescing-operator',
        '@babel/plugin-transform-unicode-property-regex',
    ],
};
