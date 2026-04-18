import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Main(props: Props) {
  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-12 md:space-y-16">
      {props.children}
    </main>
  );
}
