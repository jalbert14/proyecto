module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
      path: path.resolve(__dirname, 'dist'), // Carpeta de salida
      filename: 'bundle.js', // Nombre del archivo empaquetado
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Aplica a archivos .js y .jsx
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html' // Archivo HTML base
    })],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3000,
      open: true,
      hot: true
    }
  };