Feature("login");

const { I, login_pagePage, home_pagePage} = inject()

Scenario("login com sucesso", () => {
 login_pagePage.realizandoLogin('teste@teste.com','123456')
 home_pagePage.chegandoLoginComSucesso()
});

Scenario("login sem sucesso", () => {
  login_pagePage.realizandoLogin('','123456')
  login_pagePage.chegandoLoginSemSucesso()
});
