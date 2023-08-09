import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    //порядок при котором лоадеры возвращаются в массиве имеет значение
    //поэтому лучше выносить отдельные лоадеры в переменные
    //чтобы мы всегда видели последовательность этих лоадеров в массиве
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }
   return [
        typescriptLoader,
    ]
}