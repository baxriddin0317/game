import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'EN' | 'KZ' | 'RU' | 'CK';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: 'RU', // Default language
      setLanguage: (language: Language) => {
        set({ currentLanguage: language });
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
