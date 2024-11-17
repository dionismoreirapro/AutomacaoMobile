Feature("home");

const { I, login_pagePage, home_pagePage } = inject();

Before(() => {
  login_pagePage.realizandoLogin("teste@teste.com", "123456");
});

Scenario("adicionandoAluno", () => {
  home_pagePage.registrandoAluno("2334", "Dionis Moreira");
});
