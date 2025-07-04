//@fix12:このファイルは案外store内に入れておくことが多いいかもしれん
import { create } from 'zustand';

export const useNumberListStore = create((set) => ({
  numbers: [{ id: Date.now(), value: 0 }],

  addNumber: () =>
    set((state) => ({
      numbers: [...state.numbers, { id: Date.now(), value: 0 }],
    })),

  updateNumber: (id, newValue) =>
    set((state) => ({
      numbers: state.numbers.map((num) =>
        num.id === id ? { ...num, value: newValue } : num
      ),
    })),

  deleteNumber: (id) =>
    set((state) => ({
      numbers: state.numbers.filter((num) => num.id !== id),
    })),
}));
