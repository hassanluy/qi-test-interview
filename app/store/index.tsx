import { create } from 'zustand'

export const useApi = create(set => ({
    api: 'https://api.escuelajs.co/api/v1',
}))