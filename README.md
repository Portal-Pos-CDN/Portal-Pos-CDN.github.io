O conteúdo deste repositório não tem fins de disseminação de conteúdo ou qualquer outro propósito que prejudique alguma organização ou pessoa.

Os arquivos existentes tem o propósito de servir via CDN conteúdos estáticos.

O apontamento para os arquivos fica como segue:

Produção - https://portal-pos-cdn.github.io/producao/...

Exemplo: https://portal-pos-cdn.github.com/producao/portalpos2.landing-page-teste.min.js 

QA -  https://portal-pos-cdn.github.io/qa/...

Exemplo:  https://portal-pos-cdn.github.io/qa/portalposqa.plugins.min.js 

Basta comitar os arquivos na master.

Para publicar o projeto em QA, faça um merge com a branch de staging para garantir que as coisas que estão sendo homolgoadas continuem lá e rodar o comando:

npm run qa 

Este comando irá criar uma pasta chamada BuildQA com todos os arquivos para o ambiente de QA. Agora é só copiar os arquivos para a pasta onde clonou o projeto CDN de QA e comitar/push.
