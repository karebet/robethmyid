import Image from "next/image";
export default function _skill({data=[]}) {
    const dataskill= Object.keys(data);
    var width= "calc(100px * "+dataskill.length+" * "+3+")";
    return (
        <div>
            <div className="slide-option mb-5">
                <div id="infinite" className="highway-slider bg-lightsemiblue">
                        <div className="highway-barrier">
                            <ul className="highway-lane" style={{width :width}}>
                            {
                                dataskill.map((x) => (
                                <li className="highway-car" key={x}>
                                    <Image className="w-100" style={{ width: '100%', height: 'auto' }} priority={true} sizes="100vw" width={0} height={0}  src={data[x]} alt={x+' skill Robeth'} />
                                </li>
                                ))
                            }
                            {
                                dataskill.map((x) => (
                                <li className="highway-car" key={x}>
                                    <Image className="w-100" style={{ width: '100%', height: 'auto' }} priority={true} sizes="100vw" width={0} height={0}  src={data[x]} alt={x+' skill Robeth'} />
                                </li>
                                ))
                            }
                            {
                                dataskill.map((x) => (
                                <li className="highway-car" key={x}>
                                    <Image className="w-100" style={{ width: '100%', height: 'auto' }} priority={true} sizes="100vw" width={0} height={0}  src={data[x]} alt={x+' skill Robeth'} />
                                </li>
                                ))
                            }
                            
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
}
