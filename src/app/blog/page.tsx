import { metadata } from '../layout'
import Hello from './content.mdx'

metadata.title = "Blog"

export default function page() {
    return (
        <Hello />
    )
}
