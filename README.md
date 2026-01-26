# Site da Academia de Jiu-Jitsu e Judô

Site estático moderno e responsivo para uma academia de artes marciais, desenvolvido com HTML, CSS e JavaScript puro.

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional com cores vermelho e preto
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Menu Mobile**: Menu hambúrguer para dispositivos móveis
- **Animações**: Efeitos de entrada suaves para melhor experiência do usuário

## 📋 Seções do Site

1. **Hero/Banner**: Seção inicial impactante
2. **Sobre**: Informações sobre a academia
3. **Modalidades**: Jiu-Jitsu e Judô
4. **Horários**: Grade de horários de treino
5. **Valores**: Planos e preços
6. **Contato**: Formulário e informações de contato

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

## ✏️ Personalização

### Cores
As cores podem ser alteradas nas variáveis CSS no arquivo `styles.css`:
```css
:root {
    --cor-vermelho: #DC143C;
    --cor-preto: #000000;
    /* ... */
}
```

### Conteúdo
- Edite o arquivo `index.html` para alterar textos, horários, valores, etc.
- Atualize as informações de contato na seção correspondente
- Modifique os planos e preços conforme necessário

### Formulário de Contato
O formulário atualmente mostra um alerta. Para integrar com um backend:
1. Modifique a função de submit em `script.js`
2. Adicione uma chamada para sua API ou serviço de e-mail

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Google Fonts (Roboto)

## 📝 Licença

Este projeto é livre para uso e modificação.
