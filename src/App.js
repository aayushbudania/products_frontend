import { useState, useEffect, useRef } from "react";

export default function App() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const featuredInputRef = useRef();
  const ratingInputRef = useRef();
  const companyInputRef = useRef();
  const createdAtInputRef = useRef();

  const createProduct = async (e) => {
    e.preventDefault();

    fetch("https://products-backend.onrender.com/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInputRef.current.value,
        price: priceInputRef.current.value,
        featured: featuredInputRef.current.value,
        rating: ratingInputRef.current.value,
        company: companyInputRef.current.value,
        createdAt: createdAtInputRef.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      }).then((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    const fetchProducts = async () => {
        fetch(`https://products-backend.onrender.com/products`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => setProducts(data));
        setIsLoading(false);
      };
      fetchProducts();
  }, [products]);

  return (
    <div className="flex items-stretch ...">
        <div className="w-full max-w-sm m-auto mt-2 mx-32">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={createProduct}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter Name"
            ref={nameInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter Price"
            ref={priceInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Featured
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="featured"
            type="text"
            placeholder="Enter true or false"
            ref={featuredInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="text"
            placeholder="Enter Rating"
            ref={ratingInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Enter Company"
            ref={companyInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Created At
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="createdat"
            type="text"
            placeholder="Enter Date"
            ref={createdAtInputRef}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>

        <div>
      {isLoading || !products ? (
        <div>Fetching products data from server...</div>
      ) : (
        <div className="my-32">
          <div className="flex flex-col mx-16">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Featured
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Rating
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Company
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Created At
                        </th>

                        <th scope="col" className="relative px-3 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="relative px-3 py-3">
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product, index) => (
                        <tr key={index}>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {product.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {product.price}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.featured ? "Yes" : "No"}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.rating}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.company}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.createdAt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}