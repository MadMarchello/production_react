import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    //порядок при котором лоадеры возвращаются в массиве имеет значение
    //поэтому лучше выносить отдельные лоадеры в переменные
    //чтобы мы всегда видели последовательность этих лоадеров в массиве


    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    //если не используем ts, нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoaders,
    ]
}