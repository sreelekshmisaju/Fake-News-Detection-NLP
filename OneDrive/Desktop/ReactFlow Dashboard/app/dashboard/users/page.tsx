"use client"

import { useEffect, useState } from "react"
import type { UserData } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UsersPage() {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    setUsers(savedUsers)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <div className="grid gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd>{user.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                  <dd>{user.phone}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">Address</dt>
                  <dd>{user.address}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
        {users.length === 0 && (
          <p className="text-muted-foreground text-center py-8">No users found. Add some users from the dashboard.</p>
        )}
      </div>
    </div>
  )
}

