module.exports = {
    target: 'serverless',
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        )
        return cfg;
    }
}