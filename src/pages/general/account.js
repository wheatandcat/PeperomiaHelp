import React from "react"
import Layout from "../../components/layout"
import HelpAccount from "../../help/general/account"
import Breadcrumbs from "../../components/help/Breadcrumbs"
import Card from "../../components/help/Card"

const breadcrumbItems = [
  { label: "ペペロアヘルプセンター", to: "/" },
  { label: "全体向け" },
  { label: "会員登録するとできること" },
]

const IndexPage = () => {
  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />

      <Card>
        <HelpAccount />
      </Card>
    </Layout>
  )
}

export default IndexPage
