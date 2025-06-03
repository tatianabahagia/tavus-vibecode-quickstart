# Tavus Conversational Video Interface (CVI) Demo

## 🚀 Introduction

Welcome to the Tavus CVI Demo, a showcase of Tavus's groundbreaking Conversational Video Interface technology. This project demonstrates how you can leverage Tavus APIs to create hyperrealistic, interactive video personas for a wide range of use cases.

With this demo, you can:
- Explore real-time video interactions powered by Tavus CVI APIs
- Fork and customize the experience for your own persona or use case
- Use your own **Persona ID** or **Replica ID** to bring your custom vision to life

<br></br>
The demo stack includes:
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
<br></br>
## 🧑‍💻 Try it Live
Thanks to StackBlitz, you can spin up and deploy a fork of this demo in under a minute!

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Tavus-Engineering/tavus-examples/tree/main/showcase/cvi-demo?file=src%2FApp.tsx)

<br></br>
## ⚡ Prerequisites

1. Create an account on [Tavus Platform](https://platform.tavus.io/api-keys).
2. Generate an API token in your account settings.

<br></br>
## 🍴 Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Clone and Customize:**  
   Fork this repository and modify it to create your own unique AI persona. To personalize your experience:
   - Edit the **persona_id** in the `createConversation.ts` file to match your new persona. You can learn how to [create your own persona](https://docs.tavus.io/sections/conversational-video-interface/creating-a-persona) or persona replicas directly on the [Tavus Platform](https://platform.tavus.io/).
   - You can also swap in a completely different replica/persona to use this as a simple React template for your next CVI project.

   For example, to update the persona ID, locate the following snippet in `createConversation.ts`:

   ```typescript
   body: JSON.stringify({
     // Replace with your own Persona ID
     persona_id: "your_persona_id_here",
   }),
   ```

<br></br>
## 📚 Learn More About Tavus

- [Developer Documentation](https://docs.tavus.io/)
- [API Reference](https://docs.tavus.io/api-reference/)
- [Tavus Platform](https://platform.tavus.io/)
- [Daily React Reference](https://docs.daily.co/reference/daily-react)
