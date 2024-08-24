export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <div className="p-1 border text-center">
            20% off for next few days
        </div>
          <div>
            {children}
          </div>
        </div>
    );
  }