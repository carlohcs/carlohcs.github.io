import { messages } from '../etc/messages'
import { useLang } from './use-lang'

export const getMessage = (lang, page, prop, subprop) => {
  if (lang && !page) {
    return messages[lang]
  }

  const content = messages[lang][page]

  if (prop && subprop) {
    return content[prop][subprop]
  }

  if (prop) {
    return content[prop]
  }

  return content
}

export const useGetMessage = (page, prop, subprop) => {
  const { lang } = useLang()

  return getMessage(lang, page, prop, subprop)
}
