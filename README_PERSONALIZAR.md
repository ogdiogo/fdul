# Guia para Personalizar o Site

Este guia mostra como personalizar o site com suas próprias imagens e conteúdo.

## Como adicionar suas próprias imagens

### Passo 1: Prepare suas imagens

Prepare suas imagens com tamanhos adequados:
- Para o carrossel: Imagens horizontais (recomendado 1920x1080px)
- Para a seção "Sigilo Bancário": Uma imagem horizontal de destaque (recomendado 1600x900px)
- Para a seção "Sobre Nós": 5 imagens (recomendado 800x600px)

### Passo 2: Faça upload das imagens

1. No Replit, crie uma pasta para suas imagens (se ainda não existir):
   - Navegue até a pasta `client/public/images`
   - Se a pasta não existir, clique com o botão direito em `client/public` e selecione "Add Folder"
   - Dê o nome de "images" à nova pasta

2. Faça upload das suas imagens:
   - Clique com o botão direito na pasta `images`
   - Selecione "Upload File" e escolha suas imagens
   - Você também pode arrastar e soltar arquivos diretamente nesta pasta

### Passo 3: Atualize o código para usar suas imagens

#### Para atualizar as imagens do carrossel (página inicial):

1. Abra o arquivo `client/src/components/ImageCarousel.tsx`
2. Localize a seção que define as imagens (linhas 10-31)
3. Substitua os URLs das imagens por referências às suas imagens, assim:

```javascript
const images: CarouselImage[] = [
  {
    id: 1,
    src: "/images/sua-imagem-1.jpg",  // Substitua pelo nome do seu arquivo
    alt: "Descrição da sua imagem 1"  // Atualize a descrição
  },
  {
    id: 2,
    src: "/images/sua-imagem-2.jpg",
    alt: "Descrição da sua imagem 2"
  },
  {
    id: 3,
    src: "/images/sua-imagem-3.jpg",
    alt: "Descrição da sua imagem 3"
  }
];
```

#### Para atualizar a imagem da página "Sigilo Bancário":

1. Abra o arquivo `client/src/components/BankingPrivacy.tsx`
2. Localize a seção de espaço para imagem em destaque (aproximadamente linhas 10-21)
3. Substitua o espaço reservado por uma tag de imagem:

```jsx
{/* Espaço para imagem em destaque */}
<div className="mb-10 rounded-xl overflow-hidden shadow-lg">
  <img 
    src="/images/sua-imagem-sigilo.jpg" 
    alt="Sigilo Bancário" 
    className="w-full h-[400px] object-cover" 
  />
</div>
```

#### Para atualizar as imagens da página "Sobre Nós":

1. Abra o arquivo `client/src/components/AboutSection.tsx`
2. Localize a seção que define os blocos (linhas 10-62)
3. Substitua os URLs das imagens por referências às suas imagens:

```javascript
const aboutBlocks: AboutBlock[] = [
  {
    id: 1,
    title: "Our Mission",
    content: [
      "Primeiro parágrafo...",
      "Segundo parágrafo..."
    ],
    image: "/images/sobre-nos-1.jpg",  // Substitua pelo nome do seu arquivo
    alt: "Nossa Missão"
  },
  // Continue atualizando as outras imagens...
];
```

## Como atualizar textos

Você também pode atualizar os textos nos mesmos arquivos mencionados acima:

- Para o conteúdo de "Sigilo Bancário", edite o texto em `client/src/components/BankingPrivacy.tsx`
- Para o conteúdo de "Sobre Nós", edite os textos em `client/src/components/AboutSection.tsx`

## Dicas adicionais

- Mantenha o mesmo padrão de nomeação de arquivos para facilitar a manutenção
- Use imagens otimizadas (comprimidas) para melhor desempenho
- Certifique-se de que as imagens sejam de qualidade adequada para exibição
- Mantenha os formatos de arquivo como JPG, PNG ou WebP