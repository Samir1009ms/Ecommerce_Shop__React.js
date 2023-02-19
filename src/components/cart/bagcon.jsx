import style from "./style/style.module.css"

export function BAgItem ({car}){


    return(
        <div className={style.bagCont}>
        {car.map((element, index) => (
          <img
            className={style.bagImg}
            style={{ width: 100, height: 100, objectFit: "cover" }}
            key={index}
            src={element.img[0]}
            alt=""
          />
        ))}
      </div>
    )
}