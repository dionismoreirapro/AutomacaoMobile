const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    senha: '~senha',   
  },
  
  buttons:{
    btnEntrar:'~entrar'
  },

  realizandoLogin(email, senha){
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.senha,senha)
    I.click(this.buttons.btnEntrar);
 
  },

  chegandoLoginSemSucesso() {
    I.waitForElement("~lognFail", 5);
    I.seeElement("~lognFail");

  }
}
