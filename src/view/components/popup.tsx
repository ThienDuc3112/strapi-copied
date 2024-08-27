import React from "react";

const Popup = ({ open }: { open: boolean }) => {
  return (
    <dialog open={open}>
      <div></div>
    </dialog>
  );
};

export default Popup;
