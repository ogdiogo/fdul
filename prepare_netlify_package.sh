#!/bin/bash

# Cria a pasta para o pacote do Netlify
mkdir -p netlify_package

# Copia todos os arquivos necessários
cp -r client netlify_package/
cp -r server netlify_package/
cp -r shared netlify_package/
cp -r netlify netlify_package/
cp package.json netlify_package/
cp package-lock.json netlify_package/
cp netlify.toml netlify_package/
cp postcss.config.js netlify_package/
cp tsconfig.json netlify_package/
cp vite.config.ts netlify_package/
cp tailwind.config.ts netlify_package/
cp components.json netlify_package/
cp drizzle.config.ts netlify_package/
cp README_NETLIFY.md netlify_package/README.md

# Cria um arquivo .gitignore básico
echo "node_modules/" > netlify_package/.gitignore
echo "dist/" >> netlify_package/.gitignore
echo ".netlify/" >> netlify_package/.gitignore

# Cria um arquivo de exemplo para o Netlify CLI
cat > netlify_package/netlify-cli-example.md << EOL
# Usando o Netlify CLI (Opcional)

Se preferir usar o Netlify CLI para deploy, siga estes passos:

1. Instale o Netlify CLI globalmente:
   \`\`\`
   npm install -g netlify-cli
   \`\`\`

2. Faça login na sua conta Netlify:
   \`\`\`
   netlify login
   \`\`\`

3. Inicialize seu projeto Netlify (na pasta do projeto):
   \`\`\`
   netlify init
   \`\`\`

4. Para testar localmente:
   \`\`\`
   netlify dev
   \`\`\`

5. Para fazer deploy:
   \`\`\`
   netlify deploy --prod
   \`\`\`
EOL

# Cria um arquivo .env vazio
touch netlify_package/.env

# Compacta o pacote
cd netlify_package
zip -r ../glosadores-associados-netlify.zip .
cd ..

echo "Pacote para Netlify criado com sucesso em: glosadores-associados-netlify.zip"
echo "Você pode baixar este arquivo e implantá-lo no Netlify."