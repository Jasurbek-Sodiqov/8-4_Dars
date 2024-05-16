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
      <img
        className="w-28"
        src="https://media3.giphy.com/media/YV3pnketRSh20PsLf1/giphy.gif?cid=6c09b952jivw9htujuufx2rhhd33vv11gz1bhhlj7tdgl0qn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        alt=""
      />
      <div className="flex-1">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => props.sch(e.target.value)}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
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
          fill="rgba(81,181,248,0.98)"
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
