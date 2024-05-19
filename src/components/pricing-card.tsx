import { Check } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const monthlySavings = (monthlyPrice: number, annualPrice: number): string => {
  if (annualPrice === 0 || monthlyPrice === 0) return ""

  const totalMonthlyCost = monthlyPrice * 12
  const totalSavings = totalMonthlyCost - annualPrice
  const monthlySavings = totalSavings / 12

  if (isNaN(monthlySavings) || !isFinite(monthlySavings)) return ""

  return monthlySavings.toFixed(2)
}

export enum PricingMode {
  Monthly = "monthly",
  Annual = "annual",
}

export function PricingCard({
  monthlyPrice,
  annualPrice,
  recommended,
  name,
  subtitle,
  features,
  pricingMode,
}: {
  monthlyPrice: number
  annualPrice: number
  recommended?: boolean
  name: string
  subtitle: string
  features: string[]
  pricingMode: PricingMode
}) {
  const t = useTranslations("Components.PricingCard")
  const savingsAmount = monthlySavings(monthlyPrice, annualPrice)
  return (
    <Card
      className={cn("shadow-lg", recommended && "border-2 border-black")}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p>{subtitle}</p>
        <p className="text-4xl font-bold">
          {t("price", {
            amount:
              pricingMode === "monthly" ? monthlyPrice : annualPrice,
          })}
        </p>
        <p className="h-4 text-xs text-rose-500">
          {pricingMode === "annual" &&
            savingsAmount &&
            t("savings", { amount: savingsAmount })}
        </p>
        <div>
          {features.map((feature: string) => (
            <div key={feature} className="flex items-center space-x-2">
              <Check className="text-rose-500" size={16} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="!mt-8">
          <Button className="w-full">{t("button")}</Button>
        </div>
      </CardHeader>
    </Card>
  )
}
