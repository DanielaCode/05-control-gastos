import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};
function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="text-lg text-red-700 bg-red-200 border-red-700 border-2 p-3 text-center rounded-lg font-bold">
      {children}
    </p>
  );
}

export default ErrorMessage;
