# Implantação no Netlify - Glosadores e Associados

Este guia explica como implantar o site "Glosadores e Associados" no Netlify de forma gratuita e simples.

## Pré-requisitos

- Uma conta no [Netlify](https://netlify.com) (você pode criar uma gratuitamente)
- O código do projeto (que você já baixou)
- Git instalado (opcional, mas útil)

## Método 1: Implantação Direta (Drag & Drop)

Este é o método mais rápido e simples:

1. Faça login na sua conta do Netlify
2. No dashboard do Netlify, clique no botão "Add new site" e selecione "Deploy manually"
3. Antes de fazer o upload, abra um terminal e execute os seguintes comandos no diretório do projeto:
   ```
   npm run build
   ```
4. Arraste e solte a pasta `dist` gerada para a área de upload do Netlify
5. Aguarde alguns segundos para que o Netlify processe e implante o site
6. Seu site estará disponível em um domínio gerado automaticamente (algo como `random-name.netlify.app`)

## Método 2: Implantação via GitHub (Recomendado)

Este método permite atualizações automáticas quando você alterar o código:

1. Crie um repositório no GitHub e faça push do código do projeto
2. Faça login na sua conta do Netlify
3. Clique em "Add new site" e selecione "Import an existing project"
4. Escolha GitHub como a fonte do seu código
5. Selecione o repositório que você criou
6. Configure as opções de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Clique em "Deploy site"
8. Seu site será implantado e disponibilizado em um domínio Netlify

## Configurações Adicionais

### Configurar um Domínio Personalizado

1. No dashboard do seu site no Netlify, vá para "Site settings" > "Domain management"
2. Clique em "Add custom domain"
3. Siga as instruções para adicionar e verificar seu domínio

### Atualizar o Site

Para atualizar seu site:

- Se você usou o método de drag & drop: repita o processo com a nova versão
- Se você usou o GitHub: simplesmente faça push das alterações para o repositório, e o Netlify fará uma nova implantação automaticamente

### Configurações de Redirecionamento

O arquivo `netlify.toml` já está configurado para:
- Redirecionar todas as rotas para o `index.html` (necessário para SPAs)
- Configurar o modo de histórico do navegador

## Problemas Comuns

- **Problema**: Páginas não encontradas quando você acessa diretamente uma URL
  **Solução**: Verifique se o arquivo `netlify.toml` está na raiz do seu projeto

- **Problema**: Estilos ou scripts não carregando
  **Solução**: Verifique se os caminhos nos arquivos HTML estão corretos

- **Problema**: Erros 404 em APIs
  **Solução**: Certifique-se de que sua aplicação está configurada para usar a URL correta da API em produção

---

Aproveite seu novo site no Netlify! Se precisar de mais ajuda, consulte a [documentação oficial do Netlify](https://docs.netlify.com/).