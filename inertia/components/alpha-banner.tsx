import { Info } from 'lucide-react'

export function AlphaBanner() {
  return (
    <div className="inline-flex relative w-full justify-center items-center bg-blue-50 p-2 text-sm text-blue-700 border-b border-blue-500">
      <Info className="w-4 h-4 mr-1.5" />

      <p className="font-medium">
        This is an <strong>alpha</strong> demo. Any feedback will be appreciated.
      </p>
    </div>
  )
}
