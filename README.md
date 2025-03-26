# API-Transportadora-CRM-Bussola

=> Visão Geral
  Esta API permite acessar e consultar dados de vendas de uma transportadora a partir de uma planilha do Google Sheets. O objetivo é disponibilizar as informações no formato JSON para integração com outras plataformas.

=> Tecnologias Utilizadas
  Node.js
  Express
  Google Sheets API
  Google Cloud Run
  Docker

=> Configuração e Execução Local
  Clone o repositório:
    git clone https://github.com/seu-usuario/api-transportadora.git
    cd api-transportadora
  Instale as dependências:
    npm install
  Adicione o arquivo credentials.json na raiz do projeto (contendo as credenciais da conta de serviço do Google).
  Execute a API localmente:
    node index2.js
  Acesse no navegador ou em um client HTTP:
    http://localhost:8080/adimplencia

=> Implantação no Google Cloud Run
  Autentique-se no Google Cloud:
    gcloud auth login
  Configure o projeto correto:
    gcloud config set project crmbybussola
  Construa a imagem Docker e envie para o Container Registry:
    docker build -t gcr.io/crmbybussola/api-transportadora .
    docker push gcr.io/crmbybussola/api-transportadora
  Implante a API no Cloud Run:
    gcloud run deploy api-transportadora --image gcr.io/crmbybussola/api-transportadora --region us-central1 --platform managed
    Acesse a API pelo link fornecido após a implantação.

=> Contato
  Caso tenha dúvidas ou precise de suporte, entre em contato pelo e-mail: joseivanabrantes@gmail.com.

