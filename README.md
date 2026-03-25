# 📌 Microserviço de Aprovação de Voluntários

Este microserviço é responsável por gerenciar a aprovação de voluntários através de uma API REST.

---

## 🏗️ Estrutura do Projeto

O projeto segue uma arquitetura em camadas:

```
├── routes/
├── controllers/
├── services/
├── repositories/
├── app.js
```

* **routes**: Define os endpoints da API
* **controllers**: Recebe as requisições e retorna respostas
* **services**: Contém a lógica de negócio
* **repositories**: Responsável pelo acesso aos dados

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express

---

## ⚙️ Configuração e Execução

1. Instale as dependências:

```bash
npm install
```

2. Configure a variável de ambiente:

Crie um arquivo `.env` ou defina manualmente:

```bash
PORT=3000
```

3. Execute o projeto:

```bash
node app.js
```

---

## 📡 Endpoints

### Aprovar Voluntário

**POST** `/api/voluntario/aprovar/:id`

Aprova um voluntário com base no ID informado.

#### Parâmetros:

* `id` (path): ID do voluntário

#### Exemplo de requisição:

```bash
POST /api/voluntario/aprovar/123
```

#### Exemplo de resposta:

```json
{
  "message": "Voluntário aprovado com sucesso"
}
```

---

## 🔁 Fluxo da Requisição

1. A requisição chega na rota (`routes`)
2. O controller processa a entrada
3. O service executa a regra de negócio
4. O repository acessa os dados
5. A resposta é retornada ao cliente

---

## 📌 Observações

* Certifique-se de que a variável `PORT` esteja definida corretamente.
* O endpoint utiliza o método `POST` para realizar a aprovação.
* Estrutura baseada em separação de responsabilidades (camadas).

---

## 🛠️ Melhorias Futuras

* Implementar autenticação
* Adicionar validação de dados
* Criar testes automatizados
* Documentar com Swagger

---
