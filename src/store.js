import create from 'zustand';

const useStore = create((set) => ({
  team: 0,
  increaseTeam: () => set((state) => ({ team: state.team + 1 })),
  removeTeam: () => set({ team: 0 }),
}));

window.store = useStore;

export default useStore;
