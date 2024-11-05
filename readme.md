# Projeto Mobile - Testes Automatizados
Este projeto tem como objetivo realizar testes automatizados para uma aplicação mobile utilizando o framework CodeceptJS. Os testes são executados em um ambiente Node.js e interagem com a aplicação por meio de código Java e JavaScript.

### Tecnologias Utilizadas
CodeceptJS: Framework de testes end-to-end para aplicações móveis e web.
Java: Usado para automação e integração com a aplicação.
Node.js: Ambiente de execução para o CodeceptJS.
Como Executar os Testes
Para rodar os testes, utilize os seguintes comandos no terminal:

### 1. Executar os Testes Padrão
Para rodar os testes básicos sem geração de relatórios, execute o comando:

bash
Copiar código
npx codeceptjs run

### 2. Executar os Testes com Relatório
Para gerar um relatório detalhado em formato Mochawesome, utilize o comando:

bash
Copiar código
npx codeceptjs run --reporter mochawesome

Observação: O Mochawesome é um reporter que gera relatórios visuais para acompanhar os resultados dos testes. O relatório será gerado na pasta padrão configurada no arquivo codecept.conf.js.

### Relatório de Testes
![Relatorio de teste ](https://github.com/dionismoreirapro/automacaoMobile/blob/main/report.png)