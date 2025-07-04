'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useSession } from 'next-auth/react';

type Message = {
  id: number;
  text: string;
  createdAt: string;
  user: {
    username: string;
  };
};

export default function GlobalChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { data: session } = useSession();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/chat');
      const data = await res.json();
      setMessages(data.messages);
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
    intervalRef.current = setInterval(fetchMessages, 3000); // Poll every 3 seconds
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newMessage }),
      });
      setNewMessage('');
      await fetchMessages();
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  if (!session) {
    return <p className="text-gray-500 text-sm">Please log in to use the chat.</p>;
  }

  return (
    <div className="flex flex-col h-[400px] border rounded-md">
      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-white">
        {messages.length === 0 && (
          <p className="text-center text-gray-400">No messages yet</p>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-semibold text-purple-600">{msg.user.username}:</span>{' '}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex gap-2">
        <Input
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
