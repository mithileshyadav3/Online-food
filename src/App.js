import styled from 'styled-components'
import './App.css';
import { useEffect, useState } from 'react';
import SearchResult from './Components/SearchResult/SearchResult';
export const BASE_URL="http://localhost:9000"
function App() {
  const[data,setdata]=useState();
  const[filterdata,setFilter]=useState();
  const[btn,setBtn]=useState();

  const Filtering=(event)=>{
const searchValue=(event.target.value);
 if(searchValue==='')
 {
setFilter(null)
 }
 const puredata=data.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase())
 );
 setFilter(puredata);
  }
   
  useEffect(()=>{
    const FetchData=async()=>{
      
      try{
       let response= await fetch(BASE_URL)
       let json=await response.json();
       setdata(json)
       setFilter(json)
       
     
      }

      catch(error){
      console.log(error)
      }
     }
     FetchData();
     
  },[])
  const filterBtn=[{
    name:"All",
    type:"all"
  },
{name:"Breakfast",
type:"breakfast"

},
{
  name:"Lunch",
    type:"lunch"
},{
name:"Dinner",
    type:"dinner"
}]
  const ClickfilteringData=(type)=>{
    if(type==="all")
    {
      setFilter(data)
      setBtn("all");
    return;
    }
const filter = data?.filter((food) =>
food.type.toLowerCase().includes(type.toLowerCase())
);
setFilter(filter)
setBtn(type)
}
  
  return (
   <>
   <Container>
    <TopContainer>
      <div className='logo'>
       <img src='\images\Foody Zone.svg' alt='logo'/>
      </div>
      <div className='search'>
        <input type='text'  onChange={Filtering} placeholder='Search Food..'  />
      {/* <p>{filter}</p> */}
      </div>
    </TopContainer>
    <FilterContainer>
      {
        filterBtn.map((buttondata)=>
          <Button key={buttondata.name}
          onClick={()=>ClickfilteringData(buttondata.type)}>
               {buttondata.name}
            </Button>
        )
      }
      
    </FilterContainer>
<SearchResult food ={filterdata}/>
    
   </Container>
   {/* <SearchResult food ={data}/> */}
   </>
  );
}

export default App;
const Container=styled.div`
background-color:#323334;
max-width: 1440px;
min-height: 241px;


`
const TopContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1000px;
height: 120px;
margin: 0 auto;

/* align-content:center; */
.search{
  input{
  width: 285px;
  
  border: 1px solid #FF0909;
  border-radius: 5px;
  font-size:24px;
  padding: 12px;
  }


}

`
const FilterContainer=styled.div`
display: flex;
gap: 20px;
justify-content: center;
padding-bottom:30px;

`
 export const Button=styled.div`
width: 70px;
height: 31px;
font-size: 14px;
text-align: center;
font-weight:500;
border-radius:5px;
background-color: #FF4343;
`
