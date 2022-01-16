// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function onClickButtonPriceDiscount2() {
  const inputPrice = document.getElementById("InputPrice2");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCouponDiscount");
  const couponValue = inputCoupon.value;

  const coupons = [
    {
      name: "cupon001",
      discount: 15,
    },
    {
      name: "cupon002",
      discount: 20,
    },
  ];
  const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
  }
  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon){
    alert("El cupón " + couponValue + " no es válido")
  }else{
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP2");
    resultP.innerText = "Descuento del " +  descuento + "% y El precio con descuento son: $" + precioConDescuento;  
  }
}


// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

