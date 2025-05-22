/// <reference types="vite/client" />



interface Snippet {
    id: string;
    title: string;
    content: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}

interface SnippetAPI {
    getSnippets: () => Snippet[];
    addSnippet: (snippet: Snippet) => void;
    updateSnippet: (id: string, data: Partial<Snippet>) => void;
    deleteSnippet: (id: string) => void;
}

interface Window {
    snippetAPI: SnippetAPI;
}