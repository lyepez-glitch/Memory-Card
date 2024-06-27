function Card({img,desc,name,clickFunc}){

  console.log('desc is',desc)
  return(<div className="card">
    <div>{name}</div>
    <img src={img} name={name} onClick = {clickFunc} alt={name}/>
    <p>{desc}</p>

  </div>
  );
}
export default Card;