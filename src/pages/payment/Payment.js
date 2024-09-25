// import React from "react";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

// const Payment = () => {
//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Payment " />
//       <div className="pb-10">
//         {/* <p>Paid amout Successfully</p> */}
//         <div style={styles.container}>
//             <img
//                 src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
//                 alt="Success Icon"
//                 style={styles.icon}
//             />
//             <span>Paid amount Successfully</span>
//         </div>
//         <Link to="/">
//           <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
//             Explore More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//       display: 'flex',
//       alignItems: 'center',
//       fontWeight: 'bold',
//       color: 'green',
//       fontSize: '20px',
//   },
//   icon: {
//       marginRight: '10px',
//       width: '24px',
//       height: '24px',
//   },
// };

// export default Payment;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/orebiSlice"; // Import resetCart action
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const dispatch = useDispatch();

  // Automatically reset the cart when the component loads
  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment " />
      <div className="pb-10">
        <div style={styles.container}>
          <img
            src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
            alt="Success Icon"
            style={styles.icon}
          />
          <span>Paid amount Successfully</span>
        </div>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'green',
    fontSize: '20px',
  },
  icon: {
    marginRight: '10px',
    width: '24px',
    height: '24px',
  },
};

export default Payment;
