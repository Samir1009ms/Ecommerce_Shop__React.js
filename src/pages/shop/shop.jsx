export function Shop ({cartShop,plus}){


    return(
           console.log(cartShop),
        cartShop.map((element,index)=>(
            <div key={element.id}>{element.count}
            
            <img src={element.img} alt="" />
            
            </div>
            ))

        )
}