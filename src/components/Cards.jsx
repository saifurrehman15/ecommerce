import { Link } from "react-router-dom";
import AppSpinner from "./Spinner";
import AppNotFound from "../pages/NotFound";

function AppCards({ productsArr, loader, notFound }) {
  return (
    loader ? (
      <AppSpinner className="appSpinner" />
    ) : notFound ? (
      <AppNotFound />
    ) : (
      <section className="container mx-auto mt-10 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold  mb-4">Our Exclusive Products</h1>
          <p className="text-lg text-gray-500 xl:w-1/2 lg:w-2/3 mx-auto mb-8">
            "Discover our handpicked selection of premium products, combining elegance with functionality."
          </p>
          <div className="w-20 h-1 bg-indigo-700 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsArr
            .filter((val) => val.category === "beauty" || val.category === "fragrances")
            .map((product) => {
              const { id, thumbnail, title, price } = product;
              return (
                <Link
                  to={`/product/${id}`}
                  key={id}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      alt={title}
                      src={thumbnail}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      20% OFF
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
                    <p className="text-indigo-600 text-xl font-bold">${price}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    )
  );
}

export default AppCards;
