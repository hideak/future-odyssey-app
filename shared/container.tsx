import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-purple-500/30 overflow-x-hidden relative">
        {props.children}
    </div>
  );
};

export default Container;
