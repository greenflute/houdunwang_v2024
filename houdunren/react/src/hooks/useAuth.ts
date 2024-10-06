import { IUser } from "@/types/user"

export const useAuth = () => {
	const data = { user: {} as IUser }
	const setUser = (user: IUser) => {
		data.user = user;
	}
	const user = (field: keyof IUser | undefined) => {
		if (field) return data.user[field] ?? null
		return data.user
	}

	const isAuthenticated = () => {
		return localStorage.getItem('token')
	}
	const logout = () => { }

	return { logout, isAuthenticated, user, setUser }
}

export type IAuth = ReturnType<typeof useAuth>