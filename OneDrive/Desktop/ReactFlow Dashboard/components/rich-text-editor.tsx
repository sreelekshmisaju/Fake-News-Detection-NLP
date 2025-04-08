"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline, List } from "lucide-react"

export default function RichTextEditor({
  initialContent = "",
  onSave,
}: { initialContent?: string; onSave?: (content: string) => void }) {
  const [content, setContent] = useState(initialContent)

  const handleFormat = (command: string) => {
    document.execCommand(command, false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rich Text Editor</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => handleFormat("bold")}>
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleFormat("italic")}>
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleFormat("underline")}>
            <Underline className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleFormat("insertUnorderedList")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="min-h-[200px] p-4 border rounded-md"
          contentEditable
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  )
}

