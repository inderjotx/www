import React, { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'


export function Code({ code }: { code: ReactNode }) {
    return (
        <div>
            <div className="relative h-10" >
                <span className="bg-[#011627] absolute  top-0 right-8  p-2 px-4 rounded-t-md  text-muted-foreground">JS</span>
            </div>
            <div className='bg-[#011627] overflow-hidden p-4 rounded-md' >
                <SyntaxHighlighter lang={"js"} style={nightOwl} >
                    {code}
                </ SyntaxHighlighter>
            </div>
        </div>
    )
}
