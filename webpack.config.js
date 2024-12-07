const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 'production' için değiştirilebilir
  entry: "./src/index.tsx", // Projenizin giriş noktası
  output: {
    path: path.resolve(__dirname, "dist"), // Çıkış klasörü
    filename: "bundle.js", // Çıkış dosyası adı
    clean: true, // Çıkış klasörünü temizler
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Çözümleme sırasında kullanılan dosya uzantıları
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript dosyalarını işler
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // CSS dosyalarını işler
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Görselleri işler
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML şablon dosyanız
      favicon: "./public/favicon.ico", // (isteğe bağlı) favicon dosyası
    }),
  ],
  devServer: {
    static: "./dist", // Statik dosyalar için klasör
    port: 3000, // Sunucu portu
    open: true, // Tarayıcı otomatik açılsın mı?
    hot: true, // Hot module replacement
  },
};
