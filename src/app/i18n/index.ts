'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName } from './settings'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(undefined, "home"),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  });

export function useTranslation(lng: string, ns: string, options?: any) {
  const [cookies, setCookies] = useCookies([cookieName])
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (cookies.i18next === lng) return
    setCookies(cookieName, lng, { path: '/' })
  }, [lng, cookies.i18next])
  return ret
}
