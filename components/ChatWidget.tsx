// components/ChatWidget.tsx
'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('anythingllm-chat-widget-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'anythingllm-chat-widget-script';
    script.src = 'https://chat.promotedsoccerconsultants.com/embed/anythingllm-chat-widget.min.js';
    script.setAttribute('data-embed-id', 'dfff9723-9d70-4101-a2e4-28968d2f4e99');
    script.setAttribute('data-base-api-url', 'https://chat.promotedsoccerconsultants.com/api/embed');
    
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('anythingllm-chat-widget-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}