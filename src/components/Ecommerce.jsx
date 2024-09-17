import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppSpinner from "./Spinner";
import AppNotFound from "../pages/NotFound";
import AppFooter from "../pages/Footer";
import { cart } from "../Context/addtoCart";
import { ShoppingCartOutlined,ShoppingOutlined } from "@ant-design/icons";
function AppEcommerce() {
  const { id } = useParams();
  const [productInf, setProductInf] = useState({});
  const [loader, setLoader] = useState(true);
  const [ProducNotFound, setProducNotFound] = useState(false);
  const cartDetails = useContext(cart);
  console.log(cartDetails);
  const { addItems, itemsAdded } = cartDetails;

  useEffect(() => {
    const getApiData = () => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            setLoader(false);
            setProducNotFound(true);
            return;
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setProductInf(data);
            setLoader(false);
          }
        })
        .catch((err) => {
          setLoader(false);
          setProducNotFound(true);
        });
    };
    getApiData();
  }, [id]);
  const { thumbnail, brand, title, description, price } = productInf;

  return loader ? (
    <AppSpinner className="appSpinner" />
  ) : ProducNotFound ? (
    <AppNotFound />
  ) : (
    <section className=" body-font overflow-hidden container mt-4">
      <div key={productInf.id} className="container px-2 py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="imageCard lg:w-1/2 w-full lg:h-auto h-64 object-cover p-2 object-center rounded"
            src={thumbnail}
          />
          <div className="productDetaiBox lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  ">
            <h2 className="text-sm title-font  tracking-widest">{brand}</h2>
            <h1 className=" text-3xl title-font font-medium mb-1">{title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className=" ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-blue-600">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-blue-400">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-green-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl ">${price}</span>
              <button
                className="flex ml-auto gap-2 items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => {
                  addItems(productInf);
                }}
              >
                {itemsAdded(productInf) ? (
                  <><ShoppingOutlined/>{"Added " + itemsAdded(productInf).quantity + " items"}</>
                ) : (
                  <>
                    <ShoppingCartOutlined />
                    {"Add to Cart "}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppEcommerce;
