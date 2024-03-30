import React from 'react';

interface MessageEmailTemplateProps {
  email: string;
  content: string;
}

export function MessageEmailTemplate({ email, content }: MessageEmailTemplateProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">New Message from Message</h1>
        <div className="mb-4">
          <p className="text-gray-600">From: {email}</p>
        </div>
        <div
          className="bg-gray-200 p-4 rounded-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}