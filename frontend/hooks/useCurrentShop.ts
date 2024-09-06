// // hooks/useCurrentShop.ts

// import { useEffect, useState } from "react";

// const useCurrentShop = () => {
//   const [currentShop, setCurrentShop] = useState<string | null>(null);

//   useEffect(() => {
//     const shopId = localStorage.getItem("current_shop");
//     if (shopId) {
//       setCurrentShop(shopId);
//     }
//   }, []);

//   return currentShop;
// };

// export default useCurrentShop;
