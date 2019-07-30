module.exports = {
  resolve: {
    mainFiles: ['index', 'index.ts', 'index.tsx'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
};
