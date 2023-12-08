import { styled } from "styled-components"
import { BASE_URL,Button } from "../../App"

const SearchResult = ({food}) => {
  return (
    <div>
      <FoodContainer>
<CardContainer>{food?.map(({image,text,name,price})=><FoodCard key={name}>
      <div className="foodmaincontainer">
      <img src={BASE_URL +image}/>    
      </div>
      
       <div className="food_ph">
       <div>
       <h3>{name}</h3>
        <p>{text}</p>    
       </div>
      
        <Button>${price.toFixed(2)}</Button>   
      </div>
     
</FoodCard>)}</CardContainer>
    </FoodContainer>
    </div>
  )
}

export default SearchResult
const FoodContainer=styled.section`

min-height: calc(100vh);
background-image:url('images/bg.png');
background-repeat:no-repeat;   
background-size:cover;
/* display: flex; */

`
const CardContainer=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items:center;
row-gap: 26px;
column-gap: 24px;
padding-top:80px;
/* display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px; */

`
const FoodCard=styled.div`
    width: 340px;
  height: 167px;
  border: 0.66px solid;
   border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;
.food_ph{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
h3{
margin-top:8px;
font-size: 16px;
font-weight:500;

}
p{
      margin-top: 4px;
      font-size: 14px;
}
button{
      font-size: 12px;
}

}
`