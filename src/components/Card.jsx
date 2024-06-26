function Card({img,abilities,name,clickFunc}){
  return(<div className="card">
    <img src={img} name={name} onClick = {clickFunc} alt={name}/>

  </div>
  );
}
export default Card;