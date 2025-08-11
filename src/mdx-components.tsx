import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-2xl font-bold text-static-green mb-4 animate-flicker" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-xl font-bold text-static-amber mb-3" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-lg font-bold text-static-green mb-2" {...props} />
    ),
    p: (props) => (
      <p className="mb-4 leading-relaxed opacity-90" {...props} />
    ),
    a: (props) => (
      <a 
        className="text-static-amber underline hover:text-static-green transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code: (props) => (
      <code className="bg-gray-800 text-static-green px-1 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-900 border border-static-green p-4 rounded overflow-x-auto mb-4 text-sm" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-static-amber pl-4 italic opacity-80 mb-4" {...props} />
    ),
    ul: (props) => (
      <ul className="list-none space-y-1 mb-4 pl-4" {...props} />
    ),
    li: (props) => (
      <li className="before:content-['►'] before:text-static-green before:mr-2" {...props} />
    ),
    ...components,
  }
}