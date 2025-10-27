import { create } from "zustand";

interface MacBookState {
    color: string;
    setColor: (color: string) => void;

    scale: number;
    setScale: (scale: number) => void;

    reset: () => void;
}

const useMacBookStore = create<MacBookState>((set) => ({
    color: "#2e2c2e",
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacBookStore;
