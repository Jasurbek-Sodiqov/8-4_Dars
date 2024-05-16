import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface DataType {
  category_id: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  price: number;
  status: string;
  updatedAt: string;
}

interface PhoneType {
  pr: DataType[];
  deletfn: (age: string) => void;
  dz: string | null;
}

const rasm: string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOjNaT8EBTOEECE1uvV8FHT33Iv9SUmWsbhm33hSIJQ&s",
  "https://wcblind.org/wp-content/uploads/2021/11/6504-best-mobile-phones-in-pile-images-stock-pho.jpeg",
  "https://www.blieveme.com/wp-content/uploads/2019/09/top-10-mobiles-1024x576-1024x576.png",
];

const Phones: FC<PhoneType> = (props) => {
  const navigator = useNavigate();

  return (
    <div className="w-[1440px] mx-auto mt-10 flex flex-wrap gap-6 justify-center mb-10">
      {props.pr.map((el) => {
        console.log(el.id);

        return (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105  duration-300"
            key={el.id}
          >
            <figure onClick={() => navigator(`/phone/${el.id}`)}>
              <img
                className="hover:scale-110 duration-500 w-full h-[227px] "
                src={rasm[Math.floor(Math.random() * 3)]}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{el.name}</h2>
              <p>{el.description}</p>
              <h4>${el.price}</h4>
              <div className="card-actions justify-end">
                {props.dz != el.id ? (
                  <button onClick={() => props.deletfn(el.id)} className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(236,13,13,1)"
                    >
                      <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  </button>
                ) : (
                  <p>O'chirimoqda ...</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Phones;
