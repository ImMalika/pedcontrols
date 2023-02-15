// import React from "react";
import "./navDropDown.scss";
// // import { MenuProps } from "antd";
// import { Button, Dropdown, Space } from "antd";
// import { Link } from "react-router-dom";
// export const items = [
// 	{
// 		key: "1",
// 		label: (
// 			<Link
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				to="https://www.antgroup.com"
// 			>
// 				1st menu item
// 			</Link>
// 		),
// 		title: "bottom",
// 		link: "/",
// 	},
// 	{
// 		key: "2",
// 		label: (
// 			<Link
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				to="https://www.aliyun.com"
// 			>
// 				2nd menu item
// 			</Link>
// 		),
// 		title: "bottom",
// 	},
// 	{
// 		key: "3",
// 		label: (
// 			<Link
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				to="https://www.luohanacademy.com"
// 			>
// 				3rd menu item
// 			</Link>
// 		),
// 		title: "bottom",
// 	},
// ];

// const NavDropDown = () => (
// 	<Space direction="vertical" className="mainDropDown">
// 		<Space wrap>
// 			{items.map((item, index) => (
// 				<Dropdown menu={{ items }} placement="bottom" key={index}>
// 					<Button className="btn">{item.title}</Button>
// 				</Dropdown>
// 			))}
// 		</Space>
// 	</Space>
// );

// export default NavDropDown;


import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const App = () => (
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;