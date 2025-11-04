import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/icons/logo.svg"
        alt="BeExpertly Logo"
        width={200}
        height={200}
        priority
        className="mb-8"
      />
      <h1 className="text-4xl font-bold">BeExpertly</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Welcome to BeExpertly
      </p>
    </main>
  );
}
