# Instruções para Adicionar Vídeo ou Imagem de Fundo no Hero

## Opção 1: Adicionar Vídeo de Fundo

1. Coloque seu vídeo na pasta do projeto (ex: `videos/professor-lutando.mp4`)
2. No arquivo `index.html`, localize a seção Hero (linha ~40)
3. Descomente as linhas do vídeo:
   ```html
   <video class="hero-video" autoplay muted loop playsinline>
       <source src="videos/professor-lutando.mp4" type="video/mp4">
   </video>
   ```
4. Comente ou remova a linha da imagem se estiver usando vídeo

## Opção 2: Adicionar Imagem de Fundo

1. Coloque sua imagem na pasta do projeto (ex: `images/hero-background.jpg`)
2. No arquivo `index.html`, localize a seção Hero (linha ~40)
3. Descomente a linha da imagem:
   ```html
   <div class="hero-image" style="background-image: url('images/hero-background.jpg');"></div>
   ```
4. Comente ou remova a linha do vídeo se estiver usando imagem

## Recomendações

- **Vídeo**: Use formato MP4, resolução 1920x1080 ou superior, duração curta (10-30 segundos)
- **Imagem**: Use formato JPG ou PNG, resolução 1920x1080 ou superior
- **Tamanho**: Mantenha os arquivos otimizados para carregamento rápido
- **Conteúdo**: Certifique-se de que o vídeo/imagem tenha boa visibilidade do texto sobreposto

## Estrutura de Pastas Sugerida

```
projeto/
├── index.html
├── styles.css
├── script.js
├── videos/
│   └── professor-lutando.mp4
└── images/
    ├── hero-background.jpg
    ├── professor-jiujitsu.jpg
    └── professor-judo.jpg
```
