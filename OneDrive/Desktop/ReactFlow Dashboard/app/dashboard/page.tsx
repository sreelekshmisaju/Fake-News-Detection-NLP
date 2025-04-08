"use client"

import { useEffect, useState } from "react"
import Counter from "@/components/counter"
import UserForm from "@/components/user-form"
import RichTextEditor from "@/components/rich-text-editor"
import type { UserData } from "@/types/user"

export default function Dashboard() {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    setUsers(savedUsers)
  }, [])

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Counter />
          <UserForm />
        </div>

        <div className="space-y-8">
          <RichTextEditor />
          <div className="bg-muted p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Saved Users</h2>
            <pre className="whitespace-pre-wrap">{JSON.stringify(users, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

