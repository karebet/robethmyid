import Image from "next/image";
export default function _skill({data=[]}) {
    const dataskill= Object.keys(data);
    return (
        <div>
            <div class="slide-option mb-5">
                <div id="infinite" class="highway-slider bg-lightsemiblue">
                        <div class="highway-barrier">
                            <ul class="highway-lane">
                            {
                                dataskill.map((x) => (
                                <li class="highway-car">
                                    <Image class="w-100" style={{ width: '100%', height: 'auto' }} priority={true} sizes="100vw" width={0} height={0}  src={data[x]} alt={x} />
                                </li>
                            ))}
                            </ul>
                        </div>
                </div>
            </div>
            <style jsx>{`
.slide-option {
}
.slide-option .no-marg {
  margin: 0 0 0 0;
}
div.highway-slider {
  display: flex;
  justify-content: center;
  width: 100%;
}
div.highway-slider div.highway-barrier {
  overflow: hidden;
  position: relative;
}
div.highway-slider ul.highway-lane {
  display: flex;
  height: 100%;
}
div.highway-slider ul.highway-lane li.highway-car {
    transition: filter 0.6s ease-in-out;
    filter: grayscale(100%);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  padding: 0px 25px;
}
div.highway-slider ul.highway-lane li.highway-car:hover{
    filter: grayscale(0%);
}
@-webkit-keyframes translateinfinite {
  100% {
    transform: translateX(calc(-100px * 20));
  }
}
@keyframes translateinfinite {
  100% {
    transform: translateX(calc(-100px * 20));
  }
}

#infinite div.highway-barrier ul.highway-lane {
  width: calc(100 px * 20 *3 ?>);
}
#infinite div.highway-barrier ul.highway-lane li.highway-car {
  width: 100px;
  -webkit-animation: translateinfinite 55s linear infinite;
          animation: translateinfinite 55s linear infinite;
}
            `}</style>
        </div>
    );
}
