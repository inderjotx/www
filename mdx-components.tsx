import { Heading } from '@/components/Blog/Heading'
import { Code } from '@/components/CodeBlock'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        // @ts-ignore
        code: ({ children }) => <Code code={children} />,
        h1: ({ children }) => <Heading title={children}  ></Heading>,
        h2: ({ children }) => <h2 className={cn('text-xl font-semibold text-purple-300 ', poppins.className)} >{children}</h2>
    }
}