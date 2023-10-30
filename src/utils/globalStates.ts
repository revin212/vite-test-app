import { create } from "zustand";

interface GlobalState {
    count: number;
    countIncrease: () => void;
    countDecrease: () => void;
}

export const useGlobalState = create<GlobalState>()((set) => ({
    count: 0,
    countIncrease: () => set((state) => ({ count: state.count + 1 })),
    countDecrease: () => set((state) => ({ count: state.count - 1 })),
})
)