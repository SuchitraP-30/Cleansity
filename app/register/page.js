import Link from "next/link";

export default function Register() {
  return (
    <div style={{background:"#f0fdf4", minHeight:"100vh", padding:"50px", textAlign:"center"}}>
      <h1 style={{color:"#166534"}}>Create Account</h1>
      <div style={{background:"white", padding:"30px", maxWidth:"350px", margin:"auto", borderRadius:"12px"}}>
        <input placeholder="Full Name" style={inputStyle}/><br/><br/>
        <input placeholder="Email" type="email" style={inputStyle}/><br/><br/>
        <input placeholder="Password" type="password" style={inputStyle}/><br/><br/>
        <button style={buttonStyle}>Register</button>
        <p>Already have an account? <Link href="/login">Login</Link></p>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}

const inputStyle = {padding:"12px", width:"100%", boxSizing:"border-box", border:"1px solid #ccc", borderRadius:"6px"};
const buttonStyle = {background:"#166534", color:"white", padding:"12px 30px", border:0, borderRadius:"6px", cursor:"pointer"};