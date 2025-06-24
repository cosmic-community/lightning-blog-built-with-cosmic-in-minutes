import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostContentProps {
  content: string
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      className="prose prose-lg max-w-none"
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-gray-700 leading-relaxed mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-gray-700">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary-500 bg-primary-50 px-4 py-2 italic my-6">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm">
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
            {children}
          </pre>
        ),
        a: ({ href, children }) => (
          <a 
            href={href}
            className="text-primary-600 hover:text-primary-700 underline"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic">
            {children}
          </em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}