export default function XionEmbeddedPage() {
  return (
    <div className="w-full h-[800px] border rounded-xl overflow-hidden">
      <iframe
        src="https://xion-testnet.vercel.app/"
        title="Xion Testnet"
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  )
}
