import React, { useEffect, useState } from 'react';

function LifecycleDemoComponent() {
  const [count, setCount] = useState(0);

  console.log(`--- Component render: count = ${count}`); 

  useEffect(() => {
    console.log(` useEffect chạy: count = ${count}`);

    return () => {
      console.log(`Cleanup chạy: Dọn dẹp cho count = ${count} (khi effect chạy lại HOẶC component unmount)`);
      // - Hủy subscription
      // - Xóa event listeners
      // - Clear timers (clearInterval, clearTimeout)
    };

  }, [count]);


  useEffect(() => {
    console.log('--- useEffect KHÁC: Chỉ chạy 1 lần sau mounting (tương đương componentDidMount)');
  }, []);


  // Effect chạy sau MỌI render (thường tránh dùng)
//   useEffect(() => {
//     console.log('--- useEffect KHÁC (KHÔNG có dependency array): Chạy sau MỌI render');
//     // Rất cẩn thận với loại này!
//   });


  return (
    <div style={{ border: '1px solid blue', padding: '15px', margin: '15px' }}>
      <h3>Lifecycle Demo Component</h3>
      <p>Giá trị Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Tăng Count 
      </button>
    </div>
  );
}

export default LifecycleDemoComponent;