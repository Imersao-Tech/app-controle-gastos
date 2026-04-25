Passo a passo:

Instalação e config
1. Digite vs code no navegador > Download for … ✅
2. Digita node no navegador ✅
3. Abre a doc em baixar > escolhe a versão, pc, gerenciador ✅
4. Verifica se esta tudo ok com: node -v ✅
5. Digita vite angular ✅
6. Abra o começar > comando: npm create vite@latest ✅
7. Digite npm i ✅
8. Digite npm start ✅

Pastas e config.
1. Crie as pastas core, modere, shared ✅
2. Limpe o app ✅

Criação do componente gastos
1. Crie o componente home: Ng new c home ✅
2. Config app.config.ts > app.html > app.routes ✅
3. Crie o componente de gastos dentro de home ✅
4. Importe o <app-gastos /> ✅

Importação de estilos (extra)
1. Crie em shared o arquivo styles.scss e cole ✅
2. Digite no navegador Roboto > Escolha a fonte > clique em net Font > clique em net embude Code
3. Escolha a opaco web > add no index.html
4. Importar o style.scss no componente 

Estrutura do html + scss
1. Colocando o html no componente de gastos ✅
2. Estilização do componente ✅
3. Criação do formulario
4. Faça a importação do ReactiveFormsModule ✅
5. No gasto.ts crie o form group + form control ✅
6. Add console.logs para ver o form funfar ✅

Add tratativa de moeda (extra)
1. Digite no navegador CurrencyMaskModule
2. Clique em ng2-currency-mask
3. Comando: npm i ng2-currency-mask
4. Importe o currencyMask e options no html

Add server json (extra)
1. Digite no navegador server json ✅
2. Comando: npm install json-server ✅
3. Crie as pastas mock/assets ✅
4. Crie o arquivo db.json: {“gastos”: []} e "$schema": "./node_modules/json-server/schema.json" ✅
5. Add o script no mock: "mock": "json-server --watch mock/assets/db.json", ✅
6. Rode o comando npm run mock ✅
7. Ve se esta tudo certinho ✅

Add concurrently (extra)
1. Digite no navegador concurrently ✅
2. Comando: npm i concurrently ✅
3. Add script: "mock": "json-server --watch mock/assets/db.json", ✅

Criação do serviço
1. Crie o service gastos dentro da pasta app/core/service ✅
2. Add url do json server ✅
3. Add inject httpClient
4. Crie o metodo post

Conectando o componente + service
1. Crie o metodo onSubmit ✅
2. Add no botãoo a chamada do metodo ✅
3. Faça a injecta do service ✅
4. Chame o service no onSubmit() ✅
5. Crie o observable ✅
6. Add o next e error ✅
7. Add o console.log ✅

Criação do componente histórico
1. Crie o componente home: Ng new c historico
2. Crie o componente de historico dentro de home
3. Importe o <app-historico />
4. Importar o style.scss no componente: @use '../../../../shared/styles' as *; 

Estrutura do html + scss
1. Colocando o html no componente de historico
2. Estilização do componente

Criação do serviço
1. Crie o service gastos dentro da pasta app/core/service
2. Add url do json server
3. Add inject httpClient
4. Crie o metodo get

Conectando o componente + service
1. Crie o metodo listaGastos 
2. Faça a injecta do service 
3. Chame o service no onInit()
4. Crie o observable
5. Add o next e error
6. Add o console.log