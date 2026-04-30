// app/chat/page.tsx
import ChatWidget from '../../components/ChatWidget';

export const metadata = {
  title: 'Chat',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ChatWidget />
    </div>
  );
}