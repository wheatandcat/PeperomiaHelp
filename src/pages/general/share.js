import React from "react"
import Layout from "../../components/layout"
import Help from "../../help/general/share"
import Breadcrumbs from "../../components/help/Breadcrumbs"
import Card from "../../components/help/Card"

const breadcrumbItems = [
  { label: "ペペロアヘルプセンター", to: "/" },
  { label: "全体向け" },
  { label: "予定共有とは" },
]

const IndexPage = () => {
  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />

      <Card>
        <Help />
      </Card>
    </Layout>
  )
}

export default IndexPage
