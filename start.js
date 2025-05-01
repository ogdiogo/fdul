// start.js
// Este arquivo serve como ponto de entrada para o Render

// Como estamos usando ESM para módulos, precisamos importar o arquivo principal
import('./dist/index.js').catch(err => {
  console.error('Erro ao iniciar a aplicação:', err);
  process.exit(1);
});
