# Endereço Inteligente

Formulário de cadastro de endereços com validação em tempo real, desenvolvido em HTML, CSS e JavaScript puro.

## Funcionalidades

- Validação em tempo real com feedback visual
- Máscaras automáticas para CEP e UF
- Conversão automática de UF para maiúsculas
- Toggle entre validação HTML5 nativa e JavaScript customizada
- Interface responsiva com Bootstrap 5


## Tecnologias

- HTML5, CSS3, JavaScript
- Bootstrap 5.3.8
- IMask.js


## Como Usar

1. Abra o arquivo HTML no navegador
2. Preencha os campos do formulário
3. Use o switch para alternar entre modos de validação

## Validação dos Campos

- **CEP**: 8 dígitos numéricos (formato: 00000-000)
- **Logradouro**: Mínimo 5 caracteres
- **Número**: Apenas números, não pode estar vazio
- **UF**: Exatamente 2 letras maiúsculas
- **Complemento**: Opcional


## Estrutura

O projeto consiste em um único arquivo HTML que inclui:

- Estilos CSS customizados inline
- Bootstrap via CDN
- IMask.js via CDN
- Scripts de validação e máscaras
