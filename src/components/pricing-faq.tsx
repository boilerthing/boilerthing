import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PricingFAQ() {
  const t = useTranslations("Components.PricingFAQ")
  return (
    <div className="container max-w-2xl pb-24 pt-12">
      <Accordion type="single" collapsible>
        <AccordionItem value={String(1)}>
          <AccordionTrigger className="text-left text-xl font-bold">
            {t("item1.question")}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            {t("item1.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={String(2)}>
          <AccordionTrigger className="text-left text-xl font-bold">
            {t("item2.question")}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            {t("item2.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={String(3)}>
          <AccordionTrigger className="text-left text-xl font-bold">
            {t("item3.question")}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            {t("item3.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={String(4)}>
          <AccordionTrigger className="text-left text-xl font-bold">
            {t("item4.question")}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            {t("item4.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={String(5)}>
          <AccordionTrigger className="text-left text-xl font-bold">
            {t("item5.question")}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            {t("item5.answer")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
