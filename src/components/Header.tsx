import React, { FC, useRef } from "react";

interface NewP {
  name: string | undefined;
  price: number | undefined | string;
  description: string | undefined;
  status: string;
  category_id: string;
}

interface PrTaype {
  fn: (params: NewP) => void;
  sch: (arg: string) => void;
}

const Header: FC<PrTaype> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const narxRef = useRef<HTMLInputElement>(null);
  const izohRef = useRef<HTMLTextAreaElement>(null);

  function hendl(event: React.MouseEvent) {
    if (
      nameRef.current?.value == null &&
      narxRef.current?.value == null &&
      izohRef.current?.value == null &&
      nameRef.current?.value == "" &&
      narxRef.current?.value == "" &&
      izohRef.current?.value == ""
    ) {
      alert("Iltimos inputlarni to'ldirin");
      return;
    }

    (document.getElementById("my_modal_1") as HTMLFormElement).close();
    event.preventDefault();

    const newPhone: NewP = {
      name: nameRef.current?.value,
      price: narxRef.current?.value,
      description: izohRef.current?.value,
      status: "Activ",
      category_id: `${Math.random() * 10000}`,
    };

    props.fn(newPhone);
    if (nameRef.current?.value) {
      nameRef.current.value = "";
    }
    if (narxRef.current?.value) {
      narxRef.current.value = "";
    }
    if (izohRef.current?.value) {
      izohRef.current.value = "";
    }
  }

  return (
    <div className="flex max-w-[1440px] justify-between mx-auto items-center gap-24 pt-8 border-b-2 border-blue-500">
      <button
        onClick={() =>
          (document.getElementById("my_modal_1") as HTMLFormElement).showModal()
        }
        className="flex btn btn-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="rgba(126, 136, 136, 0.98)"
        >
          <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 11H8V13H11V16H13V13H16V11H13V8H11V11Z"></path>
        </svg>{" "}
        Add
      </button>

      <dialog
        id="my_modal_1"
        onClick={() =>
          (document.getElementById("my_modal_1") as HTMLFormElement).close()
        }
        className="modal"
      >
        <div
          className="flex flex-col w-[360px] gap-6 bg-slate-400 p-6 rounded-md"
          id="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            ref={nameRef}
            type="text"
            placeholder="Nomini kiriting"
            className="p-2 rounded-md"
          />
          <input
            ref={narxRef}
            type="number"
            placeholder="Narxini kiriting"
            className="p-2 rounded-md"
          />
          <textarea
            ref={izohRef}
            placeholder="Izoh..."
            name=""
            className="p-2 rounded-md"
            id=""
          ></textarea>
          <button className="btn btn-primary" onClick={hendl}>
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
