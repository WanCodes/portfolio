import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="text-3xl font-medium">Page not found</h1>
      <p className="mt-3 text-muted">That route does not exist.</p>
      <Link href="/" className="mt-8 inline-block text-accent hover:underline">
        Back home
      </Link>
    </Container>
  );
}
