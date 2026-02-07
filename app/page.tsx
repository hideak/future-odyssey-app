import { TriangleAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <TriangleAlert className="mb-4" />
      <div>Olá!</div>
      <div>Este site está em construção.</div>
      <div>Volte mais tarde.</div>
    </div>
  );
}
