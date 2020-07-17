module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-knobs/register'],
    webpackFinal: async config => {
        config.resolve.extensions.push('.ts', '.tsx');
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        use: [
                            {
                                loader: require.resolve('ts-loader'),
                            },
                        ],
                    },
                    {
                        test: /\.css$/i,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                },
                            },
                        ],
                    },
                ]
            }
        };
    },
};
