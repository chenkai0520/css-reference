import { Input  } from 'antd';

const Header = () => (
  <div className="header">
    <div>Css Reference</div>
    <Input placeholder="Basic usage" maxLength={160}/>
    <a href="https://github.com/ckvv/css-reference">Github</a>
  </div>
);

export default Header;