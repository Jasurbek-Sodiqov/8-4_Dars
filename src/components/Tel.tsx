import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

function Tel() {
  const [tel, setTel] = useState<DataType>();
  const tid = useParams();
  async function Malumot() {
    const ml = await fetch(
      `https://auth-rg69.onrender.com/api/products/${tid.id}`
    );
    const d = await ml.json();
    setTel(d);
    console.log(d);
  }

  useEffect(() => {
    Malumot();
  }, []);

  const rasm: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOjNaT8EBTOEECE1uvV8FHT33Iv9SUmWsbhm33hSIJQ&s",
    "https://wcblind.org/wp-content/uploads/2021/11/6504-best-mobile-phones-in-pile-images-stock-pho.jpeg",
    "https://www.blieveme.com/wp-content/uploads/2019/09/top-10-mobiles-1024x576-1024x576.png",
  ];

  return (
    <div className="max-w-[1440px]  mx-auto pt-8">
      <Link to={"/"} className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="rgba(241,241,246,1)"
        >
          <path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z"></path>
        </svg>{" "}
        Go back
      </Link>
      {tel ? (
        <div className="flex pt-8">
          <div className="flex flex-col w-[250px] gap-2">
            <img className="h-[200px]" src={rasm[0]} alt="" />
            <img className="h-[200px]" src={rasm[1]} alt="" />
            <img className="h-[200px]" src={rasm[2]} alt="" />
          </div>
          <div className="pl-32 justify-center text-center ">
            <h2>Telefon nomi: {tel.name}</h2>
            <p>Telefon haqida: {tel.description}</p>
            <p>Satatus: {tel.status}</p>
            <p>Price: ${tel.price}</p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="w-[250px] gap-2 pt-8">
            <div className="skeleton h-[200px]"></div>
            <div className="skeleton h-[200px]"></div>
            <div className="skeleton h-[200px]"></div>
          </div>
          <div className="pl-8 flex flex-col gap-3">
            <div className="skeleton h-[20px] w-[200px]"></div>
            <div className="skeleton h-[20px] w-[300px]"></div>
            <div className="skeleton h-[20px] w-[200px]"></div>
            <div className="skeleton h-[20px] w-[200px]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tel;
