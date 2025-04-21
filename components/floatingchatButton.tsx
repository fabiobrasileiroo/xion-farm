"use client"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MessageSquare } from "lucide-react"

export function FloatingChatAI() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                   rounded-full bg-green-500 px-4 py-2 text-black
                   shadow-lg shadow-green-400/50
                   hover:bg-green-400 hover:scale-105
                   transition-all duration-300 border border-green-300"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="font-bold">IA</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="w-[90vw] max-w-[1200px] h-[80vh] p-0 overflow-hidden
                     border-green-500 shadow-[0_0_30px_#22c55e88] bg-black"
        >
          <iframe
            src="https://xionfarm-predictive-glow-swnw.vercel.app/"
            className="w-full h-full border-none"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
