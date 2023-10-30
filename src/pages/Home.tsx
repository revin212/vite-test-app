import { useGlobalState } from "../utils/globalStates"

export default function Home() {
    const { count, countIncrease, countDecrease } = useGlobalState()

  return (
    <div className="flex flex-col gap-3 items-start">
        {count}
        <button onClick={countIncrease}>+</button>
        <button onClick={countDecrease}>-</button>
    </div>
  )
}