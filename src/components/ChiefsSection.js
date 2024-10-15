import ChiefCard from "./ChiefCard"
export default function ChiefsSection(){
    const chiefs=[
        {
          name:"Heston Blumenthal ",
          img:"/img/top-chiefs/img_1.jpg",
          recipesCount:"10",
          cuisine:"British ",
        },
        {
          name:"Gordon Ramsay",
          img:"/img/top-chiefs/img_2.jpg",
          recipesCount:"12",
          cuisine:"Modern European",
        },
        {
          name:"Massimo Bottura",
          img:"/img/top-chiefs/img_3.jpg",
          recipesCount:"16",
          cuisine:"Italian ",
        },
        {
          name:"René Redzepi ",
          img:"/img/top-chiefs/img_4.jpg",
          recipesCount:"9",
          cuisine:"Nordic ",
        },
        {
          name:"Alice Waters",
          img:"/img/top-chiefs/img_5.jpg",
          recipesCount:"14",
          cuisine:"Californian ",
        },
        {
          name:"Thomas Keller ",
          img:"/img/top-chiefs/img_6.jpg",
          recipesCount:"15",
          cuisine:"French ",
        },
    ]
    return (
        <>
            <div className="section chiefs">
               <h1 className="title">Our Top Chiefs</h1>
               <div className="top-chiefs-container">
        {/* <ChiefCard/>
        <ChiefCard/>
        <ChiefCard/>
        <ChiefCard/>
        <ChiefCard/>
        <ChiefCard/> */}
        {chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief}/>)}
               </div>
            </div>
        </>
    )
}