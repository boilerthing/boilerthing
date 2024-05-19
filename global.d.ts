import en from "@/locales/en.json"
import de from "@/locales/de.json"

type MessagesEN = typeof en
type MessagesDE = typeof de

declare global {
  interface IntlMessages extends MessagesEN, MessagesDE {}
}
