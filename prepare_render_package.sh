#!/bin/bash

# Criar pasta para o pacote Render se não existir
mkdir -p deploy_package

# Copiar todos os arquivos necessários para o pacote
cp -r client deploy_package/
cp -r server deploy_package/
cp -r shared deploy_package/
cp package.json deploy_package/
cp package-lock.json deploy_package/
cp vite.config.ts deploy_package/
cp tsconfig.json deploy_package/
cp tailwind.config.ts deploy_package/
cp postcss.config.js deploy_package/
cp components.json deploy_package/
cp drizzle.config.ts deploy_package/

# Copiar arquivos de configuração do Render
cp render.yaml deploy_package/
cp .env deploy_package/
cp Procfile deploy_package/
cp start.js deploy_package/
cp README_RENDER.md deploy_package/README.md

# Criar .gitignore básico
echo "node_modules\ndist\n.env" > deploy_package/.gitignore

echo "Pacote para Render criado com sucesso em: deploy_package/"
echo "Você pode compactar esta pasta e enviá-la para o Render."
