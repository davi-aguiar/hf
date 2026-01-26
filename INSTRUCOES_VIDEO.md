# Instruções para Adicionar Vídeo do Campeonato

## Opção 1: Vídeo do YouTube (Recomendado)

### Passo a Passo:

1. **Faça upload do seu vídeo no YouTube**
   - Acesse https://www.youtube.com
   - Faça login na sua conta
   - Clique em "Criar" → "Enviar vídeo"
   - Faça upload do vídeo do campeonato

2. **Obter o ID do vídeo**
   - Após o upload, o YouTube fornecerá um link como: `https://www.youtube.com/watch?v=VIDEO_ID_AQUI`
   - O `VIDEO_ID_AQUI` é o ID que você precisa

3. **Adicionar no site**
   - Abra o arquivo `index.html`
   - Localize a seção "Campeonato" (procure por `id="campeonato"`)
   - Encontre a linha com `src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI"`
   - Substitua `SEU_VIDEO_ID_AQUI` pelo ID do seu vídeo

### Exemplo:
Se o link do YouTube for: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

Então no HTML você deve colocar:
```html
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    ...
></iframe>
```

## Opção 2: Vídeo Local

Se preferir usar um arquivo de vídeo local:

1. **Coloque o vídeo na pasta do projeto**
   - Crie uma pasta `videos/` se não existir
   - Coloque o arquivo (ex: `campeonato-salvador.mp4`)

2. **No arquivo `index.html`**
   - Comente a linha do iframe do YouTube
   - Descomente a seção do vídeo local:
   ```html
   <video controls poster="images/campeonato-thumb.jpg">
       <source src="videos/campeonato-salvador.mp4" type="video/mp4">
       Seu navegador não suporta vídeos HTML5.
   </video>
   ```

3. **Adicione uma imagem de capa (opcional)**
   - Coloque uma imagem na pasta `images/` com o nome `campeonato-thumb.jpg`
   - Esta imagem aparecerá antes do vídeo começar a tocar

## Recomendações

- **YouTube**: Melhor para performance e compatibilidade
- **Formato**: MP4 é o mais compatível
- **Tamanho**: Mantenha o vídeo otimizado (máximo 50MB para local)
- **Duração**: Vídeos curtos (2-5 minutos) funcionam melhor

## Configurações Avançadas do YouTube

Você pode adicionar parâmetros na URL do YouTube para personalizar:

- `?autoplay=1` - Inicia automaticamente
- `&mute=1` - Inicia sem som
- `&loop=1` - Repete o vídeo
- `&start=30` - Começa em 30 segundos

Exemplo completo:
```
https://www.youtube.com/embed/VIDEO_ID?autoplay=0&mute=0&loop=0
```
