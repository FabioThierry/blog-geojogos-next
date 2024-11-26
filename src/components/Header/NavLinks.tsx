import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Início
      </Link>
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Postagens
      </Link>
      <Link
        href="/sobre"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Contato
      </Link>
    </>
  );
}
