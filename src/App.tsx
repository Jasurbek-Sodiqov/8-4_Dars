import { useEffect, useState } from "react";
import Header from "./components/Header";
import Phones from "./components/Phones";
import Skleton from "./components/Skleton";

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

function App() {
  const [dt, setDt] = useState<DataType[]>();
  const [delId, setDelId] = useState<string | null>(null);
  const [sech, setSech] = useState<DataType[] | null>(null);

  function Search(ini: string) {
    if (!sech) {
      setSech(JSON.parse(JSON.stringify(dt)));
    } else {
      let arey = [...sech];
      arey = arey.filter((el) => el.name.includes(ini));
      setDt(arey);
    }
  }

  function safe(newDt: any) {
    fetch("https://auth-rg69.onrender.com/api/products/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newDt),
    })
      .then((res) => res.json())
      .then((d) => {
        let ms = JSON.parse(JSON.stringify(dt));
        ms.push(d);
        setDt(ms);
      });
  }

  async function NewData() {
    const mal = await fetch("https://auth-rg69.onrender.com/api/products/all");
    const d = await mal.json();
    console.log(d);

    setDt(d);
  }
  useEffect(() => {
    NewData();
  }, []);

  function Delet(id: string) {
    setDelId(id);

    let isDt = confirm("Rastan ham o'chirmoqchimi siz");
    if (isDt && id) {
      console.log(id);

      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: "DELETE",
      })
        .then((ref) => ref.json())
        .then((d) => {
          if (d.message == "Mahsulot muvaffaqiyatli o'chirildi") {
            let arr = JSON.parse(JSON.stringify(dt));
            arr = arr.filter((el: DataType) => el.id != id);
            setDt(arr);
          }
        })
        .catch((err) => {
          console.log(err, "xx");
        });
    }
  }

  return (
    <div>
      <Header fn={safe} sch={Search} />
      {dt ? <Phones pr={dt} dz={delId} deletfn={Delet}></Phones> : <Skleton />}
    </div>
  );
}

export default App;
