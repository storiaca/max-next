import Image from "next/image";
export default function Header() {
  return (
    <header>
      <Image
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        width={300}
        height={300}
      />
      <h1>Welcome to this NextJS Course!</h1>
    </header>
  );
}
