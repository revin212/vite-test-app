import { useGlobalState } from "../utils/globalStates"

export default function Home() {
    const { count, countIncrease, countDecrease } = useGlobalState()

  return (
    <div className="flex flex-col gap-3 items-start">
        {count}
        <button onClick={countIncrease}>+</button>
        <button onClick={countDecrease}>-</button>
        <img src="https://revinramadhan21.sirv.com/Images/Apel%20Music%20Image/image%203.png" width="1280" height="514" alt=""/>
    </div>
  )
}