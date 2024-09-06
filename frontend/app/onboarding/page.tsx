// // pages/select-shop.tsx

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const SelectShop: React.FC = () => {
//   const [shops, setShops] = useState<any[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchShops = async () => {
//       const response = await fetch("/api/v1/shops"); // Adjust the endpoint as needed
//       const data = await response.json();
//       setShops(data);
//     };

//     fetchShops();
//   }, []);

//   const handleShopSelect = (shopId: string) => {
//     // Store the selected shop ID in local storage
//     localStorage.setItem("current_shop", shopId);
//     // Redirect to the dashboard or the desired page
//     router.push("/dashboard"); // Adjust the redirect path as needed
//   };

//   return (
//     <div>
//       <h1>Select Your Shop</h1>
//       <ul>
//         {shops.map((shop) => (
//           <li key={shop.id}>
//             <button onClick={() => handleShopSelect(shop.id)}>
//               {shop.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SelectShop;
