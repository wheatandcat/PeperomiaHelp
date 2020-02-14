import React from "react"
import Layout from "../../components/layout"
import HelpAccount from "../../help/general/account"
import Breadcrumbs from "../../components/help/Breadcrumbs"
import Card from "../../components/help/Card"

const breadcrumbItems = [
  { label: "ペペロアヘルプセンター" },
  { label: "全体向け" },
  { label: "新規登録・ログインについて" },
]

const IndexPage = () => {
  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />

      <Card title="会員登録について">
        <HelpAccount />
      </Card>
    </Layout>
  )
}

export default IndexPage
