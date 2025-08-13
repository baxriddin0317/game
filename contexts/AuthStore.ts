import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type AuthUser = {
	id: string
	name: string
	avatarUrl?: string
}

type AuthState = {
	user: AuthUser | null
	isAuthenticated: boolean
	login: (user: AuthUser) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			login: (user) => set({ user, isAuthenticated: true }),
			logout: () => set({ user: null, isAuthenticated: false }),
		}),
		{
			name: 'auth-store',
			version: 1,
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
		}
	)
)


