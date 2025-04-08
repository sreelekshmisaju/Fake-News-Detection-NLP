"use client"

import { useState, useCallback } from "react"
import { animated, useSpring } from "@react-spring/web"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Counter() {
  const [count, setCount] = useState(0)

  const springs = useSpring({
    from: { background: "hsl(0, 0%, 100%)" },
    to: {
      background: `hsl(${count * 10}, 70%, 80%)`,
    },
    config: {
      tension: 300,
      friction: 10,
    },
  })

  const increment = useCallback(() => setCount((c) => c + 1), [])
  const decrement = useCallback(() => setCount((c) => Math.max(0, c - 1)), [])
  const reset = useCallback(() => setCount(0), [])

  return (
    <animated.div style={springs} className="w-full min-h-[200px] rounded-lg p-4">
      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="text-4xl font-bold">{count}</div>
          <div className="flex gap-2">
            <Button onClick={decrement}>-</Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
            <Button onClick={increment}>+</Button>
          </div>
        </CardContent>
      </Card>
    </animated.div>
  )
}

