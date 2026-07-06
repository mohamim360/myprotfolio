import React from "react";
import { FaPaperPlane } from "react-icons/fa";

type SubmitBtnProps = {
  pending: boolean;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ pending }) => {
  return (
    <button
      type="submit"
      className="btn-primary group h-12 w-36 disabled:scale-100 disabled:opacity-60"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? (
        <div
          className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
          role="status"
          aria-label="Sending"
        />
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
