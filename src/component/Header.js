export const Title = () => (
    <a href="/">
   <img
    className="logo"  
    src= "https://th.bing.com/th/id/OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa?pid=ImgDet&rs=1"
    alt= "logo"
    />
    </a>
  );
  
 const Header = ()=>{
    return(
      <div className="header">
        <Title/>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
      </div>
    );
  };
  
export default Header