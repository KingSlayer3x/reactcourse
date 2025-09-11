import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => ({
      ...prevState,
      text: "Your coupun has been used",
      valid: false,
      instructions: "Please visit our resturant to renew your gift card."}));
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}


// import { useState } from "react";
// import axios from "axios";

// export default function RegisterForm(){
//   const [formData, setFromData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFromData({ ...formData, [e.target.name]: e.target.value});
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(loading) return; // to prevent multiple clicks
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post("/api/register" ,formData);
//       console.log("registration Succsess!", response.data);
//     } catch (error){
//       console.error("registration failed!", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div
//   style={{
//     marginLeft: "auto",
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh", // full viewport height
//     // backgroundColor: "#f5f5f5", // optional page background
//   }}
// >
//   <div
//     style={{
//       width: "100%",
//       maxWidth: "400px",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//       backgroundColor: "white", // card background
//     }}
//   >
//     <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

//     {error && (
//       <div
//         style={{
//           backgroundColor: "#f8d7da",
//           color: "#721c24",
//           padding: "10px",
//           borderRadius: "4px",
//           marginBottom: "15px",
//         }}
//       >
//         {error}
//       </div>
//     )}

//     {success && (
//       <div
//         style={{
//           backgroundColor: "#d4edda",
//           color: "#155724",
//           padding: "10px",
//           borderRadius: "4px",
//           marginBottom: "15px",
//         }}
//       >
//         {success}
//       </div>
//     )}

//     <form
//       onSubmit={handleSubmit}
//       style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//     >
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Enter your name"
//         required
//         style={{
//           padding: "10px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//           fontSize: "16px",
//         }}
//       />

//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Enter your email"
//         required
//         style={{
//           padding: "10px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//           fontSize: "16px",
//         }}
//       />

//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Enter your password"
//         required
//         style={{
//           padding: "10px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//           fontSize: "16px",
//         }}
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         style={{
//           padding: "10px",
//           borderRadius: "4px",
//           border: "none",
//           backgroundColor: "#191919",
//           color: "white",
//           fontSize: "16px",
//           cursor: loading ? "not-allowed" : "pointer",
//         }}
//       >
//         {loading ? "Submitting..." : "Register"}
//       </button>
//     </form>

//     <p style={{ textAlign: "center", marginTop: "15px" }}>
//       Already have an account? <a href="/login">Login</a>
//     </p>
//   </div>
// </div>
//   )
// }