# 🚗 CarPédia

**CarPédia** é um aplicativo mobile desenvolvido com **React Native** e **Expo** para consulta de informações automotivas.

O projeto consome múltiplas APIs automotivas para fornecer dados sobre:

* Modelos e marcas de veículos (CarQuery API).
* Detalhes adicionais via Wikipedia.
* Informações regulamentares via NHTSA API.
* Tradução automática com LibreTranslate.

Além disso, o projeto implementa:

* **Gerenciamento de estado e cache de requisições** com **React Query**.
* **Theming** com **styled-components**, com suporte a múltiplos temas: `chatgpt`, `copilot` e `light`.
* Arquitetura **modularizada** seguindo o princípio **SOLID**.

---

## ✅ Tecnologias utilizadas

* **React Native** com **Expo**
* **TypeScript**
* **React Query** (TanStack Query)
* **Styled-components** para theming
* **CarQuery API** para dados automotivos
* **Wikipedia API** para imagens e descrições
* **NHTSA Vehicle API** para informações de segurança
* **LibreTranslate API** para tradução
* **ESLint + Prettier** para padronização de código

---

## ✅ Como rodar o projeto localmente

### **1. Pré-requisitos**

* Node.js (recomendado: versão LTS)
* Expo CLI instalado globalmente:

```bash
npm install -g expo-cli
```

* Conta no [Expo Go](https://expo.dev/) para rodar no celular (opcional)

---

### **2. Clone o repositório**

```bash
git clone https://github.com/anderzilla/Carpedia.git
cd Carpedia
```

---

### **3. Instale as dependências**

```bash
yarn install
```

ou

```bash
npm install
```

---

### **4. Rode o projeto com Expo**

```bash
expo start
```

➡️ Isso abrirá o **Metro Bundler**.
➡️ Você pode:

* Escanear o QR Code com o app **Expo Go**.
* Rodar no emulador Android/iOS.
* Abrir no **web** com `w` no terminal.

---

## ✅ Estrutura do Projeto

```
/components         → Componentes reutilizáveis
/context            → Context API para theming e histórico
/services           → Camada de serviços para consumo das APIs
/app                → Navegação e telas principais
/themes             → Configurações de temas
```

---

## ✅ Como contribuir

1. Fork o repositório.
2. Crie uma branch:
   `git checkout -b feature/sua-feature`
3. Commit suas alterações:
   `git commit -m 'feat: minha nova feature'`
4. Push na branch:
   `git push origin feature/sua-feature`
5. Abra um **Pull Request**.

---

## ✅ Contato

Desenvolvido por **Anderson Henrique Gonçalves** ([@anderzilla](https://github.com/anderzilla)) 🚀

---

## ✅ Licença

Este projeto está licenciado sob a **MIT License**.

---

## ✅ Screenshots

![Carpedia-1](https://github.com/user-attachments/assets/fb5fba6e-31f5-4126-8fed-83b729d3b48a)
![Carpedia-2](https://github.com/user-attachments/assets/9bfac05b-2141-4db7-b9ee-213f800ec5f5)
![Carpedia-3](https://github.com/user-attachments/assets/bf4ca421-a0d5-4569-a086-32006763f3c0)
![Carpedia-4](https://github.com/user-attachments/assets/780d01e8-f720-4f08-a9f9-176069469566)


---

## ✅ Status do Projeto

✅ Em desenvolvimento  
✅ Funcionalidades básicas concluídas
☑️ Malhorias na estrutura e React Query (Estamos aqui)
☑️ Planejamento de testes automatizados
☑️ Deploy em app stores
