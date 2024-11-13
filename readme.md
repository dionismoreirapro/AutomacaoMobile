# Projeto Mobile - Testes Automatizados

Este projeto tem como objetivo realizar testes automatizados para uma aplicação mobile, utilizando o framework CodeceptJS. Os testes são executados em um ambiente Node.js e interagem com a aplicação por meio de código Java e JavaScript.

## Tecnologias Utilizadas

- **CodeceptJS**: Framework de testes end-to-end para automação de testes em aplicações móveis e web.
- **Java**: Usado para automação e integração com a aplicação.
- **Node.js**: Ambiente de execução para o CodeceptJS.

## Pré-requisitos

Antes de iniciar, certifique-se de que os seguintes requisitos estão atendidos:

- **Git** para clonar o repositório.
- **Node.js** e **npm** instalados. Baixe em [Node.js](https://nodejs.org/).
- **Java** instalado e configurado no PATH. Baixe em [Java](https://www.oracle.com/java/technologies/javase-downloads.html).
- **CodeceptJS** e **Mochawesome** (opcional) para relatórios. Você pode instalar esses pacotes após clonar o repositório.

## Clonando o Repositório

Clone o repositório em sua máquina local usando o comando abaixo:

```bash
    git clone https://github.com/dionismoreirapro/automacaoMobile
```
Depois de clonar, acesse o diretório do projeto:

```bash
    cd automacaoWeb
```
### Instalação do CodeceptJS e Mochawesome

Após clonar o repositório, instale o CodeceptJS e Mochawesome executando:

```bash
npm install
```
## Como Executar os Testes
1.Para rodar os testes, utilize os comandos abaixo no terminal.
```
 npx codeceptjs run
```
2.Executar os Testes com Relatório</br>
Para gerar um relatório detalhado em formato Mochawesome, utilize o comando:
```
 npx codeceptjs run --reporter mochawesome
```

### Relatório de Testes
![Relatorio de teste ](https://github.com/dionismoreirapro/automacaoMobile/blob/main/report.png)
