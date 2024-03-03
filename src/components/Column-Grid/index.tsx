import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"


export function ColumnGrid({
    left,
    right
}: {
    left: React.ReactNode,
    right: React.ReactNode,
}) {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                {left}
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
                {
                    right
                }
            </ResizablePanel>
        </ResizablePanelGroup>

    )
}
