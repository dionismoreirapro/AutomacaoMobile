Feature("login");


Scenario("login com sucesso", ({ I, login_pagePage }) => {
 login_pagePage.realizandoLogin('teste@teste.com','123456')
  I.waitForElement("~salvar", 5);
  I.seeElement("~salvar");
});

Scenario("login sem sucesso", ({ I,login_pagePage }) => {
  login_pagePage.realizandoLogin('teste@teste','123456')
  I.waitForElement("~lognFail", 5);
  I.seeElement("~lognFail");
});
