import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useState } from "react";
import {IoChevronBackOutline} from "react-icons/io5"
import { BsBagPlusFill } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { addCart } from "../../store/expense/expense-slice";
import { useNavigate } from "react-router-dom";
export function Details() {
  const { info } = useSelector((product) => product.shop);
  const im = info.map((element) => element.img[0]);
  const rating = info.map((element) => element.rating);
  const [img, setImg] = useState(im);
  function slect(e) {
    setImg(e);
  }
  const ratingList = [];
  const ratingFill = Math.floor(rating);
  const ratingHalf = 5 - rating >= 0.5;
  const ratingEmpty = 5 - Math.floor(rating) - (ratingHalf ? 1 : 0);
  console.log("img", img);
  for (let i = 0; i < ratingFill; i++) {
    ratingList.push(<BsStarFill key={"star-fill" + i} />);
  }
  if (ratingHalf) {
    ratingList.push(<BsStarHalf key={"star-half"} />);
  }
  for (let i = 0; i < ratingEmpty; i++) {
    ratingList.push(<BsStar key={"star-empty" + i} />);
  }

    const dispatch=useDispatch()
    const navigate =useNavigate()

  return (
    <section className={style.item}>
      <div className={style.details}>
        <div  onClick={()=>navigate("/")} className={style.backs}><IoChevronBackOutline /> Back</div>
        <div className={style.product}>
          {info.map((element, index) => (
            <div className={style.productContainer} key={index}>
              <div className={style.productLeft}>
                {element.img.map((e, i) => (
                  <img
                    key={i}
                    onClick={() => slect(e)}
                    className={style.imgs}
                    src={e}
                    alt=""
                  />
                ))}
              </div>
              <div className={style.productCenter}>
                <img className={style.img} src={img} alt="" />
              </div>
              <div className={style.productRight}>
                <h1 className={style.name}>{element.name}</h1>
                <h4 className={style.model}>{element.model}</h4>
                <p className={style.ratingCont}>{ratingList} {element.rating}/5</p>
                <p className={style.price}>{element.price}</p>
                <p className={style.info}>{element.info}</p>
                <button onClick={()=>dispatch(addCart(element))} className={style.button}>
                  <BsBagPlusFill className={style.icon} /> Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.infox}>
        <h2 className={style.infoText}>Description</h2>
        <p className={style.infoTxt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          odio faucibus nec malesuada purus
          <br />
          volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec
          arcu, sit nunc, nibh purus pellentesque sagittis.
          <br />
          Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla
          nunc. Malesuada in pretium diam
          <br />
          scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl
          integer turpis porttitor sed sed. Ut
          <br />
          senectus odio dictum enim velit tempor diam quisque suspendisse.
          <br />
          Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat
          suscipit augue imperdiet. Et praesent
          <br />
          augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque
          massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
          sit viverra enim. Id id placerat eu etiam nulla laoreet.
          <br />
          Dignissim leo fames turpis quis suspendisse vulputate laoreet
          vulputate ac. Aliquam justo lectus eu dui
          <br />
          porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique
          volutpat facilisis in ut proin. Est vitae facilisi
          <br />
          sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur
          morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra
          hendrerit risus.
          <br />
          Odio phasellus nibh senectus nec id enim quam sed. At potenti
          sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing
          aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo
          viverra. Arcu ac ut
          <br />
          fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce.
          Mi vitae nibh mi ut feugiat varius risus
          <br />
          eros.
        </p>
      </div>
    </section>
  );
}
