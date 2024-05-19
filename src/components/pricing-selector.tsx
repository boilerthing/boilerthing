"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingCard, PricingMode } from "@/components/pricing-card"

export function PricingSelector() {
  const t = useTranslations("Components.PricingSelector")
  const [pricingMode, setPricingMode] = useState(PricingMode.Monthly)
  return (
    <div className="py-6 lg:py-12">
      <div className="flex justify-center py-6 md:py-12">
        <Tabs
          value={pricingMode}
          onValueChange={pricingMode =>
            setPricingMode(pricingMode as PricingMode)
          }
          defaultValue="monthly"
        >
          <TabsList>
            <TabsTrigger value="monthly">{t("pay_monthly")}</TabsTrigger>
            <TabsTrigger value="annual">
              {t.rich("pay_annualy", {
                badge: value => (
                  <Badge className="ml-2 bg-rose-500">
                    {value}
                  </Badge>
                ),
              })}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="container w-full max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          <PricingCard
            name={t("pricingCard1.name")}
            subtitle={t("pricingCard1.subtitle")}
            monthlyPrice={0}
            annualPrice={0}
            features={[
              t("pricingCard1.feature_1"),
              t("pricingCard1.feature_2"),
              t("pricingCard1.feature_3"),
              t("pricingCard1.feature_4"),
            ]}
            pricingMode={pricingMode}
          />
          <PricingCard
            name={t("pricingCard2.name")}
            subtitle={t("pricingCard2.subtitle")}
            monthlyPrice={100}
            annualPrice={1000}
            features={[
              t("pricingCard2.feature_1"),
              t("pricingCard2.feature_2"),
              t("pricingCard2.feature_3"),
              t("pricingCard2.feature_4"),
            ]}
            pricingMode={pricingMode}
            recommended
          />
          <PricingCard
            name={t("pricingCard3.name")}
            subtitle={t("pricingCard3.subtitle")}
            monthlyPrice={500}
            annualPrice={5000}
            features={[
              t("pricingCard3.feature_1"),
              t("pricingCard3.feature_2"),
              t("pricingCard3.feature_3"),
              t("pricingCard3.feature_4"),
            ]}
            pricingMode={pricingMode}
          />
        </div>
        <div className="py-6 text-center text-xs text-zinc-500">
          <p className="">{t("price_info")}</p>
        </div>
      </div>
    </div>
  )
}
