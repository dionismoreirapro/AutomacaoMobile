const { buttons, fields } = require("./login_page");

const { I } = inject();

module.exports = {

  buttons:{
    salvar:  '~salvar'
  },
  fields:{
     codigo: '~codigo',
     nomeAluno:  '~aluno',
     mensagem: '~55542'
  },

  chegandoLoginComSucesso() {
    I.waitForElement(this.buttons.salvar, 5);
    I.seeElement(this.buttons.salvar);

  },

  registrandoAluno(codigo, nomeAluno){
    I.fillField(this.fields.codigo,codigo)
    I.fillField(this.fields.nomeAluno,nomeAluno)
    I.tap(this.buttons.salvar)
    I.seeElement(this.fields.mensagem)
  }

}
