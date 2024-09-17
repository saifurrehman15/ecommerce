import { useContext } from "react";
import { cart } from "../Context/addtoCart";
import { ThemeContext } from "../Context/ThemeContext"; // Import the ThemeContext
import {
  DeleteOutlined,
  PlusOutlined,
  MinusOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import AppButton from "../components/Button";

function ItemPage() {
  const items = useContext(cart);
  const { cartItem, deleteItems, addItems, decreaseItems } = items;
  const themeColor = useContext(ThemeContext);
  const { theme } = themeColor; // Destructure the theme

  const subTotal = cartItem.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  // Check if screen width is less than 768 pixels
  const isMobile = window.innerWidth < 768;

  // Define styles based on theme
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBgColor = theme === "dark" ? "bg-gray-800" : "bg-white";
  const shadowColor =
    theme === "dark"
      ? "shadow-md shadow-gray-800"
      : "shadow-md shadow-gray-200";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`w-full h-full p-4 ${bgColor}`}>
      <h1 className={`text-3xl font-bold ${textColor} mb-6`}>Cart Items</h1>

      {cartItem.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="flex flex-col space-y-4">
            {cartItem.map((data) => {
              if (data.quantity === 0) {
                deleteItems(data);
              }

              return (
                <div
                  key={data.id}
                  className={`relative flex flex-col ${cardBgColor} ${shadowColor} rounded-lg p-4 space-y-4`}
                >
                  {/* Actions outside the card */}
                  <div className="flex justify-between items-center mb-2">
                    {screen.width > 768 ? (
                      ""
                    ) : (
                      <div>
                        <button
                          className="text-red-500 hover:bg-red-100 dark:hover:bg-red-700 rounded-full p-1"
                          onClick={() => deleteItems(data)}
                        >
                          <DeleteOutlined />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <img
                      src={data?.images[2] || data?.images[0]}
                      alt={data.title}
                      className="h-24 w-24 object-cover rounded-lg bg-white"
                    />
                    <div className="flex-1 ml-4">
                      <h2 className={`font-medium text-lg ${textColor}`}>
                        {data.title}
                      </h2>
                      <p className={`text-gray-600 ${subTextColor}`}>
                        ${data.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <AppButton
                          icon={
                            data.quantity > 1 ? (
                              <MinusOutlined />
                            ) : (
                              <DeleteOutlined />
                            )
                          }
                          className="text-blue-500   p-2"
                          onClick={() => decreaseItems(data)}
                        />
                        <input
                          type="number"
                          value={data.quantity}
                          readOnly
                          className={`w-12 text-center border rounded-md ${cardBgColor} border-gray-300 ${subTextColor}`}
                        />
                        <AppButton
                          icon={<PlusOutlined />}
                          className="text-blue-500  p-2"
                          onClick={() => data.quantity < 20 && addItems(data)}
                        />
                      </div>
                    </div>
                    {screen.width < 768 ? (
                      ""
                    ) : (
                      <div>
                        <button
                          className="text-red-500 hover:bg-red-100 dark:hover:bg-red-700 rounded-full p-1"
                          onClick={() => deleteItems(data)}
                        >
                          <DeleteOutlined />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20">
                <h1 className={`text-3xl font-bold ${textColor} mb-6`}>Cart Items</h1>

          <img
            src="../src/assets/11329060.png"
            alt="Empty Cart"
            className="h-80 w-auto mb-4"
          />
          <h2 className={`text-xl font-semibold ${textColor} mb-2`}>
            Your Cart is Empty
          </h2>
          <p className={`text-gray-500 ${subTextColor}`}>
            Before proceeding to checkout, you must add some products to your
            cart. Explore our "Shop" page to find exciting products.
          </p>
        </div>
      )}

      {cartItem.length > 0 && (
        <div
          className={`flex ${
            isMobile ? "flex-col items-center" : "justify-between"
          } mt-6 p-4 ${cardBgColor} ${shadowColor} rounded-lg`}
        >
          <div className="flex items-center space-x-4">
            <h2 className={`text-xl font-semibold ${subTextColor}`}>
              Subtotal:
            </h2>
            <h3 className={`text-xl font-bold ${textColor}`}>
              ${subTotal.toFixed(2)}
            </h3>
          </div>
          <AppButton
            icon={<ShoppingOutlined />}
            name="Checkout"
            className={`mt-4 w-full rounded-lg py-2 px-4 bg-black border-none text-white`}
          />
        </div>
      )}
    </div>
  );
}

export default ItemPage;
