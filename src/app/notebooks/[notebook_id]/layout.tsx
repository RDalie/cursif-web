export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[350px]">
      {children}
    </div>
  )
}
