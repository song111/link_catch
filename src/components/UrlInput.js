import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

const UrlInput = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0)

  return (
    <div>
     <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UrlInput