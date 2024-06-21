import bb1 from '../../assets/images/bb1.jpg'
import bb2 from '../../assets/images/bb2.jpg'
import bb3 from '../../assets/images/bb3.jpg'
import bb4 from '../../assets/images/bb4.jpg'
import bb5 from '../../assets/images/bb5.jpg'

export default function BannerAnim() {
  return (
    <div className="flex justify-center w-full h-[150px] mt-32">
      <div className="overflow-hidden relative ">
        <ul className="flex h-full w-[calc(180px*10)] gap-8">
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb1} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb2} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb3} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb4} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb5} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb1} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb2} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb3} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb4} alt="" />
          </li>
          <li className="flex-1 flex items-center justify-center w-[180px] animate-translateinfinite">
            <img src={bb5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}
