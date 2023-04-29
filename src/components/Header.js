import React,{useState} from "react";

const Header = ({msg,count}) => {



  return <div>
{count>1 ?  <h1 className="header">{msg}</h1> :    <h1 className="header">Let's Role</h1>}  
  </div>;
};

export default Header;
