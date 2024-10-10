export default function Home() {
  let name = '진영';
  let 레시피 = ['라면', '국수', '스파게티'];

  return (
    <div>
      <h2 className="title">마이레시피</h2>
      <p className="title-sub">{name}</p>
      {
        레시피.map((item, index) => {  // 각 레시피 항목을 item으로 받음
          return (
            <div className="food" key={index}>
              <h4>{item}</h4>
            </div>
          )
        })
      }
    </div>
  );
}
