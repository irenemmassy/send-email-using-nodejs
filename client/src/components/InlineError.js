import React from "react";

function InlineError({ error }) {
  return (
    <p className="my-1 text-xs text-red-600 font-subMain font-medium">
      {error}
    </p>
  );
}

export default InlineError;
