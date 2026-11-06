# 🐱 RoboMaya

**Your friendly AI-powered robocat companion.** 💜

RoboMaya is a personal AI companion application built with Next.js, React and TypeScript. It features a friendly grey-and-white robotic cat that users can chat with, and will eventually support voice conversations and personalised long-term memory.

The project is also a hands-on learning experience, exploring AI integration, real-time communication, authentication and full-stack development.

## ✨ Features

### Currently implemented

- 💬 **AI-powered chat** — Have conversations with RoboMaya using OpenAI.
- ⚡ **Streaming responses** — See AI-generated responses appear in real time.
- 🛑 **Stop generation** — Interrupt RoboMaya while it's responding.
- 🔄 **Retry responses** — Retry when a request fails.
- 📜 **Automatic scrolling** — Keep the latest messages visible.
- 🌙 **Dark and light themes** — Switch themes with persistent preferences.
- 📱 **Responsive layout** — Desktop sidebar and mobile bottom navigation.
- 🎨 **Reusable UI components** — Consistent styling using Tailwind CSS.

### Planned features

- 🔐 **User authentication** — Secure accounts using Supabase Auth.
- 💾 **Conversation history** — Save and revisit previous chats.
- 🧠 **Long-term memory** — Allow RoboMaya to remember user-approved information.
- 🎙️ **Voice conversations** — Natural voice interactions using OpenAI's Realtime API.
- 📞 **Phone integration** — Explore voice calls and messaging with Twilio.
- 🐈 **Animated robocat** — An interactive RoboMaya character.

## 🛠️ Tech Stack

| Technology           | Purpose                                   |
| -------------------- | ----------------------------------------- |
| Next.js (App Router) | Full-stack React framework                |
| React                | User interface                            |
| TypeScript           | Type-safe development                     |
| Tailwind CSS v4      | Styling and responsive design             |
| Vercel AI SDK        | AI chat and streaming                     |
| OpenAI API           | AI-generated conversations                |
| Supabase             | Authentication and database (in progress) |
| next-themes          | Dark and light theme management           |
| Tabler Icons         | UI icons                                  |

## 🚀 Getting Started

### Prerequisites

- Node.js (a version supported by your installed Next.js release)
- npm
- An OpenAI API key
- A Supabase project for database development

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/robomaya.git
cd robomaya
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```dotenv
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=your_selected_model

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

**Security:** Never commit `.env.local`, API secrets or database credentials to Git.

OpenAI API usage may incur charges.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── calls/
│   ├── chat/
│   │   └── page.tsx
│   ├── memories/
│   ├── settings/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx
│   │   └── Navigation.tsx
│   └── ui/
│       └── Card.tsx
└── lib/
    └── supabase/
        └── client.ts
```

_Project structure will evolve as new features are implemented._

## 🗺️ Development Roadmap

- [x] Initialise Next.js project with TypeScript and Tailwind CSS
- [x] Build responsive dashboard and navigation
- [x] Implement dark and light themes
- [x] Create AI-powered chat with streaming responses
- [x] Add automatic scrolling, Stop and Retry functionality
- [x] Set up Supabase project and browser client
- [ ] Design and secure database tables with Row Level Security
- [ ] Implement Supabase authentication
- [ ] Save and retrieve conversations
- [ ] Build user-controlled long-term memory
- [ ] Integrate real-time voice conversations
- [ ] Create an interactive RoboMaya character
- [ ] Explore Twilio integration
- [ ] Add automated testing and deploy the application

## 🎯 Project Goals

RoboMaya is designed to explore:

1. Building conversational AI applications with React and Next.js.
2. Working with the Vercel AI SDK and OpenAI APIs.
3. Implementing secure authentication and persistent data.
4. Managing AI-generated content and streaming UI states.
5. Building natural voice interactions using real-time APIs.
6. Developing accessible, responsive and reusable UI components.

## 📌 Project Status

🚧 **In active development**

RoboMaya is a personal learning project. Features and architecture may change as development progresses.

---

Made with 💜, TypeScript and a love of cats. 🐱
