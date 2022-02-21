import { Input  } from 'antd';
import { useEffect, useRef } from 'react';

const Header = (props) => {
  const inputRes = useRef();
  useEffect(()=>{
    inputRes.current.focus();
  }, []);
  return (
    <div className="header">
      <div className='header-title'>Css Reference</div>
      <Input className='search-input' ref={inputRes} placeholder="Enter CSS Properties" onChange={(e) => props.setSearch(e.target.value)}/>
      <a href="https://github.com/ckvv/css-reference">Github</a>
    </div>
  )
};

export default Header;